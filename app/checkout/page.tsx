import CheckoutClient from '@/components/CheckoutClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checkout — Pro Plan',
  description: 'Complete your purchase of the Pro Plan for $29/month.',
};

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold tracking-tight text-indigo-600">
            Starter
          </a>
          <a
            href="/"
            className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition"
          >
            ← Back to home
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-lg px-6 py-16">
        {/* Order summary */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Checkout</h1>
          <div className="mt-6 flex items-center justify-between border-b border-gray-100 pb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Pro Plan</h2>
              <p className="mt-1 text-sm text-gray-500">Monthly subscription</p>
              <ul className="mt-3 space-y-1 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Unlimited projects
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  50 GB storage
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Priority support
                </li>
              </ul>
            </div>
            <div className="text-right">
              <span className="text-3xl font-extrabold text-gray-900">$29</span>
              <span className="text-sm text-gray-500">/mo</span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between text-sm">
            <span className="font-medium text-gray-700">Total due today</span>
            <span className="text-lg font-bold text-gray-900">$29.00</span>
          </div>

          {/* Stripe payment form */}
          <div className="mt-8">
            <CheckoutClient />
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Payments are securely processed by Stripe. We never store your card details.
        </p>
      </main>
    </div>
  );
}
