'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = publishableKey ? loadStripe(publishableKey) : null;

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);
    setErrorMessage(null);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success`,
      },
    });

    if (error) {
      setErrorMessage(error.message || 'Something went wrong.');
      setIsProcessing(false);
    }
    // If successful, the user is redirected to the return_url
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      {errorMessage && (
        <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
          {errorMessage}
        </div>
      )}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="mt-6 w-full rounded-full bg-indigo-600 py-3 text-sm font-semibold text-white shadow-lg hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isProcessing ? 'Processing…' : 'Pay $29.00'}
      </button>
    </form>
  );
}

export default function CheckoutClient() {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/stripe/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to initialize payment.');
        setClientSecret(data.clientSecret);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (!publishableKey) {
    return (
      <div className="rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800">
        Stripe is not configured. Please add <code className="font-mono">NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code> to your environment variables.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
        {error}
      </div>
    );
  }

  if (!clientSecret || !stripePromise) {
    return null;
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: 'stripe',
          variables: {
            colorPrimary: '#4f46e5',
            borderRadius: '8px',
          },
        },
      }}
    >
      <PaymentForm />
    </Elements>
  );
}
