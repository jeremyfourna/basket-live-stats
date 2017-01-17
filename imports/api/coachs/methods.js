import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Coachs, coachSchema } from './schema.js';

Meteor.methods({
	'Coachs.addCoachs': (teamId, gameId, clubId) => {
		// Check method params
		check(teamId, String);
		check(gameId, String);

		// Define coach document
		const coach = {
			gameId,
			teamId,
			firstName: '',
			lastName: '',
			primaryCoach: false,
			techFouls: 0
		};

		// Only if the game creation was done via a club member
		if (clubId !== undefined) {
			check(clubId, String);
			coach.clubId = clubId;
		}

		// Check coach input before inserting in DB
		check(coach, coachSchema);

		// Loop 2 times because normally a team has at max two coaches
		for (let i = 0; i < 2; i++) {
			if (i === 0) {
				coach.primaryCoach = true;
			}

			Coachs.insert(coach);
		}

		// Return true to allow client and server to continue
		return true;
	},
	'Coachs.coachUpdate': (data) => {
		// Check method params
		const methodSchema = new SimpleSchema({
			coachId: { type: String },
			firstName: { type: String },
			lastName: { type: String }
		});
		check(data, methodSchema);
		// If OK the code continue
		return Coachs.update({ _id: data.coachId }, {
			$set: {
				firstName: data.firstName,
				lastName: data.lastName
			}
		});
	}
});
