
import React from "react";
import  "./Home.css";
import axios from "axios";
import SignIn from "../signInComponent/SignIn";
import SignOut from "../SignOutComp/SignOut";
import SignUp from "./SignUp";
import './homestyle.css'
import { Link } from "react-router-dom";

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      classname:'',
      Name:'',
      Unit:'',
      route:'signin',
      isSignedIn:false
    }
  }
  
 
  Addclass=()=>{

    //  make axios request by using localhost running express
    //and the endpoit created in back-end
    axios.post('http://localhost:3001/create',{
      classname: this.state.classname,
      Name: this.state.Name,
      Unit:this.state.Unit

    }).then(()=>{alert("Success")})
  }

//need to signin before you can see home screen
 onRouteChange=(route)=>{
   if(route ==='signOut'){
    <Link to='/signOut'></Link>
     this.setState({isSignedIn:false})

   }else if(route === 'home'){
    <Link to='/'></Link>
    this.setState({isSignedIn:true})
   
     
   }
this.setState({route:route})

  }

  
  render(){
 
    return (
      <div className='homestyle'>
        
             <SignOut isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
             <div> home</div>
              {/* <div>
                <h1>Welcom to quick enrollment site</h1>
                <h1>This app is designed to help student
                <br/>easily and quickly
                </h1>
                <h1> register for their classes without any advisor </h1>
                <div className='addclass'>
                    
                    <label>Classname</label>
                      <input 
                        type="text" 
                        onChange={(e)=>{this.setState({classname: e.target.value})}}
                        placeholder=' Enter class'/>
                  
                    <label>Name </label>
                      <input 
                          type="text" 
                          onChange={(e)=>{this.setState({Name: e.target.value})}}
                          placeholder=' Enter Name'/>
                    
                    <label>Unit</label>
                      <input 
                        type="number" 
                          onChange={(e)=>{this.setState({Unit: e.target.value})}} 
                          placeholder= 'Enter Unit'
                        />
                      <br/>
                    <button onClick={this.Addclass}> add class</button>
                </div> 
                </div> */}
                
              
      </div>
    );
          }
  }
  
  export default Home;