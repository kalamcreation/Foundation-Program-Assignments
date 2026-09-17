import MovieCard from "./MovieCard";

export default function MovieGrid({ movies, onSeeDetails }) {
  if (!movies.length) {
    return (
      <div className="text-center py-20 text-slate-400">
        <p className="text-5xl mb-4">🎞️</p>
        <p className="text-lg">No movies found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onSeeDetails={onSeeDetails} />
      ))}
    </div>
  );
}