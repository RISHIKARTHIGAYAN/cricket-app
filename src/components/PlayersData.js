// PlayersData.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PlayersData = ({ match }) => {
  const [playerData, setPlayerData] = useState(null);
  const param=useParams();
  console.log(param.playerId);
  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        // Make an API call to fetch player details based on the player ID
        const options = {
            method: 'GET',
            url: `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${param.playerId}`,
            headers: {
              'X-RapidAPI-Key': '23373efb18mshc1bd80b9460869ep11f283jsn1a854315d51a',
              'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
            }
          };
          
        const response = await axios.request(options);
        setPlayerData(response.data);
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchPlayerData();
  }, [param.playerId]);

  if (!playerData) {
    return <p>Loading player data...</p>;
  }

  return (
    <div className="player-details">
      <div className="player-image">
        <img src={playerData.image} alt={playerData.name} />
      </div>
      <div className="player-info">
        <h2>{playerData.name}</h2>
        <p>
          <strong>Teams played:</strong> {playerData.teams}
        </p>
        <p>
          <strong>Batting Style:</strong> {playerData.bat}
        </p>
        <p>
          <strong>Bowling Style:</strong> {playerData.bowl}
        </p>
        <p>
          <strong>Role:</strong> {playerData.role}
        </p>
        {/* Add more details as needed */}
      </div>
      <div className="player-bio" dangerouslySetInnerHTML={{ __html: playerData.bio }} />
      <div className="player-rankings">
        <h3>Career Top Rankings</h3>
        <p>
          <strong>Test Batting:</strong> {playerData.rankings.bat[0].testBestRank}
        </p>
        <p>
          <strong>ODI Batting:</strong> {playerData.rankings.bat[0].odiBestRank}
        </p>
        <p>
          <strong>T20 Batting:</strong> {playerData.rankings.bat[0].t20BestRank}
        </p>
        {/* Add rankings for bowling if needed */}
      </div>
    </div>
  );
};

export default PlayersData;
