import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import MovieList from "./movieList";
import API_KEY from "../Data/api";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import '../../style/movie.scss';

const NowPlayingMovie = () => {
    const [movies, setMovies] = useState([]);

    const getMovieRequest = async () => {
        const url =`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=1`
        const response = await fetch(url);
        const responsJson = await response.json();
        // console.log(responsJson);
        setMovies(responsJson.results)
    }

    useEffect(()=> {
        getMovieRequest();
    }, []); 

    return (
    <div className='movie-wrapper container-fluid'>
        <div className='movie-heading-container'>
            <h2 className="movie-heading">Featured today</h2>
            <Link to={'/movie/now_playing'}>
                <ArrowForwardIosRoundedIcon className="more-movie-icon"/>
            </Link> 
        </div>
        <div className="movie-list">
            <MovieList movies={movies} />
        </div>
    </div>
    );
};

export default NowPlayingMovie;