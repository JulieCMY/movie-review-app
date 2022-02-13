import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import logo from './movie-reviews-logo.jpg';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
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
                    <div id="movie-review-container">
                        <div className="movie-reviews-delimiter"></div>
                        <div className="movie-reviews-text"><h1>MOVIE REVIEW</h1></div>
                    </div>
                </Link>
                
                
                <div className="movie-search">
                    <Paper
                        className="movie-search-wrapper"
                        component="form"
                        sx={{ p: '4px 8px', margin: '6px 0', display: 'flex', alignItems: 'center', borderRadius: '25px', backgroundColor: '#706f65' }}
                    >
                        <IconButton sx={{ p: '10px', color: '#EFECDB' }} aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1, color: 'white' }}
                            placeholder="Search Movie"
                            inputProps={{ 'aria-label': 'search movie' }}
                        />
                        <Divider sx={{ height: 28, m: 0.5, backgroundColor: '#EFECDB' }} orientation="vertical" />
                        <IconButton type="submit" sx={{ p: '10px', color: '#EFECDB' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </div>
                <div className="user-login">
                    <ColorButton variant="contained">SIGN IN</ColorButton>
                </div>
            </Fragment>
        );
    }
}

export default AppHeader;