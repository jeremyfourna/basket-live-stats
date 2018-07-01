import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import {
  __,
  path,
  prop
} from 'ramda';

import { Games, gameSchema } from './schema.js';
import { gameStateValues } from '../schemas.js';

Meteor.methods({
  'Games.addGame': userId => {
    check(userId, String);

    const game = {
      userId,
      createdAt: new Date(),
      gameState: 'notStarted',
      evolution: [
        [0, 0]
      ],
      yourClub: '',
      yourClubTeamId: '',
      opponent: '',
      opponentTeamId: ''
    };

    check(game, gameSchema);

    return Games.insert(game);
  },
  'Games.addTeamsId': data => {
    const p = prop(__, data);
    const methodSchema = new SimpleSchema({
      gameId: { type: String },
      yourClubTeamId: { type: String },
      opponentTeamId: { type: String }
    });
    check(data, methodSchema);

    return Games.update({
      _id: p('gameId')
    }, {
      $set: {
        yourClubTeamId: p('yourClubTeamId'),
        opponentTeamId: p('opponentTeamId')
      }
    });
  },
  'Games.deleteGame': gameId => {
    check(gameId, String);

    return Games.remove({
      _id: gameId
    });
  },
  'Games.updateGameInfos': data => {
    const p = prop(__, data);
    const methodSchema = new SimpleSchema({
      gameId: { type: String },
      yourClub: { type: String },
      opponent: { type: String }
    });
    check(data, methodSchema);

    return Games.update({ _id: p('gameId') }, {
      $set: {
        yourClub: p('yourClub'),
        opponent: p('opponent'),
        level: p('level'),
        group: p('group')
      }
    });
  },
  'Games.switchGameState': data => {
    const p = prop(__, data);
    const methodSchema = new SimpleSchema({
      gameId: { type: String },
      status: { type: String, allowedValues: gameStateValues }
    });
    check(data, methodSchema);

    return Games.update({ _id: p('gameId') }, {
      $set: { gameState: p('status') }
    });
  },
  'Games.newEvolScore': data => {
    const p = path(__, data);
    const evolScoreSchema = new SimpleSchema({
      gameIndex: { type: Number, min: 0 },
      scoreGap: { type: Number }
    });
    const methodSchema = new SimpleSchema({
      gameId: { type: String },
      evolScore: { type: evolScoreSchema }
    });
    check(data, methodSchema);


    return Games.update({
      _id: p(['gameId'])
    }, {
      $push: {
        evolution: [
          p(['evolScore', 'gameIndex']),
          p(['evolScore', 'scoreGap'])
        ]
      }
    });
  },
  'Games.correctNewEvolScore': gameId => {
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
