import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_KEY from "../Data/api";
import GenreList from "../Genre/genreList";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/movie.scss';

const MovieDetail = () => {
    const [movieDetail, setMovieDetail] = useState([]);
    let { id } = useParams();

    const getMovieDetailRequest = async () => {
        const url =`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
        const response = await fetch(url);
        const responsJson = await response.json();
        console.log(responsJson);
        setMovieDetail(responsJson)
    }

    useEffect(()=> {
        getMovieDetailRequest();
    }, []); 

    return (
    <div className='movie-wrapper'>
        <h2 className="movie-heading">{movieDetail.title} ({movieDetail.release_date?.substring(0,4)})</h2>
        <p className="movie-tagline">{movieDetail.tagline}</p>
        <div className="movie-detail">
            <div className="movie-detail-post">
                <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} alt="post"></img>
            </div>
            <ul className="movie-detail-info">
                <li className="movie-metadata-genre"><GenreList genres={movieDetail.genres}/></li>
                <li className="movie-metadata-divider"><span>Release Date: </span> {movieDetail.release_date}</li>
                <li className="movie-metadata-divider"><span>Runtime: </span> {movieDetail.runtime} mins</li>
                <li className="movie-metadata-divider"><span>Homepage: </span><a href={`${movieDetail.homepage}`} className="movie-homepage">{movieDetail.homepage}</a></li>
                <li className="movie-metadata-divider"><span>Overview: </span> <p className="movie-overview"> {movieDetail.overview}</p></li>
            </ul>
        </div>
        
    </div>
    );
};

export default MovieDetail;