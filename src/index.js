import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './bulma.css';
import Header from './Header.js';
import Homepage from './Homepage.js';

const App = () => {
	return (

		<BrowserRouter>
			<Header />
			<Switch>
				<Route path='/:id' component={Homepage} />
			</Switch>
		</BrowserRouter>

		)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
	)