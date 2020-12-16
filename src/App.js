import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Nav />
				<main>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/register' component={Register} />
					</Switch>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
