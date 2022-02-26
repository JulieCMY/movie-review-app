import React, { Fragment } from "react";
import MovieDetail from "./MovieInfo";
import Cast from "./MovieCast";
import Similar from "./MovieSimilar";
import Trailer from "../Trailer/Trailer";
// import AutoCarousel from "../Trailer/CarouselYoutube";
import Review from "./Review";
import '../../style/movie.scss';

const Detail = () => {
    return (
        <Fragment>
            <MovieDetail />
            <Cast />
            <Similar />
            <Trailer />
            {/* <AutoCarousel /> */}
            <Review />
        </Fragment>
    );
};

export default Detail;