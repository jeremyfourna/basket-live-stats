Template.yourClubPlayerReplacement.helpers({
	endedGames() {
		if (getGameState(this.gameId) === "gameEnded") {
			return 'disabled';
		} else {
			return false;
		}
	}
});

Template.opponentPlayerReplacement.helpers({
	endedGames() {
		if (getGameState(this.gameId) === "gameEnded") {
			return 'disabled';
		} else {
			return false;
		}
	}
});
