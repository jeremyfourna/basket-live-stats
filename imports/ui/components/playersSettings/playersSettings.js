import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import 'meteor/sacha:spin';

import { Games } from '../../../api/games/schema.js';
import { Players } from '../../../api/players/schema.js';
import { Coachs } from '../../../api/coachs/schema.js';

import './playersSettings.jade';
import './gameInfos.js';
import './playerUpdate.js';
import './coachUpdate.js';

Template.playersSettings.onCreated(function() {
	this.autorun(() => {
		this.subscribe('oneGameInfos', Router.current().params._id);
	});
});

Template.playersSettings.helpers({
	gameData() {
		return Games.findOne({ _id: Router.current().params._id }, {
			fields: {
				gameInfos: 1
			}
		});
	},
	playerData() {
		return Players.find({
			gameId: Router.current().params._id,
			teamId: 'yourClub'
		});
	},
	coachData() {
		return Coachs.find({
			gameId: Router.current().params._id,
			teamId: 'yourClub'
		});
	}
});
