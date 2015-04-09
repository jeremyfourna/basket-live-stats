Template.playerModal.helpers({
	'currentPlayerDoingAction': function() {
		return Session.get('currentPlayerForModal').firstName.charAt(0) + ". " + Session.get('currentPlayerForModal').lastName;
	}
});

Template.playerModal.events({
	'click #onePoint': function(e) {
		var index = Session.get('currentPlayerForModal').index;
		var getTeam = function() {
			if (Session.get('currentPlayerForModal').team === 'homeTeam') {
				return this.gameInfos.homeTeam;
			} else {
				return this.gameInfos.awayTeam;
			}
		};
		var team = getTeam();
		var ftShoot = this.team.players['index'].stats.off.ftShoot;
		var ftIn = this.team.players['index'].stats.off.ftIn;
		Games.update(this._id, {
			$inc: {
				ftShoot: 1,
				ftIn: 1
			}
		});
		return console.log("1 point for number" + Session.get('currentPlayerForModal').jersey + " of " + team);
	}
});
