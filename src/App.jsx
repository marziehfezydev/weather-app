import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null)

  async function handleSearch() {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );

    const data = await response.json();





    const latitude = data.results[0].latitude;
    const longitude = data.results[0].longitude;

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`
    );

    const weatherData = await weatherResponse.json();

    setWeather(weatherData);
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">

      <SearchBar city={city} setCity={setCity} handleSearch={handleSearch} />

      <p className="text-center">
        Temperature:
        {weather?.current?.temperature_2m}
      </p>

      <p className="text-center mt-4">
        City: {city}
      </p>


      <WeatherCard />
    </div>
  );
}