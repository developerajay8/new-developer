import { adminAuth, adminDb } from '@/lib/firebase-admin';

const ADMINS_COLLECTION = 'config';
const ADMINS_DOC = 'admins';

export async function requireAdmin(request: Request): Promise<{ uid: string } | null> {
  const authHeader = request.headers.get('authorization');
  const idToken = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;
  if (!idToken) {
    console.error('[admin] No token in request');
    return null;
  }
  try {
    const decoded = await adminAuth.verifyIdToken(idToken);
    const adminsRef = adminDb.collection(ADMINS_COLLECTION).doc(ADMINS_DOC);
    const adminsSnap = await adminsRef.get();
    if (!adminsSnap.exists) {
      console.error('[admin] config/admins document does not exist in Firestore');
      return null;
    }
    const data = adminsSnap.data();
    const uids: unknown = data?.uids;
    const uidList: string[] = Array.isArray(uids) ? uids.filter((x): x is string => typeof x === 'string') : [];
    if (!uidList.includes(decoded.uid)) {
      console.error('[admin] UID not in list. Your UID:', decoded.uid, '| List:', uidList);
      return null;
    }
    return { uid: decoded.uid };
  } catch (err) {
    console.error('[admin] requireAdmin error:', err);
    return null;
  }
}
