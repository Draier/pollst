import React from 'react';

export default class Button extends React.Component {
	render() {
		return (
			<a href="http://murmuring-dusk-45038.herokuapp.com/auth/google" className="button">{this.props.children}</a>
		);
	}
}
