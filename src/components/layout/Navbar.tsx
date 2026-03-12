export default function Navbar() {

  return (

    <nav className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-slate-800">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* logo */}

        <div className="text-xl font-bold bg-gradient-to-r 
        from-purple-400 via-pink-400 to-blue-400 
        bg-clip-text text-transparent">

          NixCodex

        </div>

        {/* menu */}

        <div className="flex items-center gap-8 text-sm text-slate-300">

          <a href="#" className="hover:text-white transition">
            Tools
          </a>

          <a href="#" className="hover:text-white transition">
            Projects
          </a>

          <a href="#" className="hover:text-white transition">
            Notes
          </a>

          <a href="#" className="hover:text-white transition">
            Community
          </a>

        </div>

        {/* button */}

        <button className="bg-primary px-5 py-2 rounded-lg hover:bg-purple-700 transition">

          Get Started

        </button>

      </div>

    </nav>

  )
}