Template.participantsDefinition.events({
    "click .submitGameConfiguration": function() {
        var currentGame = this._id;
        var filterInt = function(value) {
            if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
                return Number(value);
            return NaN;
        };
        var isFilled = function(element) {
            if ($(element).val() === "") {
                return null;
            } else {
                return $(element).val();
            }
        };
        var homeTeam = {
            players: [],
            coachs: []
        };
        var awayTeam = {
            players: [],
            coachs: []
        };
        $('.player').each(function(index, element) {
            var player = {
                firstName: isFilled($(element).find('.firstName')),
                lastName: isFilled($(element).find('.lastName')),
                jersey: filterInt($(element).find('.jersey').val()),
                playerIndex: filterInt($(element).find('.playerIndex').val()),
            };
            if (index < 12) {
                player.team = "homeTeam";
                homeTeam.players.push(player);
            } else {
                player.team = "awayTeam";
                awayTeam.players.push(player);
            }
        });
        $('.coach').each(function(index, element) {
            var coach = {
                firstName: isFilled($(element).find('.firstName')),
                lastName: isFilled($(element).find('.lastName')),
                coachIndex: filterInt($(element).find('.coachIndex').val()),
                team: $(element).find('.team').val()
            };
            if (index < 2) {
                homeTeam.coachs.push(coach);
            } else {
                awayTeam.coachs.push(coach);
            }
        });

        Meteor.call('participantsUpdate', currentGame, homeTeam, awayTeam, function(error, result) {
            if (error) {
                return throwError(error.message);
            }
            Router.go('gameStats', {
                _id: currentGame
            });
        });
    }
});
