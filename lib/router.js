var subscriptions = new SubsManager();

Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/gameStats/:_id', {
	name: 'gameStats',
	waitOn: function() {
		return subscriptions.subscribe('oneGame', this.params._id);
	},
	data: function() {
		return Games.findOne(this.params._id);
	}
});

Router.route('/gameDefinition', {
	name: 'gameDefinition',
	waitOn: function() {
		return [subscriptions.subscribe('clubName'), subscriptions.subscribe('championshipLevel'), subscriptions.subscribe('championshipGroup')];
	}
});

Router.route('/participantsDefinition/:_id', {
	name: 'participantsDefinition',
	waitOn: function() {
		return subscriptions.subscribe('oneGame', this.params._id);
	},
	data: function() {
		return Games.findOne(this.params._id);
	}
});

Router.route('/myGames', {
	name: 'myGames',
	waitOn: function() {
		return subscriptions.subscribe('myGames', Meteor.userId());
	}
});

Router.route('/liveGames', {
	name: 'liveGames',
	waitOn: function() {
		return subscriptions.subscribe('liveGames');
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
		return subscriptions.subscribe('myClub', Meteor.userId());
	},
	data: function() {
		return Clubs.findOne({
			createdBy: Meteor.userId()
		});
	}
});

Router.route('/myClub/newTeamDefinition', {
	name: 'newTeamDefinition',
	waitOn: function() {
		return [subscriptions.subscribe("federationConfig"), subscriptions.subscribe('myClub', Meteor.userId())];
	},
	data: function() {
		return Clubs.findOne({
			createdBy: Meteor.userId()
		});
	}
});

Router.route('/myClub/teamEdition', {
	name: 'teamEdition',
	waitOn: function() {
		return [subscriptions.subscribe('federationConfig'), subscriptions.subscribe('myClub', Meteor.userId())];
	},
	data: function() {
		return Clubs.findOne({
			createdBy: Meteor.userId()
		});
	}
});

Router.route('/', {
	name: 'home',
	waitOn: function() {
		return [subscriptions.subscribe('last3LiveGames'), subscriptions.subscribe('last3EndedGames')];
	},
	fastRender: true
});
