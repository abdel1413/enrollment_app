import { p } from '@material-ui/core'
import React from 'react'
import 'tachyons'

const SignOut =({onRouteChange})=>{

    return(
        <nav
         className='display:flex, justifyContent: flex-end'>
         <p  onClick={()=>{onRouteChange('signin')}} className=''>sign out</p>
        </nav>
    )

}
export default SignOut