import React from 'react';
import List from './components/List.js'
import {Link} from 'react-router-dom'
import './home.css';

export default class Homepage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userID : '',
		}
	}

	render() {
		return (
			<div className="margin-top has-text-centered">
				<div className="banner">
					<b><h2 className="is-size-3">Welcome to Pollst!</h2></b>
					<p className="is-size-4">These are the most recent polls submitted</p>
				</div>
				{/*<p className="is-size-2">TURN JIFFY ON</p>*/}
				<Link to="/submit" className="button submit is-rounded">Submit a poll</Link>
				<List />
			</div>
		)
		;
	}
}
