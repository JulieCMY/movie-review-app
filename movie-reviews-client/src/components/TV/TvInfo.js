import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import API_KEY from "../Data/api";
// import UserComment from "../Movie/UserComment";
import GenreList from "../Genre/genreList";
import SeasonList from "./seasonList";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import photoNotFound from '../../img/photo-not-found.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/movie.scss';

const TvDetail = () => {
    const [movieDetail, setMovieDetail] = useState([]);
    const [seasonDetail, setSeasonDetail] = useState([]);
    let { tvId } = useParams();

    const getTvDetailRequest = async () => {
        const url = `https://api.themoviedb.org/3/tv/${tvId}?api_key=${API_KEY}`;
        const response = await fetch(url);
        const responsJson = await response.json();
        // console.log(responsJson);
        setMovieDetail(responsJson);
        setSeasonDetail(responsJson.seasons);
    }

    useEffect(() => {
        getTvDetailRequest();
    }, [tvId]);

    return (
        <Fragment>
            <div className='movie-wrapper movie-detail-wrapper'>
                <div className='movie-left-container'>
                    <h2 className="movie-heading">{movieDetail.name} ({movieDetail.first_air_date?.substring(0, 4)})</h2>
                    <p className="movie-tagline">{movieDetail.tagline}</p>
                    <div className="movie-detail">
                        <div className="movie-detail-post">
                            {
                                movieDetail.poster_path ?
                                    <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} alt="post"></img> :
                                    <img src={photoNotFound} alt='movie'></img>
                            }
                        </div>
                        <ul className="movie-detail-info">
                            <li className="movie-metadata-genre"><GenreList genres={movieDetail.genres} /></li>
                            {movieDetail.original_name !== movieDetail.name &&
                                <li className="movie-metadata-divider"><span>Original Name: </span> {movieDetail.original_name}</li>
                            }
                            <li className="movie-metadata-divider"><span>First Air Date: </span> {movieDetail.first_air_date}</li>
                            <li className="movie-metadata-divider"><span>Last Air Date: </span> {movieDetail.last_air_date}</li>
                            <li className="movie-metadata-divider"><span>Episode Runtime: </span> {movieDetail.episode_run_time} min</li>
                            <li className="movie-metadata-divider"><span>Number of Episodes: </span> {movieDetail.number_of_episodes}</li>
                            <li className="movie-metadata-divider"><span>Number of Seasons: </span> {movieDetail.number_of_seasons}</li>
                            {
                                movieDetail.homepage !== "" &&
                                <li className="movie-metadata-divider"><span>Homepage: </span><a href={`${movieDetail.homepage}`} className="movie-homepage">{movieDetail.homepage}</a></li>
                            }
                            <li className="movie-metadata-divider"><span>Overview: </span> <p className="movie-overview"> {movieDetail.overview}</p></li>
                        </ul>
                    </div>
                </div>
                <div className='movie-right-container'>
                    <div className='rating-title'>IMDb</div>
                    <div className='rating-content'>
                        <strong className='rating-num'>{parseFloat(movieDetail.vote_average).toFixed(1)}</strong>
                        <div className='rating-right'>
                            <div className='bigstar'>
                                <Rating
                                    name="half-rating-read"
                                    value={(parseFloat(movieDetail.vote_average) / 2).toFixed(1)}
                                    precision={0.1}
                                    readOnly
                                    emptyIcon={<StarIcon style={{ color: '#f0ede9' }} fontSize="inherit" />}
                                />
                            </div>
                            <div className='rating-count'>{movieDetail.vote_count} votes</div>
                        </div>
                    </div>
                    {/* <UserComment /> */}
                </div>
            </div>
            <div className="season movie-info-wrapper">
                <h3 className="detail-heading">TV Seasons · · · · · ·({seasonDetail.length})</h3>
                <div className="seasons-list">
                    <SeasonList seasons={seasonDetail} />
                </div>
            </div>
        </Fragment>
    );
};

export default TvDetail;