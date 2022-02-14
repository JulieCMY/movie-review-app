import React from "react";
import YouTube from 'react-youtube';

const opts = {
    height: '390',
    width: '640',
    // height: '260',
    // width: '427',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

const YoutubeList = (props) => {
    return (
        <div className="youtube-video">
            {props.trailers.map((trailer, index) => (
                <div className="trailer-box" key={index}>
                    <YouTube videoId={`${trailer.key}`} containerClassName="video-container" className="iframe" opts={opts} onReady={onReady} />
                </div>
            ))}
        </div>
    );
};

export default YoutubeList;