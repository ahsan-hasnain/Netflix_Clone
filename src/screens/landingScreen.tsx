import React from "react";
import { Stack } from "@mui/system";
import { Header } from "../components/header.tsx";
import {  Typography } from "@mui/material";
import { MyInput } from "../components/myInput.tsx";
import { MyButton } from "../components/myButton.tsx";

import { Background } from "../components/background.tsx";

export const LandingScreen = () => {
    return (
        <Background>
            <Header />
            <Stack direction='column' color='white' margin={15} paddingInline={40} spacing={2} textAlign='center'>
                <Typography variant="h3">
                    Unlimited movies, TV shows and more.
                </Typography>
                <Typography variant="h6">
                    Watch anywhere. Cancel anytime.
                </Typography>
                <Typography>
                    Ready to watch? enter your email address to start your membership
                </Typography>
                <Stack direction='column'>
                    <MyInput  label='enter your email' size='small'/>
                    <MyButton size='large' variant='contained'>Submit</MyButton>
                </Stack>

            </Stack>

        </Background>
    )
}