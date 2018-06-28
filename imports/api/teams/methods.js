import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import {
  Teams,
  teamschema
} from './schema.js';

Meteor.methods({
  'Teams.addTeam': gameId => {
    check(gameId, String);

    const team = {
      gameId,
      createdAt: new Date(),
      score: 0,
      evaluation: 0,
      points: {
        onePointIn: 0,
        onePointOut: 0,
        twoPointsIn: 0,
        twoPointsOut: 0,
        threePointsIn: 0,
        threePointsOut: 0
      },
      assists: 0,
      offReb: 0,
      defReb: 0,
      fouls: {
        provOffFouls: 0,
        provDefFouls: 0,
        offFouls: 0,
        defFouls: 0,
        totalFouls: 0,
        foul1FT: 0,
        foul2FT: 0,
        foul3FT: 0,
        techFouls: 0,
        antiSportFouls: 0,
        disqualifyingFouls: 0
      },
      steals: 0,
      blocks: 0,
      turnovers: 0
    };

    check(team, teamschema);

    return Teams.insert(team);
  },
  'Teams.assist': teamId => {
    // Check method params
    check(teamId, String);
    // If OK the code continue
    return Teams.update({ _id: teamId }, {
      $inc: {
        assists: 1,
        evaluation: 1
      }
    });
  },
  'Teams.correctAssist': teamId => {
    // Check method params
    check(teamId, String);
    // If OK the code continue
    return Teams.update({ _id: teamId }, {
      $inc: {
        assists: -1,
        evaluation: -1
      }
    });
  },
  'Teams.block': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        blocks: 1,
        evaluation: 1
      }
    });
  },
  'Teams.correctBlock': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        blocks: -1,
        evaluation: -1
      }
    });
  },
  'Teams.provOffFoul': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'fouls.provOffFouls': 1,
        evaluation: 1
      }
    });
  },
  'Teams.correctProvOffFoul': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'fouls.provOffFouls': -1,
        evaluation: -1
      }
    });
  },
  'Teams.provDefFoul': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'fouls.provDefFouls': 1,
        evaluation: 1
      }
    });
  },
  'Teams.correctProvDefFoul': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'fouls.provDefFouls': -1,
        evaluation: -1
      }
    });
  },
  'Teams.offFoul': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'fouls.offFouls': 1,
        'fouls.totalFouls': 1,
        evaluation: -1
      }
    });
  },
  'Teams.correctOffFoul': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'fouls.offFouls': -1,
        'fouls.totalFouls': -1,
        evaluation: 1
      }
    });
  },
  'Teams.defFoul': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'fouls.defFouls': 1,
        'fouls.totalFouls': 1,
        evaluation: -1
      }
    });
  },
  'Teams.correctDefFoul': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'fouls.defFouls': -1,
        'fouls.totalFouls': -1,
        evaluation: 1
      }
    });
  },
  'Teams.foul1FT': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'fouls.foul1FT': 1,
        'fouls.totalFouls': 1,
        evaluation: -1
      }
    });
  },
  'Teams.correctFoul1FT': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'fouls.foul1FT': -1,
        'fouls.totalFouls': -1,
        evaluation: 1
      }
    });
  },
  'Teams.foul2FT': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'fouls.foul2FT': 1,
        'fouls.totalFouls': 1,
        evaluation: -1
      }
    });
  },
  'Teams.correctFoul2FT': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'fouls.foul2FT': -1,
        'fouls.totalFouls': -1,
        evaluation: 1
      }
    });
  },
  'Teams.foul3FT': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'fouls.foul3FT': 1,
        'fouls.totalFouls': 1,
        evaluation: -1
      }
    });
  },
  'Teams.correctFoul3FT': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'fouls.foul3FT': -1,
        'fouls.totalFouls': -1,
        evaluation: 1
      }
    });
  },
  'Teams.techFoul': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'fouls.techFouls': 1,
        'fouls.totalFouls': 1,
        evaluation: -1
      }
    });
  },
  'Teams.correctTechFoul': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'fouls.techFouls': -1,
        'fouls.totalFouls': -1,
        evaluation: 1
      }
    });
  },
  'Teams.antiSportFoul': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'fouls.antiSportFouls': 1,
        'fouls.totalFouls': 1,
        evaluation: -1
      }
    });
  },
  'Teams.correctAntiSportFoul': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'fouls.antiSportFouls': -1,
        'fouls.totalFouls': -1,
        evaluation: 1
      }
    });
  },
  'Teams.disqualifyingFoul': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'fouls.disqualifyingFouls': 1,
        'fouls.totalFouls': 1,
        evaluation: -1
      }
    });
  },
  'Teams.correctDisqualifyingFoul': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'fouls.disqualifyingFouls': -1,
        'fouls.totalFouls': -1,
        evaluation: 1
      }
    });
  },
  'Teams.onePointIn': (gameId, teamId, playerId, evolScore) => {
    // Check method params
    const evolScoreSchema = new SimpleSchema({
      gameIndex: { type: Number, min: 0 },
      scoreGap: { type: Number }
    });
    check(gameId, String); // gameId is passed upon the hooks that will run after this method
    check(teamId, String);
    check(playerId, String); // teamId is passed upon the hooks that will run after this method
    check(evolScore, evolScoreSchema); // evolScore is passed upon the hooks that will run after this method
    // If OK the code continue

    return Teams.update({ _id: teamId }, {
      $inc: {
        'points.onePointIn': 1,
        score: 1,
        evaluation: 1
      }
    });
  },
  'Teams.correctOnePointIn': (gameId, teamId, playerId) => {
    // Check method params
    check(gameId, String); // gameId is passed upon the hooks that will run after this method
    check(teamId, String);
    check(playerId, String); // playerId is passed upon the hooks that will run after this method
    // If OK the code continue
    return Teams.update({ _id: teamId }, {
      $inc: {
        'points.onePointIn': -1,
        score: -1,
        evaluation: -1
      },
      $pop: {
        evolution: 1
      }
    });
  },
  'Teams.onePointOut': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'points.onePointOut': 1,
        evaluation: -1
      }
    });
  },
  'Teams.correctOnePointOut': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'points.onePointOut': -1,
        evaluation: 1
      }
    });
  },
  'Teams.twoPointsIn': (gameId, teamId, playerId, evolScore) => {
    // Check method params
    const evolScoreSchema = new SimpleSchema({
      gameIndex: { type: Number, min: 0 },
      scoreGap: { type: Number }
    });
    check(gameId, String); // gameId is passed upon the hooks that will run after this method
    check(teamId, String);
    check(playerId, String); // playerId is passed upon the hooks that will run after this method
    check(evolScore, evolScoreSchema); // evolScore is passed upon the hooks that will run after this method
    // If OK the code continue
    return Teams.update({ _id: teamId }, {
      $inc: {
        'points.twoPointsIn': 1,
        score: 2,
        evaluation: 2
      }
    });
  },
  'Teams.correctTwoPointsIn': (gameId, teamId, playerId) => {
    // Check method params
    check(gameId, String); // gameId is passed upon the hooks that will run after this method
    check(teamId, String);
    check(playerId, String); // playerId is passed upon the hooks that will run after this method
    // If OK the code continue
    return Teams.update({ _id: teamId }, {
      $inc: {
        'points.twoPointsIn': -1,
        score: -2,
        evaluation: -2
      },
      $pop: {
        evolution: 1
      }
    });
  },
  'Teams.twoPointsOut': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'points.twoPointsOut': 1,
        evaluation: -1
      }
    });
  },
  'Teams.correctTwoPointsOut': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'points.twoPointsOut': -1,
        evaluation: 1
      }
    });
  },
  'Teams.threePointsIn': (gameId, teamId, playerId, evolScore) => {
    // Check method params
    const evolScoreSchema = new SimpleSchema({
      gameIndex: { type: Number, min: 0 },
      scoreGap: { type: Number }
    });
    check(gameId, String); // gameId is passed upon the hooks that will run after this method
    check(teamId, String);
    check(playerId, String); // playerId is passed upon the hooks that will run after this method
    check(evolScore, evolScoreSchema); // evolScore is passed upon the hooks that will run after this method
    // If OK the code continue
    return Teams.update({ _id: teamId }, {
      $inc: {
        'points.threePointsIn': 1,
        score: 3,
        evaluation: 3
      }
    });
  },
  'Teams.correctThreePointsIn': (gameId, teamId, playerId) => {
    // Check method params
    check(gameId, String); // gameId is passed upon the hooks that will run after this method
    check(teamId, String);
    check(playerId, String); // playerId is passed upon the hooks that will run after this method
    // If OK the code continue
    return Teams.update({ _id: teamId }, {
      $inc: {
        'points.threePointsIn': -1,
        score: -3,
        evaluation: -3
      },
      $pop: {
        evolution: 1
      }
    });
  },
  'Teams.threePointsOut': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'points.threePointsOut': 1,
        evaluation: -1
      }
    });
  },
  'Teams.correctThreePointsOut': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        'points.threePointsOut': -1,
        evaluation: 1
      }
    });
  },
  'Teams.offReb': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        offReb: 1,
        evaluation: 1
      }
    });
  },
  'Teams.correctOffReb': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        offReb: -1,
        evaluation: -1
      }
    });
  },
  'Teams.defReb': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        defReb: 1,
        evaluation: 1
      }
    });
  },
  'Teams.correctDefReb': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        defReb: -1,
        evaluation: -1
      }
    });
  },
  'Teams.steal': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        steals: 1,
        evaluation: 1
      }
    });
  },
  'Teams.correctSteal': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        steals: -1,
        evaluation: -1
      }
    });
  },
  'Teams.turnover': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        turnovers: 1,
        evaluation: -1
      }
    });
  },
  'Teams.correctTurnover': teamId => {
    check(teamId, String);

    return Teams.update({ _id: teamId }, {
      $inc: {
        turnovers: -1,
        evaluation: 1
      }
    });
  }
});
