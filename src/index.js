import React from 'react';
import ReactDOM from 'react-dom';
import './bulma.css';
import Header from './Header.js'

const App = () => {
	return (

		<div>
			<Header />
			HEY

		</div>

		)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
	)