import React, { useState } from "react";
import Axios from "axios";
import { Nav, NavLink, Bars, NavBtn, NavBtnLink } from "./NavbarElements";
import "tachyons";
import "./navCart.css";
import "./nav.css";
import "./navMenue.css";
import cunyLogo1 from "../Logos/LehmanLogo.png";
import { FaShopify } from "react-icons/fa";
import { Icon } from "@iconify/react";
import SwitchButton from "../SwitchComp/SwitchButton";

const isSignin = localStorage.getItem("issignedIn");
const username = localStorage.getItem("username");
// const isSignin =
//   document.cookie.split("=").length && document.cookie.split("=")[1];
// console.log(isSignin);

const Links = ({
  totalCourseSelected,
  totalAdvCourseSelected,
  setCourseIsChecked,
  setIsChecked,
  test,
  setTest,
}) => {
  // let totalItemsSelected = totalItems.filter((item) => item);
  let totalCourseItems = totalCourseSelected.filter((item) => item);
  let totalAdvCoureItems = totalAdvCourseSelected.filter((item) => item);

  const [shouldShowItems, setShouldShowItems] = useState(false);

  // Axios.get("http://localhost:3001/showuser")
  //   .then((res) => res.data)
  //   .then((data) => console.log(data));

  const handleDelete = (item) => {
    const isNormalCourse = totalCourseItems.filter(
      (normalCourse) => normalCourse.Name === item.Name
    ).length;

    //console.log(isNormalCourse);

    if (isNormalCourse) {
      const updatedCourse = totalCourseItems.map((course) =>
        course.Name === item.Name ? false : course
      );
      setCourseIsChecked(updatedCourse);
    }

    const advcourse = totalAdvCoureItems.filter(
      (advc) => advc.Course_Name === item.Course_Name
    ).length;

    if (advcourse) {
      const updateAdvCourse = totalAdvCoureItems.map((adv) =>
        adv.Course_Name === item.Course_Name ? false : adv
      );
      setIsChecked(updateAdvCourse);
    }
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
          {isSignin && (
            <React.Fragment>
              <NavLink to="/Courses" activeStyle>
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
        {isSignin && username ? (
          <span className="singnedas"> signed in as: {username}</span>
        ) : null}

        <NavBtn>
          <div>
            <SwitchButton test={test} setTest={setTest} label="Select" />
          </div>

          <div className="shoppingcart f3 " id="shoppingcart">
            <span className="counter" id="counter">
              {totalCourseItems.length + totalAdvCoureItems.length}
            </span>
            <div
              className="shoppicart-items-wrapper"
              onClick={() => {
                setShouldShowItems(
                  !shouldShowItems && totalAdvCoureItems && totalCourseItems
                );
              }}
            >
              <FaShopify zise="2em" className="displayItems" id="displayItems">
                {totalAdvCoureItems.length && totalCourseItems.length}
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
                  {totalAdvCoureItems.length + totalCourseItems.length ===
                    0 && <p className="emptycart">Your cart is empty</p>}
                </div>
              )}
            </div>
          </div>
          {isSignin ? (
            // <NavBtnLink to="/SignOut" activeStyle>
            //   Sign Out
            // </NavBtnLink>
            <span
              onClick={() => {
                localStorage.setItem("issignedIn", "");
                window.location.href = "/";
              }}
            >
              <NavBtnLink to="/" activeStyle>
                SignOut
              </NavBtnLink>
            </span>
          ) : (
            <NavBtnLink to="/SignIn" activeStyle>
              Sign In
            </NavBtnLink>
          )}
        </NavBtn>
      </Nav>
    </div>
  );
};

<span className="nav-cart-icon nav-sprite"></span>;

export default Links;
