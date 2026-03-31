// bu bölümde projeler sergilenir

export default function ProjectsPreview() {

  const projects = [
    {
      title: "Ticket System",
      desc: "Support ticket management system.",
      tech: "Angular • .NET • SQL"
    },
    {
      title: "Inventory System",
      desc: "Hardware inventory tracking platform.",
      tech: "Flask • MySQL"
    },
    {
      title: "AI Story Generator",
      desc: "Emotion based AI story generator.",
      tech: "Python • LSTM"
    }
  ]

  return (

    <section className="py-28 px-6 bg-darkbg text-white">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Projects
        </h2>

        <p className="text-slate-400 text-center mb-16">
          Some of the projects I have built.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="
              relative bg-slate-900/60 p-6 rounded-2xl border border-slate-800
              transition-all duration-500 ease-out
              hover:-translate-y-2 hover:scale-[1.02]
              hover:border-purple-500/50
              hover:shadow-[0_0_40px_rgba(124,58,237,0.3)]
              group overflow-hidden
              "
            >

              {/* Glow */}
              <div className="
              absolute inset-0 rounded-2xl
              bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
              opacity-0 blur-2xl transition duration-500
              group-hover:opacity-20
              " />

              <div className="relative z-10">

                {/* ICON */}
                <div className="
                w-10 h-10 mb-4 rounded-lg
                bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500

                transition-all duration-500
                group-hover:rotate-6
                group-hover:scale-110
                "></div>

                {/* TITLE */}
                <h3 className="
                text-xl font-semibold mb-3
                transition-all duration-300
                group-hover:text-purple-400
                ">
                  {project.title}
                </h3>

                {/* DESC */}
                <p className="text-slate-400 mb-5">
                  {project.desc}
                </p>

                {/* TECH */}
                <span className="
                text-sm px-3 py-1 rounded-full
                bg-purple-500/10 text-purple-400 border border-purple-500/20

                transition-all duration-300
                group-hover:bg-purple-500/20
                group-hover:text-white
                ">
                  {project.tech}
                </span>

                {/* BUTTON */}
                <div className="
                mt-6 opacity-0 translate-y-4
                transition-all duration-500
                group-hover:opacity-100 group-hover:translate-y-0
                ">

                  <button className="
                  text-sm text-purple-400
                  hover:text-white transition
                  ">
                    View Project →
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}