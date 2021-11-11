import React,{useEffect, useState} from 'react'
import './AdvanceCmp.css'
import axios from 'axios'
import {FaGithub, FaEnvelope, FaLinkedin, FaFacebook} from 'react-icons/fa'
import 'tachyons'

const AdvancedCmps =()=>{
   const [ advCourse, setAdvCourse] = useState([])
   const [checkState, setCheckState]= useState(new Array(advCourse.leh).fill(false))
useEffect(()=>{
    const displayCourses =()=>{
        axios.get('http://localhost:3001/advancedcourses')
             .then((response)=>{
                  setAdvCourse(response.data)   
         })
       } 
       displayCourses()  
},[]);

const handCheckBox =(event)=>{
    const updateState = advCourse.map((item, index)=>{
        if(index == event){
            // alert('you clicked on '+ event)
            return !item
        }else{
            return item
        }

    })
    setCheckState(updateState)
}

   
    return(
        <div className='advancecourses'>

           <div className='style-list'>
           
            {advCourse.map((value,key)=>{
                    return(
                        <div  className=' shadow-5 courses' key={key}>
                            <div className='checkbxstyle'>
                                <input
                                className='checkbxstyle'
                                name={value}
                                value={value}
                                type="checkbox"
                                checked={checkState[key]}
                                onChange={()=>handCheckBox(key)}/>
                               </div>
                               <h3> CLASS: {value.Classe}</h3> 
                               <h3>NAME: {value.Course_Name}</h3> 
                              <h3>UNIT: {value.Course_Unit}</h3> 
                            
                        </div>
                    )
                })
                }

            </div>

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