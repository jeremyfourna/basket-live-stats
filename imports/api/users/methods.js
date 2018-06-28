import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import {
  __,
  prop
} from 'ramda';

import { Users } from './schema.js';

Meteor.methods({
  'Users.changeUserName': data => {
    const p = prop(__, data);
    // Check method params
    const methodSchema = new SimpleSchema({
      userId: { type: String },
      pseudo: { type: String }
    });
    check(data, methodSchema);
    // If OK the code continue
    return Users.update({ _id: p('userId') }, {
      $set: {
        username: p('pseudo')
      }
    });
  },
  'Users.renderUserInactive': userId => {
    // Check method params
    check(userId, String);
    // If OK the code continue
    return Users.update({ _id: userId }, {
      $set: {
        'profile.status': 'inactive'
      }
    });
  },
  'Users.updateUserProfile': data => {
    const p = prop(__, data);
    // Check method params
    const methodSchema = new SimpleSchema({
      userId: { type: String },
      lastName: { type: String },
      firstName: { type: String }
    });
    check(data, methodSchema);
    // If OK the code continue
    return Users.update({ _id: p('userId') }, {
      $set: {
        'profile.lastName': p('lastName'),
        'profile.firstName': p('firstName')
      }
    });
  }
});
