import React, { useState, useEffect } from 'react'


function SearchHistory() {
    const [searchHistory, setSearchHistory] = useState([]);
  
    useEffect(() => {
      // Load search history from localStorage
      setSearchHistory(JSON.parse(localStorage.getItem('searchHistory')) || []);
    }, []);
  
    return (
      <div className="previous-searches">
        <h2>Previous Searches</h2>
        {searchHistory.map((search, index) => (
          <div key={index}>
            <p>{search.location}</p>
            {/* Display search results here */}
          </div>
        ))}
      </div>
    );
  }

  export default SearchHistory
  