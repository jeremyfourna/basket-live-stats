import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Teams, teamschema } from './schema.js';

// yourClub methods
Meteor.methods({
	'Teams.addTeam': (gameId) => {
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
	'Teams.assists': (teamId) => {
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
	'Teams.correctAssists': (teamId) => {
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
	'Teams.blocks': (teamId) => {
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
	'Teams.correctBlocks': (teamId) => {
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
	'Teams.provOffFouls': (teamId) => {
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
	'Teams.correctProvOffFouls': (teamId) => {
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
	'Teams.provDefFouls': (teamId) => {
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
	'Teams.correctProvDefFouls': (teamId) => {
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
	'Teams.offFouls': (teamId) => {
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
	'Teams.correctOffFouls': (teamId) => {
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
	'Teams.defFouls': (teamId) => {
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
	'Teams.correctDefFouls': (teamId) => {
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
	'Teams.fouls1FT': (teamId) => {
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
	'Teams.correctFouls1FT': (teamId) => {
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
	'Teams.fouls2FT': (teamId) => {
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
	'Teams.correctFouls2FT': (teamId) => {
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
	'Teams.fouls3FT': (teamId) => {
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
	'Teams.correctFouls3FT': (teamId) => {
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
	'Teams.techFouls': (teamId) => {
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
	'Teams.correctTechFouls': (teamId) => {
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
	'Teams.antiSportFouls': (teamId) => {
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
	'Teams.correctAntiSportFouls': (teamId) => {
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
	'Teams.disqualifyingFouls': (teamId) => {
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
	'Teams.correctDisqualifyingFouls': (teamId) => {
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
	'Teams.onePointIn': (teamId) => {
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
	'Teams.correctOnePointIn': (teamId) => {
		check(teamId, String);

		return Teams.update({
			_id: teamId
		}, {
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
	'Teams.onePointOut': (teamId) => {
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
	'Teams.correctOnePointOut': (teamId) => {
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
	'Teams.twoPointsIn': (teamId) => {
		check(teamId, String);

		return Teams.update({
			_id: teamId
		}, {
			$inc: {
				'points.twoPointsIn': 1,
				score: 2,
				evaluation: 2
			}
		});
	},
	'Teams.correctTwoPointsIn': (teamId) => {
		check(teamId, String);

		return Teams.update({
			_id: teamId
		}, {
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
	'Teams.twoPointsOut': (teamId) => {
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
	'Teams.correctTwoPointsOut': (teamId) => {
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
	'Teams.threePointsIn': (teamId) => {
		check(teamId, String);

		return Teams.update({
			_id: teamId
		}, {
			$inc: {
				'points.threePointsIn': 1,
				score: 3,
				evaluation: 3
			}
		});
	},
	'Teams.correctThreePointsIn': (teamId) => {
		check(teamId, String);

		return Teams.update({
			_id: teamId
		}, {
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
	'Teams.threePointsOut': (teamId) => {
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
	'Teams.correctThreePointsOut': (teamId) => {
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
	'Teams.offReb': (teamId) => {
		check(teamId, String);

		return Teams.update({
			_id: teamId
		}, {
			$inc: {
				offReb: 1,
				evaluation: 1
			}
		});
	},
	'Teams.defReb': (teamId) => {
		check(teamId, String);

		return Teams.update({
			_id: teamId
		}, {
			$inc: {
				defReb: 1,
				evaluation: 1
			}
		});
	},
	'Teams.correctOffReb': (teamId) => {
		check(teamId, String);

		return Teams.update({
			_id: teamId
		}, {
			$inc: {
				offReb: -1,
				evaluation: -1
			}
		});
	},
	'Teams.correctDefReb': (teamId) => {
		check(teamId, String);

		return Teams.update({
			_id: teamId
		}, {
			$inc: {
				defReb: -1,
				evaluation: -1
			}
		});
	},
	'Teams.steals': (teamId) => {
		check(teamId, String);

		return Teams.update({
			_id: teamId
		}, {
			$inc: {
				steals: 1,
				evaluation: 1
			}
		});
	},
	'Teams.correctSteals': (teamId) => {
		check(teamId, String);

		return Teams.update({
			_id: teamId
		}, {
			$inc: {
				steals: -1,
				evaluation: -1
			}
		});
	},
	'Teams.turnovers': (teamId) => {
		check(teamId, String);

		return Teams.update({
			_id: teamId
		}, {
			$inc: {
				turnovers: 1,
				evaluation: -1
			}
		});
	},
	'Teams.correctTurnovers': (teamId) => {
		check(teamId, String);

		return Teams.update({
			_id: teamId
		}, {
			$inc: {
				turnovers: -1,
				evaluation: 1
			}
		});
	}
});
