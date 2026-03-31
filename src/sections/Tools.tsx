// bu bölüm platformdaki araçları gösterir

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
          <div className="
          relative p-6 bg-slate-900/60 border border-slate-800 rounded-2xl
          transition-all duration-500 ease-out
          hover:-translate-y-2 hover:scale-[1.02]
          hover:border-pinkaccent
          hover:shadow-[0_0_40px_rgba(236,72,153,0.3)]
          group overflow-hidden
          ">

            <div className="
            absolute inset-0 rounded-2xl
            bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
            opacity-0 blur-2xl transition duration-500
            group-hover:opacity-20
            " />

            <div className="relative z-10">

              <div className="
              w-10 h-10 mb-4 rounded-lg
              bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500

              transition-all duration-500
              group-hover:rotate-6
              group-hover:scale-110
              "></div>

              <h3 className="
              font-semibold mb-2
              transition-all duration-300
              group-hover:text-pink-400
              ">
                Code Tools
              </h3>

              <p className="text-slate-400 text-sm">
                Improve productivity with developer utilities.
              </p>

            </div>
          </div>


          {/* TOOL 2 */}
          <div className="
          relative p-6 bg-slate-900/60 border border-slate-800 rounded-2xl
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
              w-10 h-10 mb-4 rounded-lg
              bg-gradient-to-r from-blue-500 to-purple-500

              transition-all duration-500
              group-hover:rotate-6
              group-hover:scale-110
              "></div>

              <h3 className="
              font-semibold mb-2
              transition-all duration-300
              group-hover:text-blue-400
              ">
                AI Tools
              </h3>

              <p className="text-slate-400 text-sm">
                Discover AI powered development tools.
              </p>

            </div>
          </div>


          {/* TOOL 3 */}
          <div className="
          relative p-6 bg-slate-900/60 border border-slate-800 rounded-2xl
          transition-all duration-500 ease-out
          hover:-translate-y-2 hover:scale-[1.02]
          hover:border-purple-500
          hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]
          group overflow-hidden
          ">

            <div className="
            absolute inset-0 rounded-2xl
            bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500
            opacity-0 blur-2xl transition duration-500
            group-hover:opacity-20
            " />

            <div className="relative z-10">

              <div className="
              w-10 h-10 mb-4 rounded-lg
              bg-gradient-to-r from-purple-500 to-blue-500

              transition-all duration-500
              group-hover:rotate-6
              group-hover:scale-110
              "></div>

              <h3 className="
              font-semibold mb-2
              transition-all duration-300
              group-hover:text-purple-400
              ">
                Dev Resources
              </h3>

              <p className="text-slate-400 text-sm">
                Guides and references for developers.
              </p>

            </div>
          </div>


          {/* TOOL 4 */}
          <div className="
          relative p-6 bg-slate-900/60 border border-slate-800 rounded-2xl
          transition-all duration-500 ease-out
          hover:-translate-y-2 hover:scale-[1.02]
          hover:border-pinkaccent
          hover:shadow-[0_0_40px_rgba(236,72,153,0.3)]
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
              w-10 h-10 mb-4 rounded-lg
              bg-gradient-to-r from-pink-500 to-purple-500

              transition-all duration-500
              group-hover:rotate-6
              group-hover:scale-110
              "></div>

              <h3 className="
              font-semibold mb-2
              transition-all duration-300
              group-hover:text-pink-400
              ">
                Open Source
              </h3>

              <p className="text-slate-400 text-sm">
                Explore powerful open source projects.
              </p>

            </div>
          </div>

        </div>

      </div>

    </section>
  )
}