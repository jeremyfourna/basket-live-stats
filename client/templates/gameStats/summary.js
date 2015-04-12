Template.summary.helpers({
	'total2pointsShoots': function() {
		var twoPointsIn = this.stats.points.twoPointsIn || 0;
		var twoPointsOut = this.stats.points.twoPointsOut || 0;
		return twoPointsIn + twoPointsOut;
	},
	'percentage2pointsShoots': function() {
		var twoPointsIn = this.stats.points.twoPointsIn || 0;
		var twoPointsOut = this.stats.points.twoPointsOut || 0;
		var total = twoPointsIn + twoPointsOut;
		var percentage = twoPointsIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'total3pointsShoots': function() {
		var threePointsIn = this.stats.points.threePointsIn || 0;
		var threePointsOut = this.stats.points.threePointsOut || 0;
		return threePointsIn + threePointsOut;
	},
	'percentage3pointsShoots': function() {
		var threePointsIn = this.stats.points.threePointsIn || 0;
		var threePointsOut = this.stats.points.threePointsOut || 0;
		var total = threePointsIn + threePointsOut;
		var percentage = threePointsIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'total1pointShoots': function() {
		var onePointIn = this.stats.points.onePointIn || 0;
		var onePointOut = this.stats.points.onePointOut || 0;
		return onePointIn + onePointOut;
	},
	'percentage1pointShoots': function() {
		var onePointIn = this.stats.points.onePointIn || 0;
		var onePointOut = this.stats.points.onePointOut || 0;
		var total = onePointIn + onePointOut;
		var percentage = onePointIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'totalRebounds': function() {
		return this.stats.rebounds.offReb + this.stats.rebounds.defReb;
	},
	'provokedFouls': function() {
		return this.stats.fouls.provFouls.offFouls + this.stats.fouls.provFouls.defFouls || 0;
	},
	'foulsRatio': function() {
		var provFouls = this.stats.fouls.provFouls.offFouls + this.stats.fouls.provFouls.defFouls;
		return provFouls - this.stats.fouls.totalFouls || 0;
	},
	'totalPoints': function() {
		return this.stats.points.totalPoints || 0;
	},
	'twoPointsIn': function() {
		return this.stats.points.twoPointsIn || 0;
	},
	'threePointsIn': function() {
		return this.stats.points.threePointsIn || 0;
	},
	'onePointIn': function() {
		return this.stats.points.onePointIn || 0;
	}
});
