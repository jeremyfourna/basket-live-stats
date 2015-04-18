Template.ongoingGames.helpers({
	'runningGames': function() {
		return Games.find({
			state: {
				$not: "gameEnded"
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
	}
});

Template.ongoingGames.events({
	'click .btn-danger': function(e, t) {
		var currentGame = this._id;
		Games.remove({
			_id: currentGame
		});
		return throwError("Le match a bien été supprimé...");
	}
});
