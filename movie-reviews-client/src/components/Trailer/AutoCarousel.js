import React, { Fragment, useState } from "react";
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import { red } from '@material-ui/core/colors';
import { Button } from "@material-ui/core";
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
    const [handleOpen, setHandleOpen] = useState({open: false});
    return (
        <Fragment>
            <Button onClick={() => setHandleOpen({ open: true })}>Open carousel</Button>
            <AutoRotatingCarousel
                label='Get started'
                open={handleOpen.open}
                onClose={() => setHandleOpen({ open: false })}
                onStart={() => setHandleOpen({ open: false })}
                style={{ position: 'absolute' }}
            >
              {props.trailers.map((trailer, index) => (
                   <Slide
                    media={<YouTube videoId={`${trailer.key}`} containerClassName="video-container" className="iframe" opts={opts} onReady={onReady} />}
                    mediaBackgroundStyle={{ backgroundColor: red[400] }}
                    style={{ backgroundColor: red[600] }}
                    title='This is a very cool feature'
                    subtitle='Just using this will blow your mind.'
                   /> 
              ))}
             </AutoRotatingCarousel>
        </Fragment>
    );
};

export default AutoCarousel;