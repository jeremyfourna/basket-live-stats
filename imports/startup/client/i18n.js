import { Meteor } from 'meteor/meteor';
import { TAPi18n } from 'meteor/tap:i18n';
import { Bert } from 'meteor/themeteorchef:bert';
import R from 'ramda';

function getUserLanguage(user) {
  const userLanguage = R.path(['profile', 'language'], user);

  return userLanguage || 'en';
}

if (Meteor.isClient) {
  return Meteor.startup(() => {
    return TAPi18n.setLanguage(getUserLanguage(Meteor.user()))
      .fail((errorMessage) => {
        return Bert.alert(errorMessage, 'danger', 'growl-top-right');
      });
  });
}
