Template.summary.helpers({
	'total2PointsShoots': function() {
		var twoPointsIn = this.stats.points.twoPointsIn;
		var twoPointsOut = this.stats.points.twoPointsOut;
		return twoPointsIn + twoPointsOut;
	},
	'percentage2PointsShoots': function() {
		var twoPointsIn = this.stats.points.twoPointsIn;
		var twoPointsOut = this.stats.points.twoPointsOut;
		var total = twoPointsIn + twoPointsOut;
		var percentage = twoPointsIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'total3PointsShoots': function() {
		var threePointsIn = this.stats.points.threePointsIn;
		var threePointsOut = this.stats.points.threePointsOut;
		return threePointsIn + threePointsOut;
	},
	'percentage3PointsShoots': function() {
		var threePointsIn = this.stats.points.threePointsIn;
		var threePointsOut = this.stats.points.threePointsOut;
		var total = threePointsIn + threePointsOut;
		var percentage = threePointsIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'total1PointShoots': function() {
		var onePointIn = this.stats.points.onePointIn;
		var onePointOut = this.stats.points.onePointOut;
		return onePointIn + onePointOut;
	},
	'percentage1PointShoots': function() {
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
	'homeTeamFoulsRatio': function() {
		var offFouls = this.gameStats.fouls.homeTeam.provFouls.offFouls;
		var defFouls = this.gameStats.fouls.homeTeam.provFouls.defFouls;
		var totalFouls = this.gameStats.fouls.homeTeam.totalFouls;
		return offFouls + defFouls - totalFouls;
	},
	'homeTeamTotal2PointsShoots': function() {
		var twoPointsIn = this.gameStats.shoots.homeTeam.twoPointsIn;
		var twoPointsOut = this.gameStats.shoots.homeTeam.twoPointsOut;
		return twoPointsIn + twoPointsOut;
	},
	'homeTeamPercentage2PointsShoots': function() {
		var twoPointsIn = this.gameStats.shoots.homeTeam.twoPointsIn;
		var twoPointsOut = this.gameStats.shoots.homeTeam.twoPointsOut;
		var total = twoPointsIn + twoPointsOut;
		var percentage = twoPointsIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'homeTeamTotal3PointsShoots': function() {
		var threePointsIn = this.gameStats.shoots.homeTeam.threePointsIn;
		var threePointsOut = this.gameStats.shoots.homeTeam.threePointsOut;
		return threePointsIn + threePointsOut;
	},
	'homeTeamPercentage3PointsShoots': function() {
		var threePointsIn = this.gameStats.shoots.homeTeam.threePointsIn;
		var threePointsOut = this.gameStats.shoots.homeTeam.threePointsOut;
		var total = threePointsIn + threePointsOut;
		var percentage = threePointsIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'homeTeamTotal1PointShoots': function() {
		var onePointIn = this.gameStats.shoots.homeTeam.onePointIn;
		var onePointOut = this.gameStats.shoots.homeTeam.onePointOut;
		return onePointIn + onePointOut;
	},
	'homeTeamPercentage1PointShoots': function() {
		var onePointIn = this.gameStats.shoots.homeTeam.onePointIn;
		var onePointOut = this.gameStats.shoots.homeTeam.onePointOut;
		var total = onePointIn + onePointOut;
		var percentage = onePointIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'homeTeamTotalRebounds': function() {
		var offReb = this.gameStats.rebounds.homeTeam.offReb;
		var defReb = this.gameStats.rebounds.homeTeam.defReb;
		return offReb + defReb;
	},
	'homeTeamProvokedFouls': function() {
		var offFouls = this.gameStats.fouls.homeTeam.provFouls.offFouls;
		var defFouls = this.gameStats.fouls.homeTeam.provFouls.defFouls;
		var diff = offFouls + defFouls;
		return diff;
	},
	'awayTeamFoulsRatio': function() {
		var offFouls = this.gameStats.fouls.awayTeam.provFouls.offFouls;
		var defFouls = this.gameStats.fouls.awayTeam.provFouls.defFouls;
		var totalFouls = this.gameStats.fouls.awayTeam.totalFouls;
		return offFouls + defFouls - totalFouls;
	},
	'awayTeamTotal2PointsShoots': function() {
		var twoPointsIn = this.gameStats.shoots.awayTeam.twoPointsIn;
		var twoPointsOut = this.gameStats.shoots.awayTeam.twoPointsOut;
		return twoPointsIn + twoPointsOut;
	},
	'awayTeamPercentage2PointsShoots': function() {
		var twoPointsIn = this.gameStats.shoots.awayTeam.twoPointsIn;
		var twoPointsOut = this.gameStats.shoots.awayTeam.twoPointsOut;
		var total = twoPointsIn + twoPointsOut;
		var percentage = twoPointsIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'awayTeamTotal3PointsShoots': function() {
		var threePointsIn = this.gameStats.shoots.awayTeam.threePointsIn;
		var threePointsOut = this.gameStats.shoots.awayTeam.threePointsOut;
		return threePointsIn + threePointsOut;
	},
	'awayTeamPercentage3PointsShoots': function() {
		var threePointsIn = this.gameStats.shoots.awayTeam.threePointsIn;
		var threePointsOut = this.gameStats.shoots.awayTeam.threePointsOut;
		var total = threePointsIn + threePointsOut;
		var percentage = threePointsIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'awayTeamTotal1PointShoots': function() {
		var onePointIn = this.gameStats.shoots.awayTeam.onePointIn;
		var onePointOut = this.gameStats.shoots.awayTeam.onePointOut;
		return onePointIn + onePointOut;
	},
	'awayTeamPercentage1PointShoots': function() {
		var onePointIn = this.gameStats.shoots.awayTeam.onePointIn;
		var onePointOut = this.gameStats.shoots.awayTeam.onePointOut;
		var total = onePointIn + onePointOut;
		var percentage = onePointIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'awayTeamTotalRebounds': function() {
		var offReb = this.gameStats.rebounds.awayTeam.offReb;
		var defReb = this.gameStats.rebounds.awayTeam.defReb;
		return offReb + defReb;
	},
	'awayTeamProvokedFouls': function() {
		var offFouls = this.gameStats.fouls.awayTeam.provFouls.offFouls;
		var defFouls = this.gameStats.fouls.awayTeam.provFouls.defFouls;
		var diff = offFouls + defFouls;
		return diff;
	}
});
