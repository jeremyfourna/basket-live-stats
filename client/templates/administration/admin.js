Template.admin.helpers({
	runningGames: function() {
		return Games.find({
			state: {
				$not: "gameEnded"
			}
		}).count();
	},
	endedGames: function() {
		return Games.find({
			state: "gameEnded"
		}).count();
	},
	nbUsers: function() {
		return Meteor.users.find({}).count();
	},
	nbClubs: function() {
		return Clubs.find().count();
	}
});

Template.admin.events({
	'click #addNewClub': function() {
		return Router.go('createNewClub');
	}
});
