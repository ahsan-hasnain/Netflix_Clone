import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import { MyButton } from './myButton.tsx';
import Loader from './loader.tsx';

export const Banner = ({ movieid }) => {
  const [movie, setMovie] = useState<any>()
  const [videoId, setVideoId] = useState<any>()
  const [played, setPlayed] = useState(false)
  const imagePath = `https://image.tmdb.org/t/p/original`;
  function handleChange(){
    setPlayed(false)
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
          `https://api.themoviedb.org/3/movie/${movieid}?api_key=11733ba9ebc594f27734034ba07ac007`, options
        );
        const parsedResponse = await response.json()
        console.log(parsedResponse);

        setMovie(parsedResponse)

      } catch (error) {
        console.error('Error fetching movie images:', error);
      }
    }
    fetchMovie()
    async function fetchVideo(){
        try {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=11733ba9ebc594f27734034ba07ac007`)
          const parsedResponse = await response.json()
          const video = parsedResponse.data.results.length > 0 ? parsedResponse.data.results[0].key : null;
          console.log(parsedResponse);
          
          if(videoId){
            setVideoId(video)
          }
        } catch (error) {
          
        }
    }
  fetchVideo()
  }, [movieid])

  return (
    <Container>
      {movie ? <div className="hero">
        {played?
         <h2>video played</h2>
        :
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/4XKjtyMb_6A}`} title="Embedded Video" frameBorder="0" allowFullScreen></iframe>
        
        }
        <div className="container">
          <Stack direction={'column'} spacing={3} marginInlineStart={8} width={500}>
            <Typography variant='h3'>{movie.tile || movie.original_title}</Typography>
            <Typography variant='body2'>{movie.overview}</Typography>
            <Stack direction={'row'} spacing={3}>
              <MyButton variant='contained' color={'secondary'} onClick={handleChange}>Play</MyButton>
              <MyButton variant='contained' color='info' opacity='0.9'>Play</MyButton>

            </Stack>
          </Stack>
        </div>
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
      filter: brightness(60%);
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
`;{/* <img
src={imagePath + movie.backdrop_path}
alt="background"
className="background-image"
/> */}