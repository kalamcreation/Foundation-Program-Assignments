import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient + subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-rose-900/40" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(225,29,72,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59,130,246,0.3) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white">
          Discover <span className="text-rose-500">Movies</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-slate-300">
          Explore and discover your favorite movies and TV shows from around
          the world — all in one place.
        </p>

        <div className="mt-10">
          <Link
            to="/movies"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-lg transition shadow-xl shadow-rose-600/30 hover:shadow-rose-500/40"
          >
            🍿 Explore Now
          </Link>
        </div>
      </div>
    </section>
  );
}