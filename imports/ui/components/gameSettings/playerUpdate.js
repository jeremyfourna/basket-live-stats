import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { sendToast } from '../../../startup/client/lib/utils.js';
import { TAPi18n } from 'meteor/tap:i18n';

import './playerUpdate.jade';

Template.playerUpdate.events({
	'click .playerValidation': (event) => {
		event.preventDefault();
		const playerInfo = {
			lastName: event.target.parentElement[0].value,
			firstName: event.target.parentElement[1].value,
			playerId: this._id
		};
		Meteor.call('playerUpdate', playerInfo, (error) => {
			if (error) {
				return sendToast('danger', R.prop('message', error));
			} else {
				return sendToast('success', TAPi18n.__('updateDone'));
			}
		});
	}
});