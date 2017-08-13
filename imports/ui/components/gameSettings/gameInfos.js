import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import { sendToast } from '../../../startup/client/lib/utils.js';
import R from 'ramda';
import { TAPi18n } from 'meteor/tap:i18n';

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
		Meteor.call('Games.updateGameInfos', data, (error, result) => {
			if (error) {
				return sendToast('danger', R.prop('message', error));
			} else {
				return sendToast('success', TAPi18n.__('updateDone'));
			}
		});
	}
});