// routes/playerRoutes.js
const express = require('express');
const router = express.Router();
const Player = require('../models/Players');

router.post('/save', async (req, res) => {
  try {
    const { playerId, playerData } = req.body;

    const existingPlayer = await Player.findOne({ playerId });

    if (existingPlayer) {
      return res.status(400).json({ message: 'Player already exists in the database.' });
    }

    const newPlayer = new Player({ playerId, playerData });
    await newPlayer.save();

    res.status(201).json({ message: 'Player saved successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/fetch/:playerId', async (req, res) => {
  try {
    const { playerId } = req.params;

    const player = await Player.findOne({ playerId });

    if (!player) {
      return res.status(404).json({ message: 'Player not found in the database.' });
    }

    res.status(200).json({ playerData: player.playerData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
