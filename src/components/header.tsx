import React from "react";
import { Stack } from "@mui/system";
import logo from '../assets/logowh.png'
import { MyButton } from "./myButton.tsx";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/userContext.tsx";


export const Header = () => {
    return (
        <Stack direction='row' justifyContent='space-between' marginInline={20}>
            <Link to='/movies'><img src={logo} /></Link>
            <Stack direction='row' spacing={3} marginTop={3}>
                <MyButton variant="outlined" sx={{ color: 'white' }}>
                    language
                </MyButton>
                <Link to='login'>
                        <MyButton variant="contained" > 
                        login
                    </MyButton>
                </Link>
            </Stack>
        </Stack>
    )
}
