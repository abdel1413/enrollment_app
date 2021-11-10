import React from 'react'
import './about.css'
import 'tachyons'
 import picture from'./abdel.png'
 import {FaGithub, FaEnvelope, FaLinkedin, FaFacebook} from 'react-icons/fa'
// const picture =require('./abdel.png')

 const About =()=>{


    return(
        <div className='about'>
            <p className='paragraph mv4 w-100 w-50-m w-25-l bg-light-gray  hover-bg-white shadow-5 center '>
                I am Aboule Tchakoura. I am curently student at Lehman<b/>
                 College majoring in Computer Science. My expected <b/>graduation
                 date is Spring 2022. As a software engineer, I have skills<b/> 
                  in HTML CSS, Java, python, JavaScript, ReactJS, React Native, <b/>
                 Full Stack, Express, NodeJs, MySQL, PostgreSQL<b/> I am build this 
                 project as independant study in order to boost my knowledge in
                  web development field. I am seeking internship in software development
            </p>
            <div className='imagediv' id='imagediv'>
                 <img className='image' src={(picture)} alt=''/>   
            </div>
            <div className='footer  hover-bg-gray shadow-5' >
              <p>contact: 347-518-2522 </p>
               <a className='hover grow ' href='https://github.com/abdel1413' > <FaGithub size='2rem'/> </a>
               <a className='hover grow ' href=' https://www.linkedin.com/in/aboulaye-tchakoura/'><FaLinkedin size='2rem'/></a>
               <a className='hover grow ' href='aboulayet63@gmail.com'> <FaEnvelope size='2rem'/>  </a>
               <a className='hover grow ' href='https://www.facebook.com/aboulaye.tchakoura'><FaFacebook size='2rem'/></a>
            </div>
            
        </div>
    )
}
export default About;