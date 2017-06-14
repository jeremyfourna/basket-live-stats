import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import { sendToast } from '../../../startup/client/lib/utils.js';
import R from 'ramda';

import './creationGame.jade';

Template.creationGame.events({
	'click #creationGame': () => {
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
