import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieSearchList from "./movieSearchList";
import Pagination from '@mui/material/Pagination';
import API_KEY from "../Data/api";
import '../../style/movie.scss';

const SearchMovieByGenre = () => {
    const [genre, setGenre] = useState('');
    const [movies, setMovies] = useState([]);
    let { genreId } = useParams();

    const [maxPages, setMaxPages] = useState([]);
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        document.documentElement.scrollTop = 0;
    };

    const getGenreRequest = async () => {
        const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
        const response = await fetch(url);
        const responseJson = await response.json();
        for(let i in responseJson.genres){
            if (responseJson.genres[i].id == genreId){
                // console.log(responseJson.genres[i].name);
                setGenre(responseJson.genres[i].name);
                break;
            }
        }    
    }

    const getMovieRequest = async () => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`;
        const response = await fetch(url);
        const responseJson = await response.json();
        // console.log(responseJson);
        setMovies(responseJson.results)
        setMaxPages(responseJson.total_pages);
    }

    useEffect(()=> {
        getGenreRequest();
        getMovieRequest();
    }, [page]); 

    return (
    <div className='movie-wrapper container-fluid'>
        <h2 className="movie-heading">Discover {genre} Movies</h2>
        <div className="lister">
            <MovieSearchList movies={movies} />
        </div>
        <div className="pagination-container">
            <Pagination page={page} onChange={handleChange} count={parseInt(maxPages)} size="large" />
        </div>
    </div>
    );
};

export default SearchMovieByGenre;