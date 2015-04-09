Session.setDefault('currentPlayerForModal', null);

Template.playerPill.events({
	'click .pillForModal': function(e) {
		if (this.firstName === null && this.lastName === null) {
			return Session.set('currentPlayerForModal', {
				firstName: "",
				lastName: "",
				jersey: this.jersey,
				playerIndex: this.playerIndex
			});
		} else if (this.firstName === null) {
			return Session.set('currentPlayerForModal', {
				firstName: "",
				lastName: this.lastName,
				jersey: this.jersey,
				playerIndex: this.playerIndex
			});
		} else if (this.lastName === null) {
			return Session.set('currentPlayerForModal', {
				firstName: this.firstName,
				lastName: "",
				jersey: this.jersey,
				playerIndex: this.playerIndex
			});
		} else {
			return Session.set('currentPlayerForModal', this);
		}
	}
});
