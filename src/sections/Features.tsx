//platformun ne olduğunu anlatır

export default function Features() {
  return (
    <section className="py-24 px-6 bg-darkbg text-white">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          Everything Developers Need
        </h2>

        <p className="text-slate-400 mb-16">
          NixCodex brings together tools, resources and projects
          to help developers build faster.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}

          <div className="p-8 bg-slate-900/60 rounded-2xl border border-slate-800
          hover:border-pinkaccent transition hover:-translate-y-1">

            <div className="w-12 h-12 mb-4 rounded-lg 
            bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>

            <h3 className="text-xl font-semibold mb-3">
              Developer Tools
            </h3>

            <p className="text-slate-400">
              Discover useful tools that improve your workflow.
            </p>

          </div>


          {/* CARD 2 */}

          <div className="p-8 bg-slate-900/60 rounded-2xl border border-slate-800
          hover:border-blueaccent transition hover:-translate-y-1">

            <div className="w-12 h-12 mb-4 rounded-lg 
            bg-gradient-to-r from-blue-500 to-purple-500"></div>

            <h3 className="text-xl font-semibold mb-3">
              Open Projects
            </h3>

            <p className="text-slate-400">
              Explore real world developer projects.
            </p>

          </div>


          {/* CARD 3 */}

          <div className="p-8 bg-slate-900/60 rounded-2xl border border-slate-800
          hover:border-purple-500 transition hover:-translate-y-1">

            <div className="w-12 h-12 mb-4 rounded-lg 
            bg-gradient-to-r from-pink-500 to-purple-500"></div>

            <h3 className="text-xl font-semibold mb-3">
              Learning Resources
            </h3>

            <p className="text-slate-400">
              Guides, tutorials and developer knowledge.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}