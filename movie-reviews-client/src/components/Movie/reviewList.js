import React, { Fragment } from "react";
import Rating from '@mui/material/Rating';
import avatarNotFound from '../../img/avatar-not-found.png';
import { formatRelative, subDays } from 'date-fns';

const ReviewList = (props) => {
    return (
        <Fragment>
            {props.reviews.map((review, index) => (
                <div className="review-item" key={index}>
                    <div className="review-info">
                        <div className="review-user">
                            <div className="avatar">
                                {
                                    review.author_details.avatar_path ?
                                        review.author_details.avatar_path.includes('/https://secure.gravatar.com/avatar/') ?
                                        <img src={`${review.author_details.avatar_path.substring(1,)}`} alt="avatar"></img> :
                                        <img src={`https://image.tmdb.org/t/p/w500/${review.author_details.avatar_path}`} alt="avatar"></img>
                                    :
                                    <img src={ avatarNotFound } alt="avatar"></img>
                                }
                            </div>
                            <p><strong>{review.author}</strong> rated </p>
                            <div className='bigstar'>
                                <Rating 
                                name="half-rating-read" 
                                value={(parseFloat(review.author_details.rating)/2).toFixed(1)} 
                                precision={0.1} 
                                readOnly 
                                />
                            </div>
                        </div>
                        <p>{new Date(review.created_at).toDateString()}</p>
                    </div>
                    <div className="review-content">{review.content}</div>
                </div>
            ))}
        </Fragment>
    );
};

export default ReviewList;