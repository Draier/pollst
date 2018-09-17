import React from 'react';

export default class Button extends React.Component {
	vote = (option) => {
		fetch(`http://localhost:7777/polls/vote?option=${option}`,{
			method: "PUT",
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(this.props.data),
		})
	}

	render() {
		return (
			<a className="button" onClick={ () => this.vote(this.props.option)}>
				{this.props.children}
			</a>
		);
	}
}
