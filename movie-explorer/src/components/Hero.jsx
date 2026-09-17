import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="relative w-full max-w-7xl h-full rounded-3xl overflow-hidden border border-indigo-900/40 bg-gradient-to-b from-indigo-950 to-slate-950 flex items-center justify-center">

        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 0%, rgba(99,102,241,0.25) 0%, transparent 60%)",
          }}
        />

        <div className="relative px-6 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white">
            BINGE. DISCOVER. REPEAT.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From blockbusters to hidden gems — all here.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              to="/movies"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-base transition shadow-lg shadow-rose-600/30 hover:shadow-rose-500/40"
            >
              Start Exploring
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}