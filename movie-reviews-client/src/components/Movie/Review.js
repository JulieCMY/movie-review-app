import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewList from "./reviewList";
import API_KEY from "../Data/api";
import '../../style/movie.scss';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    let { movieId } = useParams();

    const getReviewRequest = async () => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`;
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson);
        setReviews(responseJson.results);
    }

    useEffect(() => {
        getReviewRequest();
    }, [movieId]);

    return (
        <div className="cast movie-info-wrapper">
            <h3 className="detail-heading">Movie Reviews · · · · · ·({reviews.length})</h3>
            <div className="review-list">
                <ReviewList reviews={reviews} />
            </div>
        </div>
    );
};

export default Review;