import React, { Fragment } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CastList = (props) => {
    return (
        <Fragment>
            {props.casts.map((cast, index) => (
                <div className="cast-box" key={index}>
                    <Card sx={{ minWidth: 160 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                            alt="cast"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="subtitle2" component="div">
                                {cast.name}
                            </Typography>
                            <Typography variant="body2" style={{fontSize:'12px'}} color="text.secondary">
                                {cast.character}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </Fragment>
    );
};

export default CastList;