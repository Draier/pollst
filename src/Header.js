import React from 'react';
import Button from './components/Button.js'

export default class Header extends React.Component {
	render() {
		return (
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a href="#" className="navbar-item">Pollst</a> 
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
