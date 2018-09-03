import React from 'react';
import './home.css';

export default class Homepage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userID : '',
			polls : [{
									question: "?",
									option1: {votes: 10, value: "Tits"},
									option2: {votes: 9999, value: "Ass"},
									voters : [],
								}]
		}
	}

	iteratePolls(polls) {
		return polls.forEach(poll => (
			<div>
				<div>	{poll.option1.value} has 
							{poll.option1.votes}
				</div>
				<div> {poll.option2.value} has 
							{poll.option1.votes}
				</div>
			</div>)
		)
	}

	componentDidMount() {
		console.log(this.props.match.params.id, this.props)
		if(this.props.match.params.id){
			this.setState({
				userID : this.props.match.params.id, 
			});
		}
	}

	render() {
		let polls = this.state.polls;

		return (
			<div>
				<h2>Welcome to Pollst these are the most recent polls submitted</h2>
				<a href="" className="button">Submit a poll</a>
				{/* Here will go the List */}
			</div>
		)
		;
	}
}
