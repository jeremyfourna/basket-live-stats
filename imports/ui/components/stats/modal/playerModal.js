import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { TAPi18n } from 'meteor/tap:i18n';

import { Games } from '../../../../api/games/schema.js';
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
		$('#playerModal').data('playerId', playerId);
		$('.modal-title').text(`${whoIsDoingThisAction} ${num}${jersey} : ${firstName} ${lastName} `);
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
	'click .onePoint': function() {
		let gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				'stats.evolution': 1,
				'stats.yourClub.score': 1,
				'stats.opponent.score': 1
			}
		});
		let playerData = this;
		let evolScore = {
			gameIndex: gameData.stats.evolution.length,
			scoreGap: gameData.stats.yourClub.score - gameData.stats.opponent.score + 1
		};
		if ($('#' + playerData._id).find('.onePoint').hasClass('cancelAction')) {
			Meteor.call('correctionOnePointTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionOnePoint', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('onePointTeamYourClub', gameData._id, evolScore, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('onePoint', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	'click .twoPoints': function() {
		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				'stats.evolution': 1,
				'stats.yourClub.score': 1,
				'stats.opponent.score': 1
			}
		});
		var playerData = this;
		var evolScore = {
			gameIndex: gameData.stats.evolution.length,
			scoreGap: gameData.stats.yourClub.score - gameData.stats.opponent.score + 2
		};
		if ($('#' + playerData._id).find('.twoPoints').hasClass('cancelAction')) {
			Meteor.call('correctionTwoPointsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionTwoPoints', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('twoPointsTeamYourClub', gameData._id, evolScore, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('twoPoints', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	'click .threePoints': function() {
		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				'stats.evolution': 1,
				'stats.yourClub.score': 1,
				'stats.opponent.score': 1
			}
		});
		var playerData = this;
		var evolScore = {
			gameIndex: gameData.stats.evolution.length,
			scoreGap: gameData.stats.yourClub.score - gameData.stats.opponent.score + 3
		};
		if ($('#' + playerData._id).find('.threePoints').hasClass('cancelAction')) {
			Meteor.call('correctionThreePointsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionThreePoints', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('threePointsTeamYourClub', gameData._id, evolScore, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('threePoints', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	'click .assist': function() {
		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.assist').hasClass('cancelAction')) {
			Meteor.call('correctionAssistsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionAssists', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		} else {
			Meteor.call('assistsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('assists', playerData._id, function(error) {
						if (error) {
							return throwError(error.message);
						}
					});
				}
			});
		}
	},
	'click .offReb': function() {
		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.offReb').hasClass('cancelAction')) {
			Meteor.call('correctionOffRebTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionOffReb', playerData._id, function(error) {
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
	'click .defReb': function() {
		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.defReb').hasClass('cancelAction')) {
			Meteor.call('correctionDefRebTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionDefReb', playerData._id, function(error) {
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
	'click .offProvFouls': function() {
		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.offProvFouls').hasClass('cancelAction')) {
			Meteor.call('correctionOffProvFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionOffProvFouls', playerData._id, function(error) {
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
	'click .steal': function() {
		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.steal').hasClass('cancelAction')) {
			Meteor.call('correctionStealsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionSteals', playerData._id, function(error) {
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
	'click .block': function() {
		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.block').hasClass('cancelAction')) {
			Meteor.call('correctionBlocksTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionBlocks', playerData._id, function(error) {
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
	'click .defProvFouls': function() {
		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.defProvFouls').hasClass('cancelAction')) {
			Meteor.call('correctionDefProvFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionDefProvFouls', playerData._id, function(error) {
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
	'click .onePointMiss': function() {
		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.onePointMiss').hasClass('cancelAction')) {
			Meteor.call('correctionOnePointMissTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionOnePointMiss', playerData._id, function(error) {
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
	'click .twoPointsMiss': function() {
		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.twoPointsMiss').hasClass('cancelAction')) {
			Meteor.call('correctionTwoPointsMissTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionTwoPointsMiss', playerData._id, function(error) {
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
	'click .threePointsMiss': function() {
		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.threePointsMiss').hasClass('cancelAction')) {
			Meteor.call('correctionThreePointsMissTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionThreePointsMiss', playerData._id, function(error) {
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
	'click .turnovers': function() {
		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.turnovers').hasClass('cancelAction')) {
			Meteor.call('correctionTurnoversTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionTurnovers', playerData._id, function(error) {
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
	'click .offFouls': function() {
		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.offFouls').hasClass('cancelAction')) {
			Meteor.call('correctionOffFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionOffFouls', playerData._id, function(error) {
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
	'click .defFouls': function() {
		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.defFouls').hasClass('cancelAction')) {
			Meteor.call('correctionDefFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionDefFouls', playerData._id, function(error) {
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
	'click .defFoulsOneFT': function() {
		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.defFoulsOneFT').hasClass('cancelAction')) {
			Meteor.call('correctionDefFoulsOneFTTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionDefFoulsOneFT', playerData._id, function(error) {
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
	'click .defFoulsTwoFT': function() {
		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.defFoulsTwoFT').hasClass('cancelAction')) {
			Meteor.call('correctionDefFoulsTwoFTTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionDefFoulsTwoFT', playerData._id, function(error) {
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
	'click .defFoulsThreeFT': function() {
		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.defFoulsThreeFT').hasClass('cancelAction')) {
			Meteor.call('correctionDefFoulsThreeFTTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionDefFoulsThreeFT', playerData._id, function(error) {
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
	'click .techFouls': function() {
		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.techFouls').hasClass('cancelAction')) {
			Meteor.call('correctionTechFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionTechFouls', playerData._id, function(error) {
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
	'click .antiSportFouls': function() {
		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.antiSportFouls').hasClass('cancelAction')) {
			Meteor.call('correctionAntiSportFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionAntiSportFouls', playerData._id, function(error) {
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
	'click .disqualifyingFouls': function() {
		var gameData = Games.findOne({
			_id: Router.current().params._id
		}, {
			fields: {
				_id: 1
			}
		});
		var playerData = this;
		if ($('#' + playerData._id).find('.disqualifyingFouls').hasClass('cancelAction')) {
			Meteor.call('correctionDisqualifyingFoulsTeamYourClub', gameData._id, function(error) {
				if (error) {
					return throwError(error.message);
				} else {
					Meteor.call('correctionDisqualifyingFouls', playerData._id, function(error) {
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
