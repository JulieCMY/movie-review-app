import React, { useEffect, useState } from "react";
import MovieList from "./movieList";
import API_KEY from "../Data/api";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/movie.scss';

const NowPlayingMovie = () => {
    const [movies, setMovies] = useState([]);

    const getMovieRequest = async () => {
        const url =`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
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
        <h2 className="movie-heading">Featured today</h2>
        <div className="movie-list">
            <MovieList movies={movies} />
        </div>
    </div>
    );
};

export default NowPlayingMovie;