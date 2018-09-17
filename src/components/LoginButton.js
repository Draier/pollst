import React from 'react';
import cookie from 'react-cookies';


export default class LoginButton extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			isLoggedIn: false,
		}
	}

	componentDidMount() {
		if(cookie.load('userId')){
			fetch("http://localhost:7777/validate/?userid=" + cookie.load('userId')).then((response) => {
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
				<a href="http://murmuring-dusk-45038.herokuapp.com/auth/google" className="button">{cookie.load('userId').userName}</a>
			);
		}
		else
			return (
				<a href="http://murmuring-dusk-45038.herokuapp.com/auth/google" className="button">{this.props.children}</a>
				)
	}
}