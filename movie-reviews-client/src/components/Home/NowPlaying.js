import React, { useEffect, useState } from "react";
import MovieSearchList from '../Search/movieSearchList';
import Pagination from '@mui/material/Pagination';
import API_KEY from "../Data/api";
import '../../style/movie.scss';

const NowPlaying = () => { 
    const [movies, setMovies] = useState([]);
    const [maxPages, setMaxPages] = useState([]);
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        document.documentElement.scrollTop = 0;
    };
    
    const [minDate, setMinDate] = useState('');
    const [maxDate, setMaxDate] = useState('');

    const getMovieRequest = async () => {
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${page}`;
        const response = await fetch(url);
        const responseJson = await response.json();
        // console.log(responseJson);
        setMovies(responseJson.results);
        setMaxPages(responseJson.total_pages);
        setMinDate(responseJson.dates.minimum);
        setMaxDate(responseJson.dates.maximum);
    }

    // Once queryKeyword has changed, reset the movie request
    useEffect(()=> {
        getMovieRequest();
    }, [page]); 

    return (
    <div className='movie-wrapper container-fluid'>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h2 className="movie-heading">NOW PLAYING</h2>
            <p style={{color: 'rgb(235, 220, 175)', marginTop:'10px', marginBottom: '-30px'}}>From {minDate} to {maxDate}</p>
        </div>
        <div className="lister">
            <MovieSearchList movies={movies} />
        </div>
        <div className="pagination-container">
            <Pagination page={page} onChange={handleChange} count={parseInt(maxPages)} size="large" />
        </div>
    </div>
    );
};

export default NowPlaying;