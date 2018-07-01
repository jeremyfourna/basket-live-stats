import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import { updateHandlingInMethod } from '../../../startup/client/lib/utils.js';
import { getGameId } from '../../pages/utils.js';

import './gameInfos.jade';

Template.gameInfos.events({
  'click .gameInfosValidation': event => {
    event.preventDefault();
    const data = {
      gameId: getGameId(Router.current()),
      yourClub: $('#teamHome').val(),
      opponent: $('#teamAway').val()
    };
    Meteor.call('Games.updateGameInfos', data, updateHandlingInMethod);
  }
});
