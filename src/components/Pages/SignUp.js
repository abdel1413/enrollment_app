import React from "react";
import "tachyons";

import { Redirect } from "react-router-dom";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",

      email: "",
      password: "",
      confirmpassword: "",
      errorMassage: "",
      redirect: false,
    };
  }

  onFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  };

  onLastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
  };

  onEmailChange = (ev) => {
    this.setState({ email: ev.target.value });
  };

  onPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  onconfirmChange = (e) => {
    this.setState({ confirmpassword: e.target.value });
  };

  onSubmit = () => {
    let firstname = document.getElementById("firstname").value;
    // console.log("first", firstname.value);
    let lastname = document.getElementById("lastname").value;
    // console.log("last", lastname.value);
    let email = document.getElementById("email").value;
    // console.log("email", email.value);
    let passwd = document.getElementById("password").value;
    // console.log("passwd", passwd.value);

    let confirmpassword = document.getElementById("confirmpassword").value;
    // console.log("confirm", confirmpassword.value);
    let filter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;
    let firstnameerror = document.getElementById("firstnameerror");
    let lastnameerror = document.getElementById("lastnameerror");
    let emailerror = document.getElementById("emailerror");
    // let invalidemail = document.getElementById("invalidemail");
    let passwderror = document.getElementById("passwderror");
    let confirmerror = document.getElementById("confirmerror");

    if (firstname === "") {
      let errormsg;
      console.log("first name is required");
      errormsg = document.createElement("p");
      errormsg.innerHTML = "first name is required";
      firstnameerror.appendChild(errormsg);
      this.showErrorElement("firstnameerror");
    } else {
      // firstnameerror.style.display = "none";
      this.hideErrorElement("firstnameerror");
    }
    if (lastname === "") {
      let error;
      console.log("last name is required");
      error = document.createElement("p");
      error.innerHTML = "last name is required";
      lastnameerror.appendChild(error);

      this.showErrorElement("lastnameerror");
    } else {
      // lastnameerror.style.display = "none";
      this.hideErrorElement("lastnameerror");
    }
    if (email === "") {
      console.log("email is required");
      let errormsg = document.createElement("p");
      errormsg.innerHTML = "email is required";
      emailerror.appendChild(errormsg);
      this.showErrorElement("emailerror");
    } else if (!filter.test(email)) {
      console.log("invalid email");
      let errormessage = document.createElement("p");
      errormessage.innerHTML = "invalid email";
      emailerror.appendChild(errormessage);
      // emailerror.style.display = "none";
      // this.hideErrorElement("emailerror");
      this.showErrorElement("invalidemail");
      // this.hideErrorElement("emailerror");
    } else {
      //emailerror.style.display = "none";
      this.hideErrorElement("emailerror");
      this.hideErrorElement("invalidemail");
    }
    if (passwd === "") {
      console.log("passwd is required");
      let error = document.createElement("p");
      error.innerHTML = "password is required";
      passwderror.appendChild(error);
      this.showErrorElement("passwderror");
    } else {
      // passwderror.style.display = "none";
      this.hideErrorElement("passwderror");
    }

    if (passwd !== confirmpassword) {
      // console.log("password and confirm password don't match");
      let msg = document.createElement("p");
      msg.innerHTML = "password and confirm password don't match";
      confirmerror.appendChild(msg);
      this.showErrorElement("confirmerror");
      return false;
    } else {
      // confirmerror.style.display = "none";
      this.hideErrorElement("confirmerror");
      // return true;
    }
    if (
      firstname !== "" &&
      lastname !== "" &&
      filter.test(email) === true &&
      passwd !== ""
    ) {
      console.log("state ", this.state);
      fetch("http://localhost:3001/register", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
        }),
      })
        .then(async (response) => {
          console.log(response);
          if (response.status === 200) {
            this.setState({ redirect: true }, () => {
              this.props.setIsSigin(true);
            });
          }
          if (response.status === 400) {
            const msg = await response.json();
            this.setState({ errorMassage: msg });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  showErrorElement = (nameError) => {
    let errorElement = document.getElementById(nameError);
    errorElement.style.display = "block";
    errorElement.style.color = "red";
  };

  hideErrorElement = (nameError) => {
    let errorElement = document.getElementById(nameError);
    errorElement.style.display = "none";
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50 mw6 shadow-5 center">
        <main className="pa4 black-80 ">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="measure "
          >
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0 center">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="firstname">
                  First Name
                </label>
                <input
                  id="firstname"
                  className=" firstname pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="firstname"
                  onChange={this.onFirstNameChange}
                />
              </div>
              <div style={{ color: "red" }} id="firstnameerror"></div>

              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="lastname">
                  Last Name
                </label>
                <input
                  id="lastname"
                  className=" lastname pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="lastname"
                  onChange={this.onLastNameChange}
                />
              </div>
              <div style={{ color: "red" }} id="lastnameerror"></div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">
                  Email
                </label>
                <input
                  id="email"
                  className="email pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div style={{ color: "red" }} id="emailerror"></div>
              <div style={{ color: "red" }} id="invalidemail"></div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">
                  Password
                </label>
                <div>
                  <input
                    className="passwd b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                </div>
                <div style={{ color: "red" }} id="passwderror"></div>
              </div>

              <div className="mv3">
                <label
                  className=" confirmpasswd db fw6 lh-copy f6"
                  for="confirmpasswd"
                >
                  {" "}
                  Confirm password
                </label>
                <div>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="confirmpassword"
                    id="confirmpassword"
                    onChange={this.onconfirmChange}
                  />
                </div>
                <div style={{ color: "red" }} id="confirmerror"></div>
              </div>
            </fieldset>

            <div className="lh-copy mt3 pointer">
              {this.state.errorMassage && (
                <p className=" dim dark-red tc p2">{this.state.errorMassage}</p>
              )}
              <input
                className="f6 link dim black db center ml10 "
                type="submit"
                value="register"
                onClick={this.onSubmit}
              />
            </div>
          </form>
        </main>
      </article>
      //   </div>
    );
  }
}

export default SignUp;
