import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import 'meteor/sacha:spin';

import { Games } from '../../../api/games/schema.js';

import './liveGames.jade';
import '../../components/creationGame/creationGame.js';
import '../../components/gameCard/gameCard.js';

Template.liveGames.onCreated(function() {
	this.autorun(() => {
		this.subscribe('Games.liveGames');
		this.subscribe('Games.myGames', Meteor.userId());
	});
});

Template.liveGames.helpers({
	liveGame() {
		return Games.find({
			privateGame: false,
			gameState: {
				$nin: ['notStarted', 'gameEnded']
			}
		}, {
			fields: {
				yourClub: 1,
				yourClubTeamId: 1,
				opponent: 1,
				opponentTeamId: 1,
				gameState: 1
			}
		});
	},
	endedGame() {
		return Games.find({
			gameState: 'gameEnded',
			privateGame: false
		}, {
			fields: {
				yourClub: 1,
				yourClubTeamId: 1,
				opponent: 1,
				opponentTeamId: 1,
				gameState: 1
			}
		});
	},
	ownerOfTheGame() {
		if (Meteor.userId() === this.userId) {
			return true;
		} else {
			return false;
		}
	},
	myGame() {
		return Games.find({ userId: Meteor.userId() }, {
			fields: {
				yourClub: 1,
				yourClubTeamId: 1,
				opponent: 1,
				opponentTeamId: 1,
				gameState: 1
			}
		});
	}
});
