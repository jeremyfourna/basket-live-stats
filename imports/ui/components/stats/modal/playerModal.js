import { Template } from 'meteor/templating';
import { TAPi18n } from 'meteor/tap:i18n';
import {
  getDataFromElement,
  isACancelAction,
  savePoints,
  saveAction,
  setDataInsideElement,
  setTextInsideElement
} from './utils.js';
import R from 'ramda';
import $ from 'jquery';

import './playerModal.jade';

function removeCancelAction() {
  $('.actionBadge').remove();
  $('#correctionAction').removeClass('cancelCorrectionAction');
  $('.buttonForAction').removeClass('cancelAction');
}

Template.playerModal.events({
  'show.bs.modal #playerModal': function(event) {
    const button = $(R.prop('relatedTarget', event)); // Button that triggered the modal
    const firstName = button.data('firstname') || TAPi18n.__('firstName');
    const lastName = button.data('lastname') || TAPi18n.__('lastName');

    setDataInsideElement('#playerModal', 'playerid', button.data('playerid'));
    setTextInsideElement('.modal-title', `${TAPi18n.__('whoIsDoingThisAction')} ${TAPi18n.__('num')}${button.data('jersey')} : ${firstName} ${lastName}`);
  },
  'click #correctionAction': function() {
    $('.buttonForAction').prepend('<span class=\'badge actionBadge\'>-1</span> ')
      .addClass('cancelAction');
    $('#correctionAction').addClass('cancelCorrectionAction')
      .text(TAPi18n.__('cancelCorrectionAction'));
  },
  'click #closeModalButton': removeCancelAction,
  'click .cancelCorrectionAction': function() {
    $('.actionBadge').remove();
    $('#correctionAction').removeClass('cancelCorrectionAction')
      .text(TAPi18n.__('correctionAction'));
    $('.buttonForAction').removeClass('cancelAction');
  },
  'hidden.bs.modal .modal': removeCancelAction,
  // Positive action
  'click #onePoint': event => {
    const p = R.prop(R.__, R.path(['data', 'gameData'], Template.instance()));
    const scope = {
      correctionMethod: 'Teams.correctOnePointIn',
      evolutionLength: R.length(p('evolution')),
      gameId: p('_id'),
      method: 'Teams.onePointIn',
      playerId: getDataFromElement('playerid', '#playerModal'),
      points: 1,
      scoreGap: R.last(R.last(p('evolution'))),
      teamId: p('yourClubTeamId'),
    };

    return savePoints(isACancelAction(R.prop('currentTarget', event)), scope);
  },
  'click #twoPoints': event => {
    const p = R.prop(R.__, R.path(['data', 'gameData'], Template.instance()));
    const scope = {
      correctionMethod: 'Teams.correctTwoPointsIn',
      evolutionLength: R.length(p('evolution')),
      gameId: p('_id'),
      method: 'Teams.twoPointsIn',
      playerId: getDataFromElement('playerid', '#playerModal'),
      points: 2,
      scoreGap: R.last(R.last(p('evolution'))),
      teamId: p('yourClubTeamId'),
    };

    return savePoints(isACancelAction(R.prop('currentTarget', event)), scope);
  },
  'click #threePoints': function(event) {
    const p = R.prop(R.__, R.path(['data', 'gameData'], Template.instance()));
    const scope = {
      correctionMethod: 'Teams.correctThreePointsIn',
      evolutionLength: R.length(p('evolution')),
      gameId: p('_id'),
      method: 'Teams.threePointsIn',
      playerId: getDataFromElement('playerid', '#playerModal'),
      points: 3,
      scoreGap: R.last(R.last(p('evolution'))),
      teamId: p('yourClubTeamId'),
    };

    return savePoints(isACancelAction(R.prop('currentTarget', event)), scope);
  },
  'click #assist': function(event) {
    return saveAction(
      $(R.prop('currentTarget', event)).hasClass('cancelAction'),
      getDataFromElement('#playerModal', 'playerid'),
      R.path(['data', 'gameData', 'yourClubTeamId'], Template.instance()),
      'Players.correctAssist',
      'Players.assist'
    );
  },
  'click #offReb': function(event) {
    return saveAction(
      $(R.prop('currentTarget', event)).hasClass('cancelAction'),
      getDataFromElement('#playerModal', 'playerid'),
      R.path(['data', 'gameData', 'yourClubTeamId'], Template.instance()),
      'Players.correctOffReb',
      'Players.offReb'
    );
  },
  'click #defReb': function(event) {
    return saveAction(
      $(R.prop('currentTarget', event)).hasClass('cancelAction'),
      getDataFromElement('#playerModal', 'playerid'),
      R.path(['data', 'gameData', 'yourClubTeamId'], Template.instance()),
      'Players.correctDefReb',
      'Players.defReb'
    );
  },
  'click #provOffFoul': function(event) {
    return saveAction(
      $(R.prop('currentTarget', event)).hasClass('cancelAction'),
      getDataFromElement('#playerModal', 'playerid'),
      R.path(['data', 'gameData', 'yourClubTeamId'], Template.instance()),
      'Players.correctProvOffFoul',
      'Players.provOffFoul'
    );
  },
  'click #steal': function(event) {
    return saveAction(
      $(R.prop('currentTarget', event)).hasClass('cancelAction'),
      getDataFromElement('#playerModal', 'playerid'),
      R.path(['data', 'gameData', 'yourClubTeamId'], Template.instance()),
      'Players.correctSteal',
      'Players.steal'
    );
  },
  'click #block': function(event) {
    return saveAction(
      $(R.prop('currentTarget', event)).hasClass('cancelAction'),
      getDataFromElement('#playerModal', 'playerid'),
      R.path(['data', 'gameData', 'yourClubTeamId'], Template.instance()),
      'Players.correctBlock',
      'Players.block'
    );
  },
  'click #provDefFoul': function(event) {
    return saveAction(
      $(R.prop('currentTarget', event)).hasClass('cancelAction'),
      getDataFromElement('#playerModal', 'playerid'),
      R.path(['data', 'gameData', 'yourClubTeamId'], Template.instance()),
      'Players.correctProvDefFoul',
      'Players.provDefFoul'
    );
  },
  // Negative action
  'click #onePointOut': function(event) {
    return saveAction(
      $(R.prop('currentTarget', event)).hasClass('cancelAction'),
      getDataFromElement('#playerModal', 'playerid'),
      R.path(['data', 'gameData', 'yourClubTeamId'], Template.instance()),
      'Players.correctOnePointOut',
      'Players.onePointOut'
    );
  },
  'click #twoPointsOut': function(event) {
    return saveAction(
      $(R.prop('currentTarget', event)).hasClass('cancelAction'),
      getDataFromElement('#playerModal', 'playerid'),
      R.path(['data', 'gameData', 'yourClubTeamId'], Template.instance()),
      'Players.correctTwoPointsOut',
      'Players.twoPointsOut'
    );
  },
  'click #threePointsOut': function(event) {
    return saveAction(
      $(R.prop('currentTarget', event)).hasClass('cancelAction'),
      getDataFromElement('#playerModal', 'playerid'),
      R.path(['data', 'gameData', 'yourClubTeamId'], Template.instance()),
      'Players.correctThreePointsOut',
      'Players.threePointsOut'
    );
  },
  'click #turnover': function(event) {
    return saveAction(
      $(R.prop('currentTarget', event)).hasClass('cancelAction'),
      getDataFromElement('#playerModal', 'playerid'),
      R.path(['data', 'gameData', 'yourClubTeamId'], Template.instance()),
      'Players.correctTurnover',
      'Players.turnover'
    );
  },
  'click #offFoul': function(event) {
    return saveAction(
      $(R.prop('currentTarget', event)).hasClass('cancelAction'),
      getDataFromElement('#playerModal', 'playerid'),
      R.path(['data', 'gameData', 'yourClubTeamId'], Template.instance()),
      'Players.correctOffFoul',
      'Players.offFoul'
    );
  },
  'click #defFoul': function(event) {
    return saveAction(
      $(R.prop('currentTarget', event)).hasClass('cancelAction'),
      getDataFromElement('#playerModal', 'playerid'),
      R.path(['data', 'gameData', 'yourClubTeamId'], Template.instance()),
      'Players.correctDefFoul',
      'Players.defFoul'
    );
  },
  'click #foul1FT': function(event) {
    return saveAction(
      $(R.prop('currentTarget', event)).hasClass('cancelAction'),
      getDataFromElement('#playerModal', 'playerid'),
      R.path(['data', 'gameData', 'yourClubTeamId'], Template.instance()),
      'Players.correctFoul1FT',
      'Players.foul1FT'
    );
  },
  'click #foul2FT': function(event) {
    return saveAction(
      $(R.prop('currentTarget', event)).hasClass('cancelAction'),
      getDataFromElement('#playerModal', 'playerid'),
      R.path(['data', 'gameData', 'yourClubTeamId'], Template.instance()),
      'Players.correctFoul2FT',
      'Players.foul2FT'
    );
  },
  'click #foul3FT': function(event) {
    return saveAction(
      $(R.prop('currentTarget', event)).hasClass('cancelAction'),
      getDataFromElement('#playerModal', 'playerid'),
      R.path(['data', 'gameData', 'yourClubTeamId'], Template.instance()),
      'Players.correctFoul3FT',
      'Players.foul3FT'
    );
  },
  'click #techFoul': function(event) {
    return saveAction(
      $(R.prop('currentTarget', event)).hasClass('cancelAction'),
      getDataFromElement('#playerModal', 'playerid'),
      R.path(['data', 'gameData', 'yourClubTeamId'], Template.instance()),
      'Players.correctTechFoul',
      'Players.techFoul'
    );
  },
  'click #antiSportFoul': function(event) {
    return saveAction(
      $(R.prop('currentTarget', event)).hasClass('cancelAction'),
      getDataFromElement('#playerModal', 'playerid'),
      R.path(['data', 'gameData', 'yourClubTeamId'], Template.instance()),
      'Players.correctAntiSportFoul',
      'Players.antiSportFoul'
    );
  },
  'click #disqualifyingFoul': function(event) {
    return saveAction(
      $(R.prop('currentTarget', event)).hasClass('cancelAction'),
      getDataFromElement('#playerModal', 'playerid'),
      R.path(['data', 'gameData', 'yourClubTeamId'], Template.instance()),
      'Players.correctDisqualifyingFoul',
      'Players.disqualifyingFoul'
    );
  }
});
