import { Accounts } from 'meteor/accounts-base';

// Accept only pseudo and password for logging a user
Accounts.ui.config({
	passwordSignupFields: 'EMAIL_ONLY'
});
