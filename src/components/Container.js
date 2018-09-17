import React from 'react';

const Container = (props) => {
	return (
		<div className="container is-fluid">
		  <div className="notification">
			  {props.children}
		  </div>
		</div>
		)
}

export default Container;