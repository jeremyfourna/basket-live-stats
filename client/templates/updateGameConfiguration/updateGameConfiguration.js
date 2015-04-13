Session.setDefault('step2Visited', false);

Template.updateGameConfiguration.helpers({
	hasIVisitedStep2: function() {
		return Session.get('step2Visited');
	}
});

Template.updateGameConfiguration.events({
	'click #nextStep': function() {
		$('#step1').removeClass('show').addClass('hidden');
		$('#step2').removeClass('hidden').addClass('show').addClass('visited');
		Session.set('step2Visited', true);
	},
	'click #step1Next': function() {
		$('#step1').removeClass('show').addClass('hidden');
		$('#step2').removeClass('hidden').addClass('show').addClass('visited');
	},
	'click #step2Previous': function() {
		$('#step2').removeClass('show').addClass('hidden');
		$('#step1').removeClass('hidden').addClass('show');
	},
	"click .submitGameConfiguration": function(e) {
		e.preventDefault();

		var filterInt = function(value) {
			if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
				return Number(value);
			return NaN;
		};
		var currentGame = this._id;
		var isFilled = function(element) {
			if ($(element).val() === "") {
				return null;
			} else {
				return $(element).val();
			}
		};
		var gameInfos = {
			homeTeam: isFilled('#homeTeam'),
			awayTeam: isFilled('#awayTeam'),
			category: isFilled('#category'),
			level: isFilled('#level'),
			group: isFilled('#group')
		};
		var homeTeamPlayers = [];
		var awayTeamPlayers = [];
		var homeTeamCoachs = [];
		var awayTeamCoachs = [];
		var homeTeam = {};
		var awayTeam = {};
		$('.player').each(function(index, element) {
			var player = {
				firstName: isFilled($(element).find('.firstName')),
				lastName: isFilled($(element).find('.lastName')),
				jersey: filterInt($(element).find('.jersey').val()),
				playerIndex: filterInt($(element).find('.playerIndex').val()),
				team: $(element).find('.team').val(),
				stats: {
					points: {
						onePointIn: 0,
						totalPoints: 0,
						twoPointsIn: 0,
						threePointsIn: 0,
						onePointOut: 0,
						twoPointsOut: 0,
						threePointsOut: 0
					},
					evaluation: 0,
					assists: 0,
					rebounds: {
						offReb: 0,
						defReb: 0
					},
					turnovers: 0,
					fouls: {
						offFouls: 0,
						totalFouls: 0,
						provFouls: {
							offFouls: 0,
							defFouls: 0
						},
						foul: 0,
						foul1FT: 0,
						foul2FT: 0,
						foul3FT: 0,
						techFoul: 0,
						antiSportFoul: 0,
						disqualifyingFoul: 0
					},
					steals: 0,
					blocks: 0
				}
			};
			if (index < 12) {
				homeTeamPlayers.push(player);
			} else {
				awayTeamPlayers.push(player);
			}
		});
		$('.coach').each(function(index, element) {
			var coach = {
				firstName: isFilled($(element).find('.firstName')),
				lastName: isFilled($(element).find('.lastName')),
				coachIndex: filterInt($(element).find('.coachIndex').val()),
				team: $(element).find('.team').val()
			};
			if (index < 2) {
				homeTeamCoachs.push(coach);
			} else {
				awayTeamCoachs.push(coach);
			}
		});
		homeTeam.players = homeTeamPlayers;
		homeTeam.coachs = homeTeamCoachs;
		awayTeam.players = awayTeamPlayers;
		awayTeam.coachs = awayTeamCoachs;

		Games.update(currentGame, {
			$set: {
				gameInfos: gameInfos,
				homeTeam: homeTeam,
				awayTeam: awayTeam
			}
		}, function(error, result) {
			if (error) {
				return throwError(error.message);
			}
			Router.go('gameStats', {
				_id: currentGame
			});
		});
	}
});
