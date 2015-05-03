Template.completedLiveGames.helpers({
	'endedGames': function() {
		return Games.find({
			state: 'gameEnded'
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
