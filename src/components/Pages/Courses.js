import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Course.css'
/*
function Courses (){
    const [courses, setCourses]= useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCourses((courses) => courses + 2); 
        }, 2000);
    }, []);
    return  <h1> {courses} </h1>
}*/


 const  Courses =  ()=>{
     const [courses, setCourses]= useState([])
    //const data = [1,2,3,4,5]
     //setCourses(data)

     useEffect(() => {
       const  getCoursesData = async ()=>{

        const response =  await axios.get("http://localhost:3001/courselist");
             console.log("Still testing")
            //  console.log(response.data)
             setCourses(response.data)

         }
         getCoursesData();

     }, []);

     console.log(courses)



    //const response = await axios.get("http://localhost:3001/courselist");
    //console.log(response.data)
    //setCourses({courses: response.data});
    //console.log(courses)
       //const displayCoursesHandler = ()=>{ 
           //console.log("inside the functuion;")
        /*axios.get("http://localhost:3001/courselist")
                                        .then((response)=>{
                                        setCourses(response.data).
                                        catch(err => {
                                            console.log(err);
                                            return null;
                                        });
        //console.log("after the the axios");
              }  ) } */
     //   console.log( displayCoursesHandler )                  
        // console.log(courses)
        // console.log("test");
   return(
       <div className="generalcourse">
           
            <p>testing </p>

            {
                courses.map((val,i)=>{
                    return(
                        <div className='courslist' key={i}>
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