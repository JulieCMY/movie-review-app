import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import logo from './movie-reviews-logo.jpg';
import SearchBar from "./searchBar";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import icon from '../../img/movie-review-icon.png';
import './header.scss';

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

class AppHeader extends Component {
    render() {
        return (
            <Fragment>
                <Link to="/" className="movie-reviews" style={{ textDecoration: 'none', display: 'flex' }}>
                    <img src={logo} alt="logo" className="movie-reviews-logo" />
                </Link>
                    
                <div className="movie-search">
                    <SearchBar />
                </div>
                <div className="user-login">
                    <ColorButton variant="contained">SIGN IN</ColorButton>
                </div>
            </Fragment>
        );
    }
}

export default AppHeader;