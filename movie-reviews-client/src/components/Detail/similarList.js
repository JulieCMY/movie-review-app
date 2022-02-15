import React, { Fragment } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import photoNotFound from '../../img/photo-not-found.png';

const SimilarList = (props) => {
    return (
        <Fragment>
            {props.movies.map((movie, index) => (
                <div className="cast-box" key={index}>
                    <Card sx={{ width: 160, backgroundColor: '#EFECDB' }}>
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
                </div>
            ))}
        </Fragment>
    );
};

export default SimilarList;