//bu bölümde developer notları sergilenir

export default function NotesPreview() {

  const notes = [
    {
      title: "React Hooks Guide",
      desc: "Understanding useState and useEffect."
    },
    {
      title: "SQL Joins Explained",
      desc: "Inner Join, Left Join and practical usage."
    },
    {
      title: "Next.js Routing",
      desc: "App Router structure and navigation."
    }
  ]

  return (

    <section className="py-28 px-6 bg-darkbg text-white">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Latest Notes
        </h2>

        <p className="text-slate-400 text-center mb-16">
          Recent software notes and development insights.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {notes.map((note, index) => (

            <div
              key={index}
              className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800
              hover:border-blueaccent transition hover:-translate-y-1"
            >

              {/* note icon */}
              <div className="w-10 h-10 mb-4 rounded-lg
              bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>

              {/* badge */}
              <span className="text-xs px-3 py-1 rounded-full
              bg-blue-500/10 text-blue-400 border border-blue-500/20">

                Note

              </span>

              <h3 className="text-xl font-semibold mt-4 mb-3">
                {note.title}
              </h3>

              <p className="text-slate-400">
                {note.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}