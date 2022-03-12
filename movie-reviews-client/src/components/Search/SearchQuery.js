import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import MovieSearchList from "./movieSearchList";
import Pagination from '@mui/material/Pagination';
import API_KEY from "../Data/api";
import '../../style/movie.scss';

const SearchMovieByKeyword = () => {
    // search query keyword
    const location = useLocation();
    const urlParams = new URLSearchParams(location.search);
    const queryKeyword = urlParams.get('query');
    
    const [movies, setMovies] = useState([]);
    const [maxPages, setMaxPages] = useState([]);
    const [page, setPage] = useState(1);
    const [language, setLanguage] = useState(() => {
        const initialValue = localStorage.getItem("language");
        return initialValue || "";
    });
    const handleChange = (event, value) => {
        setPage(value);
        document.documentElement.scrollTop = 0;
    };
    
    const getUserLanguage = () => {
        setLanguage(localStorage.getItem("language"));
    }

    const getMovieRequest = async () => {
        const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${queryKeyword}&language=${language}&page=${page}`;
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson);
        setMovies(responseJson.results);
        setMaxPages(responseJson.total_pages);
    }

    // Once queryKeyword has changed, reset the movie request
    useEffect(()=> {
        getUserLanguage();
        getMovieRequest();
    }, [queryKeyword, page, language]); 

    return (
    <div className='movie-wrapper container-fluid'>
        <h2 className="movie-heading">Search Results for "{queryKeyword}" </h2>
        <div className="lister">
            <MovieSearchList movies={movies} />
        </div>
        <div className="pagination-container">
            <Pagination page={page} onChange={handleChange} count={parseInt(maxPages)} size="large" />
        </div>
    </div>
    );
};

export default SearchMovieByKeyword;