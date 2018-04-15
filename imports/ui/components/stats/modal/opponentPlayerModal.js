import { Template } from 'meteor/templating';
import { TAPi18n } from 'meteor/tap:i18n';
import {
  savePoints,
  getDataFromElement,
  isACancelAction,
  setDataInsideElement,
  setTextInsideElement
} from './utils.js';
import R from 'ramda';
import $ from 'jquery';

import './opponentPlayerModal.jade';

function removeCancelAction() {
  $('.actionBadge').remove();
  $('#oppCorrectionAction').removeClass('cancelCorrectionAction');
  $('.buttonForAction').removeClass('cancelAction');
}

Template.opponentPlayerModal.events({
  'show.bs.modal #opponentPlayerModal': event => {
    const button = $(R.prop('relatedTarget', event)); // Button that triggered the modal
    const firstName = button.data('firstname');
    const lastName = button.data('lastname');

    setDataInsideElement('#opponentPlayerModal', 'playerid', button.data('playerid'));
    setTextInsideElement('.modal-title', `${TAPi18n.__('whoIsDoingThisAction')} ${TAPi18n.__('num')}${button.data('jersey')}: ${firstName} ${lastName}`);
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
  'click #onePoint': event => {
    const p = R.prop(R.__, R.path(['data', 'gameData'], Template.instance()));
    const scope = {
      correctionMethod: 'Teams.correctOnePointIn',
      evolutionLength: R.length(p('evolution')),
      gameId: p('_id'),
      method: 'Teams.onePointIn',
      playerId: getDataFromElement('playerid', '#opponentPlayerModal'),
      points: -1,
      scoreGap: R.last(R.last(p('evolution'))),
      teamId: p('opponentTeamId'),
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
      playerId: getDataFromElement('playerid', '#opponentPlayerModal'),
      points: -2,
      scoreGap: R.last(R.last(p('evolution'))),
      teamId: p('opponentTeamId'),
    };

    return savePoints(isACancelAction(R.prop('currentTarget', event)), scope);
  },
  'click #threePoints': event => {
    const p = R.prop(R.__, R.path(['data', 'gameData'], Template.instance()));
    const scope = {
      correctionMethod: 'Teams.correctThreePointsIn',
      evolutionLength: R.length(p('evolution')),
      gameId: p('_id'),
      method: 'Teams.threePointsIn',
      playerId: getDataFromElement('playerid', '#opponentPlayerModal'),
      points: -3,
      scoreGap: R.last(R.last(p('evolution'))),
      teamId: p('opponentTeamId'),
    };

    return savePoints(isACancelAction(R.prop('currentTarget', event)), scope);
  },
});
