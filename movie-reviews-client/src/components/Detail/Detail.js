import React, { Fragment } from "react";
import MovieDetail from "./MovieInfo";
import Cast from "./MovieCast";
import Trailer from "../Trailer/Trailer";
import '../../style/movie.scss';

const Detail = () => {
    return (
        <Fragment>
            <MovieDetail />
            <Cast />
            <Trailer />
        </Fragment>
    );
};

export default Detail;