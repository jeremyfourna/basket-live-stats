Template.playerModal.helpers({});

Template.playerModal.events({
	'submit firstLastNumber': function(e) {
		e.preventDefault();

		var nameInfos = {
			firstName: $(e.target).find('[id=firstName]').val(),
			lastName: $(e.target).find('[id=lastName]').val(),
			jerseyNumber: $(e.target).find('[id=jerseyNumber]').val()
		};
	}
});
