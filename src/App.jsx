import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Layout from "./components/Layout";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch() {
    setLoading(true)
    setError("")
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );

      const data = await response.json();
      console.log(data)

      if (!data.results || data.results.length === 0) {
        throw new Error("City not found!")
      }

      const latitude = data.results[0].latitude;
      const longitude = data.results[0].longitude;

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`
      );

      const weatherData = await weatherResponse.json();


      console.log(weatherData)

      const weatherInfo = {
        city: data.results[0].name,
        country: data.results[0].country,
        current: weatherData.current,
      };

      setWeather(weatherInfo);
    } catch (error) {
      console.error(error);
      setError(error.message)

    } finally {
      setLoading(false)
    }


  }

  return (

    <Layout>

      <SearchBar city={city} setCity={setCity} handleSearch={handleSearch} loading={loading} error={error} />






      {weather && < WeatherCard weather={weather} />}

    </Layout>


  );
}