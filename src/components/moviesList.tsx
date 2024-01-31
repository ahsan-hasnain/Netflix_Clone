import React, { useEffect, useState } from 'react'
import { MoviesRow } from './moviesRow.tsx';
import { Select, MenuItem, FormControl, InputLabel, Stack, Typography } from '@mui/material';
import { Banner } from './banner.tsx';
import Loader from './loader.tsx';

export const MoviesList = ({ query }) => {
  const [movies, setmovies] = useState<any>(null)
  const [error, setError] = useState<any>()
  const [selectedGenre, setSelectedGenre] = useState<any>(28)
  const [genres, setGenres] = useState<any>([])
  const [images, setImages] = useState<any>([])
  const [loading, setLoading] = useState(true)
  const searchTermParts = query.split(' ');

  const formattedQuery = searchTermParts.join('+');

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTczM2JhOWViYzU5NGYyNzczNDAzNGJhMDdhYzAwNyIsInN1YiI6IjY1YTk1MjQ4MGYwZGE1MDEzOTNjMjhmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S5t9WNy9NkbyuYj59pyCpGtSHTZaV3gq23sMKnVKmd8'
      }
    };
    async function fetchMovies() {
      let response: any = ''
      try {
        if (query === '') {
          response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${selectedGenre}`, options)
        }
        else {
          response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${formattedQuery}&api_key=11733ba9ebc594f27734034ba07ac007`, options)
        }
        const parsedResponse = await response.json()
  
        setmovies(parsedResponse.results)
        setLoading(false)
        const movieImages = parsedResponse.results.map((movie) => ({
          id: movie.id,
          bannerImagePath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          imagePath: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
          name: movie.original_title
        }));
  
        setImages(movieImages);
  
      } catch (error) {
          console.log(error);
          
      }
          }

    fetchMovies()
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=11733ba9ebc594f27734034ba07ac007`
        );

        const data = await response.json();

        setGenres(data.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };
    fetchGenres();
  }, [query, selectedGenre])
  function handleChange(e){
    setSelectedGenre(e.target.value)
  }

  return (
    <div style={{
      background: '#202020', display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
       <Stack margin={3} direction={'row'}>
        <Select
          sx={{ marginInline: '0 auto' , borderColor:'white'}}
          labelId="genre-select-label"
          id="genre-select"
          value={selectedGenre}
          onChange={handleChange}
          
        >
          {genres.map((genre) => (
            <MenuItem key={genre.id} value={genre.id} sx={{ background: '#212529' }}>
              {genre.name}
            </MenuItem>
          ))}
        </Select>
      </Stack>
      <Typography variant='h4' color={'white'} marginInline={4}>
        Popular Movies
      </Typography>
      {error? <Typography>An error Occured</Typography>:loading ? <Loader /> : <MoviesRow images={images} />}

    </div>
  )
}
