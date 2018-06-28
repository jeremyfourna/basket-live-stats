import { Router } from 'meteor/iron:router';

// Base components/layouts
import '../../ui/layouts/layout.js';
import '../../ui/components/notFound.jade';

// Pages
import '../../ui/pages/home/home.js';
import '../../ui/pages/me/me.js';
import '../../ui/pages/game/game.js';

Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'home'
});

Router.route('/me', {
  name: 'me'
});

Router.route('/game/:_id', {
  name: 'game'
});
