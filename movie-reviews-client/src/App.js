import './App.css';
import { Layout } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppHeader from './components/Header/header';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import SearchMovieByGenre from './components/Search/SearchGenre';
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
						<Route path='/detail/:id' element={<Detail />} />
						<Route path='/genre/:genreId' element={<SearchMovieByGenre />} />
					</Routes>
				</Content>
				<Footer style={{ textAlign: 'center', backgroundColor: '#808581', color: '#EFECDB' }}>CINEMA THEATRE | MOVIE REVIEW ©2022 Created by Julie Chen</Footer>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
