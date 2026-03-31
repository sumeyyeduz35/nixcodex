// siteye girildiğinde ne işe yaradığını gösteren bölüm

export default function Hero() {
  return (
    <section className="
    relative py-36 px-6 text-center overflow-hidden
    bg-darkbg text-white
    ">

      {/* NAVBAR ile yumuşak geçiş */}
      <div className="
      absolute top-0 left-0 w-full h-32
      bg-gradient-to-b from-black/60 to-transparent
      " />

      {/* MAIN GLOW */}
      <div className="
      absolute -top-40 left-1/2 -translate-x-1/2
      w-[700px] h-[700px]
      bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
      opacity-20 blur-[180px]
      " />

      {/* LEFT GLOW */}
      <div className="
      absolute top-40 left-10
      w-[300px] h-[300px]
      bg-pink-500 opacity-20 blur-[140px]
      " />

      {/* RIGHT GLOW */}
      <div className="
      absolute bottom-40 right-10
      w-[300px] h-[300px]
      bg-blue-500 opacity-20 blur-[140px]
      " />

      <div className="relative max-w-3xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">

          Build Faster with  

          <span className="bg-gradient-to-r 
          from-purple-400 via-pink-400 to-blue-400 
          bg-clip-text text-transparent">

            {" "}NixCodex

          </span>

        </h1>

        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          Discover developer notes, projects and problem solving 
          resources in one powerful platform.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">

          {/* primary */}
          <button className="
          px-7 py-3 rounded-xl font-medium
          bg-gradient-to-r from-purple-600 to-pink-500
          text-white

          transition-all duration-300
          hover:scale-105
          hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
          ">
            Start Building
          </button>

          {/* secondary */}
          <button className="
          px-7 py-3 rounded-xl
          border border-white/10
          text-slate-300

          transition-all duration-300
          hover:border-pink-400
          hover:text-white
          ">
            View Docs
          </button>

        </div>

      </div>

    </section>
  )
}