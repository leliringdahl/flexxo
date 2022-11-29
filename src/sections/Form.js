import React, { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
  const [formErrors, setFormErrors] = useState({})
  const [submit, setSubmit] = useState(false)
  const [noSubmit, setNoSubmit] = useState(false)

 
 
  const validate_name = (value) => {
    if (!value)
      return 'Your name is required'
    else if (value.length < 2)
      return 'Your name must be longer than two characters.'
    else
      return null
  }

  const validate_email = (value) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
     
    if (!value)
      return 'An email address is required'
    else if (!regEx.test(value))
      return 'Your e-mail address must be valid eg (example@domain.com).'
    else
      return null
  }

  const validate_comment = (value) => {
    if (!value)
      return 'A comment is required'
    else if (value.length < 10)
      return 'Your comment must be longer than 10 characters.'
    else
      return null
  }


  const handleChange = event => {
    const {id, value} = event.target
    switch(id) {
      case 'name':
        setName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'comment':
        setComment(value)
        break
    }
    setFormErrors({...formErrors, [id]: validate(event)})
  }
  
  const handleSubmit = event => {
    event.preventDefault()
    setFormErrors(validate(event, {name, email, comment}))
    setSubmit(false)
    setNoSubmit(false)
    
      if (formErrors.name === null && formErrors.email === null && formErrors.comment === null) {
        
        let json = JSON.stringify({ name, email, comment}) /*får bara error 400 om och om igen, jag förstår inte vad som är fel*/
        setName('')
        setEmail('')
        setComment('')
        setFormErrors({})

        fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: json
        })
        .then(res => {
          console.log(res.status)
          if (res.status === 200) {
            setSubmit(true)
            setNoSubmit(false)
          } else {
            setSubmit(false)
            setNoSubmit(true)
          }
          
        })

        
    } else {
      setSubmit(false)
      setNoSubmit(true)
    }
  }

  const handleKeyUp = event => {  /*förstår inte riktigt hur eller varför men detta funkar iaf*/
  event.preventDefault()   
}

const validate = (event) => {
  if (event.type === 'submit') {
    const errors = {}
      errors.name = validate_name(name) /* funderar på om det är pga den här delen som jag får 400 meddelanden, har testat på flera olika sätt men vet inte vad som är fel.. */
      errors.email = validate_email(email)
      errors.comment = validate_comment(comment)

    return errors

  } else {
    const {id, value} = event.target

      switch(id) {
        case 'name':
          return validate_name(value)

        case 'email':
          return validate_email(value)

        case 'comment':
          return validate_comment(value)
      }
  }
}

  /*const handleKeyUp = (event) => {      <-- Funkade innan jag skulle börja med API men var tvungen att ändra om helt för förstod inte hur jag skulle få allt att samspela.
    event.preventDefault()
    setFormErrors(validate(contactForm))
  }*/

  /*const handleKeyUp = event => {     <-- Funkar med error-koderna men krockar med submit så postar så fort alla fält är rätt.
    event.preventDefault()
    setFormErrors(validate(event, {name, email, comment}))
  }*/
 
  
  return (
    <section className="contact-form">
      <div className="container">
        {
        submit ? (
          <div class="alert alert-success" role="alert">
          <div>Thank you for your comment!</div>
        </div>):(<></>)
        }
        {
        noSubmit ? (
          <div class="alert alert-warning" role="alert">
            <div>Something went wrong! Comment did not post</div>
          </div>):(<></>)
        }
        <h2>Come in Contact with Us</h2>
        <form onSubmit={handleSubmit} novalidate>
          <div>
            <input id="name" type="text" placeholder="Name" class="form-control" value={name} onKeyUp={handleKeyUp} onChange={handleChange}/>
            <div className="errorMessage">{formErrors.name}</div>
          </div>
          <div>
            <input id="email" type="email" placeholder="Your E-mail" class="form-control" value={email} onKeyUp={handleKeyUp} onChange={handleChange}/>
            <div className="errorMessage">{formErrors.email}</div>
          </div>
          <div className="textarea">
            <textarea id="comment" cols="30" rows="10" placeholder="Comments" class="form-control" value={comment} onKeyUp={handleKeyUp} onChange={handleChange}></textarea>
            <div className="errorMessage">{formErrors.comment}</div>
          </div>
          <div>
            <button type="submit" class="btn btn-main">Post Comments</button>
          </div>      
        </form>
      </div>
    </section>
  )
}

export default Form