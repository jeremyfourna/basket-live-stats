import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Coachs } from './schema.js';

Meteor.methods({
	coachInsert(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String },
			nbCoachsForYourClub: { type: Number, min: 1, max: 2 },
			nbCoachsForOpponent: { type: Number, min: 1, max: 2 },
		});
		check(data, methodSchema);

		for (let i = 0; i < data.nbCoachsForYourClub; i++) {
			let coach = {
				gameId: data.gameId,
				teamId: 'yourClub',
				firstName: '',
				lastName: '',
				primaryCoach: false,
				techFouls: 0
			};
			if (i === 0) {
				coach.primaryCoach = true;
			}

			Coachs.insert(coach);
		}

		for (let i = 0; i < data.nbCoachsForOpponent; i++) {
			let coach = {
				gameId: data.gameId,
				teamId: 'opponent',
				firstName: '',
				lastName: '',
				primaryCoach: false,
				techFouls: 0
			};
			if (i === 0) {
				coach.primaryCoach = true;
			}

			Coachs.insert(coach);
		}

		return true;
	},
	coachUpdate(data) {
		let methodSchema = new SimpleSchema({
			coachId: { type: String },
			firstName: { type: String },
			lastName: { type: String }
		});
		check(data, methodSchema);

		return Coachs.update({ _id: data.coachId }, {
			$set: {
				firstName: data.firstName,
				lastName: data.lastName
			}
		});
	}
});
