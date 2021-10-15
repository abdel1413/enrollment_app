import React from 'react'
import { Dialog } from '@material-ui/core'
import Form from './Form'


const ModalDialog =(open ,handleClose)=>{
 return(
     //call signUP here
     <Dialog open={open} onclose={handleClose}>
    {/* create Fomr here */}
    <Form handleClose={handleClose}/>
     </Dialog>
 )
}

export default ModalDialog