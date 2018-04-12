import R from 'ramda';
import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {
  return R.compose(
    R.assocPath(['profile', 'language'], 'en'),
    R.assoc('profile', R.prop('profile', options))
  )(user);
});
