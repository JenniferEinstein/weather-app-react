import React, { useState } from "react";
import PreviousSearches from "./PreviousSearches";
import UpcomingWeather from "./UpcomingWeather";

function WeatherSearch() {
const [submitting, setSubmitting] = useState(false)
const [error, setError] = useState(false)
const [data, setData] = useState(null)


      const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitting(true);

//The fetch() function returns a promise.


  fetch(`https://wttr.in/${event.target.location.value}?format=j1`)
  .then((response) => response.json())
  .then((json) => {
      console.log(json);
      setData(json);
      setSubmitting(false);
  })
  .catch((error) => {
      console.log(error);
      setError(error);
      setSubmitting(false);
      });

  console.log('You have submitted the form.')
  };


//the Promise is resolved with a response object. Using '.then()' method to handle response by taking a callback function a an argument. 


  

  return (
    <div className="weather-search">
      <div className='wrapper'>
      <h1>This is the Weather Search Component</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <p>In Form. Weather Search component.</p>
        <fieldset disabled={submitting}>
          <label>
            <p>Pick a Location</p>
            <input type='text' name="location" defaultValue="Get Weather" />
          </label>
        </fieldset>
        <button type='submit' disabled={submitting}>Submit</button>

        </form>
        </div>
     
  
<aside className = "aside">
  <p>This is thee previous searches component inside of WeatherSearch which is inside of App. </p>
<PreviousSearches />
<p>After previous searches but still in the aside.</p>
</aside>

    <main className="main">
        <article>
        <p>Choose a location to view the weather.</p>
        </article>


        <p>in Weather search</p>
        <UpcomingWeather />
        </main>
        </div>

    </div>
  );
}

export default WeatherSearch;

