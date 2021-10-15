import React, { useState } from 'react'
import axios from "axios";

 const Courses =()=>{
     const [courses,setCourses]= useState([])

     const getCourses =()=>{
         axios.get("http://localhost:3001//courselist").then((response)=>{
             console.log(setCourses(response))
         })
     }
   return(
       <div className="courslist">
           <ul>
               <li> course List</li>
               <li>
                  { getCourses } 
               </li>
           </ul>
           
       </div>
   )
}

export default Courses