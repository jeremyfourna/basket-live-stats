import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import { Bert } from 'meteor/themeteorchef:bert';

import './creationGame.jade';

Template.creationGame.events({
	'click #creationGame': function(event) {
		event.preventDefault();
		Meteor.call('addAGame', { userId: Meteor.userId() }, (error, result) => {
			if (error) {
				Bert.alert(error.message, 'danger', 'growl-top-right');
			} else {
				Router.go('aGame', { _id: result });
			}
		});
	}
});
