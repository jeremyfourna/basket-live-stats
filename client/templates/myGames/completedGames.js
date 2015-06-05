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
		var currentGame = this._id;
		Games.remove({
			_id: currentGame
		});
		return throwError("Le match a bien été supprimé...");
	}
});
