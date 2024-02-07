import React from "react";
import { useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import { Header } from "../components/header.tsx";
import { Typography } from "@mui/material";
import { MyInput } from "../components/myInput.tsx";
import { MyButton } from "../components/myButton.tsx";
import { Background } from "../components/background.tsx";

export const LandingScreen = () => {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    return (
        <Background>
            <Header />
            <Stack
                direction='column'
                color='white'
                margin={{xs:5, md: 7, lg: 8}}
                paddingInline={{ xs:'8px', sm:"10px", lg:40, md:30}}
                paddingBlock={{sm:"20px" ,md:"40px"}}
                spacing={2}
                textAlign='center'
            >
                <Typography variant={isSmallScreen ? "h5" : "h3"}>
                    Unlimited movies, TV shows and more.
                </Typography>
                <Typography variant={isSmallScreen ? "subtitle2" : "h6"}>
                    Watch anywhere. Cancel anytime.
                </Typography>
                <Typography variant={isSmallScreen ? "body2" : "body1"}>
                    Ready to watch? Enter your email address to start your membership.
                </Typography>
                <Stack direction='column'>
                    <MyInput label='Enter your email' size='small'/>
                    <MyButton size='large' variant='contained'>Submit</MyButton>
                </Stack>
            </Stack>
        </Background>
    );
};
