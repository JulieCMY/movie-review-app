import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import API_KEY from "../Data/api";
import photoNotFound from '../../img/photo-not-found.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/movie.scss';

const SeasonDetail = () => {
    const [seasonDetail, setSeasonDetail] = useState([]);
    const [language, setLanguage] = useState(() => {
        const initialValue = localStorage.getItem("language");
        return initialValue || "";
    });
    let { tvId, seasonNumber } = useParams();

    const getTvSeasonDetailRequest = async () => {
        const url = `https://api.themoviedb.org/3/tv/${tvId}/season/${seasonNumber}?api_key=${API_KEY}&language=${language}`;
        const response = await fetch(url);
        const responseJson = await response.json();
        setSeasonDetail(responseJson);
        console.log(seasonDetail);
        // console.log(seasonDetail.episodes.length);
    }

    useEffect(() => {
        getTvSeasonDetailRequest();
    }, [tvId, language]);

    return (
        <Fragment>
            <div className='movie-wrapper movie-detail-wrapper'>
                <div className='movie-left-container'>
                    <h2 className="movie-heading">{seasonDetail.name} ({seasonDetail.air_date?.substring(0, 4)})</h2>
                    <div className="movie-detail season-info">
                        <div className="movie-detail-post">
                            {
                                seasonDetail.poster_path ?
                                    <img src={`https://image.tmdb.org/t/p/w500/${seasonDetail.poster_path}`} alt="post"></img> :
                                    <img src={photoNotFound} alt='season'></img>
                            }
                        </div>
                        <div className="season-overview">
                            <p className="season-overview-detail">{seasonDetail.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="season movie-info-wrapper">
                <h3 className="detail-heading">Season {seasonDetail.season_number} Episodes · · · · · ·({seasonDetail.episodes.length})</h3>
                <div className="episodes-list">
                    {seasonDetail.episodes.map((episode, index) => (
                        <div className="episode-list-item" key={index}>
                            <h3>Episode {episode.episode_number}: {episode.name}</h3>
                            <div className=""></div>    
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default SeasonDetail;