import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Course.css'
import CheckBox from './CheckBox';


 const  Courses =  ()=>{
     const [courses, setCourses]= useState([])

     const [checked, setChecked] =useState('false')


     useEffect(() => {
       const  getCoursesData = async ()=>{

        const response =  await axios.get("http://localhost:3001/courselist");
            //  console.log("Still testing")
             setCourses(response.data)

         }
         getCoursesData();

     }, []);

    // console.log(courses)

    const handCheckBox =(e)=>{
        
        setChecked(e.target.checked)
        console.log(e.target.checked)

    }

   return(
       <div className="generalcourse">
           <div className='header'>
                <h2>CLASS</h2>
                <h2>NAME</h2>
                <h2>UNIT</h2>
           
           </div> 
           
            {
                courses.map((val,i)=>{
                    return(
                        <div className='courslist' key={i}>
                            <div className='checbxstyle'>
                            <label>
                                <CheckBox
                                checked={checked}
                                onchange={ handCheckBox}/>
                           </label>
                           </div>
                           <h3>{val.Class}</h3> 
                           <h3>{val.Name}</h3> 
                           <h3>{val.Unit}</h3> 
                        </div>
                    )
                })               
            }
            
          
       </div>
   )
}

 export default Courses