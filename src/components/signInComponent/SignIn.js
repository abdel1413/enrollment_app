import React from 'react'
import 'tachyons'
import Home from '../Pages/Home'
import SignUp from '../Pages/SignUp'
import { Link } from 'react-router-dom'

const SignIn =()=>{

    return(
       
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80 ">
            <form className="measure ">
              <fieldset id="sign_up" 
                    className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0 center">Sign In</legend>
                  <div className="mt3">
                    <label 
                        className="db fw6 lh-copy f6" 
                        for="email-address">Email
                    </label>
                    <input 
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="email" 
                    name="email-address" 
                    id="email-address"/>
                </div>
                <div className="mv3">
                    <label 
                        className="db fw6 lh-copy f6" 
                        for="password">Password
                    </label>
                    <input 
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="password" 
                    name="password"  
                    id="password"/>
                     <a href="#0" 
                     className="f7 pa2 link dim black db">Forgot password?</a>
                </div>
                
                </fieldset>
                

                   <Link to="/"> sign in  </Link>      

                <div className="lh-copy mt3 ">

                    {/* < p  className="signup f6 link dim black db center ml10 pointer"
                        onClick={onRouteChange}>Register</p>
                          */}
                       <Link to="/SignUp">Register</Link>
                  
            
                </div>
            </form>
          </main>
        </article>
        //   </div> 
    )
}

export default SignIn;