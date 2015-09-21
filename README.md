# liveBBStats

This is a tool to take the stats of a basket-ball game, you can share the url of the game and everybody can follow the live stats of a game

## Player schema

```json
{
	"_id": "String",
	"gameId": "String",
	"teamId": "String",
	"firstName": "String",
	"lastName": "String",
	"jersey": "Number",
	"inPlay": "Boolean",
	"gameTime": [{
		"minutes": "Number",
		"secondes": "Number",
		"way": "String",
		"gameState": "String"
	}],
	"stats": {
		"points": {
			"onePointIn": "Number",
			"onePointOut" : "Number",
			"twoPointsIn" : "Number",
			"twoPointsOut" : "Number",
			"threePointsIn" : "Number",
			"threePointsOut" : "Number",
			"totalPoints" : "Number"
		},
		"evaluation": "Number",
		"assists": "Number",
		"rebounds" : {
			"offReb" : "Number",
			"defReb" : "Number"
		},
		"turnovers" : "Number",
		"fouls" : {
			"offFoul" : "Number",
			"provFouls" : {
				"offFoul" : "Number",
				"defFoul" : "Number"
			},
			"foul" : "Number",
			"foul1FT" : "Number",
			"foul2FT" : "Number",
			"foul3FT" : "Number",
			"techFoul" : "Number",
			"antiSportFoul" : "Number",
			"disqualifyingFoul" : "Number",
			"totalFouls" : "Number",
		},
		"steals" : "Number",
		"blocks" : "Number"
	}
}
```

## Game schema

```json
{
	"_id": "String",
	"userId": "String",
	"createdAt": "Date",
	"gameState": "String",
	"privateGame": "Boolean",
	"gameInfos": [{
		"homeTeamId": "String",
		"awayTeamId": "String",
		"level": "String",
		"group": "String"
	}],
	"stats": {
		"score" : {
			"homeTeam" : "Number",
			"awayTeam" : "Number"
		},
		"evolution" : [[
			"Number", "Number"
		]],
		"evaluation" : {
			"homeTeam" : "Number",
			"awayTeam" : "Number"
		},
		"shoots" : {
			"homeTeam" : {
				"onePointIn" : "Number",
				"onePointOut" : "Number",
				"twoPointsIn" : "Number",
				"twoPointsOut" : "Number",
				"threePointsIn" : "Number",
				"threePointsOut" : "Number"
			},
			"awayTeam" : {
				"onePointIn" : "Number",
				"onePointOut" : "Number",
				"twoPointsIn" : "Number",
				"twoPointsOut" : "Number",
				"threePointsIn" : "Number",
				"threePointsOut" : "Number"
			}
		},
		"assists" : {
			"homeTeam" : "Number",
			"awayTeam" : "Number"
		},
		"rebounds" : {
			"homeTeam" : {
				"offReb" : "Number",
				"defReb" : "Number"
			},
			"awayTeam" : {
				"offReb" : "Number",
				"defReb" : "Number"
			}
		},
		"fouls" : {
			"homeTeam" : {
				"provFouls" : {
					"offFouls" : "Number",
					"defFouls" : "Number"
				},
				"offFouls" : "Number",
				"totalFouls" : "Number",
				"defFouls" : "Number",
				"foul1FT" : "Number",
				"foul2FT" : "Number",
				"foul3FT" : "Number",
				"techFouls" : "Number",
				"antiSportFouls" : "Number",
				"disqualifyingFouls" : "Number"
			},
			"awayTeam" : {
				"provFouls" : {
					"offFouls" : "Number",
					"defFouls" : "Number"
				},
				"offFouls" : "Number",
				"totalFouls" : "Number",
				"defFouls" : "Number",
				"foul1FT" : "Number",
				"foul2FT" : "Number",
				"foul3FT" : "Number",
				"techFouls" : "Number",
				"antiSportFouls" : "Number",
				"disqualifyingFouls" : "Number"
			}
		},
		"steals" : {
			"homeTeam" : "Number",
			"awayTeam" : "Number"
		},
		"blocks" : {
			"homeTeam" : "Number",
			"awayTeam" : "Number"
		},
		"turnovers" : {
			"homeTeam" : "Number",
			"awayTeam" : "Number"
		}
	}
}
```
