import React from 'react';
import cookie from 'react-cookies';

export default class Button extends React.Component {
	render() {
		if(cookie.load('userId')) {
			return (
				<a href="http://murmuring-dusk-45038.herokuapp.com/auth/google" className="button is-loading">{this.props.children}</a>
			);
		}
		else
			return (
				<a href="http://murmuring-dusk-45038.herokuapp.com/auth/google" className="button">{this.props.children}</a>
				)
	}
}