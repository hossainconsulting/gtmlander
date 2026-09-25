export default function Solution() {
  return (
    <section id="solution" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Your 24/7 Sales Team</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">4-Tier Workflow</h3>
            <div className="space-y-6">
              {[1, 2, 3, 4].map((tier) => (
                <div key={tier} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-cyan flex items-center justify-center flex-shrink-0 font-bold">
                    {tier}
                  </div>
                  <div>
                    <h4 className="font-bold">
                      Tier {tier}:{' '}
                      {
                        ['Lead Qualification', 'Needs Analysis', 'Proposal Building', 'Conversion'][
                          tier - 1
                        ]
                      }
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Automated step {tier} of customer journey
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-96 bg-gradient-to-b from-brand-purple/5 to-transparent rounded-lg border border-brand-cyan/20 flex items-center justify-center">
            <ol className="space-y-5 text-left p-8">
              {[
                'Inquiry received',
                'Needs understood',
                'Proposal reviewed',
                'Booking confirmed',
              ].map((step, index) => (
                <li key={step} className="flex items-center gap-4">
                  <span className="text-brand-cyan font-mono">0{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
