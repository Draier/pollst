import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import cookie from 'react-cookies';
import queryString from 'query-string'
import './bulma.css';
import Header from './Header.js';
import Homepage from './Homepage.js';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			sessionID : "",
		}
	}

	componentWillMount() {
		const values = queryString.parse(window.location.search);
		if(values.id){
			cookie.save('userId', values.id, { path: '/' })
			this.setState({
					sessionID: values.id, 
				});	
		}
	}
	
	render () {
		return (
			<BrowserRouter>
				<div>
					<Header />
					<Switch>
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