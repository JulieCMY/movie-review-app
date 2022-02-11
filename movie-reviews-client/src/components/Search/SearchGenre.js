import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieSearchList from "./movieSearchList";
import API_KEY from "../Data/api";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/movie.scss';

const SearchMovieByGenre = () => {
    const [genre, setGenre] = useState('');
    const [movies, setMovies] = useState([]);
    let { genreId } = useParams();

    const getGenreRequest = async () => {
        const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
        const response = await fetch(url);
        const responsJson = await response.json();
        for(let i in responsJson.genres){
            if (responsJson.genres[i].id == genreId){
                // console.log(responsJson.genres[i].name);
                setGenre(responsJson.genres[i].name);
                break;
            }
        }    
    }

    const getMovieRequest = async () => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`;
        const response = await fetch(url);
        const responsJson = await response.json();
        console.log(responsJson);
        setMovies(responsJson.results)
    }

    useEffect(()=> {
        getGenreRequest();
        getMovieRequest();
    }, []); 

    return (
    <div className='movie-wrapper container-fluid'>
        <h2 className="movie-heading">Discover {genre} Movies</h2>
        <div className="lister">
            <MovieSearchList movies={movies} />
        </div>
    </div>
    );
};

export default SearchMovieByGenre;