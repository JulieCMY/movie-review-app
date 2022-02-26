import './App.css';
import { Layout } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppHeader from './components/Header/header';
import Home from './components/Home/Home';
import NowPlaying from './components/Home/NowPlaying';
import TopRated from './components/Home/TopRated';
import Upcoming from './components/Home/Upcoming';
import Movie from './components/Movie/Movie';
import Actor from './components/Actor/Actor';
import SearchMovieByGenre from './components/Search/SearchGenre';
import SearchMovieByKeyword from './components/Search/SearchQuery';
const { Header, Content, Footer } = Layout;

function App() {
	return (
		<BrowserRouter>
			<Layout className="layout">
				<Header className="header">
					<AppHeader />
				</Header>
				<Content className="content">
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/movie/now_playing' element={<NowPlaying />} />
						<Route path='/movie/top_rated' element={<TopRated />} />
						<Route path='/movie/upcoming' element={<Upcoming />} />
						<Route path='/movie/:movieId' element={<Movie />} />
						<Route path='/actor/:actorId' element={<Actor />} />
						<Route path='/genre/:genreId' element={<SearchMovieByGenre />} />
						<Route path='/search' element={<SearchMovieByKeyword />}/>
					</Routes>
				</Content>
				<Footer style={{ textAlign: 'center', backgroundColor: '#808581', color: '#EFECDB' }}>CINEMA THEATRE | MOVIE REVIEW ©2022 Created by Julie Chen</Footer>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
