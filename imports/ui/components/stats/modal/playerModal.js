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
		$('.correctionAction').addClass('cancelCorrectionAction');
	},
	'click #closeModalButton': function() {
		$('.actionBadge').remove();
		$('#correctionAction').removeClass('cancelCorrectionAction');
		$('.buttonForAction').removeClass('cancelAction');
	},
	'click .cancelCorrectionAction': function() {
		$('.actionBadge').remove();
		$('#correctionAction').removeClass('cancelCorrectionAction');
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
			return Meteor.call('correctOnePointInForPlayer', gameId, teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			const evolScore = {
				gameIndex: this.gameData.evolution.length,
				scoreGap: lodash.last(this.gameData.evolution)[1] - 1
			};
			return Meteor.call('onePointInForPlayer', gameId, teamId, playerId, evolScore, (error) => {
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
			return Meteor.call('correctTwoPointsInForPlayer', gameId, teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			const evolScore = {
				gameIndex: this.gameData.evolution.length,
				scoreGap: lodash.last(this.gameData.evolution)[1] - 2
			};
			return Meteor.call('twoPointsInForPlayer', gameId, teamId, playerId, evolScore, (error) => {
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
			return Meteor.call('correctThreePointsInForPlayer', gameId, teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			const evolScore = {
				gameIndex: this.gameData.evolution.length,
				scoreGap: lodash.last(this.gameData.evolution)[1] - 3
			};
			return Meteor.call('threePointsInForPlayer', gameId, teamId, playerId, evolScore, (error) => {
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
			return Meteor.call('correctAssistsInForPlayer', teamId, playerId, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			return Meteor.call('assistsInForPlayer', teamId, playerId, (error) => {
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
			Meteor.call('correctOffRebTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctOffReb', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('offRebTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('offReb', playerData._id, function(error) {
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
			Meteor.call('correctDefRebTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctDefReb', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('defRebTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('defReb', playerData._id, function(error) {
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
			Meteor.call('correctOffProvFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctOffProvFouls', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('offProvFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('offProvFouls', playerData._id, function(error) {
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
			Meteor.call('correctStealsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctSteals', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('stealsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('steals', playerData._id, function(error) {
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
			Meteor.call('correctBlocksTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctBlocks', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('blocksTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('blocks', playerData._id, function(error) {
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
			Meteor.call('correctDefProvFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctDefProvFouls', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('defProvFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('defProvFouls', playerData._id, function(error) {
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
			Meteor.call('correctOnePointMissTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctOnePointMiss', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('onePointMissTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('onePointMiss', playerData._id, function(error) {
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
			Meteor.call('correctTwoPointsMissTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctTwoPointsMiss', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('twoPointsMissTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('twoPointsMiss', playerData._id, function(error) {
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
			Meteor.call('correctThreePointsMissTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctThreePointsMiss', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('threePointsMissTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('threePointsMiss', playerData._id, function(error) {
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
			Meteor.call('correctTurnoversTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctTurnovers', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('turnoversTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('turnovers', playerData._id, function(error) {
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
			Meteor.call('correctOffFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctOffFouls', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('offFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('offFouls', playerData._id, function(error) {
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
			Meteor.call('correctDefFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctDefFouls', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('defFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('defFouls', playerData._id, function(error) {
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
			Meteor.call('correctDefFoulsOneFTTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctDefFoulsOneFT', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('defFoulsOneFTTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('defFoulsOneFT', playerData._id, function(error) {
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
			Meteor.call('correctDefFoulsTwoFTTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctDefFoulsTwoFT', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('defFoulsTwoFTTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('defFoulsTwoFT', playerData._id, function(error) {
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
			Meteor.call('correctDefFoulsThreeFTTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctDefFoulsThreeFT', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('defFoulsThreeFTTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('defFoulsThreeFT', playerData._id, function(error) {
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
			Meteor.call('correctTechFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctTechFouls', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('techFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('techFouls', playerData._id, function(error) {
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
			Meteor.call('correctAntiSportFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctAntiSportFouls', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('antiSportFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('antiSportFouls', playerData._id, function(error) {
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
			Meteor.call('correctDisqualifyingFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctDisqualifyingFouls', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('disqualifyingFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('disqualifyingFouls', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	}
});
