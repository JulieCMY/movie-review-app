import React, { Fragment } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import castNotFound from '../../img/cast-not-found.png';
import { Link } from "react-router-dom";

const CastList = (props) => {
    return (
        <Fragment>
            {props.casts.map((cast, index) => (
                <div className="cast-box" key={index}>
                    <Link to={`/actor/${cast.id}`}>
                        <Card sx={{ width: 160, backgroundColor: '#EFECDB' }}>
                            {cast.profile_path ?
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                                    alt="cast"
                                /> :
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={castNotFound}
                                    alt="cast"
                                />
                            }

                            <CardContent>
                                <Typography className="textOverflow" gutterBottom variant="subtitle2" component="div">
                                    {cast.name}
                                </Typography>
                                <Typography className="textOverflow" variant="body2" style={{ fontSize: '12px' }} color="text.secondary">
                                    {cast.character}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            ))}
        </Fragment>
    );
};

export default CastList;