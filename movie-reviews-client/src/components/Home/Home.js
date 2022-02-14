import React, { Fragment } from "react";
import NowPlayingMovie from "../Movie/NowPlayingMovie";
import PopularMovie from "../Movie/PopularMovie";
import TopRatedMovie from "../Movie/TopRatedMovie";
import UpcomingMovie from "../Movie/UpcomingMovie";
import TV from "../TV/tv";

const home = () => {
    return (
    <Fragment>
        <PopularMovie />
        <NowPlayingMovie />
        <UpcomingMovie />
        <TopRatedMovie />
        <TV />
    </Fragment>
    );
}

export default home;