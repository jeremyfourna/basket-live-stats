var GameCard = BlazeComponent.extendComponent({
	template: function() {
		return 'gameCard';
	},
	gameData: function() {
		return this.data();
	},
	notStarted: function() {
		if (this.data().gameState === 'notStarted') {
			return true;
		} else {
			return false;
		}
	},
	q1Running: function() {
		if (this.data().gameState === 'q1Running') {
			return true;
		} else {
			return false;
		}
	},
	q1Ended: function() {
		if (this.data().gameState === 'q1Ended') {
			return true;
		} else {
			return false;
		}
	},
	q2Running: function() {
		if (this.data().gameState === 'q2Running') {
			return true;
		} else {
			return false;
		}
	},
	halfTime: function() {
		if (this.data().gameState === 'halfTime') {
			return true;
		} else {
			return false;
		}
	},
	q3Running: function() {
		if (this.data().gameState === 'q3Running') {
			return true;
		} else {
			return false;
		}
	},
	q3Ended: function() {
		if (this.data().gameState === 'q3Ended') {
			return true;
		} else {
			return false;
		}
	},
	q4Running: function() {
		if (this.data().gameState === 'q4Running') {
			return true;
		} else {
			return false;
		}
	},
	gameEnded: function() {
		if (this.data().gameState === 'gameEnded') {
			return true;
		} else {
			return false;
		}
	},
	oT1: function() {
		if (this.data().gameState === 'oT1') {
			return true;
		} else {
			return false;
		}
	},
	oT2: function() {
		if (this.data().gameState === 'oT2') {
			return true;
		} else {
			return false;
		}
	},
	oT3: function() {
		if (this.data().gameState === 'oT3') {
			return true;
		} else {
			return false;
		}
	},
	oT4: function() {
		if (this.data().gameState === 'oT4') {
			return true;
		} else {
			return false;
		}
	},
	oT5: function() {
		if (this.data().gameState === 'oT5') {
			return true;
		} else {
			return false;
		}
	}
}).register('GameCard');
