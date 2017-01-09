import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Clubs, clubSchema } from './schema.js';

Meteor.methods({
	addNewClub(data) {
		// Check method params
		check(data, clubSchema);
		// If OK the code continue
		return Clubs.insert(data);
	},
	changeClubStatus(data) {
		// Check method params
		let methodSchema = new SimpleSchema({
			clubId: { type: String },
			status: { type: String }
		});
		check(data, methodSchema);
		// If OK the code continue
		return Clubs.update({ _id: data.clubId }, {
			$set: {
				status: data.status
			}
		});
	}
	/*updateTeam(team, club, teamId) { // To refactor, add methods for differents fields and actions
		var teamToUpdate = 'teams.' + teamId;
		Clubs.update({
			_id: club
		}, {
			$pull: {
				teams: {
					teamId: teamId
				}
			}
		});
		Clubs.update({
			_id: club
		}, {
			$push: {
				teams: team
			}
		});
	}*/
});
