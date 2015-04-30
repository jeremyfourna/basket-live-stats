Template.playerModal.helpers({
	'currentPlayerDoingAction': function() {
		return Session.get('currentPlayerForModal').firstName.charAt(0) + ". " + Session.get('currentPlayerForModal').lastName;
	}
});

Template.playerModal.events({
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
	'click #onePoint': function(e, t) {
		console.log(e);
		console.log(t);
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('onePoint', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #twoPoint': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('twoPoints', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #threePoint': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('threePoints', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #assist': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('assists', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #offReb': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('offRebs', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #defReb': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('defRebs', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #offProvFoul': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('offProvFouls', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #steal': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('steals', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #block': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('blocks', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #defProvFoul': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('defProvFouls', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	// Negative action
	'click #onePointMiss': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('onePointMiss', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #twoPointMiss': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('twoPointsMiss', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #threePointMiss': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('threePointsMiss', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #turnover': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('turnovers', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #offFoul': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('offFouls', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #defFoul': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('defFouls', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #defFoulOneFT': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('defFoulsOneFT', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #defFoulTwoFT': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('defFoulsTwoFT', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #defFoulthreeFT': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('defFoulsThreeFT', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #techFoul': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('techFouls', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #antiSportFoul': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('antiSportFouls', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #disqualifyingFoul': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('disqualifyingFouls', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	}
});
