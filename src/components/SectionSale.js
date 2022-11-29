import React from 'react'
import { NavLink } from 'react-router-dom'

const SectionSale = ({title, link, text}) => {
  return (
    <div className="section-sale">
        <div className="section-sale-body">
            <h4>{title}</h4>
            <NavLink className="btn btn-main" to={link}>
                <div className="btn-bracket-left"></div>
                {text}
                <div className="btn-bracket-right"></div>
            </NavLink>
        </div>
    </div>
  )
}

export default SectionSale