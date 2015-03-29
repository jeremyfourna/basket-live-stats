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

Router.route('/newGame', {
	name: 'newGame'
});

Router.route('/myGames', {
	name: 'myGames'
});

Router.route('/', {
	name: 'home'
});
