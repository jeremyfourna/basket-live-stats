Template.ongoingGames.helpers({
	'runningGames': function() {
		return Games.find({
			state: {
				$nin: ["gameEnded"]
			},
			userId: Meteor.userId()
		}, {
			fields: {
				'gameInfos': 1,
				'gameStats.score': 1,
				'state': 1
			}
		});
	},
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
	'oT1': function() {
		if (this.state === 'oT1') {
			return true;
		} else {
			return false;
		}
	},
	'oT2': function() {
		if (this.state === 'oT2') {
			return true;
		} else {
			return false;
		}
	},
	'oT3': function() {
		if (this.state === 'oT3') {
			return true;
		} else {
			return false;
		}
	},
	'oT4': function() {
		if (this.state === 'oT4') {
			return true;
		} else {
			return false;
		}
	},
	'oT5': function() {
		if (this.state === 'oT5') {
			return true;
		} else {
			return false;
		}
	}
});

Template.ongoingGames.events({
	'click .btn-danger': function(e, t) {
		var currentGame = {
			_id: this._id
		};
		Meteor.call('gameDelete', currentGame, function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	}
});
