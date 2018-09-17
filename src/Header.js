import React from 'react';
import LoginButton from './components/LoginButton.js'
import LogoutButton from './components/LogoutButton'
import cookie from 'react-cookies'
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
	render() {
		return (
			<nav className="navbar" aria-label="main navigation">
				<div className="navbar-brand">
					<Link to="/" className="navbar-item">Pollst</Link> 
				</div>
				<div className="navbar-menu is-active">
				 	<div className="navbar-end">
				 		{cookie.load('userId') ? <LogoutButton></LogoutButton> : <LoginButton></LoginButton>}
				 	</div>
				</div>
			</nav>
		);
	}
}
