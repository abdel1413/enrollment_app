import { Link } from "@material-ui/core";
import React from "react";
import "tachyons";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmpassword: "",
    };
  }

  onFirstNameChange = (event) => {
    console.log(event.target.value);
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

  onchconfirmChange = (e) => {
    this.setState({ confirmpassword: e.target.value });
  };

  onSubmit = () => {
    console.log(this.state);
    fetch("http://localhost:3001/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
      }),
    });
    //home
  };

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50 mw6 shadow-5 center">
        <main className="pa4 black-80 ">
          <form className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0 center">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="firstname">
                  First Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="firstname"
                  id="firstname"
                  onChange={this.onFirstNameChange}
                />
              </div>

              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="lastname">
                  Last Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="lastname"
                  id="lastname"
                  onChange={this.onLastNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
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
                    onChange={this.onchconfirmChange}
                  />
                </div>
              </div>
            </fieldset>

            <div className="lh-copy mt3 pointer">
              <input
                className="f6 link dim black db center ml10 "
                // type="submit"
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
