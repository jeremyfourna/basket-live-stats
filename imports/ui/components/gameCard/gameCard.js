import { Template } from 'meteor/templating';

import './gameCard.jade';

Template.gameCard.helpers({
	yourClub() {
		return this.gameInfos.yourClub || TAPi18n.__('homeTeam');
	},
	opponent() {
		return this.gameInfos.opponent || TAPi18n.__('awayTeam');
	},
	notStarted() {
		if (this.gameState === 'notStarted') {
			return true;
		} else {
			return false;
		}
	},
	q1Running() {
		if (this.gameState === 'q1Running') {
			return true;
		} else {
			return false;
		}
	},
	q1Ended() {
		if (this.gameState === 'q1Ended') {
			return true;
		} else {
			return false;
		}
	},
	q2Running() {
		if (this.gameState === 'q2Running') {
			return true;
		} else {
			return false;
		}
	},
	halfTime() {
		if (this.gameState === 'halfTime') {
			return true;
		} else {
			return false;
		}
	},
	q3Running() {
		if (this.gameState === 'q3Running') {
			return true;
		} else {
			return false;
		}
	},
	q3Ended() {
		if (this.gameState === 'q3Ended') {
			return true;
		} else {
			return false;
		}
	},
	q4Running() {
		if (this.gameState === 'q4Running') {
			return true;
		} else {
			return false;
		}
	},
	gameEnded() {
		if (this.gameState === 'gameEnded') {
			return true;
		} else {
			return false;
		}
	},
	oT1() {
		if (this.gameState === 'oT1') {
			return true;
		} else {
			return false;
		}
	},
	oT2() {
		if (this.gameState === 'oT2') {
			return true;
		} else {
			return false;
		}
	},
	oT3() {
		if (this.gameState === 'oT3') {
			return true;
		} else {
			return false;
		}
	},
	oT4() {
		if (this.gameState === 'oT4') {
			return true;
		} else {
			return false;
		}
	},
	oT5() {
		if (this.gameState === 'oT5') {
			return true;
		} else {
			return false;
		}
	}
});
