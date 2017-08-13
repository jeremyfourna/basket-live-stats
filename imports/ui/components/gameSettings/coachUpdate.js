import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { sendToast } from '../../../startup/client/lib/utils.js';
import { TAPi18n } from 'meteor/tap:i18n';

import './coachUpdate.jade';

Template.coachUpdate.events({
	'click .coachValidation': function(event) {
		event.preventDefault();
		const coachInfo = {
			lastName: event.target.parentElement[0].value,
			firstName: event.target.parentElement[1].value,
			coachId: this._id
		};
		Meteor.call('coachUpdate', coachInfo, (error) => {
			if (error) {
				return sendToast('danger', R.prop('message', error));
			} else {
				return sendToast('success', TAPi18n.__('updateDone'));
			}
		});
	}
});