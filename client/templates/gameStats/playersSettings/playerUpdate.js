Template.playerUpdate.helpers({
	'modifyButton': function() {
		return this.team + this.jersey + 'update';
	},
	'validationButton': function() {
		return this.team + this.jersey + 'validation';
	}
});

Template.playerUpdate.events({
	'click .playerUpdate': function() {
		var updateSelector = '#' + this.team + this.jersey + 'update';
		var validateSelector = '#' + this.team + this.jersey + 'validation';
		$(updateSelector).closest('.player').find('.firstName').removeAttr('disabled');
		$(updateSelector).closest('.player').find('.lastName').removeAttr('disabled');
		$(updateSelector).closest('.player').find(validateSelector).removeClass('disabled');
	},
	'click .playerValidation': function() {
		var updateSelector = '#' + this.team + this.jersey + 'update';
		var validateSelector = '#' + this.team + this.jersey + 'validation';
		$(validateSelector).closest('.player').find('.firstName').attr('disabled', 'disabled');
		$(validateSelector).closest('.player').find('.lastName').attr('disabled', 'disabled');
		$(validateSelector).addClass('disabled');
		var gameId = Template.parentData(1)._id
		Meteor.call('playerUpdate', gameId, this, function(error, result) {});
	}
});
