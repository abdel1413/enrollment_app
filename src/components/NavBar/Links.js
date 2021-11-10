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
  import 'tachyons'

  import './nav.css'
  import'./navMenue.css'
  import cunyLogo1 from '../Logos/LehmanLogo.png'


const Links =()=>{
  return(
    <div>
    <Nav>
        <Bars/>
       {/* z <div className='nav'> */}
      {/* <NavMenu> */}
        <div className='navmenue'>
          <div className='  logodiv mv4 w-100 w-100 mw6'> 
            <a className='logo ' href='https://www.lehman.edu/'>
              <img   src={cunyLogo1} alt='Logo'/>
            </a>
          </div>
         
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
