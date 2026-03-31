// platformun topluluk tarafı

export default function Community() {
  return (
    <section className="
    relative py-32 px-6 overflow-hidden
    bg-gradient-to-b from-purple-950 via-purple-900 to-darkbg
    text-white
    ">

      {/* üstten yumuşak geçiş */}
      <div className="
      absolute top-0 left-0 w-full h-32
      bg-gradient-to-b from-darkbg to-transparent
      " />

      {/* ana glow */}
      <div className="
      absolute -top-40 left-1/2 -translate-x-1/2
      w-[700px] h-[700px]
      bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
      opacity-30 blur-[150px]
      " />

      {/* alt glow (CTA’ya bağlanır) */}
      <div className="
      absolute bottom-[-150px] left-1/2 -translate-x-1/2
      w-[700px] h-[700px]
      bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
      opacity-25 blur-[160px]
      " />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        <h2 className="
        text-4xl md:text-5xl font-bold mb-6
        bg-gradient-to-r from-white via-purple-200 to-pink-300
        bg-clip-text text-transparent
        ">
          Join the NixCodex Community
        </h2>

        <p className="text-slate-300 text-lg mb-10">
          Connect with developers, share tools and grow together.
        </p>

        <button className="
        px-8 py-4 rounded-xl
        bg-gradient-to-r from-purple-600 to-pink-500
        text-white font-medium

        border border-white/10

        transition-all duration-300
        hover:scale-105
        hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]
        ">
          Join Now
        </button>

      </div>

    </section>
  )
}