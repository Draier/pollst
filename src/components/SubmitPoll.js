import React from 'react';
import Container from './Container.js'

export default class SubmitPoll extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<Container>
				<form>
					<div className="field">
						<label className="label">Question</label>
						<div className="control">
							<input type="text" className="input"/>
						</div>
					</div>

					<div className="field">
						<div className="columns">
							<div className="column">
								<label className="label">First Option</label>
								<div className="control">
									<input type="text" className="input"/>
								</div>
							</div>
							<div className="column">
								<label className="label">Second Option</label>
								<div className="control">
									<input type="text" className="input"/>
								</div>
							</div>
						</div>
					</div>

					<div className="field">
						<div className="control">
							<input value="Submit" type="submit" className="button"/>
						</div>
					</div>
				</form>
			</Container>
		);
	}
}
