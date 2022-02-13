import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');

    const searchMovieKeyword = (event) => {
        // console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    const formSubmit = (event) => {
        event.preventDefault();
        // jump to the movie search page
        navigate(`/search?query=${searchValue}`);
        // empty the search bar 清空搜索输入框 🔍
        event.target.searchbar.value = '';
        // blur event is called when search bar loses the focus 输入框失焦
        event.target.searchbar.blur();
    }

    return (
        <Paper
            className="movie-search-wrapper"
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
                    onChange={ searchMovieKeyword }
                    placeholder="Search Movie"
                    inputProps={{ 'aria-label': 'search movie' }}
                />
                <IconButton type="submit" sx={{ p: '10px', color: '#EFECDB' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
        </Paper>
    )
}

export default SearchBar;