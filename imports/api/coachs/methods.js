import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Coachs } from './schema.js';

Meteor.methods({
	/*coachInsert(data) { // To refactor
		let methodSchema = new SimpleSchema({
			coachData: { type: [Object] },
			gameId: { type: String }
		});
		check(data, methodSchema);

		let coachsId = [];
		coachsData.map((cur, index, array) => {
			var coach = {
				gameId: data.gameId,
				teamId: cur.teamId,
				firstName: cur.firstName,
				lastName: cur.lastName,
				primaryCoach: cur.primaryCoach,
				techFouls: 0
			};
			var coachId = Coachs.insert(coach);
			return coachsId.push(coachId);
		});
		for (var i = 0; i < 2; i++) {
			var opponentCoach = {
				gameId: data.gameId,
				teamId: 'opponent',
				firstName: '',
				lastName: '',
				primaryCoach: false,
				techFouls: 0
			};
			if (i === 0) {
				opponentCoach.primaryCoach = true;
			}
			var opponentCoachId = Coachs.insert(opponentCoach);
			coachsId.push(opponentCoachId);
		}
		return {
			ids: coachsId
		};
	},*/
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
