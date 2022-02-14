// import React, { useState } from "react";
import React, { useEffect, useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import API_KEY from "../Data/api";
import SearchMenuList from "./SearchMenuList";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const [movies, setMovies] = useState([]);
    const [searchMenuVisible, setMenuVisible] = useState(false);

    // const searchMovieKeyword = (event) => {
    //     console.log(event.target.value);
    //     setSearchValue(event.target.value);
    // }

    // debounce the input onChange 优化：输入框防抖
    let timer = null;
    const searchMovieKeyword = (event) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            // console.log(event.target.value);
            setSearchValue(event.target.value);
            timer = null;
        }, 200);
    }

    const formSubmit = (event) => {
        event.preventDefault();
        // jump to the movie search page
        navigate(`/search?query=${searchValue}`);
        // empty the search bar 清空搜索输入框 🔍
        event.target.searchbar.value = '';
        // blur event is called when search bar loses the focus 输入框失焦
        event.target.searchbar.blur();
        setMenuVisible(false);
    }

    const getMovieRequest = async () => {
        if (searchValue.length!==0){
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchValue}&page=1`;
            const response = await fetch(url);
            const responsJson = await response.json();
            // console.log(responsJson.results);
            setMovies(responsJson.results);
            setMenuVisible(true);
        }
    }

    // Once queryKeyword has changed, reset the movie request
    useEffect(()=> {
        getMovieRequest();
    }, [searchValue, searchMenuVisible]); 

    return (
        <div className="movie-search-wrapper">
            <Paper
            className="movie-input-wrapper"
            component="form"
            sx={{ p: '4px 8px', margin: '6px 0', display: 'flex', alignItems: 'center', borderRadius: '25px', backgroundColor: '#706f65' }}
            onSubmit={formSubmit}
        >
            <IconButton sx={{ p: '10px', color: '#EFECDB' }} aria-label="menu">
                <MenuIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1, color: 'white' }}
                name="searchbar"
                onChange={searchMovieKeyword}
                placeholder="Search Movie"
                inputProps={{ 'aria-label': 'search movie' }}
            />
            <IconButton type="submit" sx={{ p: '10px', color: '#EFECDB' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            </Paper>
            {
                // if the search input is empty, hide the search menu list
                searchValue.length !== 0 && searchMenuVisible &&
                <div className="search-menu">
                    <SearchMenuList movies={movies.slice(0,10)}/>
                </div>
            }
        </div>
    )
}

export default SearchBar;