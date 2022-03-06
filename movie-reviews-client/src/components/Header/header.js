import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import localStorage from "localStorage";
import logo from './movie-reviews-logo.jpg';
import API_KEY from "../Data/api";
import SearchBar from "./searchBar";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './header.scss';

const AppHeader = () => {
    const [language, setLanguage] = useState('');
    const [languages, setLanguages] = useState([]);

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    const getLanguageRequest = async () => {
        const url = `https://api.themoviedb.org/3/configuration/languages?api_key=${API_KEY}`;
        const response = await fetch(url);
        const responsJson = await response.json();
        setLanguages(responsJson);
    }

    useEffect(() => {
        getLanguageRequest();
        console.log(language);
        localStorage.setItem("language", language);
    }, [language]);


    return (
        <Fragment>
            <Link to="/" className="movie-reviews" style={{ textDecoration: 'none', display: 'flex' }}>
                <img src={logo} alt="logo" className="movie-reviews-logo" />
            </Link>

            <div className="movie-search">
                <SearchBar />
            </div>
            <div className="user-login">
                <FormControl sx={{ width: 150 }}>
                    <InputLabel>Language</InputLabel>
                    <Select
                        className="language-select"
                        value={language}
                        label="Language"
                        onChange={handleChange}
                    >
                        {languages.map((configLang, index) => (
                            <MenuItem value={configLang.iso_639_1} key={index}>
                                {
                                    configLang.name&&configLang.name.substr(0,1)!==('?')?
                                    configLang.name:
                                    configLang.english_name
                                }
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </Fragment>
    );
}

export default AppHeader;