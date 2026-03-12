//bu bölümde  projeler sergilenir

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
              className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800
              hover:border-pinkaccent transition hover:-translate-y-1"
            >

              {/* project icon */}
              <div className="w-10 h-10 mb-4 rounded-lg
              bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>

              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-5">
                {project.desc}
              </p>

              <span className="text-sm px-3 py-1 rounded-full
              bg-purple-500/10 text-purple-400 border border-purple-500/20">

                {project.tech}

              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}