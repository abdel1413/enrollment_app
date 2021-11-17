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
  import './navCart.css'

  import './nav.css'
  import'./navMenue.css'
  import cunyLogo1 from '../Logos/LehmanLogo.png'
import { FaShopify, FaShoppingBasket, FaShoppingCart} from 'react-icons/fa';
// import {MdOutlineAddShoppingCart}from 'react-iocons/md'
// import { MdOutlineAddShoppingCart } from '@mui/icons-material'
  


const Links =({ totalItems })=>{
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
      {/* <div className='shoppingcart f3 '>
            <span className='counter'>{totalItems}
            </span>
         <FaShoppingBasket zise='2em'>
           
          </FaShoppingBasket>
      </div> */}
     
      <div className='shoppingcart f3 '>
      <span className='counter'>{totalItems}</span>
         <FaShopify zise='2em'/>
      
         
      </div>
      <span className="material-icons md-18">Cart</span>
      <NavBtnLink to='/SignIn' activeStyle >Sign In</NavBtnLink>
      </NavBtn>
     </Nav>
     {/* </div> */}
    </div>
  )
}

<span className="nav-cart-icon nav-sprite"></span>


export default Links;
