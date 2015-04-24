Accounts.onCreateUser(function(options, user) {
	options.profile.name = "";
	options.profile.firstName = "";
	options.profile.club = "";
	options.profile.basicUser = true;
	options.profile.proUser = false;
	user.emails = [{
		address: "",
		verified: false
	}];
	if (options.profile)
		user.profile = options.profile;
	return user;
});
