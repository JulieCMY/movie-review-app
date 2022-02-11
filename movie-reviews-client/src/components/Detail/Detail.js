import React, { Fragment } from "react";
import MovieDetail from "./MovieInfo";
import Trailer from "../Trailer/Trailer";
import '../../style/movie.scss';

const Detail = () => {
    return (
        <Fragment>
            <MovieDetail />
            <Trailer />
        </Fragment>
    );
};

export default Detail;