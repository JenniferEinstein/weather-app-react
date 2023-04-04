import './App.css';
import WeatherSearch from './components/weather/WeatherSearch';
import ConversionWidget from './components/weather/ConversionWidget';
 import Nav from './components/common/Nav';
// import Home from "./components/landing/Home"
import { useState } from 'react';
import SearchHistory from './components/weather/SearchHistory';
// import About from "./components/common/About"
// import PreviousSearches from './components/weather/PreviousSearches';
// import Footer from './components/common/Footer';
// import { Routes, Route } from 'react-router-dom'

function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <header>
        <Nav />
        
      </header>

      {/* <Home /> */}
      <div className='container-routes'>

        <aside className = "aside">
          <WeatherSearch />
        </aside>
        <section className = "search-history">
          <SearchHistory />
        </section>

        <p>Do you need to convert a temperature?</p>   
        <div className="convertTemperature">
          <button
          onClick={() => setShow
          (!show)}>
            {show ? "Hide" : "Show Temperature Converter"}
          </button>
          {show && <ConversionWidget />}
        </div>
      </div>

    {/* <Footer />  */}
  </div>
  );
}

export default App;

//Since previous searches are going to go into weather search, I am taking it out of here.

   
// <aside className="previous-searches">
// <section>
//     <h4>Previous Searches</h4>
//     <ul></ul>
// </section>
// </aside>        


/*

============== Got rid of these: =========
         <PreviousSearches /> 
        <Details /> 
// import WeatherApp from './components/weather/WeatherSearch2'

// import UpcomingWeather from './components/weather/UpcomingWeather';

// import Details from './components/weather/Details';

*/
