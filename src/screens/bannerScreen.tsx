import React, { useEffect, useState } from 'react'
import { Banner } from '../components/banner.tsx'
import { MoviesRow } from '../components/moviesRow.tsx'
import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import BounceLoader from 'react-spinners/BounceLoader'
import Loader from '../components/loader.tsx'

export default function BannerScreen() {
    const [relatedMovies, setRelatedMovies] = useState<any>()
    const { movieid } = useParams()
    useEffect(() => {
        const fetchRelatedMovies = async () => {
            try {
                // Replace 'YOUR_API_KEY' with your actual TMDb API key
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieid}/similar?api_key=11733ba9ebc594f27734034ba07ac007`
                );
                const parsedResponse = await response.json()
                const movies = parsedResponse.results.map((movie) => ({
                    id: movie.id,
                    bannerImagePath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    imagePath: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
                    name: movie.original_title
                }));
                setRelatedMovies(movies);

            } catch (error) {
                console.error('Error fetching related movies:', error);
            }
        };

        fetchRelatedMovies();
    }, [movieid])
    return (
        <div>
            <Banner movieid={movieid} />
            <div style={{
                background: 'black', display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh'
            }}>
                <Typography variant='h4' color={'white'} marginInline={4}>
                    Related Movies
                </Typography>
                {relatedMovies ? <MoviesRow images={relatedMovies} /> : <Loader />}
            </div>
        </div >
    )
}
