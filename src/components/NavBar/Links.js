import React from 'react'
// import { NavLink  } from 'react-router-dom'
// import { Nav, Bars, NavMenu,NavBtn,NavBtnLink
//  } from './NavbarElements'

 import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from "./NavbarElements";


const Links =()=>{
  return(
    <>
    <Nav>
        <Bars/>
      <NavMenu>
      <NavLink to='/' activeStyle> Home </NavLink>
        <NavLink to='/About' activeStyle> About  </NavLink>
        <NavLink to='/Courses' activeStyle>  Courses  </NavLink>
        <NavLink to='/AdvancedCmps' activeStyle> AdvancedCmps</NavLink>
        <NavLink to='/SignUp' activeStyle>Sign Up </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to='/SignIn' activeStyle>Sign In</NavBtnLink>
     </NavBtn>
    </Nav>
    </>
  )
}

export default Links;
