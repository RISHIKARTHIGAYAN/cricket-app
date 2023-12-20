// components/MatchList.js
import React from 'react';
import Match from './Match';

const MatchList = ({ matches }) => {
  return (
    <div className="match-list-container">
      {matches.map((match) => (
        <Match match={match} />
      ))}
    </div>
  );
};

export default MatchList;
