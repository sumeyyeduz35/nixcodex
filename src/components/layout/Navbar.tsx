export default function Navbar() {
  return (
    <nav className="
    sticky top-0 z-50
    backdrop-blur-xl
    bg-darkbg/70
    border-b border-white/5
    ">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* logo */}
        <div className="text-xl font-bold bg-gradient-to-r 
        from-purple-400 via-pink-400 to-blue-400 
        bg-clip-text text-transparent">
          NixCodex
        </div>

        {/* menu */}
        <div className="flex items-center gap-8 text-sm text-slate-400">

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
        <button className="
        px-5 py-2 rounded-lg
        bg-gradient-to-r from-purple-600 to-pink-500
        text-white text-sm font-medium

        transition-all duration-300
        hover:scale-105
        hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]
        ">
          Get Started
        </button>

      </div>

    </nav>
  )
}