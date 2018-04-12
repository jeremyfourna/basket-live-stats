import { Template } from 'meteor/templating';
import { TAPi18n } from 'meteor/tap:i18n';
import R from 'ramda';
import { getTeamScore } from '../utils.js';

import './teamsAndScore.jade';

Template.teamsAndScore.helpers({
  yourClub() {
    return R.path(['data', 'props', 'yourClub'], Template.instance()) || TAPi18n.__('homeTeam');
  },
  opponent() {
    return R.path(['data', 'props', 'opponent'], Template.instance()) || TAPi18n.__('awayTeam');
  },
  yourClubScore() {
    return getTeamScore(R.path(['data', 'props', 'yourClubTeamId'], Template.instance()));
  },
  opponentScore() {
    return getTeamScore(R.path(['data', 'props', 'opponentTeamId'], Template.instance()));
  }
});