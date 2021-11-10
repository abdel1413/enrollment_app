import React,{useEffect, useState} from 'react'
import './AdvanceCmp.css'
import axios from 'axios'
import {FaGithub, FaEnvelope, FaLinkedin, FaFacebook} from 'react-icons/fa'

const AdvancedCmps =()=>{
   const [ advCourse, setAdvCourse] = useState([])
useEffect(()=>{
    const displayCourses =()=>{
        axios.get('http://localhost:3001/advancedcourses')
             .then((response)=>{
                  setAdvCourse(response.data)   
         })
       } 
       displayCourses()  
},[]);
   
    return(
        <div className='advancecourses'>
            <div className='header'>
                <h2>CLASS</h2>
                <h2>NAME</h2>
                <h2>UNIT</h2>
           
           </div> 
           
            {advCourse.map((value,key)=>{
                    return(
                        <div  className='courses' key={key}>
                            <h3>{value.Classe}</h3>
                            <h3>{value.Course_Name}</h3>
                            <h3>{value.Course_Unit}</h3>
                            
                        </div>
                    )
                })
                }


            <div className='footer  hover-bg-light-gray shadow-5' >
              <p>contact: 347-518-2522 </p>
               <a className='hover grow ' href='https://github.com/abdel1413' > <FaGithub size='2rem'/> </a>
               <a className='hover grow ' href=' https://www.linkedin.com/in/aboulaye-tchakoura/'><FaLinkedin size='2rem'/></a>
               <a className='hover grow ' href='aboulayet63@gmail.com'> <FaEnvelope size='2rem'/>  </a>
               <a className='hover grow ' href='https://www.facebook.com/aboulaye.tchakoura'><FaFacebook size='2rem'/></a>
            </div>
            
           
            
        </div>
    )
}

export default AdvancedCmps;