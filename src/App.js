import './App.css';
import WeatherSearch from './components/weather/WeatherSearch';
// import WeatherApp from './components/weather/WeatherSearch2'
import Footer from './components/common/Footer';
import ConversionWidget from './components/weather/ConversionWidget';
import Nav from './components/common/Nav';
import { Routes, Route } from 'react-router-dom'
import Home from "./components/landing/Home"
import About from "./components/common/About"
import { useState } from 'react';
import UpcomingWeather from './components/weather/UpcomingWeather';
// import PreviousSearches from './components/weather/PreviousSearches';
// import Details from './components/weather/Details';



function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <Nav />
      <div className='container-routes'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
        </Routes>
        <aside className = "aside">
          <WeatherSearch />
        </aside>
        <aside className = "aside">
<UpcomingWeather />
        </aside>
        {/* <Details /> */}
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
    <Footer /> 
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

