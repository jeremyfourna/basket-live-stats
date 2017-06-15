import { Template } from 'meteor/templating';
import { TAPi18n } from 'meteor/tap:i18n';
import { savePoints, saveAction } from './utils.js';

import './playerModal.jade';

function removeCancelAction() {
	$('.actionBadge').remove();
	$('#correctionAction').removeClass('cancelCorrectionAction');
	$('.buttonForAction').removeClass('cancelAction');
}

Template.playerModal.events({
	'show.bs.modal #playerModal': function(event) {
		let button = $(event.relatedTarget); // Button that triggered the modal
		let jersey = button.data('jersey');
		let playerId = button.data('playerid');
		let firstName = button.data('firstname') || TAPi18n.__('firstName');
		let lastName = button.data('lastname') || TAPi18n.__('lastName');
		let whoIsDoingThisAction = TAPi18n.__('whoIsDoingThisAction');
		let num = TAPi18n.__('num');
		$('#playerModal').data('playerid', playerId);
		$('.modal-title').text(`${whoIsDoingThisAction} ${num}${jersey} : ${firstName} ${lastName}`);
	},
	'click #correctionAction': function() {
		$('.buttonForAction').prepend('<span class=\'badge actionBadge\'>-1</span> ').addClass('cancelAction');
		$('#correctionAction').addClass('cancelCorrectionAction').text(TAPi18n.__('cancelCorrectionAction'));
	},
	'click #closeModalButton': removeCancelAction,
	'click .cancelCorrectionAction': function() {
		$('.actionBadge').remove();
		$('#correctionAction').removeClass('cancelCorrectionAction').text(TAPi18n.__('correctionAction'));
		$('.buttonForAction').removeClass('cancelAction');
	},
	'hidden.bs.modal .modal': removeCancelAction,
	// Positive action
	'click #onePoint': function(event) {
		event.preventDefault();
		return savePoints.bind(
			this,
			'#onePoint',
			'#playerModal',
			'yourClubTeamId',
			'Teams.correctOnePointIn',
			'Teams.onePointIn',
			1
		);
	},
	'click #twoPoints': function(event) {
		event.preventDefault();
		return savePoints.bind(
			this,
			'#twoPoints',
			'#playerModal',
			'yourClubTeamId',
			'Teams.correctTwoPointsIn',
			'Teams.twoPointsIn',
			2
		);
	},
	'click #threePoints': function(event) {
		event.preventDefault();
		return savePoints.bind(
			this,
			'#threePoints',
			'#playerModal',
			'yourClubTeamId',
			'Teams.correctThreePointsIn',
			'Teams.threePointsIn',
			3
		);
	},
	'click #assist': function(event) {
		event.preventDefault();
		return saveAction.bind(
			this,
			'#assist',
			'#playerModal',
			'yourClubTeamId',
			'Players.correctAssist',
			'Players.assist'
		);
	},
	'click #offReb': function(event) {
		event.preventDefault();
		return saveAction.bind(
			this,
			'#offReb',
			'#playerModal',
			'yourClubTeamId',
			'Players.correctOffReb',
			'Players.offReb'
		);
	},
	'click #defReb': function(event) {
		event.preventDefault();
		return saveAction.bind(
			this,
			'#defReb',
			'#playerModal',
			'yourClubTeamId',
			'Players.correctDefReb',
			'Players.defReb'
		);
	},
	'click #provOffFoul': function(event) {
		event.preventDefault();
		return saveAction.bind(
			this,
			'#provOffFoul',
			'#playerModal',
			'yourClubTeamId',
			'Players.correctProvOffFoul',
			'Players.provOffFoul'
		);
	},
	'click #steal': function(event) {
		event.preventDefault();
		return saveAction.bind(
			this,
			'#steal',
			'#playerModal',
			'yourClubTeamId',
			'Players.correctSteal',
			'Players.steal'
		);
	},
	'click #block': function(event) {
		event.preventDefault();
		return saveAction.bind(
			this,
			'#block',
			'#playerModal',
			'yourClubTeamId',
			'Players.correctBlock',
			'Players.block'
		);
	},
	'click #provDefFoul': function(event) {
		event.preventDefault();
		return saveAction.bind(
			this,
			'#provDefFoul',
			'#playerModal',
			'yourClubTeamId',
			'Players.correctProvDefFoul',
			'Players.provDefFoul'
		);
	},
	// Negative action
	'click #onePointOut': function(event) {
		event.preventDefault();
		return saveAction.bind(
			this,
			'#onePointOut',
			'#playerModal',
			'yourClubTeamId',
			'Players.correctOnePointOut',
			'Players.onePointOut'
		);
	},
	'click #twoPointsOut': function(event) {
		event.preventDefault();
		return saveAction.bind(
			this,
			'#twoPointsOut',
			'#playerModal',
			'yourClubTeamId',
			'Players.correctTwoPointsOut',
			'Players.twoPointsOut'
		);
	},
	'click #threePointsOut': function(event) {
		event.preventDefault();
		return saveAction.bind(
			this,
			'#threePointsOut',
			'#playerModal',
			'yourClubTeamId',
			'Players.correctThreePointsOut',
			'Players.threePointsOut'
		);
	},
	'click #turnover': function(event) {
		event.preventDefault();
		return saveAction.bind(
			this,
			'#turnover',
			'#playerModal',
			'yourClubTeamId',
			'Players.correctTurnover',
			'Players.turnover'
		);
	},
	'click #offFoul': function(event) {
		event.preventDefault();
		return saveAction.bind(
			this,
			'#offFoul',
			'#playerModal',
			'yourClubTeamId',
			'Players.correctOffFoul',
			'Players.offFoul'
		);
	},
	'click #defFoul': function(event) {
		event.preventDefault();
		return saveAction.bind(
			this,
			'#defFoul',
			'#playerModal',
			'yourClubTeamId',
			'Players.correctDefFoul',
			'Players.defFoul'
		);
	},
	'click #foul1FT': function(event) {
		event.preventDefault();
		return saveAction.bind(
			this,
			'#foul1FT',
			'#playerModal',
			'yourClubTeamId',
			'Players.correctFoul1FT',
			'Players.foul1FT'
		);
	},
	'click #foul2FT': function(event) {
		event.preventDefault();
		return saveAction.bind(
			this,
			'#foul2FT',
			'#playerModal',
			'yourClubTeamId',
			'Players.correctFoul2FT',
			'Players.foul2FT'
		);
	},
	'click #foul3FT': function(event) {
		event.preventDefault();
		return saveAction.bind(
			this,
			'#foul3FT',
			'#playerModal',
			'yourClubTeamId',
			'Players.correctFoul3FT',
			'Players.foul3FT'
		);
	},
	'click #techFoul': function(event) {
		event.preventDefault();
		return saveAction.bind(
			this,
			'#techFoul',
			'#playerModal',
			'yourClubTeamId',
			'Players.correctTechFoul',
			'Players.techFoul'
		);
	},
	'click #antiSportFoul': function(event) {
		event.preventDefault();
		return saveAction.bind(
			this,
			'#antiSportFoul',
			'#playerModal',
			'yourClubTeamId',
			'Players.correctAntiSportFoul',
			'Players.antiSportFoul'
		);
	},
	'click #disqualifyingFoul': function(event) {
		event.preventDefault();
		return saveAction.bind(
			this,
			'#disqualifyingFoul',
			'#playerModal',
			'yourClubTeamId',
			'Players.correctDisqualifyingFoul',
			'Players.disqualifyingFoul'
		);
	}
});
