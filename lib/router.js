Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() {
		return [Meteor.subscribe('games'), Meteor.subscribe('clubs'), Meteor.subscribe("userData")];
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

Router.route('/myAccount', {
	name: 'myAccount',
	data: function() {
		return Meteor.users.findOne({
			_id: Meteor.userId()
		});
	}
});

Router.route('/admin', {
	name: 'admin'
});

Router.route('/createNewClub', {
	name: 'createNewClub'
});

Router.route('/', {
	name: 'home'
});
