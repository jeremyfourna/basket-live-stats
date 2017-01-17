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
		const isACancelAction = $('#onePointOpponent').hasClass('cancelAction');

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
		const isACancelAction = $('#onePointOpponent').hasClass('cancelAction');

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
		const isACancelAction = $('#onePointOpponent').hasClass('cancelAction');

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
			return Meteor.call('Teams.correctAssistsIn', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			return Meteor.call('Teams.assistsIn', teamId, playerId, (error) => {
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

		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.offReb').hasClass('cancelAction')) {
			Meteor.call('Teams.correctOffRebTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.correctOffReb', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('Teams.offRebTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.offReb', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	'click #defReb': function(event) {
		event.preventDefault();
		const gameId = this.gameData._id;
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#onePointOpponent').hasClass('cancelAction');

		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.defReb').hasClass('cancelAction')) {
			Meteor.call('Teams.correctDefRebTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.correctDefReb', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('Teams.defRebTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.defReb', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	'click #offProvFouls': function(event) {
		event.preventDefault();
		const gameId = this.gameData._id;
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#onePointOpponent').hasClass('cancelAction');

		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.offProvFouls').hasClass('cancelAction')) {
			Meteor.call('Teams.correctOffProvFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.correctOffProvFouls', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('Teams.offProvFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.offProvFouls', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	'click #steal': function(event) {
		event.preventDefault();
		const gameId = this.gameData._id;
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#onePointOpponent').hasClass('cancelAction');

		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.steal').hasClass('cancelAction')) {
			Meteor.call('Teams.correctStealsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.correctSteals', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('Teams.stealsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.steals', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	'click #block': function(event) {
		event.preventDefault();
		const gameId = this.gameData._id;
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#onePointOpponent').hasClass('cancelAction');

		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.block').hasClass('cancelAction')) {
			Meteor.call('Teams.correctBlocksTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.correctBlocks', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('Teams.blocksTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.blocks', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	'click #defProvFouls': function(event) {
		event.preventDefault();
		const gameId = this.gameData._id;
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#onePointOpponent').hasClass('cancelAction');

		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.defProvFouls').hasClass('cancelAction')) {
			Meteor.call('Teams.correctDefProvFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.correctDefProvFouls', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('Teams.defProvFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.defProvFouls', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	// Negative action
	'click #onePointMiss': function(event) {
		event.preventDefault();
		const gameId = this.gameData._id;
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#onePointOpponent').hasClass('cancelAction');

		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.onePointMiss').hasClass('cancelAction')) {
			Meteor.call('Teams.correctOnePointMissTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.correctOnePointMiss', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('Teams.onePointMissTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.onePointMiss', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	'click #twoPointsMiss': function(event) {
		event.preventDefault();
		const gameId = this.gameData._id;
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#onePointOpponent').hasClass('cancelAction');

		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.twoPointsMiss').hasClass('cancelAction')) {
			Meteor.call('Teams.correctTwoPointsMissTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.correctTwoPointsMiss', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('Teams.twoPointsMissTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.twoPointsMiss', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	'click #threePointsMiss': function(event) {
		event.preventDefault();
		const gameId = this.gameData._id;
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#onePointOpponent').hasClass('cancelAction');

		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.threePointsMiss').hasClass('cancelAction')) {
			Meteor.call('Teams.correctThreePointsMissTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.correctThreePointsMiss', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('Teams.threePointsMissTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.threePointsMiss', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	'click #turnovers': function(event) {
		event.preventDefault();
		const gameId = this.gameData._id;
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#onePointOpponent').hasClass('cancelAction');

		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.turnovers').hasClass('cancelAction')) {
			Meteor.call('Teams.correctTurnoversTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.correctTurnovers', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('Teams.turnoversTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.turnovers', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	'click #offFouls': function(event) {
		event.preventDefault();
		const gameId = this.gameData._id;
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#onePointOpponent').hasClass('cancelAction');

		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.offFouls').hasClass('cancelAction')) {
			Meteor.call('Teams.correctOffFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.correctOffFouls', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('Teams.offFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.offFouls', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	'click #defFouls': function(event) {
		event.preventDefault();
		const gameId = this.gameData._id;
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#onePointOpponent').hasClass('cancelAction');

		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.defFouls').hasClass('cancelAction')) {
			Meteor.call('Teams.correctDefFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.correctDefFouls', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('Teams.defFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.defFouls', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	'click #defFoulsOneFT': function(event) {
		event.preventDefault();
		const gameId = this.gameData._id;
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#onePointOpponent').hasClass('cancelAction');

		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.defFoulsOneFT').hasClass('cancelAction')) {
			Meteor.call('Teams.correctDefFoulsOneFTTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.correctDefFoulsOneFT', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('Teams.defFoulsOneFTTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.defFoulsOneFT', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	'click #defFoulsTwoFT': function(event) {
		event.preventDefault();
		const gameId = this.gameData._id;
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#onePointOpponent').hasClass('cancelAction');

		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.defFoulsTwoFT').hasClass('cancelAction')) {
			Meteor.call('Teams.correctDefFoulsTwoFTTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.correctDefFoulsTwoFT', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('Teams.defFoulsTwoFTTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.defFoulsTwoFT', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	'click #defFoulsThreeFT': function(event) {
		event.preventDefault();
		const gameId = this.gameData._id;
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#onePointOpponent').hasClass('cancelAction');

		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.defFoulsThreeFT').hasClass('cancelAction')) {
			Meteor.call('Teams.correctDefFoulsThreeFTTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.correctDefFoulsThreeFT', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('Teams.defFoulsThreeFTTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.defFoulsThreeFT', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	'click #techFouls': function(event) {
		event.preventDefault();
		const gameId = this.gameData._id;
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#onePointOpponent').hasClass('cancelAction');

		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.techFouls').hasClass('cancelAction')) {
			Meteor.call('Teams.correctTechFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.correctTechFouls', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('Teams.techFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.techFouls', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	'click #antiSportFouls': function(event) {
		event.preventDefault();
		const gameId = this.gameData._id;
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#onePointOpponent').hasClass('cancelAction');

		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.antiSportFouls').hasClass('cancelAction')) {
			Meteor.call('Teams.correctAntiSportFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.correctAntiSportFouls', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('Teams.antiSportFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.antiSportFouls', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	'click #disqualifyingFouls': function(event) {
		event.preventDefault();
		const gameId = this.gameData._id;
		const teamId = this.gameData.yourClubTeamId;
		const playerId = $('#playerModal').data('playerid');
		const isACancelAction = $('#onePointOpponent').hasClass('cancelAction');

		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.disqualifyingFouls').hasClass('cancelAction')) {
			Meteor.call('Teams.correctDisqualifyingFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.correctDisqualifyingFouls', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('Teams.disqualifyingFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('Teams.disqualifyingFouls', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	}
});
