import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Clubs } from './schema.js';

Meteor.methods({
	clubInsert(data) {
		let methodSchema = new SimpleSchema({
			name: { type: String },
			region: { type: String },
			department: { type: String },
			zipCode: { type: String },
			city: { type: String },
			jerseyColor: { type: String }
			createdBy: { type: String }
		});
		check(data, methodSchema);

		return Clubs.insert(data);
	},
	/*createNewTeam(data) { // Define team schema
		let methodSchema = new SimpleSchema({
			team: { type: Object },
			clubId: { type: String },
		});
		check(data, methodSchema);

		return Clubs.update({ _id: data.clubId }, {
			$push: {
				teams: data.team
			}
		});
	},*/
	deleteTeam(data) {
		let methodSchema = new SimpleSchema({
			teamId: { type: String },
			clubId: { type: String },
		});
		check(data, methodSchema);

		return Clubs.update({ _id: data.clubId }, {
			$pull: {
				teams: {
					teamId: data.teamId
				}
			}
		});
	},
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
