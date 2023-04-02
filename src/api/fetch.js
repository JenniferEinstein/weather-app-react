import React, { useState } from 'react'

function FetchWeather() {
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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="location" />
        <button type="submit">Search</button>
      </form>
      {submitting && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div>
          <h2>{data.nearest_area.region[0].value}</h2>
          <p>Current Temperature: {data.current_condition[0].temp_F}</p>
        </div>
      )}
    </div>
  );
}

export default FetchWeather

