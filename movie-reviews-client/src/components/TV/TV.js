import React, { Fragment } from "react";
import TvDetail from "./TvInfo";
import Cast from "./TvCast";
import Similar from "./TvSimilar.js";
import Trailer from "./TvTrailer.js";
// import Review from "./Review";
import '../../style/movie.scss';

const TV = () => {
    return (
        <Fragment>
            <TvDetail />
            <Cast />
            <Similar />
            <Trailer />
            {/* <Review /> */}
        </Fragment>
    );
};

export default TV;