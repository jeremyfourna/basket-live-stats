import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import 'meteor/sacha:spin';

import { Games } from '../../../api/games/schema.js';

import './aGame.jade';
import '../../components/summary/summary.js';
import '../../components/stats/stats.js';
import '../../components/replacement/replacement.js';

Template.aGame.onCreated(function() {
	this.autorun(() => {
		this.subscribe('aGameForOwnership', Router.current().params._id);
	});
});

Template.aGame.helpers({
	isOwnerOfTheGame() {
		let game = Games.findOne({ _id: Router.current().params._id }, {
			fields: {
				userId: 1
			}
		});
		if (Meteor.userId() === game.userId) {
			return true;
		} else {
			return false;
		}
	}
});
