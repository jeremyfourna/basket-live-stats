import { Template } from 'meteor/templating';
import R from 'ramda';

import './stateOfTheGameText.jade';

Template.stateOfTheGameText.helpers({
	notStarted() {
		return R.equals(R.path(['data', 'stateOfTheGame'], Template.instance()), 'notStarted');
	},
	q1Running() {
		return R.equals(R.path(['data', 'stateOfTheGame'], Template.instance()), 'q1Running');
	},
	q1Ended() {
		return R.equals(R.path(['data', 'stateOfTheGame'], Template.instance()), 'q1Ended');
	},
	q2Running() {
		return R.equals(R.path(['data', 'stateOfTheGame'], Template.instance()), 'q2Running');
	},
	halfTime() {
		return R.equals(R.path(['data', 'stateOfTheGame'], Template.instance()), 'halfTime');
	},
	q3Running() {
		return R.equals(R.path(['data', 'stateOfTheGame'], Template.instance()), 'q3Running');
	},
	q3Ended() {
		return R.equals(R.path(['data', 'stateOfTheGame'], Template.instance()), 'q3Ended');
	},
	q4Running() {
		return R.equals(R.path(['data', 'stateOfTheGame'], Template.instance()), 'q4Running');
	},
	gameEnded() {
		return R.equals(R.path(['data', 'stateOfTheGame'], Template.instance()), 'gameEnded');
	},
	oT1() {
		return R.equals(R.path(['data', 'stateOfTheGame'], Template.instance()), 'oT1');
	},
	oT2() {
		return R.equals(R.path(['data', 'stateOfTheGame'], Template.instance()), 'oT2');
	},
	oT3() {
		return R.equals(R.path(['data', 'stateOfTheGame'], Template.instance()), 'oT3');
	},
	oT4() {
		return R.equals(R.path(['data', 'stateOfTheGame'], Template.instance()), 'oT4');
	},
	oT5() {
		return R.equals(R.path(['data', 'stateOfTheGame'], Template.instance()), 'oT5');
	}
})
