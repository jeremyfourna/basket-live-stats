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
		Session.set('gameInfos', {
			'homeTeam': $('#homeTeam').val(),
			'awayTeam': $('#awayTeam').val(),
			'categoy': $('#category').val(),
			'level': $('#level').val(),
			'group': $('#group').val()
		});
	},
	'click #step1Next': function() {
		$('#step1').removeClass('show').addClass('hidden');
		$('#step2').removeClass('hidden').addClass('show').addClass('visited');
	},
	'click #step2Previous': function() {
		$('#step2').removeClass('show').addClass('hidden');
		$('#step1').removeClass('hidden').addClass('show');
	},
	"click #submitGameConfiguration": function() {
		var game = {};
		game.gameInfos = {
			homeTeam: $('#homeTeam').val(),
			awayTeam: $('#awayTeam').val(),
			category: $('#category').val(),
			level: $('#level').val(),
			group: $('#group').val()
		};
		game.homeTeam = {
			player1: {
				lastName: $('#player1LastName').val(),
				firstName: $('#player1FirstName').val(),
				jerseyNumber: $('#player1Jersey').val()
			},
			player2: {
				lastName: $('#player2LastName').val(),
				firstName: $('#player2FirstName').val(),
				jerseyNumber: $('#player2Jersey').val()
			},
			player3: {
				lastName: $('#player3LastName').val(),
				firstName: $('#player3FirstName').val(),
				jerseyNumber: $('#player3Jersey').val()
			},
			player4: {
				lastName: $('#player4LastName').val(),
				firstName: $('#player4FirstName').val(),
				jerseyNumber: $('#player4Jersey').val()
			},
			player5: {
				lastName: $('#player5LastName').val(),
				firstName: $('#player5FirstName').val(),
				jerseyNumber: $('#player5Jersey').val()
			},
			player6: {
				lastName: $('#player6LastName').val(),
				firstName: $('#player6FirstName').val(),
				jerseyNumber: $('#player6Jersey').val()
			},
			player7: {
				lastName: $('#player7LastName').val(),
				firstName: $('#player7FirstName').val(),
				jerseyNumber: $('#player7Jersey').val()
			},
			player8: {
				lastName: $('#player8LastName').val(),
				firstName: $('#player8FirstName').val(),
				jerseyNumber: $('#player8Jersey').val()
			},
			player9: {
				lastName: $('#player9LastName').val(),
				firstName: $('#player9FirstName').val(),
				jerseyNumber: $('#player9Jersey').val()
			},
			player10: {
				lastName: $('#player10LastName').val(),
				firstName: $('#player10FirstName').val(),
				jerseyNumber: $('#player10Jersey').val()
			},
			player11: {
				lastName: $('#player11LastName').val(),
				firstName: $('#player11FirstName').val(),
				jerseyNumber: $('#player11Jersey').val()
			},
			player12: {
				lastName: $('#player12LastName').val(),
				firstName: $('#player12FirstName').val(),
				jerseyNumber: $('#player12Jersey').val()
			},
			coach: {
				lastName: $('#coach1LastName').val(),
				firstName: $('#coach1FirstName').val()
			},
			assistantCoach: {
				lastName: $('#AssistantCoach1LastName').val(),
				firstName: $('#AssistantCoach1FirstName').val()
			}
		};
		game.awayTeam = {
			player1: {
				lastName: $('#player13LastName').val(),
				firstName: $('#player13FirstName').val(),
				jerseyNumber: $('#player13Jersey').val()
			},
			player2: {
				lastName: $('#player14LastName').val(),
				firstName: $('#player14FirstName').val(),
				jerseyNumber: $('#player14Jersey').val()
			},
			player3: {
				lastName: $('#player15LastName').val(),
				firstName: $('#player15FirstName').val(),
				jerseyNumber: $('#player15Jersey').val()
			},
			player4: {
				lastName: $('#player16LastName').val(),
				firstName: $('#player16FirstName').val(),
				jerseyNumber: $('#player16Jersey').val()
			},
			player5: {
				lastName: $('#player17LastName').val(),
				firstName: $('#player17FirstName').val(),
				jerseyNumber: $('#player17Jersey').val()
			},
			player6: {
				lastName: $('#player18LastName').val(),
				firstName: $('#player18FirstName').val(),
				jerseyNumber: $('#player18Jersey').val()
			},
			player7: {
				lastName: $('#player19LastName').val(),
				firstName: $('#player19FirstName').val(),
				jerseyNumber: $('#player19Jersey').val()
			},
			player8: {
				lastName: $('#player20LastName').val(),
				firstName: $('#player20FirstName').val(),
				jerseyNumber: $('#player20Jersey').val()
			},
			player9: {
				lastName: $('#player21LastName').val(),
				firstName: $('#player21FirstName').val(),
				jerseyNumber: $('#player21Jersey').val()
			},
			player10: {
				lastName: $('#player22LastName').val(),
				firstName: $('#player22FirstName').val(),
				jerseyNumber: $('#player22Jersey').val()
			},
			player11: {
				lastName: $('#player23LastName').val(),
				firstName: $('#player23FirstName').val(),
				jerseyNumber: $('#player23Jersey').val()
			},
			player12: {
				lastName: $('#player24LastName').val(),
				firstName: $('#player24FirstName').val(),
				jerseyNumber: $('#player24Jersey').val()
			},
			coach: {
				lastName: $('#coach2LastName').val(),
				firstName: $('#coach2FirstName').val()
			},
			assistantCoach: {
				lastName: $('#AssistantCoach2LastName').val(),
				firstName: $('#AssistantCoach2FirstName').val()
			}
		};
		Meteor.call('gameInsert', game, function(error, result) {
			if (error) {
				return throwError(error.message);
			}
			Router.go('gameStats', {
				_id: result._id
			});
		});
	}
});
