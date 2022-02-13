import React, { useEffect, useState } from "react";
import MovieSearchList from '../Search/movieSearchList';
import Pagination from '@mui/material/Pagination';
import API_KEY from "../Data/api";
import '../../style/movie.scss';

const TopRated = () => { 
    const [movies, setMovies] = useState([]);
    const [maxPages, setMaxPages] = useState([]);
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        document.documentElement.scrollTop = 0;
    };

    const getMovieRequest = async () => {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${page}`;
        const response = await fetch(url);
        const responsJson = await response.json();
        // console.log(responsJson);
        setMovies(responsJson.results);
        setMaxPages(responsJson.total_pages);
    }

    // Once queryKeyword has changed, reset the movie request
    useEffect(()=> {
        getMovieRequest();
    }, [page]); 

    return (
    <div className='movie-wrapper container-fluid'>
        <h2 className="movie-heading">TOP RATED</h2>
        <div className="lister">
            <MovieSearchList movies={movies} />
        </div>
        <div className="pagination-container">
            <Pagination page={page} onChange={handleChange} count={parseInt(maxPages)} size="large" />
        </div>
    </div>
    );
};

export default TopRated;