import { Template } from 'meteor/templating';
import R from 'ramda';
import 'meteor/sacha:spin';

import './stats.jade';
import './modal/playerModal.js';
import './modal/opponentPlayerModal.js';
import '../stateOfTheGame/stateOfTheGame.js';
import '../teamsAndScore/teamsAndScore.js';
import '../playersInGame/playersInGame.js';
import '../share/share.js';

function getDataForPlayersInGame(team, teamId, isHomeTeam, templateInstance) {
  console.log('getDataForPlayersInGame', templateInstance.data);
  const clubProps = R.pickAll(
    [team, teamId, 'isHomeTeam', 'playersInGame'],
    R.path(['data', 'gameData'], templateInstance)
  );

  const transformations = {
    isHomeTeam: R.always(isHomeTeam),
    playersInGame: () => R.filter(
      cur => R.equals(cur.teamId, R.prop(teamId, clubProps)),
      R.path(['data', 'playersDataInGame'], templateInstance)
    )
  };

  return R.evolve(transformations, clubProps);
}

Template.stats.helpers({
  dataForTeamsAndScore() {
    return R.compose(
      R.pick(['yourClub', 'opponent', 'yourClubTeamId', 'opponentTeamId']),
      R.path(['data', 'gameData'])
    )(Template.instance());
  },
  gameState() {
    return R.path(['data', 'gameData', 'gameState'], Template.instance());
  },
  gameId() {
    return R.path(['data', 'gameData', '_id'], Template.instance());
  },
  dataForPlayersInGameYourClub() {
    return getDataForPlayersInGame('yourClub', 'yourClubTeamId', true, Template.instance());
  },
  dataForPlayersInGameOpponent() {
    return getDataForPlayersInGame('opponent', 'opponentTeamId', false, Template.instance());
  }
});

Template.stats.events({
  'click .displayReplacement': () => {
    return $('#tabsForAGame a[href="#replacement"]').tab('show');
  },
  'click .doReplacement': () => {
    return $('#tabsForAGame a[href="#replacement"]').tab('show');
  }
});
