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
	}
});

Template.stats.events({
	'click #notStarted': function(e) {
		e.preventDefault();
		Games.update({
			_id: this._id
		}, {
			$set: {
				"state": "q1Running"
			}
		});
	},
	'click #q1Running': function(e) {
		e.preventDefault();
		Games.update({
			_id: this._id
		}, {
			$set: {
				"state": "q1Ended"
			}
		});
	},
	'click #q1Ended': function(e) {
		e.preventDefault();
		Games.update({
			_id: this._id
		}, {
			$set: {
				"state": "q2Running"
			}
		});
	},
	'click #q2Running': function(e) {
		e.preventDefault();
		Games.update({
			_id: this._id
		}, {
			$set: {
				"state": "halfTime"
			}
		});
	},
	'click #halfTime': function(e) {
		e.preventDefault();
		Games.update({
			_id: this._id
		}, {
			$set: {
				"state": "q3Running"
			}
		});
	},
	'click #q3Running': function(e) {
		e.preventDefault();
		Games.update({
			_id: this._id
		}, {
			$set: {
				"state": "q3Ended"
			}
		});
	},
	'click #q3Ended': function(e) {
		e.preventDefault();
		Games.update({
			_id: this._id
		}, {
			$set: {
				"state": "q4Running"
			}
		});
	},
	'click #q4Running': function(e) {
		e.preventDefault();
		Games.update({
			_id: this._id
		}, {
			$set: {
				"state": "gameEnded"
			}
		});
	}
});
