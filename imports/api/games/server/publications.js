import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Games } from '../schema.js';

// Publication who send back everything, use it carrefully
Meteor.publish('Games.games', () => {
  return Games.find({});
});

// Publication who send back the last 3 live games
Meteor.publish('Games.lastLiveGames', () => {
  return Games.find({
    gameState: {
      $nin: ['gameEnded']
    },
    privateGame: false
  }, {
    sort: {
      createdAt: -1
    }
  });
});

// Publication who send back the last 3 ended games
Meteor.publish('Games.last3EndedGames', () => {
  return Games.find({
    gameState: 'gameEnded',
    privateGame: false
  }, {
    limit: 3,
    sort: {
      createdAt: -1
    }
  });
});

// Send back one game
Meteor.publish('Games.aGame', gameId => {
  check(gameId, String);

  return Games.find({
    _id: gameId
  });
});

Meteor.publish('Games.oneGameForReplacement', gameId => {
  check(gameId, String);
  return Games.find({ _id: gameId }, {
    fields: {
      yourClub: 1,
      yourClubTeamId: 1,
      opponent: 1,
      opponentTeamId: 1,
      gameState: 1
    }
  });
});

Meteor.publish('Games.oneGameInfos', gameId => {
  check(gameId, String);
  return Games.find({ _id: gameId }, {
    fields: {
      yourClub: 1,
      yourClubTeamId: 1,
      opponent: 1,
      opponentTeamId: 1
    }
  });
});

Meteor.publish('Games.aGameForOwnership', gameId => {
  check(gameId, String);
  return Games.find({ _id: gameId }, {
    fields: {
      userId: 1
    }
  });
});

// Send back only the user's games
Meteor.publish('Games.myGames', userId => {
  return Games.find({ userId }, {
    fields: {
      userId: 1,
      yourClub: 1,
      yourClubTeamId: 1,
      opponent: 1,
      opponentTeamId: 1,
      gameState: 1
    }
  });
});

// Send back only the games that have been created less than 7 days ago
Meteor.publish('Games.liveGames', () => {
  return Games.find({
    privateGame: false,
    state: {
      $nin: ['notStarted']
    }
  });
});
