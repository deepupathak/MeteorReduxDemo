export const createMessage = params => {
	console.log("createMessage Action :: params ===>", params)
	return dispatch => {
		Meteor.call('createMessage', params, (error) => {
			if (!error) return;

			dispatch({
				type: 'ADD_ERROR',
				error,
			});
		});
	};
};

export const removeMessage = id => {
	console.log("removeMessage Action :: id ===>", id)
	return () => {
		Meteor.call('removeMessage', id);
	};
};