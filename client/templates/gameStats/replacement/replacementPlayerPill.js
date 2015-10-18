Template.yourClubPlayerReplacement.helpers({
	'endedGames': function() {
		if (getGameState(this.gameId) === "gameEnded") {
			return 'disabled';
		} else {
			return false;
		}
	}
});

Template.opponentPlayerReplacement.helpers({
	'endedGames': function() {
		if (getGameState(this.gameId) === "gameEnded") {
			return 'disabled';
		} else {
			return false;
		}
	}
});
