import React, { useState } from 'react'
import ModalDialog from '../ModalDialog'

const SignUp =()=>{
    const [open ,setOpen] =useState(false)

    //function to handle modal open
    const handleOpen =()=> setOpen(true)

    //function to handle model close
    const handleClose =()=>setOpen(false)
    return (
        <div style={{
            display:'flex',
            justifyContent:'right',
            alignItems:'right',
            height:'100vh'
        }}>
            {/* <button variant='contained' onClick={handleOpen}SignUp></button>
            
            {/* call model and pass props */}
            {/* <ModalDialog open={open} handleClose={handleClose}/>  */}
        </div>
    )
}
export default SignUp;