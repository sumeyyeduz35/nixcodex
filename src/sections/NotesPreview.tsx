// bu bölümde developer notları sergilenir

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
              className="
              relative bg-slate-900/40 p-6 rounded-2xl border border-slate-800
              transition-all duration-300
              hover:border-blueaccent
              group overflow-hidden
              "
            >

              {/* subtle glow */}
              <div className="
              absolute inset-0 rounded-2xl
              bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
              opacity-0 blur-2xl transition duration-500
              group-hover:opacity-10
              " />

              <div className="relative z-10">

                {/* badge */}
                <span className="
                text-xs px-3 py-1 rounded-full
                bg-blue-500/10 text-blue-400 border border-blue-500/20
                ">
                  Note
                </span>

                {/* title */}
                <h3 className="
                text-xl font-semibold mt-4 mb-3
                transition-all duration-300
                group-hover:text-blue-400
                ">
                  {note.title}
                </h3>

                {/* desc */}
                <p className="text-slate-400 mb-6">
                  {note.desc}
                </p>

                {/* read more */}
                <div className="relative inline-block">

                  <span className="
                  text-sm text-blue-400
                  transition
                  ">
                    Read more →
                  </span>

                  {/* underline animation */}
                  <span className="
                  absolute left-0 -bottom-1 h-[2px] w-0
                  bg-blue-400
                  transition-all duration-300
                  group-hover:w-full
                  "></span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}