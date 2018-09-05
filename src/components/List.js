import React from 'react';
import './List.css';

export default class List extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			polls : [{
									question: "Wich is better?",
									totalVotes: 244,
									option1: {votes: 10, value: "Tits"},
									option2: {votes: 234, value: "Ass"},
								},{
									question: "Asses right?",
									totalVotes: 39,
									option1: {votes: 34, value: "Tits"},
									option2: {votes: 5, value: "Ass"},
								},{
									question: "Dissapointment bruh",
									totalVotes: 23,
									option1: {votes: 22, value: "Tits"},
									option2: {votes: 1, value: "Ass"},
								},{
									question: "?",
									totalVotes: 566,
									option1: {votes: 221, value: "Tits"},
									option2: {votes: 345, value: "Ass"},
								},
								{
									question: "?",
									totalVotes: 500,
									option1: {votes: 250, value: "Tits"},
									option2: {votes: 250, value: "Ass"},
								}]
		}
	}

	componentDidMount() {
		//Fetch polls and put in the state
	}

	iterateThruPolls(poll) {
		return (
			<div className="column is-6">
				<div className="card">
					<header className="card-header">
						{poll.question}
					</header>

					<div className="card-content">

						<div className="content">
						
							{poll.option1.value + ' (' + poll.option1.votes + ') or ... '}
							<progress className="progress is-link is-large" value={poll.option1.votes} max={poll.totalVotes}></progress>
							
							<progress className="progress is-link is-large" value={poll.option2.votes} max={poll.totalVotes}></progress>
							{poll.option2.value + ' (' + poll.option2.votes + ') ?'}
						</div>
					</div>
				</div>
			</div>
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
