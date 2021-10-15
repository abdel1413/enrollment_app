
import React, { useState } from "react";
import  "./Home.css";
import axios from "axios";

const Home =()=> {
  const [Classname, setClassname] = useState('');
  const [Name, setName]= useState('');
  const [ Unit, setUnit] =useState(0)

 const Addclass=()=>{

    //  make axios request by using localhost running express
    //and the endpoit created in back-end
    axios.post('http://localhost:3001/create',{
      Classname:Classname,
      Name:Name,
      Unit:Unit

    }).then(()=>{console.log("response")})

   

  }
  
    return (
      <div style={{
        display: "flex",
        flexDirection:'column',
  justifyContent: "center",
  alignItems: "center",
  borderRadius: '50%',
  color: 'green'


      }}>
       
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
            <input type="text" onChange={(e)=>{setClassname(e.target.value)}} placeholder=' Enter class'/>
         
         <label>Name </label>
             <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder=' Enter Name'/>
        
         <label>Unit</label>
            <input type="number" onChange={(e)=>{ setUnit(e.target.value)}} placeholder=' Enter Unit'/>
        
            <br/>
            <button onClick={Addclass}> add</button>
         
         
           
           
           
         </div>
         
      </div>
    );
  }
  
  export default Home;