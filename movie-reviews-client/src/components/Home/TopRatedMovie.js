import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import MovieList from "./movieList";
import API_KEY from "../Data/api";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import '../../style/movie.scss';

const TopRatedMovie = () => {
    const [movies, setMovies] = useState([]);

    const getMovieRequest = async () => {
        const url =`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        const response = await fetch(url);
        const responseJson = await response.json();
        // console.log(responseJson);
        setMovies(responseJson.results)
    }

    useEffect(()=> {
        getMovieRequest();
    }, []); 

    return (
    <div className='movie-wrapper container-fluid'>
        <div className='movie-heading-container'>
            <h2 className="movie-heading">Top Rated Movies</h2>
            <Link to={'/movie/top_rated'}>
                <ArrowForwardIosRoundedIcon className="more-movie-icon"/>
            </Link> 
        </div>
        <div className="movie-list">
            <MovieList movies={movies} />
        </div>
    </div>
    );
};

export default TopRatedMovie;