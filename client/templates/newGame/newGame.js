Session.setDefault('step2Visited', false);

Template.newGame.helpers({
	hasIVisitedStep2: function() {
		return Session.get('step2Visited');
	}
});

Template.newGame.events({
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
				jersey: $(element).find('.jersey').val()
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
				lastName: isFilled($(element).find('.lastName'))
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
			console.log(result);
			Router.go('gameStats', {
				_id: currentGame
			});
		});
	}
});
