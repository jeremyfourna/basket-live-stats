import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Clubs, clubSchema } from './schema.js';
import { clubStatusValues } from '../schemas.js';

Meteor.methods({
	addNewClub(data) {
		// Check method params
		check(data, clubSchema);
		// If OK the code continue
		return Clubs.insert(data);
	},
	changeClubStatus(data) {
		// Check method params
		const methodSchema = new SimpleSchema({
			clubId: { type: String },
			status: { type: String, allowedValues: clubStatusValues }
		});
		check(data, methodSchema);
		// If OK the code continue
		return Clubs.update({ _id: data.clubId }, {
			$set: {
				status: data.status
			}
		});
	}

});
