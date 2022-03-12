import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_KEY from "../Data/api";
import CastList from "../Movie/castList";
import '../../style/movie.scss';

const Cast = () => {
    const [casts, setCast] = useState([]);
    let { tvId } = useParams();

    const getMovieCastRequest = async () => {
        const url = `https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=${API_KEY}`;
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson);
        setCast(responseJson.cast);
    }

    useEffect(() => {
        getMovieCastRequest();
    }, [tvId]);

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