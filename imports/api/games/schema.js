import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { gameStateValues } from '../schemas.js';


export const Games = new Mongo.Collection('games');

Games.deny({
  insert() {
    return true;
  },
  update() {
    return true;
  },
  remove() {
    return true;
  }
});

export const gameSchema = new SimpleSchema({
  userId: {
    type: String,
    label: 'User id'
  },
  createdAt: {
    type: Date,
    label: 'State of the game'
  },
  gameState: {
    type: String,
    label: 'State of the game',
    allowedValues: gameStateValues
  },
  evolution: {
    type: [
      [Number, Number]
    ],
    label: 'Game score evolution'
  },
  yourClub: {
    type: String,
    label: 'Your club name',
    optional: true
  },
  yourClubTeamId: {
    type: String,
    label: 'Your club team id in the Teams collection',
    optional: true
  },
  opponent: {
    type: String,
    label: 'Opponent club name',
    optional: true
  },
  opponentTeamId: {
    type: String,
    label: 'Your club team id in the Teams collection',
    optional: true
  }
});

Games.schema = gameSchema;
