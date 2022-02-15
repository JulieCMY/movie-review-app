import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_KEY from "../Data/api";
import SimilarList from "./similarList";
import '../../style/movie.scss';

const Similar = () => {
    const [movies, setMovies] = useState([]);
    let { id } = useParams();

    const getMovieRequest = async () => {
        const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`;
        const response = await fetch(url);
        const responsJson = await response.json();
        console.log(responsJson);
        setMovies(responsJson.results);
    }

    useEffect(() => {
        getMovieRequest();
    }, []);

    return (
        <div className="cast movie-info-wrapper">
            <h3 className="detail-heading">Similar Movies · · · · · ·({movies.length})</h3>
            <div className="cast-list">
                <SimilarList movies={movies} />
            </div>
        </div>
    );
};

export default Similar;