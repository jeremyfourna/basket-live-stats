import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Teams } from '../schema.js';

// yourClub methods
Meteor.methods({
    assists(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                assists: 1,
                evaluation: 1
            }
        });
    },
    correctAssists(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                assists: -1,
                evaluation: -1
            }
        });
    },
    blocks(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                blocks: 1,
                evaluation: 1
            }
        });
    },
    correctBlocks(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                blocks: -1,
                evaluation: -1
            }
        });
    },
    provOffFouls(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'fouls.provOffFouls': 1,
                evaluation: 1
            }
        });
    },
    correctProvOffFouls(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'provFouls.offFouls': -1,
                evaluation: -1
            }
        });
    },
    provDefFouls(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'provFouls.defFouls': 1,
                evaluation: 1
            }
        });
    },
    correctProvDefFouls(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'provFouls.defFouls': -1,
                evaluation: -1
            }
        });
    },
    offFouls(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'fouls.offFouls': 1,
                'fouls.totalFouls': 1,
                evaluation: -1
            }
        });
    },
    correctOffFouls(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'fouls.offFouls': -1,
                'fouls.totalFouls': -1,
                evaluation: 1
            }
        });
    },
    defFouls(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'fouls.defFouls': 1,
                'fouls.totalFouls': 1,
                evaluation: -1
            }
        });
    },
    correctDefFouls(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'fouls.defFouls': -1,
                'fouls.totalFouls': -1,
                evaluation: 1
            }
        });
    },
    fouls1FT(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'fouls.foul1FT': 1,
                'fouls.totalFouls': 1,
                evaluation: -1
            }
        });
    },
    correctFouls1FT(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'fouls.foul1FT': -1,
                'fouls.totalFouls': -1,
                evaluation: 1
            }
        });
    },
    fouls2FT(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'fouls.foul2FT': 1,
                'fouls.totalFouls': 1,
                evaluation: -1
            }
        });
    },
    correctFouls2FT(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'fouls.foul2FT': -1,
                'fouls.totalFouls': -1,
                evaluation: 1
            }
        });
    },
    fouls3FT(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'fouls.foul3FT': 1,
                'fouls.totalFouls': 1,
                evaluation: -1
            }
        });
    },
    correctFouls3FT(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'fouls.foul3FT': -1,
                'fouls.totalFouls': -1,
                evaluation: 1
            }
        });
    },
    techFouls(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'fouls.techFouls': 1,
                'fouls.totalFouls': 1,
                evaluation: -1
            }
        });
    },
    correctTechFouls(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'fouls.techFouls': -1,
                'fouls.totalFouls': -1,
                evaluation: 1
            }
        });
    },
    antiSportFouls(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'fouls.antiSportFouls': 1,
                'fouls.totalFouls': 1,
                evaluation: -1
            }
        });
    },
    correctAntiSportFouls(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'fouls.antiSportFouls': -1,
                'fouls.totalFouls': -1,
                evaluation: 1
            }
        });
    },
    disqualifyingFouls(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'fouls.disqualifyingFouls': 1,
                'fouls.totalFouls': 1,
                evaluation: -1
            }
        });
    },
    correctDisqualifyingFouls(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'fouls.disqualifyingFouls': -1,
                'fouls.totalFouls': -1,
                evaluation: 1
            }
        });
    },
    onePoint(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'points.onePointIn': 1,
                score: 1,
                evaluation: 1
            }
        });
    },
    correctOnePoint(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'points.onePointIn': -1,
                'score': -1,
                evaluation: -1
            },
            $pop: { 'stats.evolution': 1 }
        });
    },
    onePointMiss(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'points.onePointOut': 1,
                evaluation: -1
            }
        });
    },
    correctOnePointMiss(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'points.onePointOut': -1,
                evaluation: 1
            }
        });
    },
    twoPoints(data) {
        const methodSchema = new SimpleSchema({
            gameId: { type: String },
            gameIndex: { type: Number, min: 1 },
            scoreGap: { type: Number }
        });
        check(data, methodSchema);

        return Games.update({ _id: data.gameId }, {
            $inc: {
                'points.twoPointsIn': 1,
                'score': 2,
                evaluation: 2
            }
        });
    },
    correctTwoPoints(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'points.twoPointsIn': -1,
                'score': -2,
                evaluation: -2
            },
            $pop: { 'stats.evolution': 1 }
        });
    },
    correctTwoPointsTeamOpponent(gameId, playerId) {
        check(gameId, String);
        check(playerId, String);

        return Games.update({
            _id: gameId
        }, {
            $inc: {
                'stats.opponent.points.twoPointsIn': -1,
                'stats.opponent.score': -2,
                'stats.opponent.evaluation': -2
            },
            $pop: {
                'stats.evolution': 1
            }
        });
    },
    twoPointsMiss(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'points.twoPointsOut': 1,
                evaluation: -1
            }
        });
    },
    correctTwoPointsMiss(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'points.twoPointsOut': -1,
                evaluation: 1
            }
        });
    },
    threePoints(data) {
        const methodSchema = new SimpleSchema({
            gameId: { type: String },
            gameIndex: { type: Number, min: 1 },
            scoreGap: { type: Number }
        });
        check(data, methodSchema);

        return Games.update({ _id: data.gameId }, {
            $inc: {
                'points.threePointsIn': 1,
                'score': 3,
                evaluation: 3
            }
        });
    },
    threePointsTeamOpponent(gameId, playerId, evolScore) {
        const evolScoreSchema = new SimpleSchema({
            gameIndex: { type: Number, min: 1 },
            scoreGap: { type: Number }
        });
        check(gameId, String);
        check(playerId, String);
        check(evolScore, evolScoreSchema);

        return Games.update({
            _id: gameId
        }, {
            $inc: {
                'stats.opponent.points.threePointsIn': 1,
                'stats.opponent.score': 3,
                'stats.opponent.evaluation': 3
            },
            $push: {
                'stats.evolution': [
                    evolScore.gameIndex,
                    evolScore.scoreGap
                ]
            }
        });
    },
    correctThreePoints(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'points.threePointsIn': -1,
                'score': -3,
                evaluation: -3
            },
            $pop: { 'stats.evolution': 1 }
        });
    },
    correctThreePointsTeamOpponent(gameId, playerId) {
        check(gameId, String);
        check(playerId, String);

        return Games.update({
            _id: gameId
        }, {
            $inc: {
                'stats.opponent.points.threePointsIn': -1,
                'stats.opponent.score': -3,
                'stats.opponent.evaluation': -3
            },
            $pop: {
                'stats.evolution': 1
            }
        });
    },
    threePointsMiss(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'points.threePointsOut': 1,
                evaluation: -1
            }
        });
    },
    correctThreePointsMiss(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'points.threePointsOut': -1,
                evaluation: 1
            }
        });
    },
    offReb(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'rebounds.offReb': 1,
                evaluation: 1
            }
        });
    },
    defReb(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'rebounds.defReb': 1,
                evaluation: 1
            }
        });
    },
    correctOffReb(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'rebounds.offReb': -1,
                evaluation: -1
            }
        });
    },
    correctDefReb(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'rebounds.defReb': -1,
                evaluation: -1
            }
        });
    },
    steals(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'steals': 1,
                evaluation: 1
            }
        });
    },
    correctSteals(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'steals': -1,
                evaluation: -1
            }
        });
    },
    turnovers(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'turnovers': 1,
                evaluation: -1
            }
        });
    },
    correctTurnovers(teamId) {
        check(teamId, String);

        return Teams.update({
            _id: teamId
        }, {
            $inc: {
                'turnovers': -1,
                evaluation: 1
            }
        });
    }
});
