// import { Button, FormHelperText, makeStyles, TextField } from '@material-ui/core'
// import React, { useState } from 'react'

// const useStyle = makeStyles(theme=>({
//     root:{
//         display:'flex',
//         flexDirection:'column',
//         justifyContent:'center',
//         alignItems:'center',
//         padding:theme.spacing(2),
//         '& .muiTextField-root':{
//             margin:theme.spacing(1),
//             width:'300px',
//         },
//         '& .muiButtonBase-root':{
//             margin:theme.spacing(2)

//         }
//     }
// }))
// const Form =()=>{
//     const [firstName, setFirstName] = useState['']
//     const [lastName, setLastName]= useState['']
//     const [email, setEmail] = useState['']
    

//     return (
//         <div>
//             className={classes.root} value={firstName}
//             <form >
//                 <TextField 
//                 label='First Name' 
//                 variant='filled'
//                 required
//                 />
//                 <TextField 
//                 label='Last Name'
//                  variant='filled' 
//                  required
//                  value={lastName}/>
//                 <TextField 
//                 label='email' 
//                 variant='filled'
//                 type='email' 
//                 required/>
//                 <TextField label='password' variant='filled' type='password' required/>
//             </form>
//             <div>
//                 <Button variant='contained'> Cancel</Button>
//                 <Button type='submit' variant='contained'>Submit</Button>
//             </div>

//         </div>
        
//     )
    
// }

// export default Form;