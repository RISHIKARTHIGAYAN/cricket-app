// components/Match.js
import React from 'react';

const Match = ({ match }) => {
  // const { seriesName, matchDesc, team1, team2, venue } = match;
  const seriesName = match.seriesName;
  const matchDesc = match.matchInfo[0].matchDesc;
  const team1 = match.matchInfo[0].team1.teamName;
  const team2 = match.matchInfo[0].team2.teamName;
  const venue = match.matchInfo[0].venueInfo;
  return (
    <div className="match-container">
      <h3>{seriesName}</h3>
      <p>{matchDesc}</p>
      <div className="team-names">
        <span>{team1}</span>
        <span>vs</span>
        <span>{team2}</span>
      </div>
      <p>Venue: {venue.ground}, {venue.city}</p>
    </div>
  );
};

export default Match;
