import { Meteor } from 'meteor/meteor';
import { MethodHooks } from 'meteor/doctorpangloss:method-hooks';

MethodHooks.after('Players.assist', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.assist', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.correctAssist', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.correctAssist', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.offReb', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.offReb', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.correctOffReb', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.correctOffReb', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.defReb', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.defReb', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.correctDefReb', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.correctDefReb', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.provOffFoul', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.provOffFoul', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.correctProvOffFoul', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.correctProvOffFoul', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.provDefFoul', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.provDefFoul', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.correctProvDefFoul', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.correctProvDefFoul', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.onePointOut', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.onePointOut', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.correctOnePointOut', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.correctOnePointOut', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.twoPointsOut', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.twoPointsOut', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.correctTwoPointsOut', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.correctTwoPointsOut', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.threePointsOut', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.threePointsOut', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.correctThreePointsOut', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.correctThreePointsOut', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.steal', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.steal', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.correctSteal', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.correctSteal', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.block', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.block', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.correctBlock', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.correctBlock', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.turnover', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.turnover', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.correctTurnover', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.correctTurnover', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.offFoul', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.offFoul', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.correctOffFoul', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.correctOffFoul', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.defFoul', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.defFoul', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.correctDefFoul', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.correctDefFoul', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.foul1FT', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.foul1FT', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.correctFouls1FT', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.correctFouls1FT', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.foul2FT', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.foul2FT', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.correctFouls2FT', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.correctFouls2FT', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.foul3FT', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.foul3FT', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.correctFouls3FT', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.correctFouls3FT', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.techFoul', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.techFoul', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.correctTechFoul', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.correctTechFoul', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.antiSportFoul', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.antiSportFoul', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.correctAntiSportFoul', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.correctAntiSportFoul', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.disqualifyingFoul', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.disqualifyingFoul', teamId); // Method to add stats on the team level

    return options.result;
  }
});

MethodHooks.after('Players.correctDisqualifyingFoul', (options) => {
  if (options.error) {
    return;
  } else if (options.result) {
    const teamId = options.arguments[0];

    Meteor.call('Teams.correctDisqualifyingFoul', teamId); // Method to add stats on the team level

    return options.result;
  }
});
