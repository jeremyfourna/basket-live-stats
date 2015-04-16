Template.ongoingGames.helpers({
	runningGames: function() {
		return Games.find({
			$or: [{
				state: 'notStarted'
			}, {
				state: 'q1Running'
			}, {
				state: 'q1Ended'
			}, {
				state: 'q2Running'
			}, {
				state: 'halfTime'
			}, {
				state: 'q3Running'
			}, {
				state: 'q3Ended'
			}, {
				state: 'q4Running'
			}],
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
