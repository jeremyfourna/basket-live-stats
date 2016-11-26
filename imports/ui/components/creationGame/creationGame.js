import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import { Bert } from 'meteor/themeteorchef:bert';

import './creationGame.jade';

Template.creationGame.events({
	'click #creationGame': function(event) {
		event.preventDefault();
		const userId = Meteor.userId();

		return Meteor.call('addGame', userId, (error, result) => {
			if (error) {
				return Bert.alert(error.message, 'danger', 'growl-top-right');
			} else {
				return Router.go('aGame', { _id: result });
			}
		});
	}
});
