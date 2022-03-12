import React, { useEffect, useState } from "react";
import Banner from "./banner";
import API_KEY from "../Data/api";
import '../../style/movie.scss';

const PopularMovie = () => {
    const [movies, setMovies] = useState([]);

    const getMovieRequest = async () => {
        const url =`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        const response = await fetch(url);
        const responseJson = await response.json();
        // console.log(responseJson);
        setMovies(responseJson.results)
    }

    useEffect(()=> {
        getMovieRequest();
    }, []); 

    return (
    <div className='banner-wrapper'>
        <Banner movies={movies} />
    </div>
    );
};

export default PopularMovie;