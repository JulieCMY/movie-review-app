import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_KEY from "../Data/api";
import YoutubeList from "../Trailer/YoutubeList";
import '../Trailer/trailer.scss';


const Trailer = () => {
    const [trailers, setTrailer] = useState([]);
    let { tvId } = useParams();

    const getTrailerRequest = async () => {
        const url = `http://api.themoviedb.org/3/tv/${tvId}/videos?api_key=${API_KEY}`;
        const response = await fetch(url);
        const responsJson = await response.json();
        setTrailer(responsJson.results)
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