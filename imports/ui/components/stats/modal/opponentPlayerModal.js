import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { TAPi18n } from 'meteor/tap:i18n';
import { Bert } from 'meteor/themeteorchef:bert';

import { Games } from '../../../../api/games/schema.js';
import { Players } from '../../../../api/players/schema.js';

import './opponentPlayerModal.jade';

Template.opponentPlayerModal.events({
	'show.bs.modal #opponentPlayerModal': function(event) {
		let button = $(event.relatedTarget); // Button that triggered the modal
		let jersey = button.data('jersey');
		let playerId = button.data('playerid');
		let firstName = button.data('firstname') || TAPi18n.__('firstName');
		let lastName = button.data('lastname') || TAPi18n.__('firstName');
		let whoIsDoingThisAction = TAPi18n.__('whoIsDoingThisAction');
		let num = TAPi18n.__('num');
		$('#opponentPlayerModal').data('playerId', playerId);
		$('.modal-title').text(`${whoIsDoingThisAction} ${num}${jersey} : ${firstName} ${lastName} `);
	},
	'click #correctionAction': function() {
		$('.buttonForAction').prepend('<span class=\'badge actionBadge\'>-1</span> ').addClass('cancelAction');
		$('#correctionAction').addClass('cancelCorrectionAction');
	},
	'click #closeModalButton': function() {
		$('.actionBadge').remove();
		$('#correctionAction').removeClass('cancelCorrectionAction');
		$('.buttonForAction').removeClass('cancelAction');
	},
	'click .cancelCorrectionAction': function() {
		$('.actionBadge').remove();
		$('#correctionAction').removeClass('cancelCorrectionAction');
		$('.buttonForAction').removeClass('cancelAction');
	},
	'hidden.bs.modal .modal': function() {
		$('.actionBadge').remove();
		$('#correctionAction').removeClass('cancelCorrectionAction');
		$('.buttonForAction').removeClass('cancelAction');
	},
	'click .onePoint': function(event) {
		event.preventDefault();
		const playerId = $('#opponentPlayerModal').data('playerId');
		const isACancelAction = $('#opponentPlayerModal').find('.onePoint').hasClass('cancelAction');
		const gameId = this.gameData._id;
		const gameIndex = this.gameData.stats.evolution.length;
		const currentScoreGap = this.gameData.stats.yourClub.score - this.gameData.stats.opponent.score;
		const evolScore = {
			gameIndex,
			scoreGap: currentScoreGap - 1
		};
		if (isACancelAction) {
			Meteor.call('correctionOnePointTeamOpponent', gameId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			Meteor.call('onePointTeamOpponent', gameId, playerId, evolScore, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click .twoPoints': function(event) {
		event.preventDefault();
		const playerId = $('#opponentPlayerModal').data('playerId');
		const isACancelAction = $('#opponentPlayerModal').find('.twoPoints').hasClass('cancelAction');
		const gameId = this.gameData._id;
		const gameIndex = this.gameData.stats.evolution.length;
		const currentScoreGap = this.gameData.stats.yourClub.score - this.gameData.stats.opponent.score;
		const evolScore = {
			gameIndex,
			scoreGap: currentScoreGap - 2
		};
		if (isACancelAction) {
			Meteor.call('correctionTwoPointsTeamOpponent', gameId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			Meteor.call('twoPointsTeamOpponent', gameId, playerId, evolScore, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click .threePoints': function(event) {
		event.preventDefault();
		const playerId = $('#opponentPlayerModal').data('playerId');
		const isACancelAction = $('#opponentPlayerModal').find('.threePoints').hasClass('cancelAction');
		const gameId = this.gameData._id;
		const gameIndex = this.gameData.stats.evolution.length;
		const currentScoreGap = this.gameData.stats.yourClub.score - this.gameData.stats.opponent.score;
		const evolScore = {
			gameIndex,
			scoreGap: currentScoreGap - 3
		};
		if (isACancelAction) {
			Meteor.call('correctionThreePointsTeamOpponent', gameId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			Meteor.call('threePointsTeamOpponent', gameId, playerId, evolScore, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	}
});
