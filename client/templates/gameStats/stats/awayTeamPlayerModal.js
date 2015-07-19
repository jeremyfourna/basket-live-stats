Template.awayTeamPlayerModal.helpers({
	'currentPlayerDoingAction': function() {
		return Session.get('currentPlayerForModal').firstName.charAt(0) + ". " + Session.get('currentPlayerForModal').lastName;
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
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		var evolScore = {
			gameIndex: Template.parentData(1).gameStats.evolution.length,
			scoreGap: Template.parentData(1).gameStats.score.homeTeam - Template.parentData(1).gameStats.score.awayTeam - 1
		};
		if ($('#onePoint').hasClass('cancelAction')) {
			Meteor.call('correctionOnePoint', actionInfo, function(error) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else {
			Meteor.call('onePoint', actionInfo, evolScore, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					var a = Session.get('x');
					var b = Session.get('data1');
					c = b[b.length - 1];
					a.push(a.length);
					b.push(c - 1)
					Session.set('x', a);
					Session.set('data1', b);
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
				} else {
					var a = Session.get('x');
					var b = Session.get('data1');
					c = b[b.length - 1];
					a.push(a.length);
					b.push(c - 2)
					Session.set('x', a);
					Session.set('data1', b);
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
				} else {
					var a = Session.get('x');
					var b = Session.get('data1');
					c = b[b.length - 1];
					a.push(a.length);
					b.push(c - 3)
					Session.set('x', a);
					Session.set('data1', b);
				}
			});
		}
	}
});
