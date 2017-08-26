import { Template } from 'meteor/templating';
import { Games } from '../../../api/games/schema.js';

import './home.jade';
import '../../components/creationGame/creationGame.js';
import '../../components/gameCard/gameCard.js';

Template.home.onCreated(function() {
	this.autorun(() => {
		this.subscribe('Games.last12LiveGames');
	});
});

Template.home.helpers({
	last12LiveGames() {
		return Games.find({
			gameState: {
				$nin: ['gameEnded']
			},
			privateGame: false
		}, {
			limit: 12,
			sort: {
				createdAt: -1
			}
		});
	}
});
