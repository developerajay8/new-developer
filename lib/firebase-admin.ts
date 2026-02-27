import { initializeApp, getApps, cert, type ServiceAccount } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

let _auth: ReturnType<typeof getAuth> | null = null;
let _db: ReturnType<typeof getFirestore> | null = null;

function getFirebaseAdmin(): { auth: ReturnType<typeof getAuth>; db: ReturnType<typeof getFirestore> } {
  if (getApps().length > 0) {
    return {
      auth: getAuth(),
      db: getFirestore(),
    };
  }

  const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountJson) {
    throw new Error('Missing FIREBASE_SERVICE_ACCOUNT_KEY in environment');
  }

  let serviceAccount: ServiceAccount;
  try {
    serviceAccount = JSON.parse(serviceAccountJson) as ServiceAccount;
  } catch {
    throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY must be valid JSON');
  }

  initializeApp({ credential: cert(serviceAccount) });

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
}

function getAdminAuth() {
  if (!_auth) {
    const { auth } = getFirebaseAdmin();
    _auth = auth;
  }
  return _auth;
}

function getAdminDb() {
  if (!_db) {
    const { db } = getFirebaseAdmin();
    _db = db;
  }
  return _db;
}

export const adminAuth = {
  verifyIdToken: (token: string) => getAdminAuth().verifyIdToken(token),
};

export const adminDb = {
  collection: (id: string) => getAdminDb().collection(id),
  runTransaction: <T>(fn: (tx: FirebaseFirestore.Transaction) => Promise<T>) =>
    getAdminDb().runTransaction(fn),
};
