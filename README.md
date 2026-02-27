This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Backend & Payment (Firebase + Razorpay)

### 1. Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

- **Firebase**: Create a project at [Firebase Console](https://console.firebase.google.com), add a Web app, and copy the config into `NEXT_PUBLIC_FIREBASE_*`. Enable **Authentication** (Email/Password) and **Firestore**.
- **Firebase Admin**: In Firebase Console → Project Settings → Service Accounts → Generate new private key. Paste the **entire JSON** into `FIREBASE_SERVICE_ACCOUNT_KEY` (as a single line or escaped).
- **Razorpay**: Create an account at [Razorpay](https://razorpay.com), get **Key ID** and **Key Secret** from Dashboard → Settings → API Keys (use Test mode first).

### 2. Firestore collections

Create these collections (they will be created on first write):

- `orders` – orderId, userId, courseId, amount, currency, status, razorpayPaymentId, createdAt
- `enrollments` – userId, courseId, orderId, enrolledAt (document ID: `{userId}_{courseId}`)

### 3. Payment flow

1. User signs in via Firebase Auth (`useAuth()` from `@/app/contexts/AuthContext`).
2. "Enroll" calls `createOrder(idToken, courseId, amountInPaise)` then `openRazorpayCheckout(...)` from `@/lib/payment`.
3. After successful payment, `verify-payment` API updates the order and creates an enrollment.

### 4. API routes

- `POST /api/create-order` – Body: `{ courseId, amount }`, Header: `Authorization: Bearer <idToken>`
- `POST /api/verify-payment` – Body: `{ orderId, paymentId, signature, courseId }`, Header: `Authorization: Bearer <idToken>`

---

## Admin – Create courses

Admins can create and edit courses at **/admin** (and **/admin/courses**).

### Add your first admin

1. Sign up or log in to the app with the Firebase account you want to make admin.
2. In [Firebase Console](https://console.firebase.google.com) → **Firestore Database**, create a document:
   - **Collection ID**: `config`
   - **Document ID**: `admins`
   - Add a field: **uids** (type: **array**) with one element: your Firebase user UID (e.g. `abc123xyz`).
3. Get your UID: in the app, after logging in you can find it in Firebase Console → Authentication → Users (copy the User UID), or use the browser console after login: `firebase.auth().currentUser.uid` (if you expose it for debug).
4. Reload the app and open **/admin**. If your UID is in `config/admins.uids`, you’ll see the admin dashboard and can create courses.
