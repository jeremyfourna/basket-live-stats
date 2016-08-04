Template.yourClubPlayerPill.helpers({
	modalId() {
		return '#' + this._id;
	},
	endedGames() {
		var game = Games.findOne(Router.current().params._id);
		if (game.gameState === 'gameEnded') {
			return 'disabled';
		} else {
			return false;
		}
	}
});

Template.opponentPlayerPill.helpers({
	modalId() {
		return '#' + this._id;
	},
	endedGames() {
		var game = Games.findOne(Router.current().params._id);
		if (game.gameState === 'gameEnded') {
			return 'disabled';
		} else {
			return false;
		}
	}
});
