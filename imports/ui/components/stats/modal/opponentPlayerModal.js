import { Template } from 'meteor/templating';
import { TAPi18n } from 'meteor/tap:i18n';
import { savePoints, getDataFromElement, setDataInsideElement, setTextInsideElement } from './utils.js';
import R from 'ramda';
import $ from 'jquery';

import './opponentPlayerModal.jade';

function removeCancelAction() {
	$('.actionBadge').remove();
	$('#oppCorrectionAction').removeClass('cancelCorrectionAction');
	$('.buttonForAction').removeClass('cancelAction');
}

Template.opponentPlayerModal.events({
	'show.bs.modal #opponentPlayerModal': function(event) {
		const button = $(R.prop('relatedTarget', event)); // Button that triggered the modal
		const firstName = button.data('firstname') || TAPi18n.__('firstName');
		const lastName = button.data('lastname') || TAPi18n.__('lastName');

		setDataInsideElement('#opponentPlayerModal', 'playerid', button.data('playerid'));
		setTextInsideElement('.modal-title', `${TAPi18n.__('whoIsDoingThisAction')} ${TAPi18n.__('num')}${button.data('jersey')} : ${firstName} ${lastName}`);
	},
	'click #oppCorrectionAction': function() {
		$('.buttonForAction').prepend('<span class=\'badge actionBadge\'>-1</span> ')
			.addClass('cancelAction');
		$('#oppCorrectionAction').addClass('cancelCorrectionAction')
			.text(TAPi18n.__('cancelCorrectionAction'));
	},
	'click #oppCloseModalButton': removeCancelAction,
	'click .cancelCorrectionAction': function() {
		$('.actionBadge').remove();
		$('#oppCorrectionAction').removeClass('cancelCorrectionAction')
			.text(TAPi18n.__('correctionAction'));
		$('.buttonForAction').removeClass('cancelAction');
	},
	'hidden.bs.modal .modal': removeCancelAction,
	// Positive action
	'click #onePoint': function(event, template) {
		return savePoints(
			$(R.prop('currentTarget', event)).hasClass('cancelAction'),
			getDataFromElement('#opponentPlayerModal', 'playerid'),
			'opponentTeamId',
			'Teams.correctOnePointIn',
			'Teams.onePointIn', -1,
			R.path(['data', 'gameData'], Template.instance())
		);
	},
	'click #twoPoints': function() {
		return savePoints(
			$(R.prop('currentTarget', event)).hasClass('cancelAction'),
			getDataFromElement('#opponentPlayerModal', 'playerid'),
			'opponentTeamId',
			'Teams.correctTwoPointsIn',
			'Teams.twoPointsIn', -2,
			R.path(['data', 'gameData'], Template.instance())
		);
	},
	'click #threePoints': function() {
		return savePoints(
			$(R.prop('currentTarget', event)).hasClass('cancelAction'),
			getDataFromElement('#opponentPlayerModal', 'playerid'),
			'opponentTeamId',
			'Teams.correctThreePointsIn',
			'Teams.threePointsIn', -3,
			R.path(['data', 'gameData'], Template.instance())
		);
	},
});