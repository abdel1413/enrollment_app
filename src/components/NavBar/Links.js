import React from 'react'
// import { NavLink  } from 'react-router-dom'
// import { Nav, Bars, NavMenu,NavBtn,NavBtnLink
//  } from './NavbarElements'
//  NavMenu,
 import {
    Nav,
    NavLink,
    Bars,
   
    NavBtn,
    NavBtnLink,
  } from "./NavbarElements";

  import './nav.css'
  import'./navMenue.css'


const Links =()=>{
  return(
    <div>
    <Nav>
        <Bars/>
       {/* z <div className='nav'> */}
      {/* <NavMenu> */}
        <div className='navmenue'>
        
      <NavLink to='/' activeStyle> Home </NavLink>
        <NavLink to='/About' activeStyle> About  </NavLink>
        <NavLink to='/Courses' activeStyle>  Courses  </NavLink>
        <NavLink to='/AdvancedCmps' activeStyle> AdvancedCmps</NavLink>
        <NavLink to='/SignUp' activeStyle >Sign Up </NavLink>
      {/* </NavMenu> */}
      </div>
      <NavBtn>
        <NavBtnLink to='/SignIn' activeStyle >Sign In</NavBtnLink>
     </NavBtn>
    </Nav>
    {/* </div> */}
    </div>
  )
}

export default Links;
