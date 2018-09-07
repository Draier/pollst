import React from 'react';
import Container from './Container.js';
import cookie from 'react-cookies'

export default class SubmitPoll extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<Container>
				<form action="http://localhost:7777/form" method="POST">
					<div className="field">
						<label className="label">Question</label>
						<div className="control">
							<input name="question" type="text" className="input" required/>
						</div>
					</div>

					<div className="field">
						<div className="columns">
							<div className="column">
								<label className="label">First Option</label>
								<div className="control">
									<input name="firstOption" type="text" className="input" required/>
								</div>
							</div>
							<div className="column">
								<label className="label">Second Option</label>
								<div className="control">
									<input name="secondOption" type="text" className="input" required/>
								</div>
							</div>
						</div>
					</div>

					<div className="field">
						<div className="control">
							<input type="hidden" name="userID" value={cookie.load('userId')}/>
							<input value="Submit" type="submit" className="button"/>
						</div>
					</div>
				</form>
			</Container>
		);
	}
}
