import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const shootsSchema = new SimpleSchema({
  onePointIn: {
    type: Number,
    label: 'Team FT scored',
    min: 0
  },
  onePointOut: {
    type: Number,
    label: 'Team FT missed',
    min: 0
  },
  twoPointsIn: {
    type: Number,
    label: 'Team 2pt scored',
    min: 0
  },
  twoPointsOut: {
    type: Number,
    label: 'Team 2pt missed',
    min: 0
  },
  threePointsIn: {
    type: Number,
    label: 'Team 3pt scored',
    min: 0
  },
  threePointsOut: {
    type: Number,
    label: 'Team 3pt missed',
    min: 0
  },
  totalPoints: {
    type: Number,
    label: 'Total points for the player',
    min: 0,
    optional: true
  }
});

export const foulsSchema = new SimpleSchema({
  provOffFouls: {
    type: Number,
    label: 'Team offensive provoqued fouls',
    min: 0
  },
  provDefFouls: {
    type: Number,
    label: 'Team defensive provoqued fouls',
    min: 0
  },
  offFouls: {
    type: Number,
    label: 'Team offensive fouls',
    min: 0
  },
  defFouls: {
    type: Number,
    label: 'Team defensive fouls',
    min: 0
  },
  totalFouls: {
    type: Number,
    label: 'Team total fouls',
    min: 0
  },
  foul1FT: {
    type: Number,
    label: 'Team 1 FT fouls',
    min: 0
  },
  foul2FT: {
    type: Number,
    label: 'Team 2 FT fouls',
    min: 0
  },
  foul3FT: {
    type: Number,
    label: 'Team 3 FT fouls',
    min: 0
  },
  techFouls: {
    type: Number,
    label: 'Team technical fouls',
    min: 0
  },
  antiSportFouls: {
    type: Number,
    label: 'Team anti sportive fouls',
    min: 0
  },
  disqualifyingFouls: {
    type: Number,
    label: 'Team disqualifying fouls',
    min: 0
  }
});

export const gameStateValues = [
  'notStarted',
  'q1Running',
  'q1Ended',
  'q2Running',
  'halfTime',
  'q3Running',
  'q3Ended',
  'q4Running',
  'gameEnded',
  'oT1',
  'oT2',
  'oT3',
  'oT4',
  'oT5'
];

export const clubStatusValues = [
  'active',
  'inactive',
  'paymentProblem'
];
