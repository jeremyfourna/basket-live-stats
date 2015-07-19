Template.stats.helpers({
	'notStarted': function() {
		if (this.state === 'notStarted') {
			return true;
		} else {
			return false;
		}
	},
	'q1Running': function() {
		if (this.state === 'q1Running') {
			return true;
		} else {
			return false;
		}
	},
	'q1Ended': function() {
		if (this.state === 'q1Ended') {
			return true;
		} else {
			return false;
		}
	},
	'q2Running': function() {
		if (this.state === 'q2Running') {
			return true;
		} else {
			return false;
		}
	},
	'halfTime': function() {
		if (this.state === 'halfTime') {
			return true;
		} else {
			return false;
		}
	},
	'q3Running': function() {
		if (this.state === 'q3Running') {
			return true;
		} else {
			return false;
		}
	},
	'q3Ended': function() {
		if (this.state === 'q3Ended') {
			return true;
		} else {
			return false;
		}
	},
	'q4Running': function() {
		if (this.state === 'q4Running') {
			return true;
		} else {
			return false;
		}
	},
	'gameEnded': function() {
		if (this.state === 'gameEnded') {
			return true;
		} else {
			return false;
		}
	},
	'homeTeamPlayersPlaying': function() {
		var team = this.homeTeam.players;
		var inPlayTeam = [];
		team.forEach(function(element, index, array) {
			if (element.inPlay) {
				inPlayTeam.push(element);
			}
		});
		return inPlayTeam;
	},
	'awayTeamPlayersPlaying': function() {
		var team = this.awayTeam.players;
		var inPlayTeam = [];
		team.forEach(function(element, index, array) {
			if (element.inPlay) {
				inPlayTeam.push(element);
			}
		});
		return inPlayTeam;
	},
	'fiveStarterOrReplacementHomeTeam': function() {
		var team = this.homeTeam.players;
		var inPlayTeam = [];
		team.forEach(function(element, index, array) {
			if (element.inPlay) {
				inPlayTeam.push(element);
			}
		});
		if (inPlayTeam.length > 0) {
			return 'fiveStarterOrReplacementHomeTeam';
		} else {
			return 'hidden';
		}
	},
	'fiveStarterOrReplacementAwayTeam': function() {
		var team = this.awayTeam.players;
		var inPlayTeam = [];
		team.forEach(function(element, index, array) {
			if (element.inPlay) {
				inPlayTeam.push(element);
			}
		});
		if (inPlayTeam.length > 0) {
			return 'fiveStarterOrReplacementAwayTeam';
		} else {
			return 'hidden';
		}
	},
	'gameEndedOrNot': function() {
		if (this.state === 'gameEnded') {
			return 'hidden';
		}
	},
	'pageUrl': function() {
		return Router.current().originalUrl;
	},
	'tweetText': function() {
		return "Suivez en direct le match entre " + this.gameInfos.homeTeam + " et " + this.gameInfos.awayTeam;
	}
});

Template.stats.events({
	'click #notStarted': function(e) {
		e.preventDefault();
		var gameId = {
			id: this._id
		};
		var status = {
			state: 'q1Running'
		};
		Meteor.call('stateSwitch', gameId, status, function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #q1Running': function(e) {
		e.preventDefault();
		var gameId = {
			id: this._id
		};
		var status = {
			state: 'q1Ended'
		};
		Meteor.call('stateSwitch', gameId, status, function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #q1Ended': function(e) {
		e.preventDefault();
		var gameId = {
			id: this._id
		};
		var status = {
			state: 'q2Running'
		};
		Meteor.call('stateSwitch', gameId, status, function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #q2Running': function(e) {
		e.preventDefault();
		var gameId = {
			id: this._id
		};
		var status = {
			state: 'halfTime'
		};
		Meteor.call('stateSwitch', gameId, status, function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #halfTime': function(e) {
		e.preventDefault();
		var gameId = {
			id: this._id
		};
		var status = {
			state: 'q3Running'
		};
		Meteor.call('stateSwitch', gameId, status, function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #q3Running': function(e) {
		e.preventDefault();
		var gameId = {
			id: this._id
		};
		var status = {
			state: 'q3Ended'
		};
		Meteor.call('stateSwitch', gameId, status, function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #q3Ended': function(e) {
		e.preventDefault();
		var gameId = {
			id: this._id
		};
		var status = {
			state: 'q4Running'
		};
		Meteor.call('stateSwitch', gameId, status, function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #q4Running': function(e) {
		e.preventDefault();
		var gameId = {
			_id: this._id
		};
		var i = 0;
		var playerData = {};
		for (i = 0; i < this.homeTeam.players.length; i++) {
			if (this.homeTeam.players[i].inPlay === true) {
				playerData.team = 'homeTeam';
				playerData.playerIndex = i;
				Meteor.call('stateSwitchEndedGames', gameId, playerData, function(error, result) {
					if (error) {
						return throwError(error.message);
					}
				});
			}
		}
		for (i = 0; i < this.awayTeam.players.length; i++) {
			if (this.awayTeam.players[i].inPlay === true) {
				playerData.team = 'awayTeam';
				playerData.playerIndex = i;
				Meteor.call('stateSwitchEndedGames', gameId, playerData, function(error, result) {
					if (error) {
						return throwError(error.message);
					}
				});
			}
		}
	},
	'click .displayReplacement': function() {
		$('#replacement-tab').tab('show');
	},
	'click .doReplacement': function() {
		$('#replacement-tab').tab('show');
	}
});
