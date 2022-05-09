import React from "react";
import "./Home.css";
//import axios from "axios";

import "./homestyle.css";
import { Link } from "react-router-dom";
import "tachyons";
import Cookies from "js-cookie";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classname: "",
      Name: "",
      Unit: "",
      route: "signin",
      isSignedIn: localStorage.getItem("issignedIn") || false,
    };
  }

  //need to signin before you can see home screen
  onRouteChange = (route) => {
    if (route === "signOut") {
      <Link to="/SignOut"></Link>;
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      <Link to="/"></Link>;
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const sid = Cookies.get("session") || "";

    if (sid) {
      console.log("test");
    }

    return (
      <div className="homepage">
        <div className="bgimagestyle">
          <p className=" hover-bg-black pa2  shadow-5 textcontainer">
            Welcome to quick enrollment site This app is designed to help
            student easily and quickly register for their classes without any
            advisor assistance. You can see the prerequisites as well as the
            professors who are teatching the course.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
