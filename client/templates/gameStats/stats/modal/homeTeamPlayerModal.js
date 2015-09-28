Template.homeTeamPlayerModal.helpers({
	modalId: function() {
		return this._id;
	}
});

Template.homeTeamPlayerModal.events({
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
			scoreGap: gameData.stats.yourClub.score - gameData.stats.opponent.score + 1
		};
		if ($('#onePoint').hasClass('cancelAction')) {
			Meteor.call('correctionOnePointTeamYourClub', gameData._id, function(error) {
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
			Meteor.call('onePointTeamYourClub', gameData._id, evolScore, function(error) {
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
			scoreGap: Template.parentData(1).gameStats.score.homeTeam - Template.parentData(1).gameStats.score.awayTeam + 2
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
			scoreGap: Template.parentData(1).gameStats.score.homeTeam - Template.parentData(1).gameStats.score.awayTeam + 3
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
	},
	'click #assist': function() {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		if ($('#assist').hasClass('cancelAction')) {
			Meteor.call('correctionAssists', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else {
			Meteor.call('assists', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	},
	'click #offReb': function() {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		if ($('#offReb').hasClass('cancelAction')) {
			Meteor.call('correctionOffRebs', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else {
			Meteor.call('offRebs', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	},
	'click #defReb': function() {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		if ($('#defReb').hasClass('cancelAction')) {
			Meteor.call('correctionDefRebs', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else {
			Meteor.call('defRebs', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	},
	'click #offProvFoul': function() {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		if ($('#offProvFoul').hasClass('cancelAction')) {
			Meteor.call('correctionOffProvFouls', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else {
			Meteor.call('offProvFouls', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	},
	'click #steal': function() {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		if ($('#steal').hasClass('cancelAction')) {
			Meteor.call('correctionSteals', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else {
			Meteor.call('steals', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	},
	'click #block': function() {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		if ($('#block').hasClass('cancelAction')) {
			Meteor.call('correctionBlocks', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else {
			Meteor.call('blocks', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	},
	'click #defProvFoul': function() {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		if ($('#defProvFoul').hasClass('cancelAction')) {
			Meteor.call('correctionDefProvFouls', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else {
			Meteor.call('defProvFouls', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	},
	// Negative action
	'click #onePointMiss': function() {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		if ($('#onePointMiss').hasClass('cancelAction')) {
			Meteor.call('correctionOnePointMiss', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else {
			Meteor.call('onePointMiss', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	},
	'click #twoPointMiss': function() {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		if ($('#twoPointMiss').hasClass('cancelAction')) {
			Meteor.call('correctionTwoPointsMiss', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else {
			Meteor.call('twoPointsMiss', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	},
	'click #threePointMiss': function() {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		if ($('#threePointMiss').hasClass('cancelAction')) {
			Meteor.call('correctionThreePointsMiss', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else {
			Meteor.call('threePointsMiss', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	},
	'click #turnover': function() {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		if ($('#turnover').hasClass('cancelAction')) {
			Meteor.call('correctionTurnovers', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else {
			Meteor.call('turnovers', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	},
	'click #offFoul': function() {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		if ($('#offFoul').hasClass('cancelAction')) {
			Meteor.call('correctionOffFouls', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else {
			Meteor.call('offFouls', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	},
	'click #defFoul': function() {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		if ($('#defFoul').hasClass('cancelAction')) {
			Meteor.call('correctionDefFouls', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else {
			Meteor.call('defFouls', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	},
	'click #defFoulOneFT': function() {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		if ($('#defFoulOneFT').hasClass('cancelAction')) {
			Meteor.call('correctionDefFoulsOneFT', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else {
			Meteor.call('defFoulsOneFT', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	},
	'click #defFoulTwoFT': function() {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		if ($('#defFoulTwoFT').hasClass('cancelAction')) {
			Meteor.call('correctionDefFoulsTwoFT', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else {
			Meteor.call('defFoulsTwoFT', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	},
	'click #defFoulthreeFT': function() {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		if ($('#defFoulthreeFT').hasClass('cancelAction')) {
			Meteor.call('correctionDefFoulsThreeFT', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else {
			Meteor.call('defFoulsThreeFT', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	},
	'click #techFoul': function() {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		if ($('#techFoul').hasClass('cancelAction')) {
			Meteor.call('correctionTechFouls', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else {
			Meteor.call('techFouls', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	},
	'click #antiSportFoul': function() {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		if ($('#antiSportFoul').hasClass('cancelAction')) {
			Meteor.call('correctionAntiSportFouls', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else {
			Meteor.call('antiSportFouls', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	},
	'click #disqualifyingFoul': function() {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		if ($('#disqualifyingFoul').hasClass('cancelAction')) {
			Meteor.call('correctionDisqualifyingFouls', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else {
			Meteor.call('disqualifyingFouls', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	}
});
