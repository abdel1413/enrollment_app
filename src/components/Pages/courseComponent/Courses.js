import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Course.css'

import {FaGithub, FaEnvelope, FaLinkedin, FaFacebook,FaPhone} from 'react-icons/fa'
import 'tachyons'
import  Modal  from 'react-modal';


 const  Courses =  ({checkState, setCheckState, courses})=>{
     const [modalIsOpened, setModalIsOpend] =useState(false)


     Modal.setAppElement("#root")
     

     //loop thru items using map function to select prefered ones 
     //and update the state
    const handCheckBox =(position)=>{ 
        console.log({checkState})
        const updateState = checkState.map((item, index)=>{
           return index === position ? !item: item
 
        });
        
        console.log({updateState})
      
        setCheckState(updateState)
    
    }

   return(
       <div className="generalcourse">
           <div className='style-list'>
               
                    {
                        courses.map((val,index)=>{
                            return(
                                <div className='shadow-5 courslist' key={index}>
                                    
                                    <div className='checbxstyle'>
                                        
                                        <input
                                        className='checkbxstyle'
                                        type="checkbox"
                                        checked={checkState[index]}
                                        onChange={()=>handCheckBox(index)}/>
                                    </div>
                                    <h3> CLASS: {val.Class}</h3> 
                                    <h3>NAME: {val.Name}</h3> 
                                    <h3>UNIT: {val.Unit}</h3> 
                                    
                                    <button className='modalbtn-float-right'
                                    onClick={()=>setModalIsOpend(true)}>+</button>
                                     <div  className='modal'>
                                    <Modal  isOpen={modalIsOpened}>
                                        <button className='closemodalbtn-float-right'
                                            onClick={()=>{setModalIsOpend(false)}}>_</button> 
                                        <div>
                                        <div className='modalcontainer' >
                                            <p> information dialog </p> 
                                            <p> information dialog </p> 
                                            <p> information dialog </p> 
                                            <p> information dialog </p> 
                                            <p> information dialog </p> 
                                        </div>
                                        </div>
                                    </Modal>
                                    </div>
                                  </div>
                            )
                        })               
                    }

            </div>
            <div className='footer hover-bg-gray shadow-5' >
               <FaPhone size='2rem'/><p>: 347-518-2522 </p>
               <a className='hover grow ' href='https://github.com/abdel1413' > <FaGithub size='2rem'/> </a>
               <a className='hover grow ' href=' https://www.linkedin.com/in/aboulaye-tchakoura/'><FaLinkedin size='2rem'/></a>
               <a className='hover grow ' href='aboulayet63@gmail.com'> <FaEnvelope size='2rem'/>  </a>
               <a className='hover grow ' href='https://www.facebook.com/aboulaye.tchakoura'><FaFacebook size='2rem'/></a>
            </div>
            
            
          
       </div>
   )
}

 export default Courses

 