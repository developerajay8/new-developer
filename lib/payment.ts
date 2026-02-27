/**
 * Client-side payment flow:
 * 1. Call POST /api/create-order with { courseId, amount } and Authorization: Bearer <idToken>
 * 2. Load Razorpay script and open checkout with returned orderId, amount, keyId
 * 3. On success, call POST /api/verify-payment with { orderId, paymentId, signature, courseId }
 */

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  order_id: string;
  name?: string;
  description?: string;
  handler: (response: RazorpayResponse) => void;
  prefill?: { email?: string; contact?: string };
  theme?: { color?: string };
}

interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface RazorpayInstance {
  open: () => void;
  on: (event: string, handler: () => void) => void;
}

const RAZORPAY_SCRIPT = 'https://checkout.razorpay.com/v1/checkout.js';

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Razorpay script'));
    document.body.appendChild(script);
  });
}

export interface CreateOrderResponse {
  orderId: string;
  amount: number;
  currency: string;
  keyId: string;
}

export async function createOrder(
  idToken: string,
  courseId: string,
  amountInPaise: number
): Promise<CreateOrderResponse> {
  const res = await fetch('/api/create-order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`,
    },
    body: JSON.stringify({ courseId, amount: amountInPaise }),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || 'Failed to create order');
  }
  return res.json();
}

export async function verifyPayment(
  idToken: string,
  orderId: string,
  paymentId: string,
  signature: string,
  courseId: string
): Promise<void> {
  const res = await fetch('/api/verify-payment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`,
    },
    body: JSON.stringify({ orderId, paymentId, signature, courseId }),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || 'Payment verification failed');
  }
}

export async function openRazorpayCheckout(
  options: {
    keyId: string;
    orderId: string;
    amount: number;
    currency: string;
    courseId: string;
    idToken: string;
    onSuccess?: () => void;
    onClose?: () => void;
  }
): Promise<void> {
  await loadScript(RAZORPAY_SCRIPT);

  return new Promise((resolve, reject) => {
    const rzp = new window.Razorpay({
      key: options.keyId,
      amount: options.amount,
      currency: options.currency,
      order_id: options.orderId,
      name: 'Nasreen Fatima Fashion Academy',
      description: 'Course enrollment',
      handler: async (response) => {
        try {
          await verifyPayment(
            options.idToken,
            response.razorpay_order_id,
            response.razorpay_payment_id,
            response.razorpay_signature,
            options.courseId
          );
          options.onSuccess?.();
          resolve();
        } catch (err) {
          reject(err);
        }
      },
      theme: { color: '#c9a227' },
    });

    rzp.on('payment.failed', () => {
      reject(new Error('Payment failed'));
    });

    rzp.on('payment.cancel', () => {
      options.onClose?.();
      resolve();
    });

    rzp.open();
  });
}
