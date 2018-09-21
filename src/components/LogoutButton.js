import React from 'react';
import cookie from 'react-cookies';

export default class LogoutButton extends React.Component {
	constructor(){
		super()
		this.state = {
			loggingOut : false,
		}
	}
	
	logOut = () => {
		if(window.confirm("Are you sure?")){
			cookie.remove('userId')
			cookie.remove('userName')
			this.setState({
				loggingOut : true, 
			});
		}
	}

	render() {
		if(this.state.loggingOut){
			window.location = "/";
			return null;
		}
		else if(cookie.load('userId')){
			return (
				<a className="log" onClick={() => this.logOut()}>Log Out</a>
			);
		}
		else{
			return  null
		}
	}
}
