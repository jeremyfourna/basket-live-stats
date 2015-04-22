Template.playerUpdate.helpers({
	'modifyButton': function() {
		return this.team + 'update' + this.jersey;
	},
	'validationButton': function() {
		return this.team + 'validation' + this.jersey;
	}
});

Template.playerUpdate.events({
	'click .playerUpdate': function() {
		var updateSelector = '#' + this.team + 'update' + this.jersey;
		var validateSelector = '#' + this.team + 'validation' + this.jersey;
		$(updateSelector).closest('.player').find('.firstName').removeAttr('disabled');
		$(updateSelector).closest('.player').find('.lastName').removeAttr('disabled');
		$(updateSelector).closest('.player').find(validateSelector).removeClass('disabled');
	},
	'click .playerValidation': function(e) {
		var updateSelector = '#' + this.team + 'update' + this.jersey;
		var validateSelector = '#' + this.team + 'validation' + this.jersey;
		var gameId = Template.parentData(1)._id;
		var playerInfo = {
			firstName: $(validateSelector).closest('.player').find('.firstName').val(),
			lastName: $(validateSelector).closest('.player').find('.lastName').val(),
			team: this.team,
			playerIndex: this.playerIndex,
			gameId: gameId
		};
		$(validateSelector).closest('.player').find('.firstName').attr('disabled', 'disabled');
		$(validateSelector).closest('.player').find('.lastName').attr('disabled', 'disabled');
		$(validateSelector).addClass('disabled');
		Meteor.call('playerUpdate', playerInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	}
});
