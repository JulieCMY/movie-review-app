import './App.css';
import { Layout } from 'antd';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import AppHeader from './components/Header/header';
const { Header, Content, Footer } = Layout;

function App() {
	return (
		<Layout className="layout">
			<Router>
				<Header className="header">
					<AppHeader />
				</Header>
				<Content style={{ padding: '0 100px', minHeight: 1000 }}>
					Hello
				</Content>
			</Router>
			<Footer style={{ textAlign: 'center' }}>CINEMA THEATRE | MOVIE REVIEW ©2022 Created by Julie Chen</Footer>
		</Layout>
	);
}

export default App;
