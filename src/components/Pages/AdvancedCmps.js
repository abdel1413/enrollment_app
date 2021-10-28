import React,{useState} from 'react'
import './AdvanceCmp.css'
import axios from 'axios'

const AdvancedCmps =()=>{
   const [ advCourse, setAdvCourse] = useState([])

   const DisplayCourses =()=>{
    axios.get('http://localhost:3001/advancedcourses')
        .then((response)=>{
        setAdvCourse(response.data)
          
     })

   } 
    return(
        <div className='advancecourses'>
            <button onClick={DisplayCourses}> course list</button>
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