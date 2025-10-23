import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, email, amount } = await req.json();

    const appId = process.env.NEXT_PUBLIC_CASHFREE_APP_ID;
    const secretKey = process.env.CASHFREE_SECRET_KEY;
    const env = process.env.CASHFREE_ENV;
    const baseUrl =
      env === 'production'
        ? 'https://api.cashfree.com/pg/orders'
        : 'https://sandbox.cashfree.com/pg/orders';

    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-client-id': appId,
        'x-client-secret': secretKey,
      },
      body: JSON.stringify({
        order_amount: amount,
        order_currency: 'INR',
        order_note: `Webinar registration for ${name}`,
        customer_details: {
          customer_id: email,
          customer_email: email,
          customer_phone: '9999999999',
        },
        order_meta: {
          return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/thank-you?order_id={order_id}`,
        },
      }),
    });

    const data = await response.json();
    console.log('Cashfree Order Response:', data);

    if (data.order_token) {
      // Return payment session token to client
      return NextResponse.json({
        success: true,
        payment_session_id: data.order_token,
        order_id: data.order_id,
      });
    }

    return NextResponse.json({ success: false, error: data.message || 'Payment failed' });
  } catch (error) {
    console.error('Cashfree API Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
