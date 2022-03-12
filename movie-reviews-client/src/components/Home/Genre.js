import React, { useEffect, useState } from "react";
import GenreList from "../Genre/genreList";
import API_KEY from "../Data/api";
import movieGenresIcon from "../../img/movie-genres.png";

const Genre = () => {
    const [movieGenres, setMovieGenres] = useState([]);

    const getMovieGenresRequest = async () => {
        const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
        const response = await fetch(url);
        const responseJson = await response.json();
        setMovieGenres(responseJson)
    }

    useEffect(() => {
        getMovieGenresRequest();
    }, []);

    return (
        <div className="genre-wrapper">
            <div className="movie-genres-icon"><img src={ movieGenresIcon } alt="genres-icon"></img></div>
            <div className="movie-genres">
                <GenreList genres={movieGenres.genres} />
            </div>
        </div>
    );
}

export default Genre;