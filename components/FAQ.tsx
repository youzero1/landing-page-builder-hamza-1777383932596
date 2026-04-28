'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How does the free trial work?',
    answer:
      'You get full access to all Pro features for 14 days. No credit card required. At the end of the trial, you can downgrade to the free plan or upgrade to keep your features.',
  },
  {
    question: 'Can I change plans at any time?',
    answer:
      'Absolutely! You can upgrade, downgrade, or cancel your plan at any time from your account dashboard. Changes take effect on your next billing cycle.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes. We use industry-standard AES-256 encryption at rest and TLS 1.3 in transit. All infrastructure is SOC 2 Type II certified.',
  },
  {
    question: 'Do you offer discounts for non-profits?',
    answer:
      'We offer a 50% discount for verified non-profit organizations. Reach out to our sales team to learn more.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'Free plan users get community support. Pro users get priority email support with a 4-hour SLA. Enterprise customers get a dedicated account manager and 24/7 phone support.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">FAQ</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Frequently asked questions</h2>
        </div>

        <div className="mt-12 divide-y divide-gray-200">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                type="button"
                className="flex w-full items-center justify-between text-left"
                onClick={() => toggle(i)}
              >
                <span className="text-base font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {openIndex === i && (
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
