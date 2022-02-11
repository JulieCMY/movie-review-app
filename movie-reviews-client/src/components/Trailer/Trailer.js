import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_KEY from "../Data/api";
import YoutubeList from "./YoutubeList";

const Trailer = () => {
    const [trailers, setTrailer] = useState([]);
    let { id } = useParams();

    const getTrailerRequest = async () => {
        const url = `http://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
        const response = await fetch(url);
        const responsJson = await response.json();
        setTrailer(responsJson.results)
        console.log(responsJson.results[0].key);
    }

    useEffect(()=> {
        getTrailerRequest();
    }, []); 

    return (<div><YoutubeList trailers={trailers} /></div>)
    // <YoutubeList trailers={trailers} />
};

export default Trailer;