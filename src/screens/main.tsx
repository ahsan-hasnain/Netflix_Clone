import React, { useEffect, useState } from "react";
import { Container, Stack } from "@mui/system";
import { Button, Link as MuiLink } from "@mui/material";
import logo2 from '../assets/logo2.png'
import { useUser } from "../contexts/userContext.tsx";
import { Link } from "react-router-dom";
import { MyInput } from "../components/myInput.tsx";
import {MoviesList} from "../components/moviesList.tsx";
import { MyButton } from "../components/myButton.tsx";


export const MainHeader = ({text, onTextChange, handleLogOut}) => {
    const {signOut} = useUser()
    const handleSignOut = async()=>{
        try {
            await signOut()
            handleLogOut(false)

        } catch (error) {
            
        }
    }
    return (
        <Stack direction='row' justifyContent='space-between' color="white" marginInline={20}>
            <Link to='/'><img src={logo2} height={99}/></Link>
            <Stack direction={'row'} marginTop={'2.4rem'} spacing={3}>
                <MuiLink component={Link} to='/movies'>Movies</MuiLink>
                <MuiLink component={Link} to='/tvshows'>TV Shows</MuiLink>
            </Stack>
            <Stack direction='row' spacing={3} marginTop={3}>
                <MyInput label='search' size="small" variant="filled" focused value={text} onChange={(e)=>onTextChange(e.target.value)}/>
                <Button variant='outlined' onClick={handleSignOut} size="small" sx={{height:'50px'}}>logout</Button>
            </Stack>
        </Stack>
    )
}

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
