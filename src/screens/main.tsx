import React, { useEffect, useState } from "react";
import { Container, Stack } from "@mui/system";
import { Link as MuiLink } from "@mui/material";
import logo2 from '../assets/logo2.png'
import { Link } from "react-router-dom";
import { MyInput } from "../components/myInput.tsx";
import {MoviesList} from "../components/moviesList.tsx";


export const MainHeader = ({text, onTextChange}) => {
    useEffect(()=>{
        console.log(text);
        
    })
    return (
        <Stack direction='row' justifyContent='space-between' color="white" marginInline={20}>
            <Link to='/'><img src={logo2} height={99}/></Link>
            <Stack direction={'row'} marginTop={'2.4rem'} spacing={3}>
                <MuiLink component={Link} to='/movies'>Movies</MuiLink>
                <MuiLink component={Link} to='/movies'>TV Shows</MuiLink>
            </Stack>
            <Stack direction='row' spacing={3} marginTop={3}>
                <MyInput label='search' size="small" variant="filled" focused value={text} onChange={(e)=>onTextChange(e.target.value)}/>
            </Stack>
        </Stack>
    )
}

export const MainScreen = () => {
    const [search, setSearch] = useState<string>('')
    return (
        <Stack>
            <Stack sx={{ background: 'black' }}>
                <MainHeader text={search} onTextChange={setSearch}/>
            </Stack>
            <MoviesList query={search}/>
        </Stack>
    )
}
