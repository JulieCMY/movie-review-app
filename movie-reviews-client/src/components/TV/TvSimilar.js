import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_KEY from "../Data/api";
import SimilarList from "./similarList";
import '../../style/movie.scss';

const Similar = () => {
    const [movies, setMovies] = useState([]);
    const [language, setLanguage] = useState(() => {
        const initialValue = localStorage.getItem("language");
        return initialValue || "";
    });
    let { tvId } = useParams();

    const getMovieRequest = async () => {
        const url = `https://api.themoviedb.org/3/tv/${tvId}/similar?api_key=${API_KEY}&language=${language}`;
        const response = await fetch(url);
        const responseJson = await response.json();
        // console.log(responseJson);
        setMovies(responseJson.results);
    }

    useEffect(() => {
        getMovieRequest();
    }, [tvId, language]);

    return (
        <div className="cast movie-info-wrapper">
            <h3 className="detail-heading">Similar TV Shows · · · · · ·({movies.length})</h3>
            <div className="similar-list">
                <SimilarList movies={movies} />
            </div>
        </div>
    );
};

export default Similar;