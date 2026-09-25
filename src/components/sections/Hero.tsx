export default function Hero() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-brand-navy to-brand-cyan/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
          Your AI Sales Team Never Sleeps
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          4-Tier AI Orchestration for Lead Qualification, Needs Analysis, Proposal Building & Conversion
        </p>
        <div className="flex gap-4 justify-center mb-8">
          <button className="px-8 py-4 bg-brand-cyan text-brand-navy font-bold text-lg rounded-lg hover:shadow-xl hover:shadow-brand-cyan/50 transition">
            Start Your Free Trial
          </button>
          <button className="px-8 py-4 border-2 border-brand-cyan text-brand-cyan font-bold rounded-lg hover:bg-brand-cyan/10 transition">
            Watch 2-min Demo
          </button>
        </div>
        <div className="h-96 bg-gradient-to-b from-brand-purple/5 to-transparent rounded-lg border border-brand-cyan/20 flex items-center justify-center">
          <p className="text-gray-400">3D Hero Scene - Phase 2 Implementation</p>
        </div>
      </div>
    </section>
  )
}
