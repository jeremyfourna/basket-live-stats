Template.ongoingGames.helpers({
	'runningGames': function() {
		return Games.find({
			userId: Meteor.userId(),
			gameState: {
				$nin: ['gameEnded']
			}
		}, {
			fields: {
				'gameInfos': 1,
				'stats.yourClub.score': 1,
				'stats.opponent.score': 1,
				'gameState': 1
			}
		});
	}
});

Template.ongoingGames.events({
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
