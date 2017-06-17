import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import { Bert } from 'meteor/themeteorchef:bert';
import { sendToast, errorHandlingInMethod } from '../../../startup/client/lib/utils.js';
import R from 'ramda';

import './gameInfos.jade';

Template.gameInfos.events({
	'click .gameInfosValidation': function(event) {
		event.preventDefault();
		const data = {
			gameId: R.path(['params', '_id'], Router.current()),
			yourClub: $('#teamHome').val(),
			opponent: $('#teamAway').val(),
			level: $('#level').val(),
			group: $('#group').val()
		};
		Meteor.call('Games.updateGameInfos', data, errorHandlingInMethod);
	}
});
