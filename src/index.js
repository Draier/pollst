import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import cookie from 'react-cookies';
import queryString from 'query-string'
import './bulma.css';
import Header from './Header.js';
import Homepage from './Homepage.js';
import SubmitPoll from './components/SubmitPoll.js'

class App extends React.Component {
	componentWillMount() {
		const values = queryString.parse(window.location.search);
		if(values.id){
			cookie.save('userId', values.id, { path: '/' })
		}
	}
	
	render () {
		return (
				<BrowserRouter>
					<div>
						<Header />
						<Switch>
							<Route path="/submit" component={SubmitPoll} />
							<Route path="/" component={Homepage} />
						</Switch>
					</div>
				</BrowserRouter>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
	)