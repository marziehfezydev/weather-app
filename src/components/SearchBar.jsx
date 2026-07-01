export default function SearchBar({ city, setCity, handleSearch, loading, error }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex justify-center pt-10 gap-3">
                <input
                    type="text"
                    placeholder="Enter city name..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="
                        px-4 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder:text-white/70 outline-none focus:border-transparent transition-all duration-300"
                />

                <button
                    onClick={handleSearch}
                    disabled={loading}
                    className="px-5 py-3 rounded-xl bg-green-600 hover:bg-green-700 transition-colors duration-300 font-semibold"
                >
                    {loading ? "Searching..." : "Search"}
                </button>


            </div>


            {error && (
                <p className="mt-3 text-center text-red-300 font-semibold text-lg">
                    {error}
                </p>
            )}
        </div>
    );
}