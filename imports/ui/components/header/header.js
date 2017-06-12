import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import R from 'ramda';

import './header.jade';

Template.header.helpers({
	isClubAdmin() {
		return R.equals(R.path(['profile', 'clubAdmin'], Meteor.user()), true);
	}
});
