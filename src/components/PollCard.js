import React from 'react';
import Button from './Button.js'
import cookie from 'react-cookies';

export default class PollCard extends React.Component {

	render() {

		let data = {
			user : cookie.load('userId'),
			pollId : this.props.poll._id
		}

		let cardFooter = (
			<footer className="card-footer">
				<Button option="option1" data={data}>Vote for {this.props.poll.option1.value}</Button>
				<Button option="option2" data={data}>Vote for {this.props.poll.option2.value}</Button>
			</footer>
		)

		return (
			<div key={this.props.poll.question} className="column is-6">
				<div className="card">
					<header className="card-header">
						{this.props.poll.question}
					</header>

					<div className="card-content">

						<div className="content">
						
							{this.props.poll.option1.value + ' (' + this.props.poll.option1.votes + ') or ... '}
							<progress className="progress is-link is-large" value={this.props.poll.option1.votes} max={this.props.poll.totalVotes}></progress>
							
							<progress className="progress is-link is-large" value={this.props.poll.option2.votes} max={this.props.poll.totalVotes}></progress>
							{this.props.poll.option2.value + ' (' + this.props.poll.option2.votes + ') ?'}
						</div>
					</div>
					{		
					  this.props.isLoggedIn ? cardFooter : null
					}
				</div>
			</div>
		);
	}
}
