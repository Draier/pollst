import React from 'react';
import Button from './components/Button.js'
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
	render() {
		return (
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<Link to="/" className="navbar-item">Pollst</Link> 
				</div>
				<div class="navbar-menu is-active">
				 	<div className="navbar-end">
				 		<Button>Hey</Button>
				 	</div>
				</div>
			</nav>
		);
	}
}
