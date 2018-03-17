import { Template } from 'meteor/templating';
import { Games } from '../../../api/games/schema.js';

import './home.jade';
import '../../components/creationGame/creationGame.js';
import '../../components/gameCard/gameCard.js';

Template.home.onCreated(function() {
  this.autorun(() => {
    this.subscribe('Games.lastLiveGames');
  });
});

Template.home.helpers({
  lastLiveGames() {
    return Games.find({
      gameState: {
        $nin: ['gameEnded']
      },
      privateGame: false
    }, {
      sort: {
        createdAt: -1
      }
    });
  }
});
