Template.replacement.helpers({
	'gameData': function() {
		return Games.findOne(Router.current().params._id);
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
	'yourClubPlayersOnTheBench': function() {
		return Players.find({
			gameId: Router.current().params._id,
			teamId: 'yourClub',
			inPlay: false
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
	'opponentPlayersOnTheBench': function() {
		return Players.find({
			gameId: Router.current().params._id,
			teamId: 'opponent',
			inPlay: false
		}, {
			sort: {
				jersey: 1
			}
		});
	}
});

Template.replacement.events({
	'click #yourClubInPlay > .yourClubPillForModal': function(e, t) {
		var switchData = {
			_id: this._id,
			state: getGameState(this.gameId),
			call: 'goingOnTheBench'
		};
		Session.set('switchData', switchData);
	},
	'click #yourClubOnTheBench > .yourClubPillForModal': function(e, t) {
		var switchData = {
			_id: this._id,
			state: getGameState(this.gameId),
			call: 'goingInPlay'
		};
		Session.set('switchData', switchData);
	},
	'click #opponentInPlay > .opponentPillForModal': function(e, t) {
		var switchData = {
			_id: this._id,
			state: getGameState(this.gameId),
			call: 'goingOnTheBench'
		};
		Session.set('switchData', switchData);
	},
	'click #opponentOnTheBench > .opponentPillForModal': function(e, t) {
		var switchData = {
			_id: this._id,
			state: getGameState(this.gameId),
			call: 'goingInPlay'
		};
		Session.set('switchData', switchData);
	}
});
