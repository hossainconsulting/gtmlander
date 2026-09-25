export default function Problem() {
  const problems = [
    {
      title: 'Lost Leads Across Apps',
      description: '60% of inquiries are unqualified and slip through the cracks',
    },
    {
      title: 'Manual Work Kills Scale',
      description: '30 minutes per lead qualifying and asking questions manually',
    },
    {
      title: 'Missing Revenue',
      description: '$750K+ annually lost from inefficient lead handling',
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">The Problem</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="card-hover p-8 bg-gradient-to-br from-brand-cyan/5 to-transparent rounded-lg border border-brand-cyan/20">
              <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
              <p className="text-gray-300">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
