import { Button } from '@mui/material'
import { MuiStyledOptions } from '@mui/system'
import React from 'react'

export const MyButton = (props) =>{
    return( 
        <Button {...props}  sx={{...props, maxHeight:'40px'}}/>
    ) 
} 