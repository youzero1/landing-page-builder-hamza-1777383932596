import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment Successful — Starter',
  description: 'Your payment was successful.',
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="mx-auto max-w-md px-6 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">Payment Successful!</h1>
        <p className="mt-3 text-gray-600">
          Thank you for subscribing to the Pro Plan. You now have access to all Pro features.
        </p>
        <a
          href="/"
          className="mt-8 inline-block rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-indigo-700 transition"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
}
