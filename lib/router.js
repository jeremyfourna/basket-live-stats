Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() {
		return Meteor.subscribe('games');
	}
});

Router.route('/gameStats/:_id', {
	name: 'gameStats',
	data: function() {
		return Games.findOne(this.params._id);
	}
});

Router.route('/updateGameConfiguration/:_id', {
	name: 'updateGameConfiguration',
	data: function() {
		return Games.findOne(this.params._id);
	}
});

Router.route('/myGames', {
	name: 'myGames'
});

Router.route('/liveMatchs', {
	name: "liveMatchs",
	data: function() {
		return Games.find({
			state: {
				$not: "gameEnded"
			}
		}, {
			fields: {
				'gameInfos.homeTeam': 1,
				'gameInfos.awayTeam': 1,
				'gameStats.score.homeTeam': 1,
				'gameStats.score.awayTeam': 1,
				'state': 1
			}
		});
	}
});

Router.route('/', {
	name: 'home'
});
