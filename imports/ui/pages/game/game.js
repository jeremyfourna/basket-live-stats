import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import R from 'ramda';
import 'meteor/sacha:spin';

import { Games } from '../../../api/games/schema.js';
import { Teams } from '../../../api/teams/schema.js';
import { Players } from '../../../api/players/schema.js';

import './game.jade';
import '../../components/summary/summary.js';
import '../../components/stats/stats.js';
import '../../components/replacement/replacement.js';
import '../../components/gameSettings/gameSettings.js';

Template.game.onCreated(function() {
  this.autorun(() => {
    const gameId = R.path(['params', '_id'], Router.current());

    this.subscribe('Games.aGame', gameId);
    this.subscribe('Teams.teamsForAGame', gameId);
    this.subscribe('Players.playersForAGame', gameId);
  });
});

Template.game.helpers({
  isOwnerOfTheGame() {
    const gameId = R.path(['params', '_id'], Router.current());
    const userId = Meteor.userId();

    const game = Games.findOne({ _id: gameId }, {
      fields: {
        userId: 1
      }
    });

    return R.equals(userId, R.prop('userId', game));
  },
  gameData() {
    const gameId = R.path(['params', '_id'], Router.current());

    return Games.findOne({ _id: gameId }, {
      fields: {
        _id: 1,
        gameState: 1,
        yourClub: 1,
        yourClubTeamId: 1,
        opponent: 1,
        opponentTeamId: 1,
        evolution: 1
      }
    });
  },
  playersDataInGame() {
    const gameId = R.path(['params', '_id'], Router.current());

    return Players.find({
      gameId,
      inPlay: true
    }, {
      fields: {
        _id: 1,
        teamId: 1,
        firstName: 1,
        lastName: 1,
        jersey: 1
      },
      sort: {
        jersey: 1
      }
    }).fetch();
  },
  teamsScore() {
    const gameId = R.path(['params', '_id'], Router.current());

    return Teams.find({ gameId }, {
      fields: {
        _id: 1,
        score: 1
      }
    }).fetch();
  },
  playersData() {
    const gameId = R.path(['params', '_id'], Router.current());

    return Players.find({ gameId }, {
      fields: {
        _id: 1,
        teamId: 1,
        firstName: 1,
        lastName: 1,
        jersey: 1,
        inPlay: 1
      },
      sort: {
        jersey: 1
      }
    }).fetch();
  },
});
