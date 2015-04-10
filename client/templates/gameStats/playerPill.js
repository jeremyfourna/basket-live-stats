Session.setDefault('currentPlayerForModal', null);

Template.homeTeamPlayerPill.events({
	'click .homeTeamPillForModal': function(e) {
		if (this.firstName === null && this.lastName === null) {
			return Session.set('currentPlayerForModal', {
				firstName: "",
				lastName: "",
				jersey: this.jersey,
				playerIndex: this.playerIndex,
				team: "homeTeam"
			});
		} else if (this.firstName === null) {
			return Session.set('currentPlayerForModal', {
				firstName: "",
				lastName: this.lastName,
				jersey: this.jersey,
				playerIndex: this.playerIndex,
				team: "homeTeam"
			});
		} else if (this.lastName === null) {
			return Session.set('currentPlayerForModal', {
				firstName: this.firstName,
				lastName: "",
				jersey: this.jersey,
				playerIndex: this.playerIndex,
				team: "homeTeam"
			});
		} else {
			return Session.set('currentPlayerForModal', {
				firstName: this.firstName,
				lastName: this.lastName,
				jersey: this.jersey,
				playerIndex: this.playerIndex,
				team: "homeTeam"
			});
		}
	}
});

Template.awayTeamPlayerPill.events({
	'click .awayTeamPillForModal': function(e) {
		if (this.firstName === null && this.lastName === null) {
			return Session.set('currentPlayerForModal', {
				firstName: "",
				lastName: "",
				jersey: this.jersey,
				playerIndex: this.playerIndex,
				team: "awayTeam"
			});
		} else if (this.firstName === null) {
			return Session.set('currentPlayerForModal', {
				firstName: "",
				lastName: this.lastName,
				jersey: this.jersey,
				playerIndex: this.playerIndex,
				team: "awayTeam"
			});
		} else if (this.lastName === null) {
			return Session.set('currentPlayerForModal', {
				firstName: this.firstName,
				lastName: "",
				jersey: this.jersey,
				playerIndex: this.playerIndex,
				team: "awayTeam"
			});
		} else {
			return Session.set('currentPlayerForModal', {
				firstName: this.firstName,
				lastName: this.lastName,
				jersey: this.jersey,
				playerIndex: this.playerIndex,
				team: "awayTeam"
			});
		}
	}
});
