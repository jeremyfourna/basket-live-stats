Template.newGame.events({
	'click button': function() {
		Meteor.call('gameInsert', function(error, result) {
			// display the error to the user and abort
			if (error)
				return throwError(error.reason);
			Router.go('gameStats', {
				_id: result._id
			});
		});
	}
});
