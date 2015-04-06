Sessions.setDefault("currentPlayerForModal", null);

Template.playerModal.helpers({
	"currentPlayerDoingAction": function() {
		return Sessions.get('currentPlayerForModal');
	}
});

Template.playerModal.events({

});
