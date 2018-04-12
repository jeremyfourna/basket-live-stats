import { Meteor } from 'meteor/meteor';

export const Users = Meteor.users;

Users.deny({
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
