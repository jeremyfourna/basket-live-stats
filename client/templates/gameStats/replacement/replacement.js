Template.replacement.helpers({
	gameData() {
		return Games.findOne(Router.current().params._id);
	},
	yourClubPlayersPlaying() {
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
	yourClubPlayersOnTheBench() {
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
	opponentPlayersPlaying() {
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
	opponentPlayersOnTheBench() {
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
