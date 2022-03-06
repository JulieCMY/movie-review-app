import React, { useState, useEffect } from "react";
import userIcon from "../../img/head.jpg";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import '../../style/comment.scss';

const ColorButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    marginTop: '10px',
    marginBottom: '10px',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#383834',
    borderColor: '#383834',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#696761',
        borderColor: '#696761',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#968f72',
        borderColor: '#757161',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(125,120,102,.5)',
    },
});

const UserComment = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    useEffect(() => {
    }, [rating]);

    const handleChange = (event) => {
        setComment(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            rating,
            comment
        }
        console.log(data);
    }

    return (
        <div className='user-comment'>
            <div className="user-comment-top">
                <div className='user-icon' onClick={() => console.log(comment)}>
                    <img src={userIcon} alt='user-icon'></img>
                </div>
                <div className='user-rating'>
                    <Rating
                        name="simple-controlled"
                        value={rating}
                        size="large"
                        onChange={(event, newValue) => {
                            setRating(newValue);
                        }}
                        emptyIcon={<StarIcon style={{ color: '#f0ede9' }} fontSize="inherit" />}
                    />
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <textarea className="comment-textarea" value={comment} onChange={handleChange} placeholder="Write your comment" />
                <ColorButton type="submit" variant="contained">Submit</ColorButton>
            </form>
        </div>
    )
}

export default UserComment;