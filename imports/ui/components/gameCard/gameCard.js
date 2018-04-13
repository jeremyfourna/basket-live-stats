import { Template } from 'meteor/templating';
import 'meteor/sacha:spin';
import R from 'ramda';
import { getTeamScore } from '../utils.js';
import { TAPi18n } from 'meteor/tap:i18n';

import './gameCard.jade';

Template.gameCard.onCreated(function() {
  this.autorun(() => this.subscribe('Teams.teamsForAGame', R.path(['data', '_id'], this)));
});

Template.gameCard.helpers({
  yourClub() {
    return R.path(['data', 'yourClub'], Template.instance()) || TAPi18n.__('homeTeam');
  },
  opponent() {
    return R.path(['data', 'opponent'], Template.instance()) || TAPi18n.__('awayTeam');
  },
  yourClubScore() {
    return getTeamScore(R.path(['data', 'yourClubTeamId'], Template.instance()));
  },
  opponentScore() {
    return getTeamScore(R.path(['data', 'opponentTeamId'], Template.instance()));
  },
});
