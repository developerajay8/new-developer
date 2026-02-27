'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/app/contexts/AuthContext';
import { Loader2, LayoutDashboard, BookOpen, AlertCircle } from 'lucide-react';

export default function AdminLayout({
  children,
}: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, loading: authLoading, getIdToken } = useAuth();
  const [adminCheck, setAdminCheck] = useState<boolean | null>(null);
  const [checkError, setCheckError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setAdminCheck(false);
      setCheckError(null);
      return;
    }
    let cancelled = false;
    getIdToken(true)
      .then((token) => {
        if (cancelled || !token) {
          if (!cancelled) setAdminCheck(false);
          return;
        }
        return fetch('/api/admin/me', {
          headers: { Authorization: `Bearer ${token}` },
        }).then((res) => res.json());
      })
      .then((data) => {
        if (cancelled) return;
        setCheckError(data?.error ?? null);
        setAdminCheck(data?.isAdmin === true);
      })
      .catch((err) => {
        if (!cancelled) {
          setCheckError('Request failed');
          setAdminCheck(false);
        }
      });
    return () => { cancelled = true; };
  }, [user, getIdToken]);

  useEffect(() => {
    if (authLoading || adminCheck === null) return;
    if (!user) {
      router.replace('/login');
    }
  }, [authLoading, adminCheck, user, router]);

  if (authLoading || adminCheck === null || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F1E8]">
        <Loader2 className="w-8 h-8 animate-spin text-[#C9A961]" />
      </div>
    );
  }

  if (!adminCheck) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F1E8] p-4">
        <div className="bg-white rounded-xl border-2 border-[#C9A961] p-8 max-w-md text-center">
          <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <h1 className="text-xl font-semibold text-black mb-2">Admin access required</h1>
          <p className="text-black/70 text-sm mb-4">
            Your account is not in the admin list. Add your Firebase User UID to Firestore: <code className="bg-black/5 px-1 rounded text-xs">config/admins</code> → field <code className="bg-black/5 px-1 rounded text-xs">uids</code> (array).
          </p>
          {checkError && <p className="text-red-600 text-sm mb-4">Error: {checkError}</p>}
          <p className="text-xs text-black/50 mb-4">Your UID: {user.uid}</p>
          <Link href="/" className="text-[#C9A961] font-medium hover:underline">Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <header className="bg-white border-b-2 border-[#C9A961] sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/admin" className="font-serif font-bold text-[#C9A961] text-lg">
            Admin
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/admin"
              className={`flex items-center gap-1.5 text-sm ${pathname === '/admin' ? 'text-[#C9A961] font-medium' : 'text-black/70 hover:text-[#C9A961]'}`}
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </Link>
            <Link
              href="/admin/courses"
              className={`flex items-center gap-1.5 text-sm ${pathname?.startsWith('/admin/courses') ? 'text-[#C9A961] font-medium' : 'text-black/70 hover:text-[#C9A961]'}`}
            >
              <BookOpen className="w-4 h-4" />
              Courses
            </Link>
            <Link href="/" className="text-sm text-black/60 hover:text-black">
              Back to site
            </Link>
          </nav>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
