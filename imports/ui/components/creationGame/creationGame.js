import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import { sendToast } from '../../../startup/client/lib/utils.js';
import { prop } from 'ramda';

import './creationGame.jade';

Template.creationGame.events({
  'click #creationGame': event => {
    // Disable button to prevent double click and the creation of multiple games
    event.target.disabled = true;

    return Meteor.call('Games.addGame', Meteor.userId(), (error, result) => {
      if (error) {
        return sendToast('danger', prop('message', error));
      } else {
        return Router.go('game', { _id: result });
      }
    });
  }
});
