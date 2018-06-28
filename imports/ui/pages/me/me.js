import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import 'meteor/sacha:spin';

import { Games } from '../../../api/games/schema.js';

import './me.jade';
import '../../components/creationGame/creationGame.js';
import '../../components/gameCard/gameCard.js';

Template.me.onCreated(function() {
  this.autorun(() => {
    this.subscribe('Games.myGames', Meteor.userId());
  });
});

Template.me.helpers({
  ownerOfTheGame() {
    if (Meteor.userId() === this.userId) {
      return true;
    } else {
      return false;
    }
  },
  myGames() {
    return Games.find({ userId: Meteor.userId() }, {
      fields: {
        userId: 1,
        yourClub: 1,
        yourClubTeamId: 1,
        opponent: 1,
        opponentTeamId: 1,
        gameState: 1
      }
    });
  }
});
