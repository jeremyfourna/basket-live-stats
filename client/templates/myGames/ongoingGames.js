Template.ongoingGames.helpers({
	runningGames: function() {
		return Games.find({
			state: 'notStarted',
			userId: Meteor.userId()
		});
	}
});
