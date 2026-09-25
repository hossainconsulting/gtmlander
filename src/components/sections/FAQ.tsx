import { useState } from 'react'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Will AI mess up my customer relationships?',
      a: 'No. The AI is trained on your brand voice and speaking style, so it sounds like you.',
    },
    {
      q: 'How long does setup take?',
      a: 'About 15 minutes. Our onboarding walks you through configuring each tier.',
    },
    {
      q: 'Do you integrate with my CRM?',
      a: 'Yes. We support HubSpot, Pipedrive, Monday.com, and custom API integrations.',
    },
    {
      q: 'What if I don\'t like it?',
      a: '30-day money-back guarantee. No questions asked.',
    },
  ]

  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Questions? We\'ve Got Answers.</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-brand-cyan/20 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full p-6 text-left font-bold hover:bg-brand-cyan/5 transition flex items-center justify-between"
              >
                {faq.q}
                <span className="text-brand-cyan">{open === index ? '−' : '+'}</span>
              </button>
              {open === index && (
                <div className="px-6 pb-6 text-gray-400 border-t border-brand-cyan/20">
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
