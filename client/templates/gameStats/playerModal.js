Template.playerModal.helpers({
	'currentPlayerDoingAction': function() {
		return Session.get('currentPlayerForModal').firstName.charAt(0) + ". " + Session.get('currentPlayerForModal').lastName;
	}
});

Template.playerModal.events({
	'click #onePoint': function(e) {
		console.log(this);
		/*Games.update(this._id, {
			$inc: {
				ftShoot: 1,
				ftIn: 1
			}
		});*/
		return console.log("1 point for number" + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team);
	}
});
