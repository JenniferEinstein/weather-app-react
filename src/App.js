//changing to match /f6e8f72b

import './App.css';
import WeatherSearch from './components/weather/WeatherSearch';
import ConversionWidget from './components/weather/ConversionWidget';
import Nav from './components/common/Nav';
// import Navigate from './components/common/Navigate'
// import Home from "./components/landing/Home"
import { useState } from 'react';
//import SearchHistory from './components/weather/SearchHistory'
// import Footer from './components/common/Footer';
// import { Routes, Route } from 'react-router-dom'
// import About from './components/common/About';


function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <header>
        <Nav />
      </header>

      {/* <Home /> */}
      {/* <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
        </Routes>
      </main> */}
      <div className='container-routes'>

        <aside className = "aside">
          <WeatherSearch />
        </aside>

        {/* <section className = "search-history">
          <SearchHistory />
        </section> */}

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
