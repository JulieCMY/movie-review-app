import React, { Fragment } from "react";
import NowPlayingMovie from "./NowPlayingMovie";
import Genre from "./Genre";
import PopularMovie from "./PopularMovie";
import TopRatedMovie from "./TopRatedMovie";
import UpcomingMovie from "./UpcomingMovie";

const home = () => {
    return (
    <Fragment>
        <div className="home-top-wrapper">
            <PopularMovie />
            <Genre />
        </div>
        <NowPlayingMovie />
        <UpcomingMovie />
        <TopRatedMovie />
    </Fragment>
    );
}

export default home;