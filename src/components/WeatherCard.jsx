export default function WeatherCard({ weather }) {
    return (
        <div className="max-w-sm mx-auto mt-24 bg-transparent rounded-2xl p-8 shadow-2xl">

            <div className="flex flex-col items-center">

                <h2 className="text-2xl font-semibold">
                    {weather.city}
                </h2>

                <p className="text-gray-300">
                    {weather.country}
                </p>

                <h1 className="text-6xl font-bold mt-6">
                    {weather.current.temperature_2m}°C
                </h1>

                <p className="mt-6 text-lg">
                    💨 Wind: {weather.current.wind_speed_10m} km/h
                </p>

            </div>

        </div>
    );
}