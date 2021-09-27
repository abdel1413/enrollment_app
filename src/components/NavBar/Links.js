import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, Bars, NavMenu,NavBtn,NavBtnLink
 } from './NavbarElements'


const Links =()=>{
  return(
    <>
    <Nav>
        <Bars/>
      <NavMenu>
        <NavLink to='/About' activeStyle> About  </NavLink>
        <NavLink to='/Courses' activeStyle>  Courses  </NavLink>
        <NavLink to='/AdvancedCmps' activeStyle> AdvancedCmps</NavLink>
        <NavLink to='/SignUp' activeStyle>SignUp </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to='/SignIn' activeStyle>SignIn</NavBtnLink>
     </NavBtn>
    </Nav>
    </>
  )
}

export default Links;
