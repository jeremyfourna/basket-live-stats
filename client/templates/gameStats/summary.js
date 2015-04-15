Template.summary.helpers({
	'total2pointsShoots': function() {
		var twoPointsIn = this.stats.points.twoPointsIn;
		var twoPointsOut = this.stats.points.twoPointsOut;
		return twoPointsIn + twoPointsOut;
	},
	'homeTeamTotal2pointsShoots': function() {
		var twoPointsIn = this.gameStats.shoots.homeTeam.twoPointsIn;
		var twoPointsOut = this.gameStats.shoots.homeTeam.twoPointsOut;
		return twoPointsIn + twoPointsOut;
	},
	'percentage2pointsShoots': function() {
		var twoPointsIn = this.stats.points.twoPointsIn;
		var twoPointsOut = this.stats.points.twoPointsOut;
		var total = twoPointsIn + twoPointsOut;
		var percentage = twoPointsIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'homeTeamPercentage2pointsShoots': function() {
		var twoPointsIn = this.gameStats.shoots.homeTeam.twoPointsIn;
		var twoPointsOut = this.gameStats.shoots.homeTeam.twoPointsOut;
		var total = twoPointsIn + twoPointsOut;
		var percentage = twoPointsIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'total3pointsShoots': function() {
		var threePointsIn = this.stats.points.threePointsIn;
		var threePointsOut = this.stats.points.threePointsOut;
		return threePointsIn + threePointsOut;
	},
	'homeTeamTotal3pointsShoots': function() {
		var threePointsIn = this.gameStats.shoots.homeTeam.threePointsIn;
		var threePointsOut = this.gameStats.shoots.homeTeam.threePointsOut;
		return threePointsIn + threePointsOut;
	},
	'percentage3pointsShoots': function() {
		var threePointsIn = this.stats.points.threePointsIn;
		var threePointsOut = this.stats.points.threePointsOut;
		var total = threePointsIn + threePointsOut;
		var percentage = threePointsIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'homeTeamPercentage3pointsShoots': function() {
		var threePointsIn = this.gameStats.shoots.homeTeam.threePointsIn;
		var threePointsOut = this.gameStats.shoots.homeTeam.threePointsOut;
		var total = threePointsIn + threePointsOut;
		var percentage = threePointsIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'total1pointShoots': function() {
		var onePointIn = this.stats.points.onePointIn;
		var onePointOut = this.stats.points.onePointOut;
		return onePointIn + onePointOut;
	},
	'percentage1pointShoots': function() {
		var onePointIn = this.stats.points.onePointIn;
		var onePointOut = this.stats.points.onePointOut;
		var total = onePointIn + onePointOut;
		var percentage = onePointIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'totalRebounds': function() {
		var offReb = this.stats.rebounds.offReb;
		var defReb = this.stats.rebounds.defReb;
		return offReb + defReb;
	},
	'provokedFouls': function() {
		var offFouls = this.stats.fouls.provFouls.offFouls;
		var defFouls = this.stats.fouls.provFouls.defFouls;
		var diff = offFouls + defFouls;
		return diff;
	},
	'foulsRatio': function() {
		var offFouls = this.stats.fouls.provFouls.offFouls;
		var defFouls = this.stats.fouls.provFouls.defFouls;
		var totalFouls = this.stats.fouls.totalFouls;
		return offFouls + defFouls - totalFouls;
	},
	'totalPoints': function() {
		return this.stats.points.totalPoints;
	},
	'twoPointsIn': function() {
		return this.stats.points.twoPointsIn;
	},
	'threePointsIn': function() {
		return this.stats.points.threePointsIn;
	},
	'onePointIn': function() {
		return this.stats.points.onePointIn;
	},
	'offReb': function() {
		return this.stats.rebounds.offReb;
	},
	'defReb': function() {
		return this.stats.rebounds.defReb;
	},
	'totalFouls': function() {
		return this.stats.fouls.totalFouls;
	}
});
