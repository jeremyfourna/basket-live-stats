import { Meteor } from 'meteor/meteor';

import { Clubs } from '../schema.js';

Meteor.publish('Clubs.allClubsData', () => {
  return Clubs.find({});
});

Meteor.publish('Clubs.allClubsName', () => {
  return Clubs.find({}, {
    fields: {
      'name': 1
    }
  });
});

Meteor.publish('Clubs.createdByUserId', (userId) => {
  return Clubs.find({ createdBy: userId });
});
