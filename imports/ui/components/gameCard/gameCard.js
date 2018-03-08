import { Template } from 'meteor/templating';
import 'meteor/sacha:spin';
import R from 'ramda';
import { getTeamScore } from '../utils.js';
import { TAPi18n } from 'meteor/tap:i18n';

import './gameCard.jade';

Template.gameCard.onCreated(function() {
  this.autorun(() => {
    const gameId = this.data._id;

    this.subscribe('Teams.teamsForAGame', gameId);
  });
});

Template.gameCard.helpers({
  yourClub() {
    return this.yourClub || TAPi18n.__('homeTeam');
  },
  opponent() {
    return this.opponent || TAPi18n.__('awayTeam');
  },
  yourClubScore() {
    return getTeamScore(R.prop('yourClubTeamId', this));
  },
  opponentScore() {
    return getTeamScore(R.prop('opponentTeamId', this));
  },
});
