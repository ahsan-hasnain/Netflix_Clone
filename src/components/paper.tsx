import React from "react";
import { Paper } from "@mui/material";


export const MyPaper = (props) =>{
    return (
        <div  style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // Set to 100% of the viewport height
          }}>
            <Paper elevation={3} sx={{background:'#696969', textAlign:'center', color:'red', padding:'20px'}}>
            {props.children}
        </Paper>

        </div>
    )
}