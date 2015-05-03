Template.completedLiveGames.helpers({
	'endedGames': function() {
		return Games.find({
			state: 'gameEnded'
		});
	}
});
