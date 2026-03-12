//bu bölüm platformdaki araçları gösterir

export default function Tools() {
  return (
    <section className="py-24 px-6 bg-darkbg text-white">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          Discover Powerful Tools
        </h2>

        <p className="text-slate-400 mb-16">
          Curated developer tools to speed up your workflow.
        </p>

        <div className="grid md:grid-cols-4 gap-8">

          {/* TOOL 1 */}

          <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl
          hover:border-pinkaccent transition hover:-translate-y-1">

            <div className="w-10 h-10 mb-4 rounded-lg
            bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>

            <h3 className="font-semibold mb-2">
              Code Tools
            </h3>

            <p className="text-slate-400 text-sm">
              Improve productivity with developer utilities.
            </p>

          </div>


          {/* TOOL 2 */}

          <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl
          hover:border-blueaccent transition hover:-translate-y-1">

            <div className="w-10 h-10 mb-4 rounded-lg
            bg-gradient-to-r from-blue-500 to-purple-500"></div>

            <h3 className="font-semibold mb-2">
              AI Tools
            </h3>

            <p className="text-slate-400 text-sm">
              Discover AI powered development tools.
            </p>

          </div>


          {/* TOOL 3 */}

          <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl
          hover:border-purple-500 transition hover:-translate-y-1">

            <div className="w-10 h-10 mb-4 rounded-lg
            bg-gradient-to-r from-purple-500 to-blue-500"></div>

            <h3 className="font-semibold mb-2">
              Dev Resources
            </h3>

            <p className="text-slate-400 text-sm">
              Guides and references for developers.
            </p>

          </div>


          {/* TOOL 4 */}

          <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl
          hover:border-pinkaccent transition hover:-translate-y-1">

            <div className="w-10 h-10 mb-4 rounded-lg
            bg-gradient-to-r from-pink-500 to-purple-500"></div>

            <h3 className="font-semibold mb-2">
              Open Source
            </h3>

            <p className="text-slate-400 text-sm">
              Explore powerful open source projects.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}