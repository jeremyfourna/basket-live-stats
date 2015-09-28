Template.awayTeamPlayerModal.helpers({
	modalId: function() {
		return this._id;
	}
});

Template.awayTeamPlayerModal.events({
	'click #correctionAction': function() {
		$('.buttonForAction').prepend('<span class="badge actionBadge">-1</span> ').addClass('cancelAction');
		$('#correctionAction').addClass('cancelCorrectionAction');
	},
	'click #closeModalButton': function() {
		$('.actionBadge').remove();
		$('#correctionAction').removeClass('cancelCorrectionAction');
		$('.buttonForAction').removeClass('cancelAction');
	},
	'click .cancelCorrectionAction': function() {
		$('.actionBadge').remove();
		$('#correctionAction').removeClass('cancelCorrectionAction');
		$('.buttonForAction').removeClass('cancelAction');
	},
	'hidden.bs.modal .modal': function() {
		$('.actionBadge').remove();
		$('#correctionAction').removeClass('cancelCorrectionAction');
		$('.buttonForAction').removeClass('cancelAction');
	},
	// Positive action
	'click #onePoint': function() {
		var gameData = Games.findOne(Router.current().params._id);
		var playerData = this;
		var evolScore = {
			gameIndex: gameData.stats.evolution.length,
			scoreGap: gameData.stats.yourClub.score - gameData.stats.opponent.score - 1
		};
		if ($('#onePoint').hasClass('cancelAction')) {
			Meteor.call('correctionOnePointTeamOpponent', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionOnePoint', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('onePointTeamOpponent', gameData._id, evolScore, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('onePoint', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	'click #twoPoint': function() {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		var evolScore = {
			gameIndex: Template.parentData(1).gameStats.evolution.length,
			scoreGap: Template.parentData(1).gameStats.score.homeTeam - Template.parentData(1).gameStats.score.awayTeam - 2
		};
		if ($('#twoPoint').hasClass('cancelAction')) {
			Meteor.call('correctionTwoPoints', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else {
			Meteor.call('twoPoints', actionInfo, evolScore, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	},
	'click #threePoint': function() {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		var evolScore = {
			gameIndex: Template.parentData(1).gameStats.evolution.length,
			scoreGap: Template.parentData(1).gameStats.score.homeTeam - Template.parentData(1).gameStats.score.awayTeam - 3
		};
		if ($('#threePoint').hasClass('cancelAction')) {
			Meteor.call('correctionThreePoints', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else {
			Meteor.call('threePoints', actionInfo, evolScore, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	}
});
