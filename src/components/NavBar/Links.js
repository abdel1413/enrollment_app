import React, { useState } from "react";
// import { NavLink  } from 'react-router-dom'
// import { Nav, Bars, NavMenu,NavBtn,NavBtnLink
//  } from './NavbarElements'
//  NavMenu,
import { Nav, NavLink, Bars, NavBtn, NavBtnLink } from "./NavbarElements";
import "tachyons";
import "./navCart.css";

import "./nav.css";
import "./navMenue.css";
import cunyLogo1 from "../Logos/LehmanLogo.png";
import { FaShopify } from "react-icons/fa";
import SwitchButton from "../SwitchComp/SwitchButton";
// import {MdOutlineAddShoppingCart}from 'react-iocons/md'
// import { MdOutlineAddShoppingCart } from '@mui/icons-material'

const Links = ({ isSignin, totalItems }) => {
  const totalItemsSelected = totalItems.filter((item) => item);
  const [shouldShowItems, setShouldShowItems] = useState(false);
  const displayitems = document.getElementById("shoppingcart");
  // console.log({ displayitems });
  // displayitems.addEventListener(onclick, ItiemsInCart);

  const ItiemsInCart = () => {
    alert("it is listening");
  };
  return (
    <div>
      <Nav>
        <Bars />
        {/* z <div className='nav'> */}
        {/* <NavMenu> */}
        <div className="navmenue">
          <div className="  logodiv mv4 w-100 w-100 mw6">
            <a className="logo " href="https://www.lehman.edu/">
              <img src={cunyLogo1} alt="Logo" />
            </a>
          </div>
          <NavLink to="/" activeStyle>
            {" "}
            Home{" "}
          </NavLink>
          <NavLink to="/About" activeStyle>
            {" "}
            About{" "}
          </NavLink>
          {(isSignin || true) && (
            <React.Fragment>
              <NavLink to="/Courses" activeStyle>
                {" "}
                Courses{" "}
              </NavLink>
              <NavLink to="/AdvancedCmps" activeStyle>
                {" "}
                AdvancedCmps
              </NavLink>
            </React.Fragment>
          )}
          <NavLink to="/SignUp" activeStyle>
            Sign Up{" "}
          </NavLink>
          {/* </NavMenu> */}
        </div>
        <NavBtn>
          {/* <div className='shoppingcart f3 '>
            <span className='counter'>{totalItems}
            </span>
         <FaShoppingBasket zise='2em'>
           
          </FaShoppingBasket>
      </div> */}
          <div>
            {" "}
            <SwitchButton label="switch" />{" "}
          </div>
          <div className="shoppingcart f3 " id="shoppingcart">
            <span className="counter" id="counter">
              {totalItemsSelected.length}
            </span>
            <div
              className="shoppicart-items-wrapper"
              onClick={() =>
                setShouldShowItems(
                  !shouldShowItems && totalItemsSelected.length >= 1
                )
              }
            >
              <FaShopify zise="2em" className="displayItems" id="displayItems">
                {totalItemsSelected.length}
              </FaShopify>
              {shouldShowItems && (
                <div className="shoppicart-items-container">
                  {totalItemsSelected.map((item) => (
                    <div className="shoppingcard-items">
                      <div>{item.Classe || item.Class}</div>
                      <div>{item.Course_Name || item.Name}</div>
                      <div>{item.Course_Unit || item.Unit}</div>
                    </div>
                  ))}
                  {totalItemsSelected.length === 0 && <p>Your cart is empty</p>}
                </div>
              )}
            </div>

            <span className="material-icons md-18"></span>
          </div>
          <NavBtnLink to="/SignIn" activeStyle>
            Sign In
          </NavBtnLink>
        </NavBtn>
      </Nav>
      {/* </div> */}
    </div>
  );
};

<span className="nav-cart-icon nav-sprite"></span>;

export default Links;
