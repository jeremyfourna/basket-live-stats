Template.completedLiveGames.helpers({
	'endedGames': function() {
		return Games.find({
			gameState: 'gameEnded',
			privateGame: false
		}, {
			fields: {
				'gameInfos': 1,
				'gameState': 1,
				'stats.yourClub.score': 1,
				'stats.opponent.score': 1
			}
		});
	},
	'ownerOfTheGame': function() {
		if (Meteor.userId() === this.userId) {
			return true;
		} else {
			return false;
		}
	}
});
