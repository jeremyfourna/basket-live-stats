Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() {
		return Meteor.subscribe('games');
	}
});

Router.route('/', {
	name: 'home'
});

Router.route('/gameStats/:_id', {
	name: 'gameStats',
	data: function() {
		return Games.findOne(this.params._id);
	}
});

Router.route('/myGames', {
	name: 'myGames'
});
