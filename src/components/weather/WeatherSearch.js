import React, { useState } from "react";
import PreviousSearches from "./PreviousSearches";
import UpcomingWeather from "./UpcomingWeather";

function WeatherSearch() {

  // eslint-disable-next-line 
const [submitting, setSubmitting] = useState(false)
  // eslint-disable-next-line 
const [error, setError] = useState(false)
  // eslint-disable-next-line 
const [data, setData] = useState(null)


const handleSubmit = event => {
  event.preventDefault();
  setSubmitting(true);
 
  setTimeout(() => {
    setSubmitting(false);
  }, 3000);
  // console.log('You have submitted the form.')
}


//The fetch() function returns a promise.
// fetch(`https://wttr.in/${event.target.location.value}?format=j1`)


  fetch(`https://wttr.in/Detroit?format=j1`)
    .then((response) => response.json())
    .then((json) => {
    // You can do what you like with the result here.
    console.log(json);
  })
  .catch((error) => {
    // You can do what you like with the error here.
    console.log(error);
  });


  

  return (
    <div className="weather-search">
      <div className='wrapper'>
      <h1>This is the Weather Search Component</h1>
      <container>
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
        </container>
     
  
<aside className = "aside">
  <p><span color="blue">I put previous searches in one of the asides. How do i get this to the side?</span> </p>
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

/*

        <aside>
<p>Aside in Main after Article</p>
            <article>article</article>
            <article>article</article>
            <article>article</article>
        </aside>


*/




  //          {/* <label htmlFor="location">Pick a Location</label>
    //        <input type="submit" defaultValue="Get Weather"/> */}


    // const handleChange = event => {
    //   setFormData({
    //     name: event.target.name,
    //     value: event.target.value,
    //   });
    // }

// Moved this to its own component
//             <aside className="previous-searches">
//             <section>
//                 <h4>Previous Searches</h4>
//                 <ul></ul>
//             </section>
//         </aside>        
      