import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import API_KEY from "../Data/api";
import YouTube from 'react-youtube';
import './trailer.scss';

const opts = {
    height: '420',
    width: '690',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
    },
};

const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
}

const AutoCarousel = () => {
    const [trailers, setTrailer] = useState([]);
    const [playingUrl, setPlayingUrl] = useState(0);
    let { id } = useParams();

    const getTrailerRequest = async () => {
        const url = `http://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
        const response = await fetch(url);
        const responsJson = await response.json();
        setTrailer(responsJson.results);
        setPlayingUrl(responsJson.results[0].key);
    }

    useEffect(() => {
        getTrailerRequest();
    }, [playingUrl]);

    return (
        <div className="trailer movie-info-wrapper">
            <h3 className="detail-heading">Official Trailer · · · · · ·({trailers.length})</h3>
            <div className="trailer-container">
                <YouTube videoId={playingUrl} containerClassName="video-container" className="iframe" opts={opts} onReady={onReady} />
                <ul className="trailer-list">
                    {trailers.map((trailer, index) => (
                        <li className="trailer-list-item" onClick={() => console.log(trailer.key)} key={index}>
                            <p className="trailer-list-title" style={{ color: 'white' }}>{index+1}. {trailer.name} </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AutoCarousel;