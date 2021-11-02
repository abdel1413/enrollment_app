import React from 'react'
import './about.css'
import 'tachyons'
 import picture from'./abdel.png'
// const picture =require('./abdel.png')

 const About =()=>{


    return(
        <div className='about'>
            <p className='paragraph mv4 w-100 w-50-m w-25-l bg-light-gray  hover-bg-white shadow-5 center '>
                I am Aboule Tchakoura.I am curently student at Lehman<b/>
                 College majoring in Computer Science. My expected <b/>graduation
                 date is Spring 2022. As a software engineer, I have skills<b/> 
                 in HTML CSS, Java, python, JavaScript, ReactJS, React Native, <b/>
                 Full Stack, Express, NodeJs, MySQL, PostgreSQL<b/> I am build this 
                 project as independant study  in order to boost my knowledge in
                  web development field. I am seeking internship in software development
            </p>
            <div className='imagediv' id='imagediv'>
                 <img src={(picture)} alt=''/>   
            </div>
            <p>contact: aboulaye.Tchakoura@lc.cuny.edu</p>
        </div>
    )
}
export default About;