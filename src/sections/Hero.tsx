//siteye girildiğinde ne işe yaradıgını gösteren bölüm

export default function Hero() {

  return (

    <section className="relative py-36 px-6 text-center overflow-hidden 
    bg-gradient-to-b from-purple-900 via-purple-800 to-darkbg text-white">

      {/* main glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 
      w-[800px] h-[800px] bg-purple-600 opacity-20 blur-[220px]"></div>

      {/* pink glow */}
      <div className="absolute top-40 left-10 
      w-[300px] h-[300px] bg-pinkaccent opacity-20 blur-[150px]"></div>

      {/* blue glow */}
      <div className="absolute bottom-40 right-10 
      w-[300px] h-[300px] bg-blueaccent opacity-20 blur-[150px]"></div>


      <div className="relative max-w-3xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">

          Build Faster with  

          <span className="bg-gradient-to-r 
          from-purple-400 via-pink-400 to-blue-400 
          bg-clip-text text-transparent">

            {" "}NixCodex

          </span>

        </h1>

        <p className="text-textsecondary text-lg mb-10 max-w-xl mx-auto">

          Discover developer notes, projects and problem solving 
          resources in one powerful platform.

        </p>


        <div className="flex justify-center gap-4 flex-wrap">

          <button className="bg-primary hover:bg-purple-700 
          px-7 py-3 rounded-xl font-medium transition 
          shadow-lg shadow-purple-600/30">

            Start Building

          </button>

          <button className="border border-slate-600 
          px-7 py-3 rounded-xl hover:border-pinkaccent 
          hover:text-pinkaccent transition">

            View Docs

          </button>

        </div>

      </div>

    </section>

  )
}