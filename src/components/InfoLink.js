import React from 'react'
import { NavLink } from 'react-router-dom'

const InfoLink = ({link, icon, title, body}) => {
  return (
    <div>
        <NavLink className="btn btn-round" to={link}><i className={icon}></i></NavLink>
        <NavLink to={link}><h2>{title}</h2></NavLink>
        <p>{body}</p>
    </div>
  )
}

export default InfoLink