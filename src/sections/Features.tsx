// platformun ne olduğunu anlatır

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
          <div className="
          relative p-8 bg-slate-900/60 rounded-2xl border border-slate-800
          transition-all duration-500 ease-out
          hover:-translate-y-2 hover:scale-[1.02]
          hover:border-pinkaccent
          hover:shadow-[0_0_40px_rgba(236,72,153,0.3)]
          group overflow-hidden
          ">

            {/* Glow */}
            <div className="
            absolute inset-0 rounded-2xl
            bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
            opacity-0 blur-2xl transition duration-500
            group-hover:opacity-20
            " />

            <div className="relative z-10">

              <div className="
              w-12 h-12 mb-4 rounded-lg 
              bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500

              transition-all duration-500
              group-hover:rotate-6
              group-hover:scale-110
              "></div>

              <h3 className="
              text-xl font-semibold mb-3
              transition-all duration-300
              group-hover:text-pink-400
              ">
                Developer Tools
              </h3>

              <p className="text-slate-400">
                Discover useful tools that improve your workflow.
              </p>

            </div>
          </div>


          {/* CARD 2 */}
          <div className="
          relative p-8 bg-slate-900/60 rounded-2xl border border-slate-800
          transition-all duration-500 ease-out
          hover:-translate-y-2 hover:scale-[1.02]
          hover:border-blueaccent
          hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]
          group overflow-hidden
          ">

            <div className="
            absolute inset-0 rounded-2xl
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
            opacity-0 blur-2xl transition duration-500
            group-hover:opacity-20
            " />

            <div className="relative z-10">

              <div className="
              w-12 h-12 mb-4 rounded-lg 
              bg-gradient-to-r from-blue-500 to-purple-500

              transition-all duration-500
              group-hover:rotate-6
              group-hover:scale-110
              "></div>

              <h3 className="
              text-xl font-semibold mb-3
              transition-all duration-300
              group-hover:text-blue-400
              ">
                Open Projects
              </h3>

              <p className="text-slate-400">
                Explore real world developer projects.
              </p>

            </div>
          </div>


          {/* CARD 3 */}
          <div className="
          relative p-8 bg-slate-900/60 rounded-2xl border border-slate-800
          transition-all duration-500 ease-out
          hover:-translate-y-2 hover:scale-[1.02]
          hover:border-purple-500
          hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]
          group overflow-hidden
          ">

            <div className="
            absolute inset-0 rounded-2xl
            bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
            opacity-0 blur-2xl transition duration-500
            group-hover:opacity-20
            " />

            <div className="relative z-10">

              <div className="
              w-12 h-12 mb-4 rounded-lg 
              bg-gradient-to-r from-pink-500 to-purple-500

              transition-all duration-500
              group-hover:rotate-6
              group-hover:scale-110
              "></div>

              <h3 className="
              text-xl font-semibold mb-3
              transition-all duration-300
              group-hover:text-purple-400
              ">
                Learning Resources
              </h3>

              <p className="text-slate-400">
                Guides, tutorials and developer knowledge.
              </p>

            </div>
          </div>

        </div>

      </div>

    </section>
  )
}