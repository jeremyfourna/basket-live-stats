Template.homeTeamPlayerPill.helpers({
	'endedGames': function() {
		if (Template.parentData(1).state === "gameEnded") {
			return 'disabled';
		} else {
			return false;
		}
	}
});

Template.awayTeamPlayerPill.helpers({
	'endedGames': function() {
		if (Template.parentData(1).state === "gameEnded") {
			return 'disabled';
		} else {
			return false;
		}
	}
});


Template.homeTeamPlayerPill.events({
	'click .homeTeamPillForModal': function(e) {
		this.team = "homeTeam";
		if (this.firstName === null && this.lastName === null) {
			return Session.set('currentPlayerForModal', {
				firstName: "",
				lastName: "",
				jersey: this.jersey,
				playerIndex: this.playerIndex,
				team: this.team
			});
		} else if (this.firstName === null) {
			return Session.set('currentPlayerForModal', {
				firstName: "",
				lastName: this.lastName,
				jersey: this.jersey,
				playerIndex: this.playerIndex,
				team: this.team
			});
		} else if (this.lastName === null) {
			return Session.set('currentPlayerForModal', {
				firstName: this.firstName,
				lastName: "",
				jersey: this.jersey,
				playerIndex: this.playerIndex,
				team: this.team
			});
		} else {
			return Session.set('currentPlayerForModal', {
				firstName: this.firstName,
				lastName: this.lastName,
				jersey: this.jersey,
				playerIndex: this.playerIndex,
				team: this.team
			});
		}
	}
});

Template.awayTeamPlayerPill.events({
	'click .awayTeamPillForModal': function(e) {
		this.team = "awayTeam";
		if (this.firstName === null && this.lastName === null) {
			return Session.set('currentPlayerForModal', {
				firstName: "",
				lastName: "",
				jersey: this.jersey,
				playerIndex: this.playerIndex,
				team: this.team
			});
		} else if (this.firstName === null) {
			return Session.set('currentPlayerForModal', {
				firstName: "",
				lastName: this.lastName,
				jersey: this.jersey,
				playerIndex: this.playerIndex,
				team: this.team
			});
		} else if (this.lastName === null) {
			return Session.set('currentPlayerForModal', {
				firstName: this.firstName,
				lastName: "",
				jersey: this.jersey,
				playerIndex: this.playerIndex,
				team: this.team
			});
		} else {
			return Session.set('currentPlayerForModal', {
				firstName: this.firstName,
				lastName: this.lastName,
				jersey: this.jersey,
				playerIndex: this.playerIndex,
				team: this.team
			});
		}
	}
});
