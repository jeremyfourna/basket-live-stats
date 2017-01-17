import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {
	user.profile = options.profile;
	user.profile.name = '';
	user.profile.firstName = '';
	user.profile.status = 'active';
	return user;
});
