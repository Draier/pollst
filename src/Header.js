import React from 'react';
import DropDownUser from './components/DropDownUser.js'
import cookie from 'react-cookies'
import {Link} from 'react-router-dom';
import Logo from './Logo.svg';

export default class Header extends React.Component {
	constructor() {
		super()
		this.state = {
			isActive : false,
		}
	}

	dropMenuMobile = () => {
		if(!this.state.isActive)
			this.setState({
				isActive: true 
			});
		else
			this.setState({
				isActive: false 
			});
	}

	login = () => {
			 	if(this.state.isActive) 
			 		return (<a href="http://murmuring-dusk-45038.herokuapp.com/auth/google" className="log">LogIn</a>)
				else 
					return (<div className="navbar-item">
										<a href="http://murmuring-dusk-45038.herokuapp.com/auth/google" className="button is-dark log">LogIn</a>
									</div>)
			
	}

	render() {
		return (
			<nav className="navbar is-dark" aria-label="main navigation">
				<div className="navbar-brand">
					<Link to="/" className="navbar-item"><img className="logo" src={Logo} alt="Pollst Logo"/></Link>
					<a role="button" className={this.state.isActive ? "navbar-burger is-active" : "navbar-burger"} 
						aria-label="menu" aria-expanded="false" onClick={()=>this.dropMenuMobile()}>

					  <span aria-hidden="true"></span>
					  <span aria-hidden="true"></span>
					  <span aria-hidden="true"></span>
					</a> 
				</div>
				<div className={this.state.isActive ? "navbar-menu is-active" : "navbar-menu"}>
				 	<div className="navbar-end has-text-right">
				 		{cookie.load('userId') ? <DropDownUser mobile={this.state.isActive}/> : this.login()}
				 	</div>
				</div>
			</nav>
		);
	}
}
