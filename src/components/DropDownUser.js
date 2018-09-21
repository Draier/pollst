import React from 'react';
import cookie from 'react-cookies';
import LogoutButton from './LogoutButton.js'

const DropDownUser = (props) => {
	if(props.mobile)
		return (
			<div className="navbar-item">
				<LogoutButton />
			</div>
		)
	else
		return (
			<div className="navbar-item has-dropdown is-hoverable">
				<div className="navbar-link"> Welcome {cookie.load('userName')}</div>
				<div className="navbar-dropdown  has-text-right is-right is-boxed">
					<div className="navbar-item"><LogoutButton/></div>
				</div>
			</div>
		);
}

export default DropDownUser;

