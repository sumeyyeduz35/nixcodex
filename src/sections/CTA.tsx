// kullanıcıya aksiyon yaptırılan bölüm

export default function CTA() {
  return (
    <section className="
    relative py-28 px-6 text-center text-white
    bg-transparent
    ">

      <div className="max-w-2xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Start Exploring NixCodex
        </h2>

        <p className="text-slate-400 text-lg mb-10">
          Discover developer tools, projects and resources today.
        </p>

        <button className="
        px-10 py-4 rounded-xl
        bg-gradient-to-r from-purple-600 to-pink-500
        text-white font-medium

        border border-white/10

        transition-all duration-300
        hover:scale-105
        hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]
        ">
          Get Started
        </button>

      </div>

    </section>
  )
}