import React from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = (props) => {
    return (
        <Carousel autoPlay={true} showArrows={false} infiniteLoop={true} showStatus={false}>
            {props.movies.map((movie, index) => (
                <Link to={`/detail/${movie.id}`} key={movie.id}>
                    <div className="movie-banner-box">
                        <img className="movie-banner" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt='movie'></img>
                        <div className="movie-banner-content">
                            <h2 className="movie-banner-heading">{movie.original_title}</h2>
                            <div className="movie-banner-release-date">{movie.release_date}</div>
                        </div>
                    </div>
                </Link>
            ))}
        </Carousel>
    );
};

export default Banner;