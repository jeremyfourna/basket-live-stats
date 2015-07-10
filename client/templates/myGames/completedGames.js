Template.completedGames.helpers({
	'endedGames': function() {
		return Games.find({
			state: 'gameEnded',
			userId: Meteor.userId()
		});
	}
});

Template.completedGames.events({
	'click .btn-danger': function(e, t) {
		var currentGame = {
			_id: this._id
		};
		Meteor.call('gameDelete', currentGame, function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	}
});
