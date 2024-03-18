import React from 'react'
import "./navbar2.scss";
import { NavLink } from 'react-router-dom'


const NavbarTow = ({ open ,setOpen }) => {
  return (
    <div className='navtwo'>
        <ul>
              <li onClick={()=>setOpen(!open)}>categories <i className="fa-solid fa-chevron-down"></i> </li>
              <li><NavLink>About us </NavLink> </li>
              <li><NavLink>contact us </NavLink> </li>
        </ul>
    </div>
  )
}

export default NavbarTow