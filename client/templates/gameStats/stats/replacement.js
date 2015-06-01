Template.replacement.events({
	'click .validateInPlayPlayers': function() {
		$('#homeTeamInPlay .homeTeamPillForModal').each(function() {
			console.log(this);
		});
	}
});

Template.replacement.onRendered(function() {
	//dragula(this.find('#homeTeamOnTheBench'));
	dragula([this.find('#homeTeamInPlay'), this.find('#homeTeamOnTheBench')]);
	dragula([this.find('#awayTeamInPlay'), this.find('#awayTeamOnTheBench')]);
});
