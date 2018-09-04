import React from 'react';
import List from './components/List.js'
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
				<a href="" className="button">Submit a poll</a>
				<List />
			</div>
		)
		;
	}
}
