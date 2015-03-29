Games = new Mongo.Collection('games');

Meteor.methods({
	gameInsert: function() {
		var user = Meteor.user();
		var game = {
			userId: user._id,
			author: user.username,
			createdAt: new Date(),
			state: 'running',
			gameInfos: {
				homeTeam: 'Equipe domicile',
				awayTeam: 'Equipe extérieur'
			},
			homeTeam: {
				player1: {
					firstName: '',
					lastName: '',
					jerseyNumber: 1,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				},
				player2: {
					firstName: '',
					lastName: '',
					jerseyNumber: 2,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				},
				player3: {
					firstName: '',
					lastName: '',
					jerseyNumber: 3,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				},
				player4: {
					firstName: '',
					lastName: '',
					jerseyNumber: 4,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				},
				player5: {
					firstName: '',
					lastName: '',
					jerseyNumber: 5,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				},
				player6: {
					firstName: '',
					lastName: '',
					jerseyNumber: 6,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				},
				player7: {
					firstName: '',
					lastName: '',
					jerseyNumber: 7,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				},
				player8: {
					firstName: '',
					lastName: '',
					jerseyNumber: 8,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				},
				player9: {
					firstName: '',
					lastName: '',
					jerseyNumber: 9,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				},
				player10: {
					firstName: '',
					lastName: '',
					jerseyNumber: 10,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				},
				player11: {
					firstName: '',
					lastName: '',
					jerseyNumber: 11,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				},
				player12: {
					firstName: '',
					lastName: '',
					jerseyNumber: 12,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				}
			},
			awayTeam: {
				player1: {
					firstName: '',
					lastName: '',
					jerseyNumber: 1,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				},
				player2: {
					firstName: '',
					lastName: '',
					jerseyNumber: 2,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				},
				player3: {
					firstName: '',
					lastName: '',
					jerseyNumber: 3,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				},
				player4: {
					firstName: '',
					lastName: '',
					jerseyNumber: 4,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				},
				player5: {
					firstName: '',
					lastName: '',
					jerseyNumber: 5,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				},
				player6: {
					firstName: '',
					lastName: '',
					jerseyNumber: 6,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				},
				player7: {
					firstName: '',
					lastName: '',
					jerseyNumber: 7,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				},
				player8: {
					firstName: '',
					lastName: '',
					jerseyNumber: 8,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				},
				player9: {
					firstName: '',
					lastName: '',
					jerseyNumber: 9,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				},
				player10: {
					firstName: '',
					lastName: '',
					jerseyNumber: 10,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				},
				player11: {
					firstName: '',
					lastName: '',
					jerseyNumber: 11,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				},
				player12: {
					firstName: '',
					lastName: '',
					jerseyNumber: 12,
					stats: {
						points: {
							one: {
								inShoot: 0,
								outShoot: 0
							},
							two: {
								inShoot: 0,
								outShoot: 0
							},
							three: {
								inShoot: 0,
								outShoot: 0
							}
						},
						rebounds: {
							off: 0,
							def: 0
						},
						assists: 0,
						blocks: 0,
						steals: 0,
						fouls: {
							off: 0,
							def: {
								zero: 0,
								one: 0,
								two: 0,
								three: 0
							},
							technical: 0,
							antiSport: 0,
							disqualifying: 0
						}
					}
				}
			}
		};
		var postId = Games.insert(game);
		return {
			_id: postId
		};
	}
});
