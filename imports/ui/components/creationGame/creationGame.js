import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import { sendToast } from '../../../startup/client/lib/utils.js';
import R from 'ramda';

import './creationGame.jade';

Template.creationGame.events({
	'click #creationGame': (event) => {
		// Disable button to prevent double click and the creation of multiple games
		$(R.prop('target', event)).attr('disabled', 'disabled');

		const userId = Meteor.userId();

		return Meteor.call('Games.addGame', userId, (error, result) => {
			if (error) {
				return sendToast('danger', R.prop('message', error));
			} else {
				return Router.go('aGame', { _id: result });
			}
		});
	}
});