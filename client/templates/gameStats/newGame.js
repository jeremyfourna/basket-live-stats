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
	"click .submitGameConfiguration": function() {
		var notFill = function(el) {
			if (el === "") {
				return null;
			} else {
				return el;
			}
		};

		var game = {};

		game.gameInfos = {
			homeTeam: notFill($('#homeTeam').val()),
			awayTeam: notFill($('#awayTeam').val()),
			category: notFill($('#category').val()),
			level: notFill($('#level').val()),
			group: notFill($('#group').val())
		};

		var homeTeamPlayers = function() {
			var list = NewGame.findAll('.homeTeamPlayerDefinition');
			return list;
		};

		console.log(homeTeamPlayers());

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
