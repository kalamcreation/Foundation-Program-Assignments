export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/60 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-slate-400 text-sm">
          🎬 <span className="text-white font-semibold">MovieExplorer</span>
        </div>

        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} MovieExplorer. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-slate-400 text-sm">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}