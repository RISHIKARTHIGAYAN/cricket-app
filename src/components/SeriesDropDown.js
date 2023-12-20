// SeriesDropdown.js
import './SeriesDropDown.css'
// SeriesDropdown.js
import React, { useState, useEffect } from 'react';

const SeriesDropdown = () => {
  const [seriesData, setSeriesData] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('/api/series');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setSeriesData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="series-dropdown">
      <span className="series-link" onClick={toggleDropdown}>
        Series
      </span>
      {isDropdownVisible && seriesData.length > 0 && (
        <ul className="series-list">
          {seriesData.map((series, index) => (
            <li key={index}>
              <img src={series.logo} alt={series.name} />
              {series.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SeriesDropdown;
