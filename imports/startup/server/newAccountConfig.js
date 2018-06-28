import {
  assoc,
  assocPath,
  compose,
  prop
} from 'ramda';
import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {
  return compose(
    assocPath(['profile', 'language'], 'en'),
    assoc('profile', prop('profile', options))
  )(user);
});
