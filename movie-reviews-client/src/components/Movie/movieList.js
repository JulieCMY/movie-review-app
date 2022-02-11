import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const MovieList = (props) => {
    return (
        <Fragment>
            {props.movies.map((movie, index) => (
                <Link to={`/detail/${movie.id}`} key={movie.id}>
                    <div className="movie-poster-box">
                        <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='movie'></img>
                        <div className="movie-poster-detail">
                            <span>{movie.title}</span> 
                            <p>{movie.release_date}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </Fragment>
    );
};

export default MovieList;