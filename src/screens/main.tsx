import React, { useState } from "react";
import { Stack } from "@mui/system";
import { Button, Link as MuiLink } from "@mui/material";
import logo2 from '../assets/logo2.png'
import { useUser } from "../contexts/userContext.tsx";
import { Link } from "react-router-dom";
import { MyInput } from "../components/myInput.tsx";
import {MoviesList} from "../components/moviesList.tsx";


export const MainHeader = ({ text, onTextChange, handleLogOut }) => {
    const { signOut } = useUser();

    const handleSignOut = async () => {
        try {
            await signOut();
            handleLogOut(false);
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent='space-between'
            alignItems={{ xs: 'center', md: 'flex-start' }}
            color="white"
            padding={2}
            marginInline={{xs:2, sm:3, md:8, lg:9}}
        >
            <Link to='/'>
                <img src={logo2} height={99} alt="Logo" />
            </Link>
            <Stack direction='row' spacing={3} marginTop={{ xs: 2, md: 4, lg:4 }}>
                <MuiLink component={Link} to='/movies' variant="button">Movies</MuiLink>
                <MuiLink component={Link} to='/tvshows' variant="button">TV Shows</MuiLink>
            </Stack>
            <Stack direction='row' spacing={3} marginTop={{ xs: 2, md: 2,lg:2}}>
                <MyInput label='Search' size="small" variant="filled" focused value={text} onChange={(e) => onTextChange(e.target.value)} />
                <Button variant='outlined' onClick={handleSignOut} size="small" sx={{ height: '50px' }}>Logout</Button>
            </Stack>
        </Stack>
    );
};
export const MainScreen = ({handleLogOut, type}) => {
    const [search, setSearch] = useState<string>('')
    return (
        <Stack>
            <Stack sx={{ background: 'black' }}>
                <MainHeader text={search} onTextChange={setSearch} handleLogOut={handleLogOut}/>
            </Stack>
            <MoviesList type={type} query={search}/>
        </Stack>
    )
}
