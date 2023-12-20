// components/MatchDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MatchDetails = () => {
  const { matchId } = useParams();
  const [matchDetails, setMatchDetails] = useState(null);
  // console.log(matchId)
  const options = {
    method: 'GET',
    url: `https://cricket-live-data.p.rapidapi.com/match/${matchId}`,
    headers: {
      'X-RapidAPI-Key': '23373efb18mshc1bd80b9460869ep11f283jsn1a854315d51a',
      'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
    }
  };
  console.log(options);
  useEffect(() => {
    console.log(matchId)
    const fetchMatchDetails = async () => {
      try {
        
        const response = await axios.request(options);
        console.log(response)
        const data = response.data;
        setMatchDetails(data.results);
        console.log(matchDetails)
      } catch (error) {
        console.error('Error fetching match details:', error);
      }
    };

    fetchMatchDetails();
  }, [matchId]);

  if (!matchDetails) {
    return <p>Loading...</p>;
  }
  if (matchDetails.live_details===null){
    return (
        <div>
          <h2>{matchDetails.fixture.match_title}</h2>
          <p>Not yet Started</p>
          <p>{matchDetails.fixture.home.name} vs {matchDetails.fixture.away.name}</p>
          <p>Venue: {matchDetails.fixture.venue}</p>
          {/* Add more details as needed */}
        </div>
      );
  }else{
    return (
        <div>
          <h2>{matchDetails.fixture.match_title}</h2>
          <p>{matchDetails.live_details.match_summary.toss}</p>
          <p>{matchDetails.live_details.match_summary.status}</p>
          <p>{matchDetails.fixture.home.name} - {matchDetails.live_details.match_summary.home_scores} </p>
          <p>{matchDetails.fixture.away.name} - {matchDetails.live_details.match_summary.away_scores} </p>
          <p>Venue: {matchDetails.fixture.venue}</p>
          {/* Add more details as needed */}
        </div>
      );
  }
  
};

export default MatchDetails;
