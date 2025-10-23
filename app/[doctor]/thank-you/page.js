export default function ThankYouPage({ searchParams }) {
  const orderId = searchParams?.order_id || 'Unknown';
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Payment Successful!</h1>
      <p className="text-gray-700">Thank you for registering. Your Order ID: {orderId}</p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Go Back Home
      </a>
    </div>
  );
}
