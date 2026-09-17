export default function MovieCard({ movie, onSeeDetails }) {
  const poster =
    movie.image?.medium ||
    "https://via.placeholder.com/210x295/1e293b/64748b?text=No+Image";

  const year = movie.premiered ? movie.premiered.slice(0, 4) : "N/A";
  const rating = movie.rating?.average ?? "N/A";

  return (
    <div className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-rose-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-600/10 flex flex-col">
      <div className="aspect-[2/3] overflow-hidden bg-slate-900">
        <img
          src={poster}
          alt={movie.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-white font-semibold text-base line-clamp-2 min-h-[3rem]">
          {movie.name}
        </h3>

        <div className="flex items-center gap-3 text-sm text-slate-400 mt-2">
          <span className="flex items-center gap-1">
            ⭐ <span className="text-yellow-400 font-medium">{rating}</span>
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1">📅 {year}</span>
        </div>

        <button
          onClick={() => onSeeDetails(movie)}
          className="mt-4 w-full py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-sm font-medium transition"
        >
          See Details
        </button>
      </div>
    </div>
  );
}