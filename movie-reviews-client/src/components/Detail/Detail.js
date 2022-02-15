import React, { Fragment } from "react";
import MovieDetail from "./MovieInfo";
import Cast from "./MovieCast";
import Similar from "./MovieSimilar";
import Trailer from "../Trailer/Trailer";
// import AutoCarousel from "../Trailer/CarouselYoutube";
import '../../style/movie.scss';

const Detail = () => {
    return (
        <Fragment>
            <MovieDetail />
            <Cast />
            <Similar />
            <Trailer />
            {/* <AutoCarousel /> */}
        </Fragment>
    );
};

export default Detail;