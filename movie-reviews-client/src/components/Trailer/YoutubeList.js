import React, { Fragment } from 'react';
import YouTube from 'react-youtube';

const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

const YoutubeList = (props) => {
    return (
        <Fragment>
            {props.trailers.map((trailer, index) => (
                <div className="trailer-box" key={index}>
                    <YouTube videoId={`${trailer.key}`} opts={opts} onReady={onReady} />
                </div>
            ))}
        </Fragment>
    );
};

export default YoutubeList;