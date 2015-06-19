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
	'awayTeamTotal2PointsShoots': function() {
		var twoPointsIn = this.gameStats.shoots.awayTeam.twoPointsIn;
		var twoPointsOut = this.gameStats.shoots.awayTeam.twoPointsOut;
		return twoPointsIn + twoPointsOut;
	},
	'awayTeamTotal3PointsShoots': function() {
		var threePointsIn = this.gameStats.shoots.awayTeam.threePointsIn;
		var threePointsOut = this.gameStats.shoots.awayTeam.threePointsOut;
		return threePointsIn + threePointsOut;
	},
	'awayTeamTotal1PointShoots': function() {
		var onePointIn = this.gameStats.shoots.awayTeam.onePointIn;
		var onePointOut = this.gameStats.shoots.awayTeam.onePointOut;
		return onePointIn + onePointOut;
	},
	'bestHomeTeamPlayer': function() {
		var bestPlayer = function(team) {
			var teamSorting = [];
			var playersDataRetrieval = function(player) {
				return {
					"firstName": player.firstName,
					"lastName": player.lastName,
					"jersey": player.jersey,
					"playerIndex": player.playerIndex,
					"evaluation": player.stats.evaluation,
					"totalPoints": player.stats.points.totalPoints
				};
			};
			team.forEach(function(element, index, array) {
				teamSorting.push(playersDataRetrieval(element));
			});
			teamSorting.sort(function(a, b) {
				if (a.evaluation < b.evaluation) {
					return 1;
				}
				if (a.evaluation > b.evaluation) {
					return -1;
				}
				// a must be equal to b
				return 0;
			});
			return teamSorting[0];
		};
		var player = bestPlayer(this.homeTeam.players);
		return player;
	},
	'bestAwayTeamPlayer': function() {
		var bestPlayer = function(team) {
			var teamSorting = [];
			var playersDataRetrieval = function(player) {
				return {
					"firstName": player.firstName,
					"lastName": player.lastName,
					"jersey": player.jersey,
					"playerIndex": player.playerIndex,
					"totalPoints": player.stats.points.totalPoints
				};
			};
			team.forEach(function(element, index, array) {
				teamSorting.push(playersDataRetrieval(element));
			});
			teamSorting.sort(function(a, b) {
				if (a.totalPoints < b.totalPoints) {
					return 1;
				}
				if (a.totalPoints > b.totalPoints) {
					return -1;
				}
				// a must be equal to b
				return 0;
			});
			return teamSorting[0];
		};
		var player = bestPlayer(this.awayTeam.players);
		return player;
	},
	'awayTeamTwoPointsPartition': function() {
		var threePointsIn = this.gameStats.shoots.awayTeam.threePointsIn;
		var twoPointsIn = this.gameStats.shoots.awayTeam.twoPointsIn;
		var percentage = twoPointsIn / (threePointsIn + twoPointsIn) * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'awayTeamThreePointsPartition': function() {
		var threePointsIn = this.gameStats.shoots.awayTeam.threePointsIn;
		var twoPointsIn = this.gameStats.shoots.awayTeam.twoPointsIn;
		var percentage = threePointsIn / (threePointsIn + twoPointsIn) * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'isInPlay': function() {
		if (this.inPlay) {
			return 'inPlay';
		} else {
			return false;
		}
	},
	'playerTime': function() {
		var playerTimeMinutes = 0;
		var playerTimeSecondes = 0;
		var gameState = Template.parentData(1).state;
		var modulo = this.gameTime.length % 2;
		var i = 0;
		var quarterPower = 0;
		if (this.gameTime.length === 0) {
			return "00:00";
		} else if (modulo === 0) {
			for (i = 0; i < this.gameTime.length; i++) {
				quarterPower = 0;
				switch (this.gameTime[i].state) {
					case "notStarted":
						quarterPower = 10;
						break;
					case "q1Running":
						quarterPower = 10;
						break;
					case "q1Ended":
						quarterPower = 10;
						break;
					case "q2Running":
						quarterPower = 20;
						break;
					case "halfTime":
						quarterPower = 20;
						break;
					case "q3Running":
						quarterPower = 30;
						break;
					case "q3Ended":
						quarterPower = 30;
						break;
					case "q4Running":
						quarterPower = 40;
						break;
					case "gameEnded":
						quarterPower = 40;
						break;
					default:
						quarterPower = 0;
				}
				if (this.gameTime[i].way === 'in') {
					playerTimeMinutes += this.gameTime[i].minutes;
					playerTimeSecondes += this.gameTime[i].secondes;
					playerTimeMinutes -= quarterPower;
				} else if (this.gameTime[i].way === 'out') {
					playerTimeMinutes -= this.gameTime[i].minutes;
					playerTimeSecondes -= this.gameTime[i].secondes;
					playerTimeMinutes += quarterPower;
					if (playerTimeSecondes < 0) {
						playerTimeMinutes -= 1;
						playerTimeSecondes += 60;
					}
				}
			}
			if (playerTimeSecondes < 10) {
				playerTimeSecondes = '0' + playerTimeSecondes;
			}
			if (playerTimeMinutes < 10) {
				playerTimeMinutes = '0' + playerTimeMinutes;
			}
			return playerTimeMinutes + ":" + playerTimeSecondes;
		} else if (modulo === 1) {
			for (i = 0; i < this.gameTime.length - 1; i++) {
				quarterPower = 0;
				switch (this.gameTime[i].state) {
					case "notStarted":
						quarterPower = 10;
						break;
					case "q1Running":
						quarterPower = 10;
						break;
					case "q1Ended":
						quarterPower = 10;
						break;
					case "q2Running":
						quarterPower = 20;
						break;
					case "halfTime":
						quarterPower = 20;
						break;
					case "q3Running":
						quarterPower = 30;
						break;
					case "q3Ended":
						quarterPower = 30;
						break;
					case "q4Running":
						quarterPower = 40;
						break;
					case "gameEnded":
						quarterPower = 40;
						break;
					default:
						quarterPower = 0;
				}
				if (i === this.gameTime.length - 1) {
					playerTimeMinutes += this.gameTime[i].minutes;
					playerTimeSecondes += this.gameTime[i].secondes;
				} else if (this.gameTime[i].way === 'in') {
					playerTimeMinutes += this.gameTime[i].minutes;
					playerTimeSecondes += this.gameTime[i].secondes;
					playerTimeMinutes -= quarterPower;
				} else if (this.gameTime[i].way === 'out') {
					playerTimeMinutes -= this.gameTime[i].minutes;
					playerTimeSecondes -= this.gameTime[i].secondes;
					playerTimeMinutes += quarterPower;
					if (playerTimeSecondes < 0) {
						playerTimeMinutes -= 1;
						playerTimeSecondes += 60;
					}
				}
			}
			if (playerTimeSecondes < 10) {
				playerTimeSecondes = '0' + playerTimeSecondes;
			}
			if (playerTimeMinutes < 10) {
				playerTimeMinutes = '0' + playerTimeMinutes;
			}
			return playerTimeMinutes + ":" + playerTimeSecondes;
		}
	}
});

Template.summary.onRendered(function() {
	var w = 1000;
	var h = 300;
	var barPadding = 1;
	var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25];
	var svg = d3.select("#scoreChart")
		.append("svg")
		.attr('width', w)
		.attr('height', h)
		.classed('col-xs-12 col-sm-12 col-md-12 col-lg-12', true);

	svg.selectAll("rect")
		.data(dataset)
		.enter()
		.append("rect")
		.attr("x", function(d, i) {
			return i * (w / dataset.length);
		})
		.attr("y", function(d) {
			return h - (d * 4);
		})
		.attr("width", w / dataset.length - barPadding)
		.attr("height", function(d) {
			return d * 4;
		})
		.attr("fill", function(d) {
			return "rgb(0, 0, " + (d * 10) + ")";
		});

	svg.selectAll("text")
		.data(dataset)
		.enter()
		.append("text")
		.text(function(d) {
			return d;
		})
		.attr("x", function(d, i) {
			return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
		})
		.attr("y", function(d) {
			return h - (d * 4) + 14;
		})
		.attr("text-anchor", "middle")
		.attr("font-family", "sans-serif")
		.attr("font-size", "11px")
		.attr("fill", "white");


	var dataset1 = [];
	var numDataPoints = 50;
	var xRange = Math.random() * 1000;
	var yRange = Math.random() * 1000;
	for (var i = 0; i < numDataPoints; i++) {
		var newNumber1 = Math.round(Math.random() * xRange);
		var newNumber2 = Math.round(Math.random() * yRange);
		dataset1.push([newNumber1, newNumber2]);
	}

	var svg1 = d3.select("#scoreChart1")
		.append("svg")
		.attr("width", w)
		.attr("height", h);

	var padding = 30;

	var xScale = d3.scale.linear()
		.domain([0, d3.max(dataset1, function(d) {
			return d[0];
		})])
		.range([padding, w - padding * 2]);
	var yScale = d3.scale.linear()
		.domain([0, d3.max(dataset1, function(d) {
			return d[1];
		})])
		.range([h - padding, padding]);
	var rScale = d3.scale.linear()
		.domain([0, d3.max(dataset1, function(d) {
			return d[1];
		})])
		.range([2, 5]);

	var xAxis = d3.svg.axis()
		.scale(xScale)
		.orient("bottom")
		.ticks(5);

	var yAxis = d3.svg.axis()
		.scale(yScale)
		.orient("left")
		.ticks(5);

	svg1.selectAll("circle")
		.data(dataset1)
		.enter()
		.append("circle")
		.attr("cx", function(d) {
			return xScale(d[0]);
		})
		.attr("cy", function(d) {
			return yScale(d[1]);
		})
		.attr("r", function(d) {
			return rScale(d[1]);
		});

	svg1.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(0," + (h - padding) + ")")
		.call(xAxis);

	svg1.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(" + padding + ",0)")
		.call(yAxis);

	var dataset2 = [
		["1-May-12", 582.13],
		["30-Apr-12", 583.98],
		["27-Apr-12", 603.00],
		["26-Apr-12", 607.70],
		["25-Apr-12", 610.00],
		["24-Apr-12", 560.28],
		["23-Apr-12", 571.70],
		["20-Apr-12", 572.98],
		["19-Apr-12", 587.44],
		["18-Apr-12", 608.34],
		["17-Apr-12", 609.70],
		["16-Apr-12", 580.13],
		["13-Apr-12", 605.23],
		["12-Apr-12", 622.77],
		["11-Apr-12", 626.20],
		["10-Apr-12", 628.44],
		["9-Apr-12", 636.23],
		["5-Apr-12", 633.68],
		["4-Apr-12", 624.31],
		["3-Apr-12", 629.32],
		["2-Apr-12", 618.63],
		["30-Mar-12", 599.55],
		["29-Mar-12", 609.86],
		["28-Mar-12", 617.62],
		["27-Mar-12", 614.48],
		["26-Mar-12", 606.98],
		["23-Mar-12", 596.05],
		["22-Mar-12", 599.34],
		["21-Mar-12", 602.50],
		["20-Mar-12", 605.96],
		["19-Mar-12", 601.10],
		["16-Mar-12", 585.57],
		["15-Mar-12", 585.56]
	];
	dataset2.forEach(function(d) {
		d[0] = d3.time.format("%d-%b-%y").parse(d[0]);
		d[1] = +d[1];
	});
	var margin = {
		top: 20,
		right: 20,
		bottom: 30,
		left: 50
	};
	var width = 960 - margin.left - margin.right;
	var height = 500 - margin.top - margin.bottom;

	var x = d3.time.scale()
		.range([0, width]);

	var y = d3.scale.linear()
		.range([height, 0]);

	var xAxis2 = d3.svg.axis()
		.scale(x)
		.orient("bottom");

	var yAxis2 = d3.svg.axis()
		.scale(y)
		.orient("left");

	var line = d3.svg.line()
		.x(function(d) {
			return x(d[0]);
		})
		.y(function(d) {
			return y(d[1]);
		});

	var svg2 = d3.select("#scoreChart2").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	x.domain(d3.extent(dataset2, function(d) {
		return d[0];
	}));
	y.domain(d3.extent(dataset2, function(d) {
		return d[1];
	}));

	svg2.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis2);

	svg2.append("g")
		.attr("class", "y axis")
		.call(yAxis2)
		.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", 6)
		.attr("dy", ".71em")
		.style("text-anchor", "end")
		.text("Price ($)");

	svg2.append("path")
		.datum(dataset2)
		.attr("class", "line")
		.attr("d", line);
});
