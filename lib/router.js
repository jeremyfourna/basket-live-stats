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
	name: "liveMatchs"
});

Router.route('/about', {
	name: 'about'
})

Router.route('/proVersionTest', {
	name: 'proVersionTest'
})

Router.route('/', {
	name: 'home'
});
