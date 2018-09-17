import React from 'react';
import Button from './Button.js'
import cookie from 'react-cookies';
import PollCard from './PollCard.js'
import './List.css';

export default class List extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			polls : [],
			isLoggedIn : null,
		}
	}

	checkUser = (id) => {
		fetch("http://localhost:7777/validate?userid=" + id)
		.then((response) => {
				  return response.json().then(json => {
				        return response.ok ? json : Promise.reject(json);
					});
		})
		.then((res)=>{
			console.log(res)
				if(!res){
					this.setState({
						isLoggedIn: false,
					})
				}
				else{
					this.setState({
						isLoggedIn: true,
					})
				}
		})
	}

	componentDidMount() {
		//Fetch polls and put in the state
		fetch('http://localhost:7777/polls/get').then(response => {
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
			this.checkUser(cookie.load('userId'));
	}

	iterateThruPolls(poll) {		
		return (
			<PollCard key={poll.question} poll={poll} isLoggedIn={this.state.isLoggedIn}/>
		)
	}

	render() {
		return (
			<div className="columns list is-centered is-3 is-multiline">
				{this.state.polls.map( poll => this.iterateThruPolls(poll))}
			</div>
		);
	}
}
