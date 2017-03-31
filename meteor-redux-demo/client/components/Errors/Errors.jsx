import React, { Component, PropTypes } from 'react';

class ErrorsList extends Component {
	renderError(error, index) {
		return (
			<div className="alert alert-danger" id={index} key={index}>
				{error.message}
				<span style={{cursor:'pointer'}} className="glyphicon glyphicon-remove pull-right" onClick={(event)=>{event.preventDefault();$('#'+index).slideUp();}}></span>
			</div>
		);
	}

	render() {
		return <div>{this.props.errors.map(this.renderError)}</div>;
	}
}

ErrorsList.propTypes = {
	errors: PropTypes.array.isRequired,
};

export default ErrorsList;