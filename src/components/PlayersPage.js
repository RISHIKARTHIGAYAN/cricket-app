// PlayersPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './PlayersPage.css'; // Import your CSS file

const PlayersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [playersData, setPlayersData] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const options1 = {
    method: 'GET',
    url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/trending',
    headers: {
      'X-RapidAPI-Key': '23373efb18mshc1bd80b9460869ep11f283jsn1a854315d51a',
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
  };
  

  useEffect(() => {
    // Fetch trending players data initially
    fetchTrendingPlayers();
  }, []);

  const fetchTrendingPlayers = async () => {
    try {
      // Make an API call to fetch trending players
      const response = await axios.request(options1);
      setPlayersData(response.data);
      setFilteredPlayers(response.data.player);
      console.log(filteredPlayers);
    } catch (error) {
      console.error('Error fetching trending players:', error);
    }
  };

  const handleSearch = async () => {
    try {
      // Make an API call to fetch players based on the search term
      const options2 = {
        method: 'GET',
        url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/search',
        params: {plrN: searchTerm},
        headers: {
          'X-RapidAPI-Key': '23373efb18mshc1bd80b9460869ep11f283jsn1a854315d51a',
          'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
        }
      };
      const response = await axios.request(options2);
      setFilteredPlayers(response.data.player);
    } catch (error) {
      console.error('Error fetching searched players:', error);
    }
  };

  const handlePlayerClick = (playerId) => {
    // Redirect to the detailed player page with player ID
    // You should have a route set up for player details page
    // For example: history.push(`/players/${playerId}`);
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search players..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Players List */}
      <div className="players-list">
        {filteredPlayers.map((player) => (
            <Link to={`/players/${player.id}`} key={player.id} className="player-link">
            <div className='player-container'>
            <div className="player-name">{player.name}</div>
            <div className="player-team">{player.teamName}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PlayersPage;
