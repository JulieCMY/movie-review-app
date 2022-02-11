import React, { useEffect, useState } from "react";
import API_KEY from "../Data/api";
import TVList from "./tvList";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/movie.scss';

const TV = () => {
    const [TVs, setTVs] = useState([]);

    const getTVRequest = async () => {
        const url =`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`
        const response = await fetch(url);
        const responsJson = await response.json();
        setTVs(responsJson.results)
    }

    useEffect(()=> {
        getTVRequest();
    }, []); 

    return (
    <div className='movie-wrapper container-fluid'>
        <h2 className="movie-heading">More to watch</h2>
        <div className="movie-list">
            <TVList tvs={TVs} />
        </div>
    </div>
    );
};

export default TV;