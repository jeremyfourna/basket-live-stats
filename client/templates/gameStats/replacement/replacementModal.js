Template.yourClubReplacementModal.events({
	'click #validateSwitch': function() {
		var data = Session.get('switchData');
		data.minutes = Number($('#yourClubMinutes').val());
		data.secondes = Number($('#yourClubSecondes').val());
		if (data.call === 'goingInPlay') {
			Meteor.call('goingInPlay', data, function(error, result) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else
		if (data.call === 'goingOnTheBench') {
			Meteor.call('goingOnTheBench', data, function(error, result) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	},
	'click #cancelSwitch': function() {
		$('#yourClubReplacementModal').modal('hide');
	}
});

Template.opponentReplacementModal.events({
	'click #validateSwitch': function() {
		var data = Session.get('switchData');
		data.minutes = Number($('#opponentMinutes').val());
		data.secondes = Number($('#opponentSecondes').val());
		if (data.call === 'goingInPlay') {
			Meteor.call('goingInPlay', data, function(error, result) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else if (data.call === 'goingOnTheBench') {
			Meteor.call('goingOnTheBench', data, function(error, result) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	},
	'click #cancelSwitch': function() {
		$('#opponentReplacementModal').modal('hide');
	}
});
