import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';

import { Games } from '../../../api/games/schema.js';

import './aGame.jade';

Template.aGame.onCreated(function() {
	this.autorun(() => {
		this.subscribe('oneGame', Router.current().params._id);
		this.subscribe('playersForAGame', Router.current().params._id);
		this.subscribe('coachsForAGame', Router.current().params._id);
	});
});

Template.aGame.helpers({
	gameData() {
		return Games.findOne(Router.current().params._id);
	},
});
