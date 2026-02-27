export interface Course {
  id: string;
  title: string;
  subtitle?: string;
  price: number; // in paise for Razorpay
  originalPrice?: number;
  rating?: number;
  students?: string;
  duration?: string;
  lessons?: number;
  level?: string;
  badge?: string;
  features?: string[];
}

export interface Order {
  orderId: string;
  userId: string;
  courseId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'paid' | 'failed';
  razorpayPaymentId?: string;
  createdAt: Date;
}

export interface Enrollment {
  userId: string;
  courseId: string;
  orderId: string;
  enrolledAt: Date;
}
