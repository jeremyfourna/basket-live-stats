import { Meteor } from 'meteor/meteor';
import { MethodHooks } from 'meteor/doctorpangloss:method-hooks';
import {
  forEach,
  head,
  prop
} from 'ramda';
import { methodHookHelper } from '../utils.js';

function addTeamsForGame(resultOfGameCreation) {
  const gameId = prop('result', resultOfGameCreation);

  const yourClubTeamId = Meteor.call('Teams.addTeam', gameId);
  const opponentTeamId = Meteor.call('Teams.addTeam', gameId);

  Meteor.call('Games.addTeamsId', {
    gameId,
    yourClubTeamId,
    opponentTeamId
  });

  return gameId;
}

function stuffToDeleteWhenGameIsDeleted(resultOfGameDeletion) {
  const gameId = head(prop('arguments', resultOfGameDeletion));

  const listOfMethodToCall = [
    'Teams.deleteTeams',
    'Players.deletePlayers',
    'Coachs.deleteCoachs'
  ];

  forEach(method => {
    Meteor.call(method, gameId);
  }, listOfMethodToCall);

  return prop('result', resultOfGameDeletion);
}

// Hooks
MethodHooks.after('Games.addGame', methodHookHelper(addTeamsForGame));
MethodHooks.after('Games.deleteGame', methodHookHelper(stuffToDeleteWhenGameIsDeleted));
