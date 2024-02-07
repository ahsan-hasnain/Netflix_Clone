import React from "react";
import { Stack } from "@mui/system";
import logo from '../assets/logowh.png'
import { MyButton } from "./myButton.tsx";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            paddingInline={{ xs: 2, sm: 4, md: 6 }}
            marginInline={{xs: 5, sm: 7, lg: 9}}
            maxWidth={{ xs: '95%', sm: '90%', md: '80%' }}
            marginTop={{ xs: 2, sm: 3 }}
        >
            <Link to='/movies'>
                <img src={logo} alt="Logo" />
            </Link>
            <Stack direction='row' spacing={3}>
                <MyButton variant="outlined" sx={{ color: 'white' }}>
                    Language
                </MyButton>
                <Link to='login'>
                    <MyButton variant="contained">
                        Login
                    </MyButton>
                </Link>
            </Stack>
        </Stack>
    );
};

