Template.playerUpdate.helpers({
	'modifyButton': function() {
		return this.team + this.jersey + 'update';
	},
	'validationButton': function() {
		return this.tema + this.jersey + 'validation';
	}
});

Template.playerUpdate.events({
	'click .playerUpdate': function() {
		var selector = '#' + this.team + this.jersey + 'update';
		$(selector).closest('.player').find('.firstName').removeAttr('disabled');
		$(selector).closest('.player').find('.lastName').removeAttr('disabled');
		$(selector).closest('.player').append("<button class='btn btn-success btn-sm playerValidation' id='{{validationButton}}' type='button'>{{_ 'validate'}}</button>");
		$(selector).remove();

		return console.log(this);
	}
});
