import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { TAPi18n } from 'meteor/tap:i18n';
import { Bert } from 'meteor/themeteorchef:bert';
import { lodash } from 'meteor/stevezhu:lodash';

import { Players } from '../../../../api/players/schema.js';

import './opponentPlayerModal.jade';

Template.opponentPlayerModal.events({
	'show.bs.modal #opponentPlayerModal': function(event) {
		let button = $(event.relatedTarget); // Button that triggered the modal
		let jersey = button.data('jersey');
		let playerId = button.data('playerid');
		let firstName = button.data('firstname') || TAPi18n.__('firstName');
		let lastName = button.data('lastname') || TAPi18n.__('lastName');
		let whoIsDoingThisAction = TAPi18n.__('whoIsDoingThisAction');
		let num = TAPi18n.__('num');
		$('#opponentPlayerModal').data('playerid', playerId);
		$('.modal-title').text(`${whoIsDoingThisAction} ${num}${jersey} : ${firstName} ${lastName}`);
	},
	'click #oppCorrectionAction': function() {
		$('.buttonForAction').prepend('<span class=\'badge actionBadge\'>-1</span> ').addClass('cancelAction');
		$('#oppCorrectionAction').addClass('cancelCorrectionAction').text(TAPi18n.__('cancelCorrectionAction'));
	},
	'click #oppCloseModalButton': function() {
		$('.actionBadge').remove();
		$('#oppCorrectionAction').removeClass('cancelCorrectionAction');
		$('.buttonForAction').removeClass('cancelAction');
	},
	'click .cancelCorrectionAction': function() {
		$('.actionBadge').remove();
		$('#oppCorrectionAction').removeClass('cancelCorrectionAction').text(TAPi18n.__('oppCorrectionAction'));
		$('.buttonForAction').removeClass('cancelAction');
	},
	'hidden.bs.modal .modal': function() {
		$('.actionBadge').remove();
		$('#oppCorrectionAction').removeClass('cancelCorrectionAction');
		$('.buttonForAction').removeClass('cancelAction');
	},
	// Positive action
	'click #onePoint': function(event) {
		event.preventDefault();
		const gameId = this.gameData._id;
		const teamId = this.gameData.opponentTeamId;
		const playerId = $('#opponentPlayerModal').data('playerid');
		const isACancelAction = $('#onePoint').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Teams.correctOnePointIn', gameId, teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			const evolScore = {
				gameIndex: this.gameData.evolution.length,
				scoreGap: lodash.last(this.gameData.evolution)[1] - 1
			};
			return Meteor.call('Teams.onePointIn', gameId, teamId, playerId, evolScore, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click #twoPoints': function(event) {
		event.preventDefault();
		const gameId = this.gameData._id;
		const teamId = this.gameData.opponentTeamId;
		const playerId = $('#opponentPlayerModal').data('playerid');
		const isACancelAction = $('#twoPoints').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Teams.correctTwoPointsIn', gameId, teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			const evolScore = {
				gameIndex: this.gameData.evolution.length,
				scoreGap: lodash.last(this.gameData.evolution)[1] - 2
			};

			return Meteor.call('Teams.twoPointsIn', gameId, teamId, playerId, evolScore, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click #threePoints': function(event) {
		event.preventDefault();
		const gameId = this.gameData._id;
		const teamId = this.gameData.opponentTeamId;
		const playerId = $('#opponentPlayerModal').data('playerid');
		const isACancelAction = $('#threePoints').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Teams.correctThreePointsIn', gameId, teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			const evolScore = {
				gameIndex: this.gameData.evolution.length,
				scoreGap: lodash.last(this.gameData.evolution)[1] - 3
			};
			return Meteor.call('Teams.threePointsIn', gameId, teamId, playerId, evolScore, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
});
