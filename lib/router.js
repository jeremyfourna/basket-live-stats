Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
});

Router.route('/', {
	name: 'home'
});

Router.route('/addGame', {
	name: 'addGame'
});
