import { useState } from "react";


export default function WeatherApp() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://wttr.in/${location}?format=j1`)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      });
  };

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">Enter location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={location}
          onChange={handleChange}
        />
        <button type="submit">Get weather</button>
      </form>
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
    </div>
  );
}
