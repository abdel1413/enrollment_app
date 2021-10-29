 
 import styled from 'styled-components';
 
 
 export const HiddenCheckBox = styled.input.attrs({type:"checkbox"})`
//hide checkbox visuality but remain accessible to screen readers
border:0;
clip:rect(0 0 0 0);
height:1px;
margin: -1px;
overflow:hidden;
padding:0;
position:absolute;
white-space:nonwrap;
width:1px;
`


export const StyledChecbx = styled.div`
display:inline-block;
width:16px;
height:16px;
background:${ props => props.checked ? 'salmon':'papawhip'};
border-raduis: 3px;
transition: all 150ms;
`


export const CheckBoxContainer = styled.div`
display:inline-block;
// vertical-align: middle;
`