import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';

import './header.jade';

Template.header.helpers({
	isClubAdmin() {
		if (Meteor.user().profile.clubAdmin) {
			return true;
		} else {
			return false;
		}
	}
});
