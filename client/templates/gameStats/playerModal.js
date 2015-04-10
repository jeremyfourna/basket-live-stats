Template.playerModal.helpers({
	'currentPlayerDoingAction': function() {
		return Session.get('currentPlayerForModal').firstName.charAt(0) + ". " + Session.get('currentPlayerForModal').lastName;
	}
});

Template.playerModal.events({
	'click #onePoint': function(e) {
		var team = Session.get('currentPlayerForModal').team;
		var playerIndex = Session.get('currentPlayerForModal').index;
		var parentData = Template.parentData(1);
		var playerForUpdate = parentData["team"].players['index'];
		console.log(playerForUpdate);

		/*Games.update({
			_id: parentData._id,
			team.players: playerIndex
		}, {
			$inc: {
				ftShoot: 1,
				ftIn: 1
			}
		});*/
		return console.log("1 point for number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team);
	}
});
