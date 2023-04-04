import './App.css';
import WeatherSearch from './components/weather/WeatherSearch';
import ConversionWidget from './components/weather/ConversionWidget';
import Nav from './components/common/Nav';
//import Nav2 from './components/common/Nav2'
import Home from "./components/landing/Home"
import { useState } from 'react';
//import SearchHistory from './components/weather/SearchHistory';
// import PreviousSearches from './components/weather/PreviousSearches';
import Footer from './components/common/Footer';
import { Routes, Route } from 'react-router-dom'
import About from './components/common/About';


function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
        <Nav />

      {/* <Home /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <div className='container-routes'>

        <aside className = "aside">
          <WeatherSearch />
        </aside>


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
