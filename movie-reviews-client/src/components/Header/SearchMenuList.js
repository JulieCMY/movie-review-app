import React from 'react';
import { Link } from 'react-router-dom';
import photoNotFound from '../../img/photo-not-found.png';
// import Rating from '@mui/material/Rating';

const SearchMenuList = (props) => {
    // once click on the search menu item, empty the search input value
    // 一旦点击搜索菜单栏里面的内容，跳转到电影详情页面后🎬，清空搜索栏文本内容
    const enterPageEvent = (event) => {
        event.target.searchbar.value = '';
    }

    return (
        <ul className="search-lister">
            {props.movies.map((movie, index) => (
                <div className="search-lister-item" key={index}>
                    <Link to={`/movie/${movie.id}`} onClick={enterPageEvent}>
                        <div className="search-lister-item-img">
                            {movie.poster_path ?
                                <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='movie'></img> :
                                <img className="movie-poster" src={photoNotFound} alt='movie'></img> 
                            }
                        </div>  
                        <div className="search-lister-item-content">
                            <p className="lister-item-header">{movie.title}  ({movie.release_date?.substring(0, 4)})</p>   
                            <p className="lister-item-overview">{movie.overview}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </ul>
    );
};

export default SearchMenuList;