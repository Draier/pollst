import React from 'react';

export default class List extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			polls : [{
									question: "Wich is better?",
									option1: {votes: 10, value: "Tits"},
									option2: {votes: 234, value: "Ass"},
									voters : [],
								},{
									question: "Asses right?",
									option1: {votes: 34, value: "Tits"},
									option2: {votes: 5, value: "Ass"},
									voters : [],
								},{
									question: "Dissapointment bruh",
									option1: {votes: 22, value: "Tits"},
									option2: {votes: 1, value: "Ass"},
									voters : [],
								},{
									question: "?",
									option1: {votes: 221, value: "Tits"},
									option2: {votes: 345, value: "Ass"},
									voters : [],
								}]
		}
	}

	componentDidMount() {
		//Fetch polls and put in the state
	}

	iterateThruPolls(poll) {
		return (
			<div className="card">

				<header className="card-header">
					{poll.question}
				</header>

				<div className="card-content">

					<div className="content">
						{poll.option1.value + ' (' + poll.option1.votes + ') or ...'}
						{poll.option2.value + ' (' + poll.option2.votes + ') ?'}
					</div>

				</div>

			</div>
		)
	}
	render() {
		return (
			<div>
				{this.state.polls.map( poll => this.iterateThruPolls(poll))}
			</div>
		);
	}
}
