import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import MovieModal from "../components/MovieModal";
import { fetchAllShows, searchShows } from "../api/tvmaze";

export default function Movies() {
  const [allShows, setAllShows] = useState([]);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Initial load: all shows
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        const data = await fetchAllShows();
        if (!cancelled) {
          setAllShows(data);
          setMovies(data);
        }
      } catch (err) {
        if (!cancelled) setError("Failed to load movies. Please try again.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Debounced search
  useEffect(() => {
    const trimmed = query.trim();

    if (!trimmed) {
      setMovies(allShows);
      return;
    }

    const handler = setTimeout(async () => {
      try {
        setLoading(true);
        setError("");
        const results = await searchShows(trimmed);
        setMovies(results);
      } catch (err) {
        setError("Search failed. Please try again.");
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(handler);
  }, [query, allShows]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Browse <span className="text-rose-500">Movies</span>
          </h1>
          <p className="text-slate-400 mt-2">
            Search and explore thousands of titles.
          </p>
        </header>

        <SearchBar value={query} onChange={setQuery} />

        <div className="mt-10">
          {loading && (
            <div className="text-center py-20 text-slate-400">
              <div className="inline-block w-10 h-10 border-4 border-slate-700 border-t-rose-500 rounded-full animate-spin" />
              <p className="mt-4">Loading movies...</p>
            </div>
          )}

          {!loading && error && (
            <div className="text-center py-20 text-rose-400">
              <p className="text-lg">{error}</p>
            </div>
          )}

          {!loading && !error && (
            <>
              <p className="text-slate-400 text-sm mb-4">
                {movies.length} result{movies.length !== 1 ? "s" : ""}
                {query && ` for "${query}"`}
              </p>
              <MovieGrid movies={movies} onSeeDetails={setSelectedMovie} />
            </>
          )}
        </div>
      </main>

      <Footer />

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}