import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Course.css'
import CheckBox from './CheckBox';
import {FaGithub, FaEnvelope, FaLinkedin, FaFacebook,FaPhone} from 'react-icons/fa'
import 'tachyons'


 const  Courses =  ({checkState, setCheckState, courses})=>{
     

     const [checked, setChecked] =useState(false)
     
     const [selectedItems, setSelectedItems] = useState(0);
    

     
     //loop thru items using map function to select prefered ones 
     //and update the state
    const handCheckBox =(position)=>{ 
        console.log({checkState})
        const updateState = checkState.map((item, index)=>{
           return index === position ? !item: item
 
        });
        
        console.log({updateState})
      
        setCheckState(updateState)
    
        //create function to keep track of item selected
        // const totalItemSelected = updateState.reduce(
        //     (total, currentState)=>{
        //         if(currentState==true){
        //           return total + 1;
        //         }
        //         return total
        //     },
        //     0
        // )

        // setTotalItems(totalItemSelected)
        // setSelectedItems(totalItemSelected) 
        // console.log(totalItemSelected)
    }

    //console.log(selectedItems)

    // const totalPrice = updatedCheckedState.reduce(
    //     (sum, currentState, index) => {
    //       if (currentState === true) {
    //         return sum + toppings[index].price;
    //       }
    //       return sum;
    //     },
    //     0
    //   );
  
    //   setTotal(totalPrice);
    // };

   return(
       <div className="generalcourse">
           <div className='style-list'>
               
                    {
                        courses.map((val,index)=>{
                            return(
                                <div className='shadow-5 courslist' key={index}>
                                    <div className='checbxstyle'>
                                        {/* <label>
                                            <CheckBox
                                            checked={checked}
                                            onchange={handCheckBox}/>
                                        </label> */}
                                        <input
                                        className='checkbxstyle'
                                       
                                        type="checkbox"
                                        checked={checkState[index]}
                                        onChange={()=>handCheckBox(index)}/>
                                    </div>
                                    <h3> CLASS: {val.Class}</h3> 
                                    <h3>NAME: {val.Name}</h3> 
                                    <h3>UNIT: {val.Unit}</h3> 
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

 