
import React from "react";
import  "./Home.css";
import axios from "axios";
import SignIn from "../signInComponent/SignIn";
import SignOut from "../SignOutComp/SignOut";
import SignUp from "./SignUp";

class Home extends React.Component{
  constructor(){
    super();
    this.state={
      classname:'',
      Name:'',
      Unit:'',
      route:'signin'
    }
  }
  
 
  Addclass=()=>{

    //  make axios request by using localhost running express
    //and the endpoit created in back-end
    axios.post('http://localhost:3001/create',{
      classname: this.state.classname,
      Name: this.state.Name,
      Unit:this.state.Unit

    }).then(()=>{console.log("Success")})
  }

//need to signin before you can see home screen
 onRouteChange=(route)=>{
this.setState({route})
  }
  
  render(){
  
    return (
      <div style={{
            display: "flex",
            flexDirection:'column',
            justifyContent: "center",
            alignItems: "center",
            borderRadius: '50%',
            color: 'green'
            }}>
             <SignOut onRouteChange={this.onRouteChange}/>
              {this.state.route ==='home'
              ?<div>
                <h1>Welcom to quick enrollment site</h1>
                <h1>This app is designed to help student
                <br/>easily and quickly
                  register for their classes <br/>
                </h1>
                <div style={{display:'flex',
                    flexDirection:'column', 
                    fontSize:'25px',
                    padding:'20px',marginTop:'20px'}}>
                    
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
                </div> 
                
              :( this.state.route==='signin'
                  ? <SignIn onRouteChange={this.onRouteChange}/>
                  : <SignUp onRouteChange={this.onRouteChange}/>
                )
              }
      </div>
    );
          }
  }
  
  export default Home;