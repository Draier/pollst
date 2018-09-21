import React from 'react';
import Notification from './Notification.js';
import cookie from 'react-cookies';

export default class VoteButton extends React.Component {
	constructor(){
		super();
		this.state = {
			voted : false,
			notification : false,
			message : "",
			status : "",
		}
		this.unMountChild = this.unMountChild.bind(this);
	}
		
	vote = (option) => {
		let data = {
			user : cookie.load('userId'),
			pollId : this.props.poll._id
		}
		if(!this.state.voted){
			fetch(`https://murmuring-dusk-45038.herokuapp.com/polls/vote?option=${option}`,{
				method: "PUT",
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(data),
			}).then(response => {
				return response.json().then(json => {
					        return json;
						});
			}).then(response=>{
				console.log("huhu")
				if(response)
					this.setState({
						notification: true,
						voted: true,
						message: response.msg,
						status : response.status
					});
			})
		}
	}

	unMountChild(){
		this.setState({
			notification:false, 
		});
	}

	render() {
		return (
		<footer className="card-footer">
			<a className="card-footer-item" onClick={ () => this.vote("option1")}>
				Vote for {this.props.poll.option1.value}
			</a>
			<a className="card-footer-item" onClick={ () => this.vote("option2")}>
				Vote for {this.props.poll.option2.value}
			</a>
			{this.state.notification ? <Notification unMount={this.unMountChild} status={this.state.status} message={this.state.message}/> : null }
		</footer>
		);
	}
}
