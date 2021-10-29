import React  from 'react'
import {HiddenCheckBox,CheckBoxContainer,StyledChecbx} from './checkboxStyle'

const CheckBox =({ className, checked, ...props})=>{
    return(
       
        // <input type="checkbox" {...props}/>

        //call styled component 
        <CheckBoxContainer className={className}>
            <HiddenCheckBox checked={checked} {...props}/>
            <StyledChecbx checked={checked}/>
        </CheckBoxContainer>

    )


}
export default CheckBox;