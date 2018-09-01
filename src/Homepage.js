import React from 'react';

export default class Homepage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userID : '',
		}
	}
	componentDidMount() {
		if(this.props.match.params.id){
			this.setState({
				userID : this.props.match.params.id, 
			});
		}	
	}

	render() {
		return (
			<div>{this.state.userID}</div>
		);
	}
}
