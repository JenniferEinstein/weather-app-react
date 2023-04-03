import React, { useState, useEffect } from "react";
import PreviousSearches from "./PreviousSearches";
import UpcomingWeather from "./UpcomingWeather";


//weather, setWeather was data, setData
//location, setLocation was submitting, setSubmitting

function WeatherSearch() {
const [weather, setWeather] = useState(null)
const [location, setLocation] = useState(false)
const [error, setError] = useState(false)

const handleSubmit = (event) => {
  event.preventDefault();
  setLocation(true);

console.log(`https://wttr.in/${event.target.location.value}?format=j1`, "Hello from the other side")


//The fetch() function returns a promise.
//Tell the program to GET the result, then take the response and do something with it. We JSONify it. Then we console log the json so we know where we are if the code breaks (but also so we can see it without looking at the source URL.)

  fetch(`https://wttr.in/${event.target.location.value}?format=j1`)
  .then((response) => response.json())

      //the Promise is resolved with a response object. Using '.then()' method to handle response by taking a callback function a an argument. 

  .then((json) => {
    console.log(json);
    setWeather(json);
    setLocation(false);
  })
    //then catching any error, just in case
  .catch((error) => {
    console.log(error);
    setError(error);
    setLocation(false);
  });

  console.log('You have submitted the form.')



  };


  return (
    <div className="weather-search">
      <div className='wrapper'>
        <div className="container" id="container-choose">
          <form onSubmit={handleSubmit}>
            <fieldset disabled={location}>
              <label>
                <p>Choose Your Location</p>
                <input type='text' id="location" name="location" defaultValue=""  />
              </label>
            </fieldset>
            <button type='submit' disabled={location}>Get Weather</button>
          </form>
          
<section className="upcoming-weather">
  <p> (section for upcoming weather)</p>
<aside>
  <p>This aside has three article elements that will have upcoming weather but it starts empty. 
    Put this in jv so that i doesn't render until submit is pressed. </p>
  <div className="grid-container">
    <div className="threeInOne">
      <article id="today">
        <b>Today article</b>
        {/* <ul /> */}
      </article>
    </div>
    <div className="threeInOne">
      <article id="tomorrow">
        <b>Tomorrow article</b>
        {/* <ul /> */}
      </article>
    </div>
    <div className="threeInOne"> 
      <article id="asatte">
        {/* <ul /> */}
        <b>Day After Tomorrow article</b>
      </article>
    </div>
  </div>
</aside>
</section>

        </div>
        {weather && (
            <div>
             <h2>{weather.nearest_area[0].areaName[0].value}</h2>
          <ul>
            <li>Region: {weather.nearest_area[0].region[0].value}</li>
            <li>Country: {weather.nearest_area[0].country[0].value}</li>
            <li>Feels like: {weather.current_condition[0].FeelsLikeC}°C</li>
          </ul>
          <h3>Today</h3>
          <ul>
            <li>Average Temperature: {weather.weather[0].avgtempC}°C</li>
            <li>Maximum Temperature: {weather.weather[0].maxtempC}°C</li>
            <li>Minimum Temperature: {weather.weather[0].mintempC}°C</li>
          </ul>
          <h3>Tomorrow</h3>
          <ul>
            <li>Average Temperature: {weather.weather[1].avgtempC}°C</li>
            <li>Maximum Temperature: {weather.weather[1].maxtempC}°C</li>
            <li>Minimum Temperature: {weather.weather[1].mintempC}°C</li>
          </ul>
          <h3>The Day After Tomorrow</h3>
          <ul>
            <li>Average Temperature: {weather.weather[2].avgtempC}°C</li>
            <li>Maximum Temperature: {weather.weather[2].maxtempC}°C</li>
            <li>Minimum Temperature: {weather.weather[2].mintempC}°C</li>
          </ul>
        </div>
          )}
      
    <aside className = "aside">
      <p>PreviousSearches component inside of WeatherSearch inside of App follows directly. </p>
      <PreviousSearches />
      <p>After previous searches but still in the aside.</p>
    </aside>

    <main className="main">
        <article>
        <p id="chooseLocation">Choose a location to view the weather.</p>
        </article>
        <article class="chosen">
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
        


        <p>in Weather search</p>

        </main>
        </div>

    </div>
  );
}

export default WeatherSearch;

