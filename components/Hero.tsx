export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-indigo-100/60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-6">
          Now in Public Beta
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl leading-tight">
          Build something{' '}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            amazing
          </span>{' '}
          today
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 leading-relaxed">
          The all-in-one platform that helps you ship faster, collaborate better, and delight your
          customers — no complex setup required.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="w-full sm:w-auto rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-indigo-700 transition"
          >
            Start Free Trial
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto rounded-full border border-gray-300 px-8 py-3.5 text-sm font-semibold text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition"
          >
            See Features
          </a>
        </div>

        {/* Social proof */}
        <p className="mt-10 text-sm text-gray-400">Trusted by 2,000+ teams worldwide</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-8 opacity-40">
          {['Vercel', 'Stripe', 'Notion', 'Linear', 'Figma'].map((brand) => (
            <span key={brand} className="text-lg font-bold text-gray-500">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
