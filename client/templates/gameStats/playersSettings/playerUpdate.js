Template.playerUpdate.events({
	'click .playerValidation': function(e) {
		e.preventDefault();
		var playerInfo = {
			lastName: e.target.parentElement[0].value,
			firstName: e.target.parentElement[1].value,
			playerId: this._id
		};
		Meteor.call('playerUpdate', playerInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	}
});
