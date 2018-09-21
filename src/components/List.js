import React from 'react';
import cookie from 'react-cookies';
import PollCard from './PollCard.js'
import './styles/List.css';

export default class List extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			polls : [],
		}
	}

	componentDidMount() {
		//Fetch polls and put in the state
		fetch('https://murmuring-dusk-45038.herokuapp.com/polls/get').then(response => {
			return response.json().then(json => {
				        return response.ok ? json : Promise.reject(json);
					});
		}).then(response=>{
			if(response)
				this.setState({
					polls:response 
				})
		})
		if(cookie.load('userId'))
			this.setState({
				isLoggedIn:true 
			});
	}

	iterateThruPolls(poll) {		
		return (
			<PollCard key={poll.question} poll={poll} isLoggedIn={this.state.isLoggedIn}/>
		)
	}

	render() {
		return (
			<div className="columns list is-centered is-4 is-multiline">
				{this.state.polls.map( poll => this.iterateThruPolls(poll))}
			</div>
		);
	}
}
