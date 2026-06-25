export default function SearchBar({ city, setCity, handleSearch }) {
    return (
        <div className="flex justify-center pt-10">
            <input type="text"
                placeholder="Enter city name..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="px-4 py-2 rounded-lg text-white bg-gray-800" />

            <button onClick={handleSearch} className="bg-blue-500 px-4 py-2 rounded-lg"
            >Search</button>

        </div>
    );
}