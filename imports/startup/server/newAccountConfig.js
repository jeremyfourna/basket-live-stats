import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser(function(options, user) {
	options.profile.name = "";
	options.profile.firstName = "";
	options.profile.club = "";
	options.profile.basicUser = true;
	options.profile.proUser = false;
	options.profile.clubAdmin = false;
	options.profile.LBBSAdmin = false;
	if (options.profile)
		user.profile = options.profile;
	return user;
});
