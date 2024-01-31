import { TextField } from '@mui/material'
import React from 'react'


export const MyInput = (props) =>{
    return(
        <TextField {...props} variant='filled' InputLabelProps={{
            style: { color: 'grey' }
        }}
        inputProps={{
            style: {color:'white'}
        }}/>
    )
}