import { Button } from '@mui/material'
import { MuiStyledOptions } from '@mui/system'
import React from 'react'

export const MyButton = (props, ...rest) =>{
    return( 
        <Button {...rest} {...props} sx={{...props, maxHeight:'40px'}}/>
    ) 
} 