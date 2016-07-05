import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { check } from 'meteor/check';

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
	createNewTeam(team, club) {
		let methodSchema = new SimpleSchema({
			team: { type: Object },
			clubId: { type: String },
		});
		check(data, methodSchema);

		return Clubs.update({ _id: clubId }, {
			$push: {
				teams: team
			}
		});
	},
	deleteTeam(teamToDelete) {
		return Clubs.update({
			_id: teamToDelete.club
		}, {
			$pull: {
				teams: {
					teamId: teamToDelete.team
				}
			}
		});
	},
	updateTeam(team, club, teamId) {
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
	}
});
