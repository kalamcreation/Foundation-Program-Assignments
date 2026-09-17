import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-40 backdrop-blur bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <span>🎬</span>
          <span className="text-white">Movie<span className="text-rose-500">Explorer</span></span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            className={`hidden sm:block text-sm transition ${pathname === "/" ? "text-rose-500" : "text-slate-300 hover:text-white"}`}
          >
            Home
          </Link>
          <Link
            to="/movies"
            className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-sm font-medium transition shadow-lg shadow-rose-600/20"
          >
            Movies
          </Link>
        </div>
      </div>
    </nav>
  );
}