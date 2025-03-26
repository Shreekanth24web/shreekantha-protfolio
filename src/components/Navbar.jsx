import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import "../style/navbar.css"

const Navbar = () => {
      const [menu, setMenu]=useState("home")
      return (
            <nav className='nav'>
                  <div className='logo'>
                       <HashLink to='/#home'><h3>CODE@SHREE</h3></HashLink>
                  </div>
                  <ul className="nav-links">
                        <li onClick={()=>{setMenu("home")}}><HashLink  to="/#home">Home</HashLink>{menu === "home" ? <hr /> : <></>}</li>
                        {/* for internal hyper links we use hash-links */}
                        <li onClick={()=>{setMenu("about")}} ><HashLink smooth to="/#about">About Me</HashLink>{menu === "about" ? <hr /> : <></>}</li> 
                        <li onClick={()=>{setMenu("skills")}} ><HashLink smooth to="/#skills">Skills</HashLink>{menu === "skills" ? <hr /> : <></>}</li>
                        <li onClick={()=>{setMenu("projects")}} ><NavLink to="/projects" >Projects</NavLink>{menu === "projects" ? <hr /> : <></>}</li>
                        <li onClick={()=>{setMenu("contact")}} ><NavLink to="/contact">Contact</NavLink>{menu === "contact" ? <hr /> : <></>}</li>
                  </ul>
            </nav>
      )
}

export default Navbar