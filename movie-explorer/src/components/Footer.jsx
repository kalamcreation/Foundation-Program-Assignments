export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-slate-400 text-sm">
          🎬 <span className="text-white font-semibold">MovieExplorer</span>{" "}
          <span className="text-slate-500">© 2026</span>
        </div>

        <p className="text-slate-500 text-sm">
          Created with ♥ by <span className="text-rose-500">Kalam</span>
        </p>

        <div className="flex items-center gap-4 text-slate-400 text-sm">
          <a
            href="https://github.com/kalamcreation"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/abulkalamcse"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}