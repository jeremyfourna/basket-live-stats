Template.homeTeamPlayerPill.helpers({
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

Template.awayTeamPlayerPill.helpers({
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
