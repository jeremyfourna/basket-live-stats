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
	onePointIn(teamId) {
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
	correctOnePointIn(teamId) {
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
	onePointOut(teamId) {
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
	correctOnePointOut(teamId) {
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
	twoPointsIn(teamId) {
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
	correctTwoPointsIn(teamId) {
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
	twoPointsOut(teamId) {
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
	correctTwoPointsOut(teamId) {
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
	threePointsIn(teamId) {
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
	correctThreePointsIn(teamId) {
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
	threePointsOut(teamId) {
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
	correctThreePointsOut(teamId) {
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
				offReb: 1,
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
				defReb: 1,
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
				offReb: -1,
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
				defReb: -1,
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
				steals: 1,
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
				steals: -1,
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
				turnovers: 1,
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
				turnovers: -1,
				evaluation: 1
			}
		});
	}
});
