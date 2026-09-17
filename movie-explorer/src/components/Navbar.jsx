import { Link, useLocation } from "react-router-dom";


export default function Navbar() {
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-slate-900/80 border-b border-slate-800 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <span>🎬</span>
          <span className="text-white">
            Movie<span className="text-rose-500">Explorer</span>
          </span>
        </Link>

        <div className="flex items-center gap-1 p-1 rounded-full bg-slate-800/70 border border-slate-700/60">
          <NavLink to="/" active={isActive("/")}>
            🏠 Home
          </NavLink>

          <NavLink to="/movies" active={isActive("/movies")}>
            🎬 Movies
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, active, icon, children }) {
  return (
    <Link
      to={to}
      className={[
        "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200",
        active
          ? "bg-rose-600 text-white shadow-lg shadow-rose-600/40"
          : "text-slate-400 hover:text-white",
      ].join(" ")}
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}