// models/Player.js
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  playerId: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  bat: {
    type: String,
  },
  bowl: {
    type: String,
  },
  nickName: {
    type: String,
  },
  height: {
    type: String,
  },
  role: {
    type: String,
  },
  birthPlace: {
    type: String,
  },
  intlTeam: {
    type: String,
  },
  teams: {
    type: String,
  },
  DoB: {
    type: String,
  },
  image: {
    type: String,
  },
  bio: {
    type: String,
  },
  rankings: {
    bat: [
      {
        testRank: String,
        testBestRank: String,
        odiBestRank: String,
        t20BestRank: String,
      },
    ],
    bowl: [
      {
        testBestRank: String,
        odiBestRank: String,
        t20BestRank: String,
      },
    ],
    }});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
