import { Meteor } from 'meteor/meteor';
import { TAPi18n } from 'meteor/tap:i18n';
import { sendToast } from './lib/utils.js';
import R from 'ramda';

function getUserLanguage(user) {
  const userLanguage = R.path(['profile', 'language'], user);

  return userLanguage || 'en';
}

if (Meteor.isClient) {
  Meteor.startup(() => {
    return TAPi18n
      .setLanguage(getUserLanguage(Meteor.user()))
      .fail(message => sendToast('danger', message));
  });
}
