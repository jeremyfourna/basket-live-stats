import { Template } from 'meteor/templating';
import { TAPi18n } from 'meteor/tap:i18n';
import { savePoints } from './utils.js';
import R from 'ramda';

import './opponentPlayerModal.jade';

function removeCancelAction() {
	$('.actionBadge').remove();
	$('#oppCorrectionAction').removeClass('cancelCorrectionAction');
	$('.buttonForAction').removeClass('cancelAction');
}

Template.opponentPlayerModal.events({
	'show.bs.modal #opponentPlayerModal': function(event) {
		const button = $(event.relatedTarget); // Button that triggered the modal
		const jersey = button.data('jersey');
		const playerId = button.data('playerid');
		const firstName = button.data('firstname') || TAPi18n.__('firstName');
		const lastName = button.data('lastname') || TAPi18n.__('lastName');
		const whoIsDoingThisAction = TAPi18n.__('whoIsDoingThisAction');
		const num = TAPi18n.__('num');
		$('#opponentPlayerModal').data('playerid', playerId);
		$('.modal-title').text(`${whoIsDoingThisAction} ${num}${jersey} : ${firstName} ${lastName}`);
	},
	'click #oppCorrectionAction': function() {
		$('.buttonForAction').prepend('<span class=\'badge actionBadge\'>-1</span> ').addClass('cancelAction');
		$('#oppCorrectionAction').addClass('cancelCorrectionAction').text(TAPi18n.__('cancelCorrectionAction'));
	},
	'click #oppCloseModalButton': removeCancelAction,
	'click .cancelCorrectionAction': function() {
		$('.actionBadge').remove();
		$('#oppCorrectionAction').removeClass('cancelCorrectionAction').text(TAPi18n.__('correctionAction'));
		$('.buttonForAction').removeClass('cancelAction');
	},
	'hidden.bs.modal .modal': removeCancelAction,
	// Positive action
	'click #onePoint': function(event, template) {
		console.log(this, event, template);
		return savePoints(
			$('#onePoint').hasClass('cancelAction'),
			$('#opponentPlayerModal').data('playerid'),
			'opponentTeamId',
			'Teams.correctOnePointIn',
			'Teams.onePointIn', -1,
			R.path(['data', 'gameData'], Template.instance())
		);
	},
	'click #twoPoints': function() {
		return savePoints(
			$('#twoPoints').hasClass('cancelAction'),
			$('#opponentPlayerModal').data('playerid'),
			'opponentTeamId',
			'Teams.correctTwoPointsIn',
			'Teams.twoPointsIn', -2,
			R.path(['data', 'gameData'], Template.instance())
		);
	},
	'click #threePoints': function() {
		return savePoints(
			$('#threePoints').hasClass('cancelAction'),
			$('#opponentPlayerModal').data('playerid'),
			'opponentTeamId',
			'Teams.correctThreePointsIn',
			'Teams.threePointsIn', -3,
			R.path(['data', 'gameData'], Template.instance())
		);
	},
});