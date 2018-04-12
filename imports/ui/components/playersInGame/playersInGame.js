import { Template } from 'meteor/templating';
import R from 'ramda';

import './playersInGame.jade';

Template.playersInGame.helpers({
  clubName() {
    const teamName = R.path(['data', 'props', 'clubName'], Template.instance());
    if (R.equals(true, R.path(['data', 'props', 'isHomeTeam'], Template.instance()))) {
      return teamName || TAPi18n.__('homeTeam');
    } else {
      return teamName || TAPi18n.__('awayTeam');
    }
  },
  players() {
    return R.path(['data', 'props', 'playersInGame'], Template.instance());
  },
  teamColor() {
    if (R.equals(true, R.path(['data', 'props', 'isHomeTeam'], Template.instance()))) {
      return 'btn-info';
    } else {
      return 'btn-warning';
    }
  },
  teamModal() {
    if (R.equals(true, R.path(['data', 'props', 'isHomeTeam'], Template.instance()))) {
      return '#playerModal';
    } else {
      return '#opponentPlayerModal';
    }
  }
});

Template.playersInGame.events({
  'click .displayReplacement': () => {
    $('#tabsForAGame a[href="#replacement"]').tab('show');
  },
  'click .doReplacement': () => {
    $('#tabsForAGame a[href="#replacement"]').tab('show');
  }
});