import { Stack } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Image = styled.img`
  height: 150px;
  width: 240px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out; /* Add a smooth transition effect */

  &:hover {
    transform: scale(1.07); /* Increase the size by 10% */
  }
`;

export const MoviesRow = (props) => {
    const imagePath = `https://image.tmdb.org/t/p/original`;
    return (
        <Stack marginInline={3} marginTop={2}>
            <Grid container spacing={2} direction={'row'}>

                {props.images.map(url => {
                    return (
                        <Grid item xs={2.4} >
                            <Link to={`/banner/${url.id}`}>
                            <Image src={imagePath + url.imagePath}/>
                            </Link>
                            <Typography variant='h5' color={'white'}>{url.name}</Typography>
                        </Grid>
                    )
                })}
            </Grid>
        </Stack>
    )
}

