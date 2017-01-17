import { Template } from 'meteor/templating';
import 'meteor/sacha:spin';

import { Games } from '../../../api/games/schema.js';

import './home.jade';
import '../../components/creationGame/creationGame.js';

Template.home.onCreated(function() {
	this.autorun(() => {
		this.subscribe('Games.last3LiveGames');
		this.subscribe('Games.last3EndedGames');
	});
});

Template.home.helpers({
	game() {
		return Games.find({ gameState: { $nin: ['gameEnded', 'notStarted'] }, privateGame: false }, {
			fields: {
				yourClub: 1,
				yourClubTeamId: 1,
				opponent: 1,
				opponentTeamId: 1,
				gameState: 1
			},
			limit: 3
		});
	},
	endedGame() {
		return Games.find({ gameState: 'gameEnded', privateGame: false }, {
			fields: {
				yourClub: 1,
				yourClubTeamId: 1,
				opponent: 1,
				opponentTeamId: 1,
				gameState: 1
			},
			limit: 3
		});
	}
});
