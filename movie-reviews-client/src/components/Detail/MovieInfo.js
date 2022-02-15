import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_KEY from "../Data/api";
import UserComment from "./UserComment";
import GenreList from "../Genre/genreList";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import photoNotFound from '../../img/photo-not-found.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/movie.scss';

const MovieDetail = () => {
    const [movieDetail, setMovieDetail] = useState([]);
    let { id } = useParams();

    const getMovieDetailRequest = async () => {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
        const response = await fetch(url);
        const responsJson = await response.json();
        console.log(responsJson);
        setMovieDetail(responsJson)
    }

    useEffect(() => {
        getMovieDetailRequest();
    }, []);

    return (
        <div className='movie-wrapper movie-detail-wrapper'>
            <div className='movie-left-container'>
                <h2 className="movie-heading">{movieDetail.title} ({movieDetail.release_date?.substring(0, 4)})</h2>
                <p className="movie-tagline">{movieDetail.tagline}</p>
                <div className="movie-detail">
                    <div className="movie-detail-post">
                        {
                            movieDetail.poster_path?
                            <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} alt="post"></img>:
                            <img src={photoNotFound} alt='movie'></img> 
                        }
                    </div>
                    <ul className="movie-detail-info">
                        <li className="movie-metadata-genre"><GenreList genres={movieDetail.genres} /></li>
                        <li className="movie-metadata-divider"><span>Release Date: </span> {movieDetail.release_date}</li>
                        <li className="movie-metadata-divider"><span>Runtime: </span> {movieDetail.runtime} min</li>
                        <li className="movie-metadata-divider"><span>Homepage: </span><a href={`${movieDetail.homepage}`} className="movie-homepage">{movieDetail.homepage}</a></li>
                        <li className="movie-metadata-divider"><span>Overview: </span> <p className="movie-overview"> {movieDetail.overview}</p></li>
                    </ul>
                </div>
            </div>
            <div className='movie-right-container'>
                <div className='rating-title'>IMDb</div>
                <div className='rating-content'>
                    <strong className='rating-num'>{movieDetail.vote_average}</strong>
                    <div className='rating-right'>
                        <div className='bigstar'>
                            <Rating 
                            name="half-rating-read" 
                            value={(parseFloat(movieDetail.vote_average)/2).toFixed(1)} 
                            precision={0.1} 
                            readOnly 
                            emptyIcon={<StarIcon style={{ color: '#f0ede9' }} fontSize="inherit" />}
                            />
                        </div>
                        <div className='rating-count'>{movieDetail.vote_count} votes</div>
                    </div>
                </div>
                <UserComment />
            </div>
        </div>
    );
};

export default MovieDetail;