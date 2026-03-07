export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-16">
          Powerful Developer Tools
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 rounded-xl bg-white shadow">
            <h3 className="text-xl font-semibold mb-3">
              ⚡ Fast Development
            </h3>
            <p className="text-gray-600">
              Build projects faster with modern tools.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white shadow">
            <h3 className="text-xl font-semibold mb-3">
              📦 Code Libraries
            </h3>
            <p className="text-gray-600">
              Access reusable components and libraries.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white shadow">
            <h3 className="text-xl font-semibold mb-3">
              🤝 Community
            </h3>
            <p className="text-gray-600">
              Collaborate with developers worldwide.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
