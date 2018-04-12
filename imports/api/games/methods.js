import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Games, gameSchema } from './schema.js';
import { gameStateValues } from '../schemas.js';

Meteor.methods({
  'Games.addGame': (userId) => {
    check(userId, String);

    const game = {
      userId,
      createdAt: new Date(),
      gameState: 'notStarted',
      privateGame: false,
      evolution: [
        [0, 0]
      ],
      yourClub: '',
      yourClubTeamId: '',
      opponent: '',
      opponentTeamId: '',
      level: '',
      group: ''
    };

    check(game, gameSchema);

    return Games.insert(game);
  },
  'Games.addTeamsId': (gameId, yourClubTeamId, opponentTeamId) => {
    check(gameId, String);
    check(yourClubTeamId, String);
    check(opponentTeamId, String);

    return Games.update({
      _id: gameId
    }, {
      $set: {
        yourClubTeamId,
        opponentTeamId
      }
    });
  },
  'Games.deleteGame': (gameId) => {
    check(gameId, String);

    return Games.remove({
      _id: gameId
    });
  },
  'Games.updateGameInfos': (data) => {
    const methodSchema = new SimpleSchema({
      gameId: { type: String },
      yourClub: { type: String },
      opponent: { type: String },
      level: { type: String, optional: true },
      group: { type: String, optional: true }
    });
    check(data, methodSchema);

    return Games.update({ _id: data.gameId }, {
      $set: {
        yourClub: data.yourClub,
        opponent: data.opponent,
        level: data.level,
        group: data.group
      }
    });
  },
  'Games.switchGameState': (data) => {
    const methodSchema = new SimpleSchema({
      gameId: { type: String },
      status: { type: String, allowedValues: gameStateValues }
    });
    check(data, methodSchema);

    return Games.update({ _id: data.gameId }, {
      $set: { gameState: data.status }
    });
  },
  'Games.newEvolScore': (gameId, evolScore) => {
    const evolScoreSchema = new SimpleSchema({
      gameIndex: { type: Number, min: 0 },
      scoreGap: { type: Number }
    });
    check(gameId, String);
    check(evolScore, evolScoreSchema);

    return Games.update({
      _id: gameId
    }, {
      $push: {
        evolution: [
          evolScore.gameIndex,
          evolScore.scoreGap
        ]
      }
    });
  },
  'Games.correctNewEvolScore': (gameId) => {
    check(gameId, String);

    return Games.update({
      _id: gameId
    }, {
      $pop: {
        evolution: 1
      }
    });
  }
});
