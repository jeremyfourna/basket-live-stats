import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import { Bert } from 'meteor/themeteorchef:bert';

import './gameInfos.jade';

Template.gameInfos.events({
	'click .gameInfosValidation': function(event) {
		event.preventDefault();
		const gameInfos = {
			yourClub: $('.teamHome').val(),
			opponent: $('.teamAway').val(),
			level: $('.level').val(),
			group: $('.group').val()
		};
		const gameId = Router.current().params._id;
		Meteor.call('gameInfosUpdate', gameId, gameInfos, (error) => {
			if (error) {
				return Bert.alert(error.message, 'danger', 'growl-top-right');
			}
		});
	}
});
