import { useEffect } from "react";
import { stripHtml } from "../api/tvmaze";

export default function MovieModal({ movie, onClose }) {
  // Close on Escape + lock body scroll
  useEffect(() => {
    if (!movie) return;

    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [movie, onClose]);

  if (!movie) return null;

  const backdrop =
    movie.image?.original ||
    movie.image?.medium ||
    "https://via.placeholder.com/1200x600/1e293b/64748b?text=No+Image";

  const year = movie.premiered ? movie.premiered.slice(0, 4) : "N/A";
  const rating = movie.rating?.average ?? "N/A";
  const genres = movie.genres?.join(", ") || "N/A";
  const summary = stripHtml(movie.summary) || "No summary available.";
  const language = movie.language || "N/A";
  const status = movie.status || "N/A";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-rose-600 text-white text-lg flex items-center justify-center transition"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Backdrop */}
        <div className="relative h-56 sm:h-72 overflow-hidden rounded-t-2xl bg-slate-800">
          <img
            src={backdrop}
            alt={movie.name}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {movie.name}
          </h2>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-sm text-slate-300">
            <span className="flex items-center gap-1">
              ⭐ <span className="text-yellow-400 font-medium">{rating}</span>
            </span>
            <span className="text-slate-600">|</span>
            <span>📅 {year}</span>
            <span className="text-slate-600">|</span>
            <span>🌐 {language}</span>
            <span className="text-slate-600">|</span>
            <span>📺 {status}</span>
          </div>

          <div className="mt-6">
            <h3 className="text-sm uppercase tracking-wider text-rose-500 font-semibold mb-2">
              Overview
            </h3>
            <p className="text-slate-300 leading-relaxed">{summary}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-sm uppercase tracking-wider text-rose-500 font-semibold mb-2">
              Genres
            </h3>
            <p className="text-slate-300">{genres}</p>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-medium transition"
            >
              ❌ Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}