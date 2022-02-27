import React, { Fragment, useState } from "react";
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import photoNotFound from '../../img/photo-not-found.png';

const refreshComponent = () => {
    // 同一组件的相同路径不同参数，setState更新组件 
    // Same componenet same URL different parameters => refreshing a component
    this.setState({});
}

const SimilarList = (props) => {

    return (
        <Fragment>
            {props.movies.map((movie, index) => (
                <div key={index}>
                    <Link className="similar-box" to={`/tv/${movie.id}`} onClick={refreshComponent}>
                        <Card className="poster" sx={{ width: 160, backgroundColor: '#EFECDB' }}>
                            {movie.poster_path ?
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    alt="cast"
                                /> :
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={photoNotFound}
                                    alt="cast"
                                />
                            }
                        </Card>
                        <Card className="backdrop" sx={{ height: 200, width: 300, backgroundColor: '#EFECDB' }}>
                            {movie.backdrop_path ?
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                                    alt="cast"
                                /> :
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={photoNotFound}
                                    alt="cast"
                                />
                            }
                            <div className="overview"><p>{movie.overview}</p></div>
                        </Card>
                    </Link>
                </div>
            ))}
        </Fragment>
    );
};

export default SimilarList;