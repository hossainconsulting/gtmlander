import { useState } from 'react'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Will AI mess up my customer relationships?',
      a: 'The planned workflow keeps proposal review with your team. This prototype does not contact customers.',
    },
    {
      q: 'How long does setup take?',
      a: 'Guided onboarding is planned for a later milestone; it is not available in this prototype.',
    },
    {
      q: 'Do you integrate with my CRM?',
      a: 'CRM integrations are planned. This landing-page prototype is not connected to a CRM.',
    },
    {
      q: "What if I don't like it?",
      a: 'This is a product concept, with no checkout or paid subscription available.',
    },
  ]

  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Questions? We&apos;ve Got Answers.</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-brand-cyan/20 rounded-lg overflow-hidden">
              <button
                aria-expanded={open === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full p-6 text-left font-bold hover:bg-brand-cyan/5 transition flex items-center justify-between"
              >
                {faq.q}
                <span className="text-brand-cyan">{open === index ? '−' : '+'}</span>
              </button>
              {open === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-6 text-gray-400 border-t border-brand-cyan/20"
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
