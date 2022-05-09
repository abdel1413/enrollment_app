import { Navigate } from "react-router-dom";
import React from "react";
import "tachyons";
import "./signout.css";

const isSignin = localStorage.getItem("issignedIn");

function SignOut() {
  console.log("Signed Out");
  if (isSignin) {
    localStorage.setItem("issignedIn", "");
    document.location.href = "/";
  }

  <Navigate push to="/" />;
}
export default SignOut;