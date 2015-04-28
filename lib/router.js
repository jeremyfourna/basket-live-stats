var subscriptions = new SubsManager();

Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/gameStats/:_id', {
	name: 'gameStats',
	data: function() {
		return Games.findOne(this.params._id);
	}
});

Router.route('/gameDefinition/:_id', {
	name: 'gameDefinition',
	waitOn: function() {
		return subscriptions.subscribe('clubs');
	},
	data: function() {
		return Games.findOne(this.params._id);
	}
});

Router.route('/participantsDefinition/:_id', {
	name: 'participantsDefinition',
	waitOn: function() {
		return subscriptions.subscribe('clubs');
	},
	data: function() {
		return Games.findOne(this.params._id);
	}
});

Router.route('/myGames', {
	name: 'myGames',
	waitOn: function() {
		return subscriptions.subscribe('games');
	}
});

Router.route('/liveMatchs', {
	name: "liveMatchs",
	waitOn: function() {
		return subscriptions.subscribe('games');
	}
});

Router.route('/about', {
	name: 'about'
});

Router.route('/proVersionTest', {
	name: 'proVersionTest'
});

Router.route('/myAccount', {
	name: 'myAccount',
	data: function() {
		return Meteor.users.findOne({
			_id: Meteor.userId()
		});
	}
});

Router.route('/admin', {
	name: 'admin',
	waitOn: function() {
		return [subscriptions.subscribe('games'), subscriptions.subscribe('clubs'), subscriptions.subscribe("federationConfig")];
	}
});

Router.route('/createNewClub', {
	name: 'createNewClub',
	waitOn: function() {
		return subscriptions.subscribe("federationConfig");
	}
});

Router.route('/myClub', {
	name: 'myClub',
	waitOn: function() {
		return [subscriptions.subscribe('games'), subscriptions.subscribe('clubs')];
	}
});

Router.route('/', {
	name: 'home',
	fastRender: true
});
