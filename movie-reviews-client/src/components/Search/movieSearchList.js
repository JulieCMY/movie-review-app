import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';

const MovieSearchList = (props) => {
    return (
        <Fragment>
            {props.movies.map((movie, index) => (
                <div className="lister-item" key={index}>
                    <Link to={`/detail/${movie.id}`}>
                        <div className="lister-item-img">
                            {movie.poster_path ?
                                <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='movie'></img> :
                                <img className="movie-poster" src={'https://raw.githubusercontent.com/JulieCMY/mengyuc/master/photo-not-found.png'} alt='movie'></img> 
                            }
                        </div>  
                    </Link>
                    <div className="lister-item-content">
                        <h3 className="lister-item-header">{movie.title} ({movie.release_date?.substring(0, 4)})</h3>
                        <div className="ratings-bar"><Rating name="half-rating-read" defaultValue={parseFloat(movie.vote_average) / 2} precision={0.1} readOnly /> <span className="rating">{movie.vote_average}</span></div>
                        <p className="text-muted">{movie.overview}</p>
                    </div>

                </div>
            ))}
        </Fragment>
    );
};

export default MovieSearchList;