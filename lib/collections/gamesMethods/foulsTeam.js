Meteor.methods({
	offProvFoulsTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.provFouls.offFouls": 1,
				"stats.yourClub.evaluation": 1
			}
		});
	},
	correctionOffProvFoulsTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.provFouls.offFouls": -1,
				"stats.yourClub.evaluation": -1
			}
		});
	},
	defProvFoulsTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.provFouls.defFouls": 1,
				"stats.yourClub.evaluation": 1
			}
		});
	},
	correctionDefProvFoulsTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.provFouls.defFouls": -1,
				"stats.yourClub.evaluation": -1
			}
		});
	},
	offFoulsTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.offFouls": 1,
				"stats.yourClub.evaluation": -1
			}
		});
	},
	correctionOffFoulsTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.offFouls": -1,
				"stats.yourClub.evaluation": 1
			}
		});
	},
	defFoulsTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.defFouls": 1,
				"stats.yourClub.evaluation": -1
			}
		});
	},
	correctionDefFoulsTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.defFouls": -1,
				"stats.yourClub.evaluation": 1
			}
		});
	}
});
