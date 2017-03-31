import React, { Component, PropTypes } from 'react';

class MessagesList extends Component {
	renderMessage({ _id, text }, index) {
		return (
			<li key={index} className="list-group-item">
				{text}
				<div className="pull-right">
					<a href="javascript:void(0)" onClick={() => this.props.Remove(_id)}><span className="glyphicon glyphicon-trash"></span></a>
				</div>
			</li>
		);
	}

	renderLoading() {
		return <p>Loading messages...</p>;
	}

	render() {
		if (!this.props.ready)
			return this.renderLoading();
		return <ul className="list-group">{this.props.messages.map(this.renderMessage.bind(this))}</ul>;
	}
}

MessagesList.PropTypes = {
	messages: PropTypes.array.isRequired,
	onRemove: PropTypes.func.isRequired,
	ready: PropTypes.bool
}

export default MessagesList;