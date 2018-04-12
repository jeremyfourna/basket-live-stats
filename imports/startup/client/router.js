import { Router } from 'meteor/iron:router';

// Base components/layouts
import '../../ui/layouts/layout.js';
import '../../ui/components/notFound.jade';

// Pages
import '../../ui/pages/home/home.js';
import '../../ui/pages/liveGames/liveGames.js';
import '../../ui/pages/game/game.js';

Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'home'
});

Router.route('/live', {
  name: 'liveGames'
});

Router.route('/game/:_id', {
  name: 'game'
});
