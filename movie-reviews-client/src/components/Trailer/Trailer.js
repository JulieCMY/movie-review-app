import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_KEY from "../Data/api";

const Trailer = () => {
    const [trailer, setTrailer] = useState([]);
    let { id } = useParams();

    const getTrailerRequest = async () => {
        const url = `http://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
        const response = await fetch(url);
        const responsJson = await response.json();
        setTrailer(responsJson.results)
        console.log(responsJson.results);
    }

    useEffect(()=> {
        getTrailerRequest();
    }, []); 

    return (<div>1</div>)
};

export default Trailer;