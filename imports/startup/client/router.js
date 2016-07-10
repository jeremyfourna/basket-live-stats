import { Router } from 'meteor/iron:router';

// Base components/layouts
import '../../ui/layouts/layout.js';
import '../../ui/components/notFound.jade';

// Pages
import '../../ui/pages/home/home.js';
import '../../ui/pages/liveGames/liveGames.js';
import '../../ui/pages/aGame/aGame.js';

Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound'
});

Router.route('/', {
	name: 'home'
});

Router.route('/liveGames', {
	name: 'liveGames'
});

Router.route('/aGame/:_id', {
	name: 'aGame'
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
		return [
			subscriptions.subscribe('games'),
			subscriptions.subscribe('clubs'),
			subscriptions.subscribe('federationConfig')
		];
	}
});

Router.route('/createNewClub', {
	name: 'createNewClub',
	waitOn: function() {
		return subscriptions.subscribe('federationConfig');
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
		return [
			subscriptions.subscribe('federationConfig'),
			subscriptions.subscribe('myClub', Meteor.userId())
		];
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
		return [
			subscriptions.subscribe('federationConfig'),
			subscriptions.subscribe('myClub', Meteor.userId())
		];
	},
	data: function() {
		return Clubs.findOne({
			createdBy: Meteor.userId()
		});
	}
});
