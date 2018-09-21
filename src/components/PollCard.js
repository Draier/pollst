import React from 'react';
import VoteButton from './VoteButton.js'

export default class PollCard extends React.Component {

	render() {
		return (
			<div key={this.props.poll.question} className="column is-6">
				<div className="card">
					<header className="card-header">
						<div className="card-header-title is-centered">{this.props.poll.question}</div>
					</header>

					<div className="card-content">

						<div className="content">
						
							<p className="has-text-centered">
								{this.props.poll.option1.value + ' (' + this.props.poll.option1.votes + ') or ... '} 
							</p>

							<progress className="progress is-large" 
												value={this.props.poll.option1.votes} 
												max={this.props.poll.totalVotes}>
							</progress>
							
							<progress className="progress is-large" 
												value={this.props.poll.option2.votes} 
												max={this.props.poll.totalVotes}>
							</progress>

							<p className="has-text-centered">
								{this.props.poll.option2.value + ' (' + this.props.poll.option2.votes + ') ?'}
							</p>

						</div>
					
					</div>
					{		
					  this.props.isLoggedIn ? <VoteButton poll={this.props.poll} /> : null
					}
				</div>
			</div>
		);
	}
}
