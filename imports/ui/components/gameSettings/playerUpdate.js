import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { updateHandlingInMethod } from '../../../startup/client/lib/utils.js';
import R from 'ramda';

import './playerUpdate.jade';

Template.playerUpdate.events({
  'click .playerValidation': (event, template) => {
    const playerId = R.path(['data', '_id'], template);
    const formData = document.forms[playerId];
    const playerInfo = {
      playerId,
      lastName: R.path(['lastName', 'value'], formData),
      firstName: R.path(['firstName', 'value'], formData),
    };

    return Meteor.call(
      'Players.updatePlayerInfos',
      playerInfo,
      updateHandlingInMethod
    );
  }
});
