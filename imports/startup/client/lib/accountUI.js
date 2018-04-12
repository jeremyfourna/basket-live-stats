import { Accounts } from 'meteor/accounts-base';

// Accept only email and password for logging a user
Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY'
});
