export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Rishabh Sinha
        </h1>
        <p className="text-lg text-gray-600">
          Data-driven insights on product, economics, and behaviour.
        </p>
      </section>

      {/* About */}
      <section className="mb-12">
        <p className="text-gray-800 leading-relaxed">
          I work at the intersection of data, product, and commercial strategy.
          I'm interested in how products grow, how users behave, and how data
          can reveal what's actually going on beneath the surface.
        </p>
      </section>

      {/* Writing */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Writing</h2>
        <p className="text-gray-600">
          Long-form analysis and essays coming soon.
        </p>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <p className="text-gray-600">
          Data explorations and tools coming soon.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-sm text-gray-400">
        © {new Date().getFullYear()} Rishabh Sinha
      </footer>

    </main>
  );
}