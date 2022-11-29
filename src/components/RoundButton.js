import React from 'react'
import { NavLink } from 'react-router-dom'

const roundButton = ({link, icon, quantity}) => { /* Valde att göra dem till knappar så att jag kan använda samma komponent på hela sidan utan att behöva göra om för mycket.*/
  return (
    <NavLink className="btn btn-round" to={link} end>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-lt-red">{quantity}</span>
      <i className={icon}></i>
    </NavLink>
  )
}

export default roundButton