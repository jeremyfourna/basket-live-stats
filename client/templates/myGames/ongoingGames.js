Template.ongoingGames.helpers({
	runningGames: function() {
		return Games.find({
			state: 'notStarted',
			userId: Meteor.userId()
		});
	}
});

Template.ongoingGames.events({
	'click .btn-danger': function(e, t) {
		var currentGame = this._id;
		Games.remove({
			_id: currentGame
		});
		return throwError("Le match a bien été supprimé...");
	}
});
