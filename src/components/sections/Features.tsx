export default function Features() {
  const tiers = [
    {
      name: 'Foundation',
      price: '$99',
      features: ['Tier 1 Lead Catch', 'Basic analytics', 'Email support'],
    },
    {
      name: 'Complete',
      price: '$299',
      features: ['Tiers 1-3', 'Custom workflows', 'Slack support', 'CRM integration'],
      highlighted: true,
    },
    {
      name: 'Premium',
      price: '$999',
      features: ['All Tiers', 'Apex customization', 'API access', 'Dedicated AM'],
    },
  ]

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Compare the proposed plans</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`card-hover p-8 rounded-lg border transition-all ${
                tier.highlighted
                  ? 'bg-gradient-to-br from-brand-cyan/10 to-brand-purple/5 border-brand-cyan/50 scale-105'
                  : 'bg-gradient-to-br from-brand-cyan/5 to-transparent border-brand-cyan/20'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-3xl font-bold text-brand-cyan mb-6">
                {tier.price}
                <span className="text-sm text-gray-400">/mo</span>
              </p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-cyan rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#solution"
                className={`block text-center w-full py-3 rounded-lg font-bold transition ${
                  tier.highlighted
                    ? 'bg-brand-cyan text-brand-navy hover:shadow-lg hover:shadow-brand-cyan/50'
                    : 'border border-brand-cyan text-brand-cyan hover:bg-brand-cyan/10'
                }`}
              >
                Explore workflow
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
