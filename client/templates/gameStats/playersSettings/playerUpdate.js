Template.playerUpdate.helpers({
	'modifyButton': function() {
		return this.team + this.jersey + 'update';
	},
	'validationButton': function() {
		return this.team + this.jersey + 'validation';
	},
	'actions': function() {
		var id = this.team + this.jersey;
		if (Session.get('id')) {
			return true;
		} else {
			return false;
		}
	}
});

Template.playerUpdate.events({
	'click .playerUpdate': function() {
		var id = this.team + this.jersey;
		var selector = '#' + this.team + this.jersey + 'update';
		$(selector).closest('.player').find('.firstName').removeAttr('disabled');
		$(selector).closest('.player').find('.lastName').removeAttr('disabled');
		Session.set(id, true);
		return console.log(id);
	}
});

Template.playerUpdate.onCreated(function() {
	var id = this.data.team + this.data.jersey;
	Session.setDefault(id, false);
});
