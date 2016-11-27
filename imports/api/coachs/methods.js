import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Coachs, coachSchema } from './schema.js';

Meteor.methods({
	addCoachs(teamId, gameId) {
		check(teamId, String);
		check(gameId, String);

		const coach = {
			gameId,
			teamId,
			firstName: '',
			lastName: '',
			primaryCoach: false,
			techFouls: 0
		};

		check(coach, coachSchema);

		for (let i = 0; i < 2; i++) {
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
