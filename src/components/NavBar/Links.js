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
import { Icon } from "@iconify/react";
import SwitchButton from "../SwitchComp/SwitchButton";
import { remove, set } from "js-cookie";
import { Flag, FlagTwoTone } from "@material-ui/icons";
import { TableSortLabel } from "@material-ui/core";

const Links = ({
  isSignin,
  totalItems,
  totalCourseSelected,
  totalAdvCourseSelected,
  courseIsChecked,
  setCourseIsChecked,
  isChecked,
  setIsChecked,
}) => {
  // let totalItemsSelected = totalItems.filter((item) => item);
  let totalCourseItems = totalCourseSelected.filter((item) => item);
  let totalAdvCoureItems = totalAdvCourseSelected.filter((item) => item);
  const [shouldShowItems, setShouldShowItems] = useState(false);
  //let totalItemsSelected = totalCourseItems.concat(totalAdvCoureItems);

  const handleDelete = (item) => {
    setCourseIsChecked(() => totalCourseItems.filter((i) => i !== item));
    setIsChecked(() => totalAdvCoureItems.filter((i) => i !== item));
    // setShouldShowItems(remainingItems);

    setShouldShowItems(totalAdvCoureItems.concat(totalCourseItems));
  };

  return (
    <div>
      <Nav>
        <Bars />

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
         
      </div> */}
          <div>
            {" "}
            <SwitchButton label="switch" />{" "}
          </div>
          <div className="shoppingcart f3 " id="shoppingcart">
            <span className="counter" id="counter">
              {totalAdvCoureItems.length + totalCourseItems.length}
            </span>
            <div
              className="shoppicart-items-wrapper"
              onClick={() => {
                setShouldShowItems(
                  !shouldShowItems && totalCourseItems && totalAdvCoureItems
                );
              }}
            >
              <FaShopify zise="2em" className="displayItems" id="displayItems">
                {totalCourseItems.length && totalAdvCoureItems.length}
              </FaShopify>
              {shouldShowItems && (
                <div className="shoppicart-items-container">
                  {totalAdvCoureItems
                    .concat(totalCourseItems)
                    .map((item, key) => (
                      <div key={key} className="shoppingcard-items" id={key}>
                        <div>{item.Classe || item.Class}</div>
                        <div>{item.Course_Name || item.Name}</div>
                        <div>{item.Course_Unit || item.Unit}</div>

                        <Icon
                          onClick={() => handleDelete(item)}
                          className="delet hover-red"
                          icon="fa:trash-o"
                          color="black"
                          width="20"
                          height="15"
                        />
                      </div>
                    ))}
                  {totalAdvCoureItems.length + totalCourseItems.length < 1 && (
                    <p className="emptycart">Your cart is empty</p>
                  )}
                </div>
              )}
            </div>
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
