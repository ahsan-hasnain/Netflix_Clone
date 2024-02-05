import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Stack } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { MyButton } from './myButton.tsx';
import Loader from './loader.tsx';

export const Banner = ({ movieid }) => {
  const [movie, setMovie] = useState<any>()
  const [videoId, setVideoId] = useState<any>()
  const [played, setPlayed] = useState(false)
  const imagePath = `https://image.tmdb.org/t/p/original`;
  function handleChange() {
    setPlayed(true)
  }
  useEffect(() => {
    console.log(movieid);

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTczM2JhOWViYzU5NGYyNzczNDAzNGJhMDdhYzAwNyIsInN1YiI6IjY1YTk1MjQ4MGYwZGE1MDEzOTNjMjhmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S5t9WNy9NkbyuYj59pyCpGtSHTZaV3gq23sMKnVKmd8'
      }
    };
    async function fetchMovie() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieid}?api_key=11733ba9ebc594f27734034ba07ac007&append_to_response=videos`, options
        );
        const parsedResponse = await response.json()
        console.log(parsedResponse);
        const video = parsedResponse.videos.results.length > 0 ? parsedResponse.videos.results[0].key : null;
        console.log(video);

        setMovie(parsedResponse)
        setVideoId(video)

      } catch (error) {
        console.error('Error fetching movie images:', error);
      }
    }
    fetchMovie()
  }, [movieid])

  return (
    <Container>
      {movie ? <div className="hero">
        {played ?
          <iframe  width="560" height="315" src={`https://www.youtube.com/embed/${videoId}?showinfo=0`} title="Embedded Video" frameBorder="0" allowFullScreen></iframe>
          :
          <div>
            <img src={imagePath + movie.backdrop_path} />


            <div className="container">
              <Stack direction={'column'} spacing={3} marginInlineStart={8} width={500}>
                <Typography variant='h3'>{movie.tile || movie.original_title}</Typography>
                <Typography variant='body2'>{movie.overview}</Typography>
                <Stack direction={'row'} spacing={3}>
                  <Button variant='contained' onClick={handleChange} color='secondary'>Play</Button>


                </Stack>
              </Stack>
            </div>
          </div>}
      </div> : <Loader />}
    </Container>
  )
}

const Container = styled.div`
  background-color: black;
  color: white;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(40%);
    }
    img, iframe {
      height: 80vh;
      width: 100vw;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 30%; /* Adjust the height of the gradient overlay */
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
      }
    }
    .container {
      position: absolute;
      bottom: 9rem;
     
        }
      }
    }
  }
`; {/* <img
src={imagePath + movie.backdrop_path}
alt="background"
className="background-image"
/> */}