'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/contexts/AuthContext';
import { Mail, Lock, Loader2 } from 'lucide-react';

function getAuthErrorMessage(code: string): string {
  const messages: Record<string, string> = {
    'auth/email-already-in-use': 'An account already exists with this email. Try signing in.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/operation-not-allowed': 'Sign up is not enabled. Contact support.',
    'auth/weak-password': 'Password should be at least 6 characters.',
    'auth/network-request-failed': 'Network error. Check your connection.',
    'auth/too-many-requests': 'Too many attempts. Please try again later.',
    'auth/popup-closed-by-user': 'Sign-up was cancelled.',
    'auth/popup-blocked': 'Popup was blocked. Allow popups and try again.',
    'auth/cancelled-popup-request': 'Please complete the sign-up in the popup.',
    'auth/account-exists-with-different-credential': 'An account already exists with this email. Try signing in instead.',
  };
  return messages[code] || 'Sign up failed. Please try again.';
}

export default function SignupPage() {
  const router = useRouter();
  const { signUp, signInWithGoogle, user, loading: authLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  useEffect(() => {
    if (!authLoading && user) router.replace('/');
  }, [authLoading, user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email.trim()) {
      setError('Please enter your email.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setSubmitting(true);
    try {
      await signUp(email.trim(), password);
      router.replace('/');
    } catch (err: unknown) {
      const message = err && typeof err === 'object' && 'code' in err
        ? getAuthErrorMessage((err as { code: string }).code)
        : 'Sign up failed. Please try again.';
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setError('');
    setGoogleLoading(true);
    try {
      await signInWithGoogle();
      router.replace('/');
    } catch (err: unknown) {
      const message = err && typeof err === 'object' && 'code' in err
        ? getAuthErrorMessage((err as { code: string }).code)
        : 'Google sign-up failed. Please try again.';
      setError(message);
    } finally {
      setGoogleLoading(false);
    }
  };

  if (authLoading || user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#F5F1E8]">
        <Loader2 className="w-8 h-8 animate-spin text-[#C9A961]" />
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] bg-[#F5F1E8] py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-lg border-2 border-[#C9A961] p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-serif font-bold text-[#C9A961] tracking-wide">
              NASREEN FATIMA
            </h1>
            <p className="text-black/80 text-sm tracking-widest mt-1">FASHION ACADEMY</p>
            <div className="h-[2px] w-24 bg-[#C9A961] mx-auto mt-3" />
            <h2 className="text-xl font-semibold text-black mt-6">Create account</h2>
            <p className="text-black/70 text-sm mt-1">Sign up to enroll in courses</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="signup-email" className="block text-sm font-medium text-black mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40" />
                <input
                  id="signup-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-black/20 rounded-lg focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/20 outline-none transition"
                  placeholder="you@example.com"
                  disabled={submitting}
                />
              </div>
            </div>

            <div>
              <label htmlFor="signup-password" className="block text-sm font-medium text-black mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40" />
                <input
                  id="signup-password"
                  type="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-black/20 rounded-lg focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/20 outline-none transition"
                  placeholder="At least 6 characters"
                  disabled={submitting}
                />
              </div>
            </div>

            <div>
              <label htmlFor="signup-confirm" className="block text-sm font-medium text-black mb-1.5">
                Confirm password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40" />
                <input
                  id="signup-confirm"
                  type="password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-black/20 rounded-lg focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/20 outline-none transition"
                  placeholder="••••••••"
                  disabled={submitting}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting || googleLoading}
              className="w-full py-3 bg-[#C9A961] hover:bg-[#B8935A] text-white font-semibold rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Creating account...
                </>
              ) : (
                'Create account'
              )}
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-black/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-black/60">or</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignUp}
              disabled={submitting || googleLoading}
              className="w-full py-3 border-2 border-black/20 rounded-lg font-medium text-black hover:bg-black/5 hover:border-[#C9A961] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {googleLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Signing up with Google...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden>
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Continue with Google
                </>
              )}
            </button>
          </form>

          <p className="text-center text-black/70 text-sm mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-[#C9A961] font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
