import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

const fields = ['text'];

class MessagesEditor extends Component {
	render() {
		const { fields: { text }, handleSubmit } = this.props;
		// console.log("MessagesEditor :: text field ===>", this.props.fields.text)

		return (
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="message">Enter Message:</label>
					<input className="form-control" value={text.value} onChange={text.onChange} placeholder="Input your message here" />
					<button className="btn btn-default" type="submit">Submit</button>
				</div>
			</form>
		);
	}
}

MessagesEditor.PropTypes = {
	fields: PropTypes.object.isRequired,
	handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
	fields,
	form: 'new-message',
})(MessagesEditor);