import React,{useEffect, useState} from 'react'
import './AdvanceCmp.css'
import axios from 'axios'

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
           
            
        </div>
    )
}

export default AdvancedCmps;