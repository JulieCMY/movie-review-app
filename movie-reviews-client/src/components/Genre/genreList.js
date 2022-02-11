import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)({
    // textDecoration: 'none',
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

const GenreList = (props) => {
    return (
        <Fragment>
            {props.genres?.map((genre, index) => (
                <Link to={`/genre/${genre.id}`} key={genre.id}>
                    <div className="movie-genre-box">
                        <ColorButton variant="contained">{genre.name}</ColorButton>
                    </div>
                </Link>
            ))}
        </Fragment>
    );
};

export default GenreList;