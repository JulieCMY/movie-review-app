import React, { useEffect, useState, Fragment } from "react";
import YouTube from 'react-youtube';

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
    },
};

const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
}

const AutoCarousel = (props) => {
    const [playingUrl, setPlayingUrl] = useState('');

    function handleClick(trailer){
        // console.log(trailer.key);
        // console.log(playingUrl);
        setPlayingUrl(trailer.key);
    }
    
    useEffect(()=> {
        handleClick(playingUrl);
    }, [playingUrl]); 

    return (
        <Fragment>
            <ul>
                {props.trailers.map((trailer, index) => (
                    <Fragment>
                        {
                            index===0 &&
                            <YouTube videoId={trailer.key} containerClassName="video-container" className="iframe" opts={opts} onReady={onReady} />
                        }
                    <li onClick={() => handleClick(trailer)} key={index}>
                        <p style={{color: 'white'}}>{trailer.name}</p>
                        <p style={{color: 'white'}}>{trailer.published_at?.substring(0, 10)}</p>
                    </li>
                    </Fragment>
                ))}
            </ul>
        </Fragment>
    );
};

export default AutoCarousel;