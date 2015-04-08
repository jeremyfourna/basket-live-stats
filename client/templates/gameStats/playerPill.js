Session.setDefault('currentPlayerForModal', null);

Template.playerPill.events({
	'click .pillForModal': function(e, t) {
		var instance = Template.instance();
		Session.set('currentPlayerForModal', this);
		return console.log(instance);
	}
});
