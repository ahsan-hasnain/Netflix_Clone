import { Stack } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Image = styled.img`
  height: auto;
  max-height: 150px;
  width: 100%;
  cursor: pointer;
  transition: transform 0.3s ease-in-out; /* Add a smooth transition effect */

  &:hover {
    transform: scale(1.07); /* Increase the size by 7% on hover */
  }
`;

export const MoviesRow = (props) => {
    const imagePath = `https://image.tmdb.org/t/p/original`;

    return (
        <Stack marginInline={3} marginTop={2}>
            <Grid container spacing={2} justifyContent="center">
                {props.images.map(url => (
                    <Grid item xs={6} sm={4} md={3} lg={2.4} key={url.name}>
                        <Link to={`/banner/${url.id}`}>
                            <Image src={imagePath + url.imagePath} alt={url.name || url.original_name || url.title || url.original_title} />
                        </Link>
                        <Typography variant='h5' color={'white'}>{url.name || url.original_name || url.title || url.original_title}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
};


