import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_KEY from "../Data/api";
import YoutubeList from "./YoutubeList";
import './trailer.scss';


const Trailer = () => {
    const [trailers, setTrailer] = useState([]);
    let { movieId } = useParams();

    const getTrailerRequest = async () => {
        const url = `http://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`;
        const response = await fetch(url);
        const responseJson = await response.json();
        setTrailer(responseJson.results)
    }

    useEffect(() => {
        getTrailerRequest();
    }, []);

    return (
        <div className="trailer movie-info-wrapper">
            <h3 className="detail-heading">Official Trailer · · · · · ·({trailers.length})</h3>
            <div className="trailer-list">
                <YoutubeList trailers={trailers} />
            </div>
        </div>
    )
};

export default Trailer;