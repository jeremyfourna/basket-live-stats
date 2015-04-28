var subscriptions = new SubsManager();

Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() {
		return [subscriptions.subscribe('games'), subscriptions.subscribe('clubs'), subscriptions.subscribe("federationConfig")];
	}
});

Router.route('/gameStats/:_id', {
	name: 'gameStats',
	data: function() {
		return Games.findOne(this.params._id);
	}
});

Router.route('/gameDefinition/:_id', {
	name: 'gameDefinition',
	data: function() {
		return Games.findOne(this.params._id);
	}
});

Router.route('/participantsDefinition/:_id', {
	name: 'participantsDefinition',
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

Router.route('/myClub', {
	name: 'myClub'
});

Router.route('/', {
	name: 'home'
});
