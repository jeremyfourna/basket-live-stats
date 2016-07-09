import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Clubs } from '../../../api/clubs/schema.js';
import { FederationConfig } from '../../../api/federationConfig/schema.js';

import './gameDefinition.jade';

Template.gameDefinition.onCreated(function() {
	this.autorun(() => {
		this.subscribe('clubName');
		this.subscribe('championshipLevel');
		this.subscribe('championshipGroup');
	});
});

Template.gameDefinition.helpers({
	clubName() {
		return Clubs.find({}, {
			fields: {
				name: 1
			}
		}, {
			sort: {
				name: 1
			}
		});
	},
	level() {
		return FederationConfig.find({ def: 'level' }, {
			sort: {
				val: 1
			}
		});
	},
	group() {
		return FederationConfig.find({ def: 'group' }, {
			sort: {
				val: 1
			}
		});
	}
});

Template.gameDefinition.events({
	'click .addPlayer': function(event, template) {
		return Blaze.render(Template.playerInfos, template.$('.playerData').get(0));
	},
	'click .addCoach': function(event, template) {
		return Blaze.render(Template.coachInfos, template.$('.coachData').get(0));
	},
	'click .removePlayer': function(event) {
		if ($('.player').length !== 1) {
			$('.player').get(-1).remove();
		}
	},
	'click .removeCoach': function(event) {
		if ($('.coach').length !== 1) {
			$('.coach').get(-1).remove();
		}
	},
	'click .configurationValidation': function(event) {
		if ($('.player').length < 5) {
			return throwError("Your team must have a minimum of 5 players");
		}
		var game = {
			userId: Meteor.userId(),
			privateGame: $('#privateGame').is(':checked'),
			gameInfos: {
				yourClub: $('#yourClub').val(),
				opponent: $('#opponent').val(),
				level: $('#level').val(),
				group: $('#group').val()
			}
		};
		var players = [];
		var coachs = [];
		$('.player').each((index, element) => {
			var player = {
				teamId: 'yourClub',
				firstName: $(element).find('.firstName').val(),
				lastName: $(element).find('.lastName').val(),
				jersey: $(element).find('.jersey').val()
			};
			players.push(player);
		});
		$('.coach').each((index, element) => {
			var coach = {
				teamId: 'yourClub',
				firstName: $(element).find('.firstName').val(),
				lastName: $(element).find('.lastName').val(),
				primaryCoach: $(element).find('.primaryCoach').is(':checked')
			};
			coachs.push(coach);
		});
		Meteor.call('gameInsert', game, (error, result) => {
			var gameId;
			var playersId;
			var coachsId;
			if (error) {
				return throwError(error.message);
			} else {
				gameId = result._id;
				Meteor.call('playerInsert', gameId, players, (error, result) => {
					if (error) {
						return throwError(error.message);
					} else {
						playersId = result.ids;
						Meteor.call('coachInsert', gameId, coachs, (error, result) => {
							if (error) {
								return throwError(error.message);
							} else {
								coachsId = result.ids;
								Router.go('gameStats', {
									_id: gameId
								});
							}
						});
					}
				});
			}
		});
	}
});
