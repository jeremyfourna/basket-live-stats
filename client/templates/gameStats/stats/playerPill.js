Template.yourClubPlayerPill.helpers({
	'modalId': function() {
		return '#' + this._id;
	},
	'endedGames': function() {
		var game = Games.findOne(Router.current().params._id);
		if (game.gameState === "gameEnded") {
			return 'disabled';
		} else {
			return false;
		}
	}
});

Template.opponentPlayerPill.helpers({
	'modalId': function() {
		return '#' + this._id;
	},
	'endedGames': function() {
		var game = Games.findOne(Router.current().params._id);
		if (game.gameState === "gameEnded") {
			return 'disabled';
		} else {
			return false;
		}
	}
});
