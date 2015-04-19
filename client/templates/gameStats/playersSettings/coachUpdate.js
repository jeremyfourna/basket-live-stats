Template.coachUpdate.helpers({
	'modifyButton': function() {
		return this.team + this.coachIndex + 'update';
	},
	'validationButton': function() {
		return this.team + this.coachIndex + 'validation';
	}
});

Template.coachUpdate.events({
	'click .coachUpdate': function() {
		var updateSelector = '#' + this.team + this.coachIndex + 'update';
		var validateSelector = '#' + this.team + this.coachIndex + 'validation';
		$(updateSelector).closest('.coach').find('.firstName').removeAttr('disabled');
		$(updateSelector).closest('.coach').find('.lastName').removeAttr('disabled');
		$(updateSelector).closest('.coach').find(validateSelector).removeClass('disabled');
	},
	'click .coachValidation': function(e) {
		var updateSelector = '#' + this.team + this.coachIndex + 'update';
		var validateSelector = '#' + this.team + this.coachIndex + 'validation';
		var gameId = Template.parentData(1)._id;
		var coachInfo = {
			firstName: $(validateSelector).closest('.coach').find('.firstName').val(),
			lastName: $(validateSelector).closest('.coach').find('.lastName').val(),
			team: this.team,
			coachIndex: this.coachIndex,
			gameId: gameId
		};
		$(validateSelector).closest('.coach').find('.firstName').attr('disabled', 'disabled');
		$(validateSelector).closest('.coach').find('.lastName').attr('disabled', 'disabled');
		$(validateSelector).addClass('disabled');
		Meteor.call('coachUpdate', coachInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	}
});
