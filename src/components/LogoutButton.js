import React from 'react';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';

export default class LogoutButton extends React.Component {
	constructor(){
		super()
		this.state = {
			loggingOut : false,
		}
	}
	
	logOut = () => {
		cookie.remove('userId')
		this.setState({
			loggingOut : true, 
		});
	}

	render() {
		if(cookie.load('userId')){
			return (
				<a className="button" onClick={this.logOut}>Log Out</a>
			);
		}
		else if(this.state.loggingOut){
			return <Redirect to="/" />
		}
		else{
			return  null
		}
	}
}
