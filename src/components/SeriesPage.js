// SeriesPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import constructWithOptions from 'styled-components/dist/constructors/constructWithOptions';
import './SeriesPage.css'
const SeriesPage = () => {
  const [seriesData, setSeriesData] = useState([]);
  const [filteredType, setFilteredType] = useState('');
  const options = {
    method: 'GET',
    url: 'https://cricket-live-data.p.rapidapi.com/series',
    headers: {
      'X-RapidAPI-Key': '23373efb18mshc1bd80b9460869ep11f283jsn1a854315d51a',
      'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
    }
  };
  useEffect(() => {
    // Fetch series data from the API
    const fetchSeriesData = async () => {
      try {
        const response = await axios.request(options); // Replace with the actual API endpoint
        setSeriesData(response.data.results);
      } catch (error) {
        console.error('Error fetching series data:', error);
      }
    };

    fetchSeriesData();
  }, []); // Run once on component mount

  // Filter series based on the specified type
  const filteredSeries = filteredType
    ? seriesData.filter((series) => series.type === filteredType)
    : seriesData;
  console.log(filteredSeries);
  return (
    <div>
      <h2>Series Page</h2>
      <div>
        <label>Filter by Type:</label>
        <select
          value={filteredType}
          onChange={(e) => setFilteredType(e.target.value)}
        >
          <option value="">All</option>
          <option value="T20">T20</option>
          <option value="T20I">T20I</option>
          <option value="ODI">ODI</option>
          <option value="List A">List A</option>
          <option value="First Class">First Class</option>
          {/* Add more options based on your series types */}
        </select>
      </div>
      <div>
        <h3>Series List</h3>
        <ul>
          {filteredSeries.map((types) => (
            types.series.map((series) => (
            <li key={series.series_id} className='series-container'>
              <div className='series-name'>
                <strong>{series.series_name}</strong>
              </div>
              <div className='series-details'>
              <div>Season: {series.season}</div>
              <div>Status: {series.status}</div>
              </div>
            </li>

            ))
            
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SeriesPage;
