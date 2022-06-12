import React from "react";
import "tachyons";
import "./signin.css";

// import Home from "../HomeComp/Home";
// import SignUp from "../Pages/SignUp";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      erroMessage: "",
      notExistingMsg: "",
      loginStatus: "",
      login: "",
      redirect: false,
    };

    axios.defaults.withCredentials = true;
  }

  onEmailChange = (event) => {
    let val = event.target.value;
    this.setState({ email: val });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  // getUserstatus = () => {
  //   axios
  //     .get("http://localhost/3001/signin", { login: "Logout" })
  //     .then((response) => {
  //       console.log(response.data);
  //       this.setState({ loginStatus: response.data.user[0] });
  //     });
  // };

  componentDidMount() {
    // this.getUserstatus();
    console.log("Yes!!");

    axios
      .get("http://localhost/3001/signin", { withCredentials: false })
      .then(async (response) => {
        if (response.status === 200) {
          const loginLink = await response.json();
          console.log(loginLink);
          //this.setState({ login: loginLink });

          // this.setState({ redirect: true }, () => {
          //   this.props.setIsLoggedIn(true);
          // });
        }

        // console.log(this.state.login);
      })
      .catch((error) => console.log("can't login", error));
  }

  onSubmitSignIn = () => {
    axios
      .post(
        "http://localhost:3001/signin",
        {
          // method: "post",
          // headers: { "Content-Type": "application/json" },

          // body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,

          // }),
        },
        { withCredentials: false }
      )

      .then(async (response) => {
        if (response.status === 200) {
          const lg = response.data.logged;
          console.log({ response });

          if (lg) {
            localStorage.setItem("issignedIn", true);
            localStorage.setItem("username", response.data.username);
            // document.cookie = "isSignin=true";

            window.location.href = "/";

            // this.setState({ redirect: true }, () => {
            //   this.props.setIsLoggedIn(true);
            // });
          } else {
            window.location.href = "/Signin";
          }

          // this.setState({ login: lg });
          //this.setState({ redirect: true }, () => {
          // this.props.setIsSignIn(true);
          //this.setState({ login: lg });
          //console.log("you are logged in", lg);
          //});
        }
        //console.log(this.state.email);

        if (response.status === 401) {
          const msg = await response.json();
          this.setState({ erroMessage: msg });
        } else if (response.status === 404) {
          const notexisting = await response.json();
          this.setState({ notExistingMsg: notexisting });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    }

    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80 ">
          <form className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0 center">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">
                  Email
                </label>
                <input
                  onChange={this.onEmailChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">
                  Password
                </label>
                <input
                  onChange={this.onPasswordChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
                <a href="#0" className="f7 pa2 link dim black db">
                  Forgot password?
                </a>
              </div>
            </fieldset>

            {/* <Link to="/"> sign in </Link> */}
            {this.state.erroMessage && (
              <p className=" dim dark-red tc p2">{this.state.erroMessage}</p>
            )}

            <input
              className="signin tc bg-transparent ml5  "
              onClick={this.onSubmitSignIn}
              value="Sign In"
            />

            {/* {this.state.notExistingMsg && alert(this.state.notExistingMsg)} */}
            {this.state.notExistingMsg && (
              <p className="dim red tc p2">{this.state.notExistingMsg}</p>
            )}
            <div className="lh-copy mt3  ml5 ">
              <Link to="/SignUp">Register</Link>
            </div>
          </form>
        </main>
      </article>
      //   </div>
    );
  }
}

export default SignIn;
