'use client';
import { useState } from 'react';

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Test User',
          email: 'user@yuktiherbs.com',
          amount: 99.0, // change dynamically if needed
        }),
      });

      const data = await res.json();

      if (data?.success && data?.payment_session_id) {
        const script = document.createElement('script');
        script.src = 'https://sdk.cashfree.com/js/ui/2.0.0/cashfree.js';
        script.onload = () => {
          const cashfree = new window.Cashfree(data.payment_session_id);
          cashfree.redirect();
        };
        document.body.appendChild(script);
      } else {
        alert(data.error || 'Payment failed');
      }
    } catch (err) {
      console.error(err);
      alert('Error initiating payment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-2xl font-semibold mb-4">Register for Webinar</h1>
      <button
        onClick={handlePayment}
        disabled={loading}
        className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        {loading ? 'Processing...' : 'Register & Pay ₹99'}
      </button>
    </div>
  );
}
