// FixturesPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FixturesPage.css'
import { Link } from 'react-router-dom';
const FixturesPage = () => {
  const [fixturesData, setFixturesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFixtures = async () => {
      setIsLoading(true);
      
const options = {
  method: 'GET',
  url: 'https://cricket-live-data.p.rapidapi.com/fixtures',
  headers: {
    'X-RapidAPI-Key': 'f0da064273msh65b06615fa36204p1f832fjsnfb21369486d7',
    'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
  }
};
      try {
        const apiKey = '23373efb18mshc1bd80b9460869ep11f283jsn1a854315d51a'; // Replace with your actual RapidAPI key
        const apiUrl = 'https://cricket-live-data.p.rapidapi.com/fixtures'; // Replace with the actual API endpoint

        const response = await axios.request(options);
        console.log(response)
        const data = response.data;
        console.log(data)
        setFixturesData(data.results);
        console.log(fixturesData)
      } catch (error) {
        console.error('Error fetching fixtures:', error);
      } finally {
        setIsLoading(false);
        console.log('loading')
      }
    };

    fetchFixtures();
  }, []);

  return (
    <div className={'fixtures-page'}>
      <h2 className={'fixtures-heading'}>Fixtures</h2>
      {isLoading ? (
        <p className={'loading-message'}>Loading fixtures...</p>
      ) : (
        <ul className={'fixtures-list'}>
          {fixturesData.map((fixture) => (
            <Link key={fixture.id} to={`/fixture/${fixture.id}`}>
            <li key={fixture.id} className={'fixture-item'}>
              <div>
                <h3>{fixture.match_title}</h3>
                <div className={'teamContainer'}>
                  <p className={'teamName'}>{fixture.home.name}</p>
                  <p className={'teamName'}>{fixture.away.name}</p>
                </div>
                <p className={'matchSubtitle'}>{fixture.match_subtitle}</p>
                <p className={'venue'}>{fixture.venue}</p>
              </div>
            </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FixturesPage;
