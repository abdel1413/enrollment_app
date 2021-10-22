import React, { useState } from 'react'
import axios from "axios";
import './Course.css'


 const Courses =()=>{
     const [courses,setCourses]= useState([])

     const getCourses =()=>{
       const courseArray=  axios.get("http://localhost:3001/courselist").then((response)=>{
             setCourses(response)
             console.log(courseArray)
         })
        
     }
   return(
       <div className="courslist">
           
            <p className='courses'> course List </p> 
            <p className='courses'>{getCourses } </p> 
       </div>
   )
}

export default Courses