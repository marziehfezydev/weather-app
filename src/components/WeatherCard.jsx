export default function WeatherCard({ weather }) {
    return (
        <div>
            <h2>{weather.city}</h2>

            <p>{weather.country}</p>

            <p>
                Temperature: {weather.current.temperature_2m}°C
            </p>

            <p>
                Wind Speed: {weather.current.wind_speed_10m} km/h
            </p>
        </div>
    );
}