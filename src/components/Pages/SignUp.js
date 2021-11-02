import React from 'react'
import 'tachyons'

const SignUp =({onRouteChange})=>{

    return(
       
       
        <article className="br3 ba b--black-10 mv4 w-100 w-50 mw6 shadow-5 center">
        <main className="pa4 black-80 ">
            <form className="measure ">
              <fieldset id="sign_up" 
                    className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0 center">Register</legend>
                <div className="mt3">
                    <label 
                        className="db fw6 lh-copy f6" 
                        for="firstname">First Name
                    </label>
                    <input 
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="text" 
                    name="firstname" 
                    id="firstname"/>
                </div>

                <div className="mt3">
                    <label 
                        className="db fw6 lh-copy f6" 
                        for="lastname">Last Name
                    </label>
                    <input 
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="text" 
                    name="lastname" 
                    id="lastname"/>
                </div>
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
                    <div>
                    <input 
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="password" 
                    name="password"  
                    id="password"/>
                   </div>
                 </div>
                </fieldset>
                
                <div className="lh-copy mt3 pointer">
                    < input onClick={()=>{onRouteChange('home')}}
                    className="f6 link dim black db center ml10 "
                    type='submit'
                    value='register' />
            
                </div>
            </form>
          </main>
        </article>
        //   </div> 
    )
}

export default SignUp;