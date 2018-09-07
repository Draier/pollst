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
			<div>
				<h2>Welcome to Pollst these are the most recent polls submitted</h2>
				<Link to="/submit" className="button">Submit a poll</Link>
				<List />
			</div>
		)
		;
	}
}
