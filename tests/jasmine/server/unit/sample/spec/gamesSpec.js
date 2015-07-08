describe('gamesInsert', function() {
	var gameData = {
		"gameInfos": {
			"homeTeam": null,
			"awayTeam": null,
			"level": null,
			"group": null
		},
		"homeTeam": {
			"players": [{
				"firstName": null,
				"lastName": null,
				"jersey": 4,
				"playerIndex": 0,
				"inPlay": false,
				"gameTime": [],
				"stats": {
					"points": {
						"onePointIn": 0,
						"totalPoints": 0,
						"twoPointsIn": 0,
						"threePointsIn": 0,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 0,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "homeTeam"
			}, {
				"firstName": null,
				"lastName": null,
				"jersey": 5,
				"playerIndex": 1,
				"inPlay": false,
				"gameTime": [],
				"stats": {
					"points": {
						"onePointIn": 0,
						"totalPoints": 0,
						"twoPointsIn": 0,
						"threePointsIn": 0,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 0,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "homeTeam"
			}, {
				"firstName": null,
				"lastName": null,
				"jersey": 6,
				"playerIndex": 2,
				"inPlay": true,
				"gameTime": [{
					"minutes": 10,
					"secondes": 0,
					"way": "in",
					"state": "q1Running"
				}],
				"stats": {
					"points": {
						"onePointIn": 2,
						"totalPoints": 8,
						"twoPointsIn": 0,
						"threePointsIn": 2,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 8,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "homeTeam"
			}, {
				"firstName": null,
				"lastName": null,
				"jersey": 7,
				"playerIndex": 3,
				"inPlay": false,
				"gameTime": [],
				"stats": {
					"points": {
						"onePointIn": 0,
						"totalPoints": 0,
						"twoPointsIn": 0,
						"threePointsIn": 0,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 0,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "homeTeam"
			}, {
				"firstName": null,
				"lastName": null,
				"jersey": 8,
				"playerIndex": 4,
				"inPlay": true,
				"gameTime": [{
					"minutes": 10,
					"secondes": 0,
					"way": "in",
					"state": "q1Running"
				}],
				"stats": {
					"points": {
						"onePointIn": 0,
						"totalPoints": 2,
						"twoPointsIn": 1,
						"threePointsIn": 0,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 2,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "homeTeam"
			}, {
				"firstName": null,
				"lastName": null,
				"jersey": 9,
				"playerIndex": 5,
				"inPlay": false,
				"gameTime": [],
				"stats": {
					"points": {
						"onePointIn": 0,
						"totalPoints": 0,
						"twoPointsIn": 0,
						"threePointsIn": 0,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 0,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "homeTeam"
			}, {
				"firstName": null,
				"lastName": null,
				"jersey": 10,
				"playerIndex": 6,
				"inPlay": false,
				"gameTime": [],
				"stats": {
					"points": {
						"onePointIn": 0,
						"totalPoints": 0,
						"twoPointsIn": 0,
						"threePointsIn": 0,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 0,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "homeTeam"
			}, {
				"firstName": null,
				"lastName": null,
				"jersey": 11,
				"playerIndex": 7,
				"inPlay": true,
				"gameTime": [{
					"minutes": 10,
					"secondes": 0,
					"way": "in",
					"state": "q1Running"
				}],
				"stats": {
					"points": {
						"onePointIn": 0,
						"totalPoints": 2,
						"twoPointsIn": 1,
						"threePointsIn": 0,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 2,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "homeTeam"
			}, {
				"firstName": null,
				"lastName": null,
				"jersey": 12,
				"playerIndex": 8,
				"inPlay": true,
				"gameTime": [{
					"minutes": 10,
					"secondes": 0,
					"way": "in",
					"state": "q1Running"
				}],
				"stats": {
					"points": {
						"onePointIn": 0,
						"totalPoints": 0,
						"twoPointsIn": 0,
						"threePointsIn": 0,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 0,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "homeTeam"
			}, {
				"firstName": null,
				"lastName": null,
				"jersey": 13,
				"playerIndex": 9,
				"inPlay": false,
				"gameTime": [],
				"stats": {
					"points": {
						"onePointIn": 0,
						"totalPoints": 0,
						"twoPointsIn": 0,
						"threePointsIn": 0,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 0,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "homeTeam"
			}, {
				"firstName": null,
				"lastName": null,
				"jersey": 14,
				"playerIndex": 10,
				"inPlay": true,
				"gameTime": [{
					"minutes": 10,
					"secondes": 0,
					"way": "in",
					"state": "q1Running"
				}],
				"stats": {
					"points": {
						"onePointIn": 0,
						"totalPoints": 0,
						"twoPointsIn": 0,
						"threePointsIn": 0,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 0,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "homeTeam"
			}, {
				"firstName": null,
				"lastName": null,
				"jersey": 15,
				"playerIndex": 11,
				"inPlay": false,
				"gameTime": [],
				"stats": {
					"points": {
						"onePointIn": 0,
						"totalPoints": 0,
						"twoPointsIn": 0,
						"threePointsIn": 0,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 0,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "homeTeam"
			}],
			"coachs": [{
				"firstName": null,
				"lastName": null,
				"coachIndex": 0
			}, {
				"firstName": null,
				"lastName": null,
				"coachIndex": 1
			}]
		},
		"awayTeam": {
			"players": [{
				"firstName": null,
				"lastName": null,
				"jersey": 4,
				"playerIndex": 0,
				"inPlay": true,
				"gameTime": [{
					"minutes": 10,
					"secondes": 0,
					"way": "in",
					"state": "q1Running"
				}],
				"stats": {
					"points": {
						"onePointIn": 1,
						"totalPoints": 1,
						"twoPointsIn": 0,
						"threePointsIn": 0,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 1,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "awayTeam"
			}, {
				"firstName": null,
				"lastName": null,
				"jersey": 5,
				"playerIndex": 1,
				"inPlay": false,
				"gameTime": [],
				"stats": {
					"points": {
						"onePointIn": 0,
						"totalPoints": 0,
						"twoPointsIn": 0,
						"threePointsIn": 0,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 0,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "awayTeam"
			}, {
				"firstName": null,
				"lastName": null,
				"jersey": 6,
				"playerIndex": 2,
				"inPlay": false,
				"gameTime": [],
				"stats": {
					"points": {
						"onePointIn": 0,
						"totalPoints": 0,
						"twoPointsIn": 0,
						"threePointsIn": 0,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 0,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "awayTeam"
			}, {
				"firstName": null,
				"lastName": null,
				"jersey": 7,
				"playerIndex": 3,
				"inPlay": false,
				"gameTime": [],
				"stats": {
					"points": {
						"onePointIn": 0,
						"totalPoints": 0,
						"twoPointsIn": 0,
						"threePointsIn": 0,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 0,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "awayTeam"
			}, {
				"firstName": null,
				"lastName": null,
				"jersey": 8,
				"playerIndex": 4,
				"inPlay": true,
				"gameTime": [{
					"minutes": 10,
					"secondes": 0,
					"way": "in",
					"state": "q1Running"
				}],
				"stats": {
					"points": {
						"onePointIn": 0,
						"totalPoints": 5,
						"twoPointsIn": 1,
						"threePointsIn": 1,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 5,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "awayTeam"
			}, {
				"firstName": null,
				"lastName": null,
				"jersey": 9,
				"playerIndex": 5,
				"inPlay": false,
				"gameTime": [],
				"stats": {
					"points": {
						"onePointIn": 0,
						"totalPoints": 0,
						"twoPointsIn": 0,
						"threePointsIn": 0,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 0,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "awayTeam"
			}, {
				"firstName": null,
				"lastName": null,
				"jersey": 10,
				"playerIndex": 6,
				"inPlay": true,
				"gameTime": [{
					"minutes": 10,
					"secondes": 0,
					"way": "in",
					"state": "q1Running"
				}],
				"stats": {
					"points": {
						"onePointIn": 0,
						"totalPoints": 6,
						"twoPointsIn": 0,
						"threePointsIn": 2,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 6,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "awayTeam"
			}, {
				"firstName": null,
				"lastName": null,
				"jersey": 11,
				"playerIndex": 7,
				"inPlay": false,
				"gameTime": [],
				"stats": {
					"points": {
						"onePointIn": 0,
						"totalPoints": 0,
						"twoPointsIn": 0,
						"threePointsIn": 0,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 0,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "awayTeam"
			}, {
				"firstName": null,
				"lastName": null,
				"jersey": 12,
				"playerIndex": 8,
				"inPlay": true,
				"gameTime": [{
					"minutes": 10,
					"secondes": 0,
					"way": "in",
					"state": "q1Running"
				}],
				"stats": {
					"points": {
						"onePointIn": 0,
						"totalPoints": 0,
						"twoPointsIn": 0,
						"threePointsIn": 0,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 0,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "awayTeam"
			}, {
				"firstName": null,
				"lastName": null,
				"jersey": 13,
				"playerIndex": 9,
				"inPlay": false,
				"gameTime": [],
				"stats": {
					"points": {
						"onePointIn": 0,
						"totalPoints": 0,
						"twoPointsIn": 0,
						"threePointsIn": 0,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 0,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "awayTeam"
			}, {
				"firstName": null,
				"lastName": null,
				"jersey": 14,
				"playerIndex": 10,
				"inPlay": false,
				"gameTime": [],
				"stats": {
					"points": {
						"onePointIn": 0,
						"totalPoints": 0,
						"twoPointsIn": 0,
						"threePointsIn": 0,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 0,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "awayTeam"
			}, {
				"firstName": null,
				"lastName": null,
				"jersey": 15,
				"playerIndex": 11,
				"inPlay": true,
				"gameTime": [{
					"minutes": 10,
					"secondes": 0,
					"way": "in",
					"state": "q1Running"
				}],
				"stats": {
					"points": {
						"onePointIn": 0,
						"totalPoints": 0,
						"twoPointsIn": 0,
						"threePointsIn": 0,
						"onePointOut": 0,
						"twoPointsOut": 0,
						"threePointsOut": 0
					},
					"evaluation": 0,
					"assists": 0,
					"rebounds": {
						"offReb": 0,
						"defReb": 0
					},
					"turnovers": 0,
					"fouls": {
						"offFouls": 0,
						"totalFouls": 0,
						"provFouls": {
							"offFouls": 0,
							"defFouls": 0
						},
						"foul": 0,
						"foul1FT": 0,
						"foul2FT": 0,
						"foul3FT": 0,
						"techFoul": 0,
						"antiSportFoul": 0,
						"disqualifyingFoul": 0
					},
					"steals": 0,
					"blocks": 0
				},
				"team": "awayTeam"
			}],
			"coachs": [{
				"firstName": null,
				"lastName": null,
				"coachIndex": 0
			}, {
				"firstName": null,
				"lastName": null,
				"coachIndex": 1
			}]
		}
	};

	beforeEach(function() {});

	it('should insert a game', function() {
		gameId = Meteor.call('gameInsert', gameData);
		expect(gameId._id).toBeTruthy();

	});
});
