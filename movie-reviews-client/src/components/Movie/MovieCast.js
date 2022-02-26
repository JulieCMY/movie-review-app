import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_KEY from "../Data/api";
import CastList from "./castList";
import '../../style/movie.scss';

const Cast = () => {
    const [casts, setCast] = useState([]);
    let { movieId } = useParams();

    const getMovieCastRequest = async () => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
        const response = await fetch(url);
        const responsJson = await response.json();
        console.log(responsJson);
        setCast(responsJson.cast);
    }

    useEffect(() => {
        getMovieCastRequest();
    }, [movieId]);

    return (
        <div className="cast movie-info-wrapper">
            <h3 className="detail-heading">Top Cast · · · · · ·({casts.length})</h3>
            <div className="cast-list">
                <CastList casts={casts} />
            </div>
        </div>
    );
};

export default Cast;