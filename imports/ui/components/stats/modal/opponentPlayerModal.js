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
	// Positive action
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
					return throwError(error.message);
				} else {
					Meteor.call('onePoint', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} * /
	},
	'click .twoPoints': function() {
		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				'stats.evolution': 1,
				'stats.yourClub.score': 1,
				'stats.opponent.score': 1
			}
		});
		var playerData = this;
		var evolScore = {
			gameIndex: gameData.stats.evolution.length,
			scoreGap: gameData.stats.yourClub.score - gameData.stats.opponent.score - 2
		};
		if ($('#' + playerData._id).find('.twoPoints').hasClass('cancelAction')) {
			Meteor.call('correctionTwoPointsTeamOpponent', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionTwoPoints', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('twoPointsTeamOpponent', gameData._id, evolScore, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('twoPoints', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	'click .threePoints': function() {
		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				'stats.evolution': 1,
				'stats.yourClub.score': 1,
				'stats.opponent.score': 1
			}
		});
		var playerData = this;
		var evolScore = {
			gameIndex: gameData.stats.evolution.length,
			scoreGap: gameData.stats.yourClub.score - gameData.stats.opponent.score - 3
		};
		if ($('#' + playerData._id).find('.threePoints').hasClass('cancelAction')) {
			Meteor.call('correctionThreePointsTeamOpponent', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionThreePoints', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('threePointsTeamOpponent', gameData._id, evolScore, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('threePoints', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	}
});
