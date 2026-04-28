export default function CTA() {
  return (
    <section className="py-20 md:py-28 bg-indigo-600">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to build something amazing?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
          Join thousands of developers and teams who are already shipping faster with Starter.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="w-full sm:w-auto rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-indigo-600 shadow-lg hover:bg-indigo-50 transition"
          >
            Start Free Trial
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto rounded-full border border-indigo-400 px-8 py-3.5 text-sm font-semibold text-white hover:bg-indigo-500 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
