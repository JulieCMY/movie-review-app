import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import photoNotFound from "../../img/photo-not-found.png";

const MovieSearchList = (props) => {
    return (
        <Fragment>
            {props.movies.map((movie, index) => (
                <div className="lister-item" key={index}>
                    <Link to={`/detail/${movie.id}`}>
                        <div className="lister-item-img">
                            {movie.poster_path ?
                                <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='movie'></img> :
                                <img className="movie-poster" src={photoNotFound} alt='movie'></img> 
                            }
                        </div>  
                    </Link>
                    <div className="lister-item-content">
                        <div className="lister-item-top">
                        <h3 className="lister-item-header">{movie.title} ({movie.release_date?.substring(0, 4)})</h3>   
                            <div className="lister-item-rating">
                                <div className="ratings-bar">
                                    <Rating name="half-rating-read" value={parseFloat(movie.vote_average) / 2} precision={0.1} readOnly /> 
                                </div>
                                <div className="rating"><p>{movie.vote_average}</p></div>
                            </div>
                        </div>
                        <p className="text-muted">{movie.overview}</p>
                    </div>

                </div>
            ))}
        </Fragment>
    );
};

export default MovieSearchList;