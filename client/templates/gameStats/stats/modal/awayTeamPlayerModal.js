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
	'click .onePoint': function() {
		var gameData = Games.findOne(Router.current().params._id);
		var playerData = this;
		var evolScore = {
			gameIndex: gameData.stats.evolution.length,
			scoreGap: gameData.stats.yourClub.score - gameData.stats.opponent.score - 1
		};
		if ($('#' + playerData._id).find('.onePoint').hasClass('cancelAction')) {
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
	'click .twoPoints': function() {
		var gameData = Games.findOne(Router.current().params._id);
		var playerData = this;
		var evolScore = {
			gameIndex: gameData.stats.evolution.length,
			scoreGap: gameData.stats.yourClub.score - gameData.stats.opponent.score - 2
		};
		if ($('#' + playerData._id).find('.twoPoints').hasClass('cancelAction')) {
			Meteor.call('correctionTwoPointsTeamOpponent', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionTwoPoints', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('twoPointsTeamOpponent', gameData._id, evolScore, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('twoPoints', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	'click .threePoints': function() {
		var gameData = Games.findOne(Router.current().params._id);
		var playerData = this;
		var evolScore = {
			gameIndex: gameData.stats.evolution.length,
			scoreGap: gameData.stats.yourClub.score - gameData.stats.opponent.score - 2
		};
		if ($('#' + playerData._id).find('.threePoints').hasClass('cancelAction')) {
			Meteor.call('correctionThreePointsTeamOpponent', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionThreePoints', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('threePointsTeamOpponent', gameData._id, evolScore, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('threePoints', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	}
});
