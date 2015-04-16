Template.completedGames.helpers({
	'endedGames': function() {
		return Games.find({
			state: 'gameEnded',
			userId: Meteor.userId()
		});
	}
});
