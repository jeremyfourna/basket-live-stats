Template.ongoingGames.helpers({
	runningGames: function() {
		return Games.find({
			state: 'running',
			userId: Meteor.userId()
		});
	}
});
