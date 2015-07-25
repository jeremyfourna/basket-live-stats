Template.completedLiveGames.helpers({
	'endedGames': function() {
		return Games.find({
			state: 'gameEnded',
			privateGame: false
		}, {
			fields: {
				'gameInfos': 1,
				'state': 1,
				'gameStats.score': 1
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
