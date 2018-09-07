import React from 'react';
import cookie from 'react-cookies';


export default class Button extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			isLoggedIn: false,
		}
	}

	componentDidMount() {
		if(cookie.load('userId')){
			fetch("http://localhost:7777/?id=" + cookie.load('userId')).then((response) => {
				  return response.json().then(json => {
				        return response.ok ? json : Promise.reject(json);
					});
			}).then((res)=>{
				if(res)
					this.setState({
						isLoggedIn: true, 
					});
				else
					return
			})
		}
	}

	render() {
		if(this.state.isLoggedIn) {
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