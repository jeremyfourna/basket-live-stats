Template.stats.helpers({
	'gameData': function() {
		return Games.findOne(Router.current().params._id);
	},
	'notStarted': function() {
		if (this.gameState === 'notStarted') {
			return true;
		} else {
			return false;
		}
	},
	'q1Running': function() {
		if (this.gameState === 'q1Running') {
			return true;
		} else {
			return false;
		}
	},
	'q1Ended': function() {
		if (this.gameState === 'q1Ended') {
			return true;
		} else {
			return false;
		}
	},
	'q2Running': function() {
		if (this.gameState === 'q2Running') {
			return true;
		} else {
			return false;
		}
	},
	'halfTime': function() {
		if (this.gameState === 'halfTime') {
			return true;
		} else {
			return false;
		}
	},
	'q3Running': function() {
		if (this.gameState === 'q3Running') {
			return true;
		} else {
			return false;
		}
	},
	'q3Ended': function() {
		if (this.gameState === 'q3Ended') {
			return true;
		} else {
			return false;
		}
	},
	'q4Running': function() {
		if (this.gameState === 'q4Running') {
			return true;
		} else {
			return false;
		}
	},
	'gameEnded': function() {
		if (this.gameState === 'gameEnded') {
			return true;
		} else {
			return false;
		}
	},
	'oT1': function() {
		if (this.gameState === 'oT1') {
			return true;
		} else {
			return false;
		}
	},
	'oT2': function() {
		if (this.gameState === 'oT2') {
			return true;
		} else {
			return false;
		}
	},
	'oT3': function() {
		if (this.gameState === 'oT3') {
			return true;
		} else {
			return false;
		}
	},
	'oT4': function() {
		if (this.gameState === 'oT4') {
			return true;
		} else {
			return false;
		}
	},
	'oT5': function() {
		if (this.gameState === 'oT5') {
			return true;
		} else {
			return false;
		}
	},
	'yourClubPlayersPlaying': function() {
		return Players.find({
			gameId: Router.current().params._id,
			teamId: 'yourClub',
			inPlay: true
		}, {
			sort: {
				jersey: 1
			}
		});
	},
	'opponentPlayersPlaying': function() {
		return Players.find({
			gameId: Router.current().params._id,
			teamId: 'opponent',
			inPlay: true
		}, {
			sort: {
				jersey: 1
			}
		});
	},
	'doReplacementYourClub': function() {
		var team = Players.find({
			gameId: Router.current().params._id,
			teamId: 'yourClub',
			inPlay: true
		}).fetch();
		if (team.length > 0) {
			return 'doReplacementPlayer';
		} else {
			return 'hidden';
		}
	},
	'doReplacementOpponent': function() {
		var team = Players.find({
			gameId: Router.current().params._id,
			teamId: 'opponent',
			inPlay: true
		}).fetch();
		if (team.length > 0) {
			return 'doReplacementPlayer';
		} else {
			return 'hidden';
		}
	},
	'gameEndedOrNot': function() {
		if (this.gameState === 'gameEnded') {
			return 'hidden';
		}
	}
});

Template.stats.events({
	'click #notStarted': function(e) {
		e.preventDefault();
		Meteor.call('GameStateSwitch', this._id, 'q1Running', function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #q1Running': function(e) {
		e.preventDefault();
		Meteor.call('GameStateSwitch', this._id, 'q1Ended', function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #q1Ended': function(e) {
		e.preventDefault();
		Meteor.call('GameStateSwitch', this._id, 'q2Running', function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #q2Running': function(e) {
		e.preventDefault();
		Meteor.call('GameStateSwitch', this._id, 'halfTime', function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #halfTime': function(e) {
		e.preventDefault();
		Meteor.call('GameStateSwitch', this._id, 'q3Running', function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #q3Running': function(e) {
		e.preventDefault();
		Meteor.call('GameStateSwitch', this._id, 'q3Ended', function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #q3Ended': function(e) {
		e.preventDefault();
		Meteor.call('GameStateSwitch', this._id, 'q4Running', function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #oT': function(e) {
		e.preventDefault();
		Meteor.call('GameStateSwitch', this._id, 'oT1', function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #oT1': function(e) {
		e.preventDefault();
		Meteor.call('GameStateSwitch', this._id, 'oT2', function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #oT2': function(e) {
		e.preventDefault();
		Meteor.call('GameStateSwitch', this._id, 'oT3', function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #oT3': function(e) {
		e.preventDefault();
		Meteor.call('GameStateSwitch', this._id, 'oT4', function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #oT4': function(e) {
		e.preventDefault();
		Meteor.call('GameStateSwitch', this._id, 'oT5', function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #endedGames': function(e) {
		e.preventDefault();
		var gameId = this._id;
		Meteor.call('GameStateSwitch', gameId, 'gameEnded', function(error, result) {
			if (error) {
				return throwError(error.message);
			} else {
				Meteor.call('endedGamesPlayers', gameId, function(error, result) {
					if (error) {
						return throwError(error.message);
					}
				});
			}
		});
	},
	'click .displayReplacement': function() {
		$('#replacement-tab').tab('show');
	},
	'click .doReplacement': function() {
		$('#replacement-tab').tab('show');
	}
});
