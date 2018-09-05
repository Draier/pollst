import React from 'react';

const Container = (props) => {
	return (
		<div class="container is-fluid">
		  <div class="notification">
			  {props.children}
		  </div>
		</div>
		)
}

export default Container;