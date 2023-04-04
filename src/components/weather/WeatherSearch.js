import SearchHistory from "./SearchHistory";
import React, { useState } from "react";
// import PreviousSearches from "./PreviousSearches";

function WeatherSearch() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("");
  const [error, setError] = useState(false);
  // const [previousSearches, setPreviousSearches] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  const handleClear = () => {
    setSearchHistory([]);
  }

  const handleSubmit = (event) => {
    if (location.trim() !==""){
      setSearchHistory([...searchHistory, location]);
      setLocation("");
    }
    event.preventDefault();
    

  console.log(`https://wttr.in/${event.target.location.value}?format=j1`, "Hello from the other side")


//The fetch() function returns a promise.
//Tell the program to GET the result, then take the response and do something with it. We JSONify it. Then we console log the json so we know where we are if the code breaks (but also so we can see it without looking at the source URL.)

  fetch(`https://wttr.in/${event.target.location.value}?format=j1`)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    setWeather(json);
    setLocation("");
    // Save the search history for the searchHistory component
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    console.log("searchHistory is ", searchHistory)
    searchHistory.unshift({ location: event.target.location.value, weather:json });
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  })
    //then catch any error, just in case
  .catch((error) => {
    console.log(error);
    setError(error);
    setLocation("");
  });

  console.log('You have submitted the form.')
  };

  return (
    <>
    {/* <SearchHistory /> */}
    <div className="weather-search">
      <div className='wrapper'>
        <div className="container" id="container-choose">
          <form onSubmit={handleSubmit}>
            <fieldset disabled={location}>
              <label>
                <p>Choose Your Location</p>
                <input 
                type='text' 
                id="location" 
                name="location" 
                // value={location}
                defaultValue="" 
                onSubmit={(event)=> setLocation(event.target.value)} 
                />
              </label>
            </fieldset>
            <button type='submit' disabled={location}>Get Weather</button>
            <button onClick={handleClear}>Clear</button>
          </form>

        </div>
        {weather && (
            <div>
             <h2>{weather.nearest_area[0].areaName[0].value}</h2>
          <ul>
            <li>Region: {weather.nearest_area[0].region[0].value}</li>
            <li>Country: {weather.nearest_area[0].country[0].value}</li>
            <li>Feels like: {weather.current_condition[0].FeelsLikeC}°C</li>
          </ul>
          {/* <div className="grid-container"> */}
            <div className="threeInOne">
              <h3 id="today" name="today">Today</h3>
              <ul>
                <li>Average Temperature: {weather.weather[0].avgtempC}°C</li>
                <li>Maximum Temperature: {weather.weather[0].maxtempC}°C</li>
                <li>Minimum Temperature: {weather.weather[0].mintempC}°C</li>
              </ul>
              </div>
            <div className="threeInOne">
              <h3 id="tommorow" name="tomorrow">Tomorrow</h3>
              <ul>
                <li>Average Temperature: {weather.weather[1].avgtempC}°C</li>
                <li>Maximum Temperature: {weather.weather[1].maxtempC}°C</li>
                <li>Minimum Temperature: {weather.weather[1].mintempC}°C</li>
              </ul>
            </div>
            <div className="threeInOne">
              <h3 id="asatte" name="asatte">The Day After Tomorrow</h3>
              <ul>
                <li>Average Temperature: {weather.weather[2].avgtempC}°C</li>
                <li>Maximum Temperature: {weather.weather[2].maxtempC}°C</li>
                <li>Minimum Temperature: {weather.weather[2].mintempC}°C</li>
              </ul>
             {/* </div> */}
          </div>
        </div>
          )}
      
    <aside className = "aside">
    <section className = "search-history">
      <SearchHistory location={location} weather={weather} />
      </section>
    </aside>


    <main className="main">
        <article>
        <p id="chooseLocation">Choose a location to view the weather.</p>
        </article>
        <article className="chosen">
                current weather
                 <span id="weather-image-container"></span>
                <h2 id = "h2inputText"> </h2> 
                <p id = "Area"></p>  
                <p id = "Region"></p> 
                <p id = "Country"></p> 
                <p id = "CurrentTemp"></p>       
                <p id = "Sunshine"></p> 
                <p id = "Rain"></p> 
                <p id = "Snow"></p>
             </article>
        </main>
        </div>

    </div>
    </>
  );
}

export default WeatherSearch;


/*
weather, setWeather was data, setData
location, setLocation was submitting, setSubmitting
change out SearchHistory for PreviousSearches
It looks like my handleSubmit is changing the wrong thing.
*/