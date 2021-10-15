import { Button, TextField } from '@material-ui/core'
import React from 'react'
const Form =()=>{
    return (
        <div>
            <form>
                <TextField label='First Name' variant='filled'required/>
                <TextField label='Last Name' variant='filled' required/>
                <TextField label='email' variant='filled'type='email' required/>
                <TextField label='password' variant='filled' type='password' required/>
            </form>
            <div>
                <Button variant='contained'> Cancel</Button>
                <Button type='submit' variant='contained'>Submit</Button>
            </div>

        </div>
        
    )
    
}

export default Form;