import React, { useState, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import castNotFound from '../../img/cast-not-found.png';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const SeasonList = (props) => {
    let { tvId } = useParams();
    // const [expanded, setExpanded] = useState(false);
    const [expandedId, setExpandedId] = useState(-1);

    const handleExpandClick = index => {
        // setExpanded(!expanded);
        setExpandedId(expandedId === index ? -1 : index);
    };

    return (
        <Fragment>
            {props.seasons.map((season, index) => (
                <div className="cast-box" key={index}>
                    <Card sx={{ width: 210, backgroundColor: '#EFECDB' }}>
                        <Link to={`/tv/${tvId}/season/${season.season_number}`}>
                            {
                                season.poster_path ?
                                    <CardMedia
                                        component="img"
                                        height="350"
                                        image={`https://image.tmdb.org/t/p/w500/${season.poster_path}`}
                                        alt="cast"
                                    /> :
                                    <CardMedia
                                        component="img"
                                        height="400"
                                        image={castNotFound}
                                        alt="cast"
                                    />
                            }
                        </Link>
                        <CardContent>
                            <Typography className="textOverflow" gutterBottom variant="subtitle2" style={{ fontSize: '16px', textAlign: 'center' }} component="div">
                                {season.name}
                            </Typography>
                            <Typography className="textOverflow" variant="body2" style={{ fontSize: '14px', textAlign: 'center' }} color="text.secondary">
                                {season.air_date}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            {
                                season.overview !== "" &&
                                <ExpandMore
                                    expand={expandedId === index}
                                    onClick={() => handleExpandClick(index)}
                                    aria-expanded={expandedId === index}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            }

                        </CardActions>
                        {
                            season.overview !== "" &&
                            <Collapse in={expandedId === index} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>
                                        {season.overview}
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        }

                    </Card>
                </div>
            ))}
        </Fragment>
    );
};

export default SeasonList;