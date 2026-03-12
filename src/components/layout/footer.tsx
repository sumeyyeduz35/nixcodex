//sayfa sonu bilgi alanı

export default function Footer() {

  return (

    <footer className="bg-darkbg border-t border-slate-800 text-slate-400 py-16 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* logo */}

        <div>

          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r 
          from-purple-400 via-pink-400 to-blue-400 
          bg-clip-text text-transparent">

            NixCodex

          </h3>

          <p>
            Developer platform for tools, projects and notes.
          </p>

        </div>


        {/* platform */}

        <div>

          <h4 className="text-white font-semibold mb-4">
            Platform
          </h4>

          <ul className="space-y-2">

            <li className="hover:text-white transition cursor-pointer">
              Tools
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Projects
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Notes
            </li>

          </ul>

        </div>


        {/* community */}

        <div>

          <h4 className="text-white font-semibold mb-4">
            Community
          </h4>

          <ul className="space-y-2">

            <li className="hover:text-white transition cursor-pointer">
              GitHub
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Discord
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Twitter
            </li>

          </ul>

        </div>

      </div>


      {/* bottom */}

      <div className="text-center mt-12 text-sm text-slate-500">

        © 2026 NixCodex. All rights reserved.

      </div>

    </footer>

  )

}