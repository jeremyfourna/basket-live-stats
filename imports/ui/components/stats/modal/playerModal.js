import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { TAPi18n } from 'meteor/tap:i18n';
import { Bert } from 'meteor/themeteorchef:bert';
import { lodash } from 'meteor/stevezhu:lodash';

import { Players } from '../../../../api/players/schema.js';

import './playerModal.jade';

Template.playerModal.events({
	'show.bs.modal #playerModal': function(event) {
		let button = $(event.relatedTarget); // Button that triggered the modal
		let jersey = button.data('jersey');
		let playerId = button.data('playerid');
		let firstName = button.data('firstname') || TAPi18n.__('firstName');
		let lastName = button.data('lastname') || TAPi18n.__('lastName');
		let whoIsDoingThisAction = TAPi18n.__('whoIsDoingThisAction');
		let num = TAPi18n.__('num');
		$('#playerModal').data('playerid', playerId);
		$('.modal-title').text(`${whoIsDoingThisAction} ${num}${jersey} : ${firstName} ${lastName}`);
	},
	'click #correctionAction': function() {
		$('.buttonForAction').prepend('<span class=\'badge actionBadge\'>-1</span> ').addClass('cancelAction');
		$('#correctionAction').addClass('cancelCorrectionAction').text(TAPi18n.__('cancelCorrectionAction'));
	},
	'click #closeModalButton': function() {
		$('.actionBadge').remove();
		$('#correctionAction').removeClass('cancelCorrectionAction');
		$('.buttonForAction').removeClass('cancelAction');
	},
	'click .cancelCorrectionAction': function() {
		$('.actionBadge').remove();
		$('#correctionAction').removeClass('cancelCorrectionAction').text(TAPi18n.__('correctionAction'));
		$('.buttonForAction').removeClass('cancelAction');
	},
	'hidden.bs.modal .modal': function() {
		$('.actionBadge').remove();
		$('#correctionAction').removeClass('cancelCorrectionAction');
		$('.buttonForAction').removeClass('cancelAction');
	},
	// Positive action
	'click #onePoint': function(event) {
		event.preventDefault();
		const gameId = this.gameData._id;
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#onePoint').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Teams.correctOnePointIn', gameId, teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			const evolScore = {
				gameIndex: this.gameData.evolution.length,
				scoreGap: lodash.last(this.gameData.evolution)[1] + 1
			};
			return Meteor.call('Teams.onePointIn', gameId, teamId, playerId, evolScore, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click #twoPoints': function(event) {
		event.preventDefault();
		const gameId = this.gameData._id;
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#twoPoints').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Teams.correctTwoPointsIn', gameId, teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			const evolScore = {
				gameIndex: this.gameData.evolution.length,
				scoreGap: lodash.last(this.gameData.evolution)[1] + 2
			};

			return Meteor.call('Teams.twoPointsIn', gameId, teamId, playerId, evolScore, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click #threePoints': function(event) {
		event.preventDefault();
		const gameId = this.gameData._id;
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#threePoints').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Teams.correctThreePointsIn', gameId, teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			const evolScore = {
				gameIndex: this.gameData.evolution.length,
				scoreGap: lodash.last(this.gameData.evolution)[1] + 3
			};
			return Meteor.call('Teams.threePointsIn', gameId, teamId, playerId, evolScore, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click #assist': function(event) {
		event.preventDefault();
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#assist').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Players.correctAssist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			return Meteor.call('Players.assist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click #offReb': function(event) {
		event.preventDefault();
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#offReb').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Players.correctOffReb', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			return Meteor.call('Players.offReb', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click #defReb': function(event) {
		event.preventDefault();
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#defReb').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Players.correctDefReb', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			return Meteor.call('Players.defReb', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click #provOffFoul': function(event) {
		event.preventDefault();
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#offProvFoul').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Players.correctProvOffFoul', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			return Meteor.call('Players.provOffFoul', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click #steal': function(event) {
		event.preventDefault();
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#steal').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Players.correctSteal', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			return Meteor.call('Players.steal', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click #block': function(event) {
		event.preventDefault();
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#block').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Players.correctBlock', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			return Meteor.call('Players.block', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click #defProvFoul': function(event) {
		event.preventDefault();
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#defProvFoul').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Players.correctAssist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			return Meteor.call('Players.assist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	// Negative action
	'click #onePointOut': function(event) {
		event.preventDefault();
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#onePointOut').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Players.correctAssist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			return Meteor.call('Players.assist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click #twoPointsOut': function(event) {
		event.preventDefault();
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#twoPointsOut').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Players.correctAssist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			return Meteor.call('Players.assist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click #threePointsOut': function(event) {
		event.preventDefault();
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#threePointsOut').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Players.correctAssist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			return Meteor.call('Players.assist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click #turnover': function(event) {
		event.preventDefault();
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#turnover').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Players.correctAssist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			return Meteor.call('Players.assist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click #offFoul': function(event) {
		event.preventDefault();
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#offFoul').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Players.correctAssist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			return Meteor.call('Players.assist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click #defFoul': function(event) {
		event.preventDefault();
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#defFoul').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Players.correctAssist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			return Meteor.call('Players.assist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click #defFoulsOneFT': function(event) {
		event.preventDefault();
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#defFoulsOneFT').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Players.correctAssist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			return Meteor.call('Players.assist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click #defFoulsTwoFT': function(event) {
		event.preventDefault();
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#defFoulsTwoFT').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Players.correctAssist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			return Meteor.call('Players.assist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click #defFoulsThreeFT': function(event) {
		event.preventDefault();
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#defFoulsThreeFT').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Players.correctAssist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			return Meteor.call('Players.assist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click #techFoul': function(event) {
		event.preventDefault();
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#techFoul').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Players.correctAssist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			return Meteor.call('Players.assist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click #antiSportFoul': function(event) {
		event.preventDefault();
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#antiSportFoul').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Players.correctAssist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			return Meteor.call('Players.assist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click #disqualifyingFoul': function(event) {
		event.preventDefault();
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#disqualifyingFoul').hasClass('cancelAction');

		if (isACancelAction) {
			return Meteor.call('Players.correctAssist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			return Meteor.call('Players.assist', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	}
});
