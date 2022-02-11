import React, { Fragment } from 'react';

const TVList = (props) => {
    return (
        <Fragment>
            {props.tvs.map((tv, index) => (
                <div key={tv.id} className="movie-poster-box">
                    <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`} alt='movie'></img>
                    <div className="movie-poster-detail">
                        <span>{tv.name}</span> 
                        <p>{tv.first_air_date}</p>
                    </div>
                </div>
            ))}
        </Fragment>
    );
};

export default TVList;