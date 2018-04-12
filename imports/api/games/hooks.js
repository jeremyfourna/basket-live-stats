import { Meteor } from 'meteor/meteor';
import { MethodHooks } from 'meteor/doctorpangloss:method-hooks';
import R from 'ramda';

MethodHooks.after('Games.addGame', (options) => {
  if (R.prop('error', options)) {
    return;
  } else if (R.prop('result', options)) {
    const gameId = R.prop('result', options);

    const yourClubTeamId = Meteor.call('Teams.addTeam', gameId);
    const opponentTeamId = Meteor.call('Teams.addTeam', gameId);

    Meteor.call('Games.addTeamsId', gameId, yourClubTeamId, opponentTeamId);

    return gameId;
  }
});

MethodHooks.after('Games.deleteGame', (options) => {
  if (R.prop('error', options)) {
    return;
  } else if (R.prop('result', options)) {
    const gameId = R.head(R.prop('arguments', options));

    const listOfMethodToCall = [
      'Teams.deleteTeams',
      'Players.deletePlayers',
      'Coachs.deleteCoachs'
    ];

    R.forEach((method) => {
      Meteor.call(method, gameId);
    }, listOfMethodToCall);

    return R.prop('result', options);
  }
});