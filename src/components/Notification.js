import React from 'react';
import './styles/Notification.css'

const Notification = (props) => {
	return(
		<div class={"notification is-fixed-notification is-" + props.status}>
		  <button class="delete" onClick={props.unMount}></button>
		  {props.message}
		</div>
	)
}

export default Notification;
