import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Course.css'
import CheckBox from './CheckBox';
import {FaGithub, FaEnvelope, FaLinkedin, FaFacebook} from 'react-icons/fa'


 const  Courses =  ()=>{
     const [courses, setCourses]= useState([])

     const [checked, setChecked] =useState(false)
     const [ checkState, setCheckState] = useState(new Array(courses.length).fill(false))
     const [selectedItem, setSelectedItem] = useState(0);
    

     useEffect(() => {
       const  getCoursesData = async ()=>{

        const response =  await axios.get("http://localhost:3001/courselist");
           
             setCourses(response.data)
         }
         getCoursesData();

     }, []);

     


     //loop thru items using map function to select prefered ones 
     //and update the state
    const handCheckBox =(position)=>{ 
       
        const updateState = checkState.map((item, index)=>{
           return index === position ? !item: item
 
        });
      
        setCheckState(updateState)
    


        //create function to keep track of item selected
        // const totalSelectedItems = updateState.reduce(
        //     (total =0, currentState, index)=>{
        //         if(currentState==true){
        //           return  total++;
        //         }
        //         return total
        //     }
        // )
        // setSelectedItem(totalSelectedItems) 
    }

   return(
       <div className="generalcourse">
           <div className='header'>
                <h2>CLASS</h2>
                <h2>NAME</h2>
                <h2>UNIT</h2>
           
           </div> 
           
            {
                courses.map((val,index)=>{
                    return(
                        <div className='courslist' key={index}>
                            <div className='checbxstyle'>
                            {/* <label>
                                <CheckBox
                                checked={checked}
                                onchange={handCheckBox}/>
                           </label> */}
                           <input
                           
                          name={val}
                          value={val}
                           type="checkbox"
                           checked={checkState[index]}
                           onChange={()=>handCheckBox(index)}

                           />
                           </div>
                           <h3>{val.Class}</h3> 
                           <h3>{val.Name}</h3> 
                           <h3>{val.Unit}</h3> 
                        </div>
                    )
                })               
            }


            <div className='footer hover-bg-gray shadow-5' >
              <p>contact: 347-518-2522 </p>
               <a className='hover grow ' href='https://github.com/abdel1413' > <FaGithub size='2rem'/> </a>
               <a className='hover grow ' href=' https://www.linkedin.com/in/aboulaye-tchakoura/'><FaLinkedin size='2rem'/></a>
               <a className='hover grow ' href='aboulayet63@gmail.com'> <FaEnvelope size='2rem'/>  </a>
               <a className='hover grow ' href='https://www.facebook.com/aboulaye.tchakoura'><FaFacebook size='2rem'/></a>
            </div>
            
            
          
       </div>
   )
}

 export default Courses

 