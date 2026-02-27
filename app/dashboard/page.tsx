'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/app/contexts/AuthContext';
import {
  collection,
  query,
  where,
  getDocs,
  Timestamp,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { getCourseById } from '@/lib/courses';
import {
  Loader2,
  BookOpen,
  ChevronRight,
  Calendar,
  Award,
  Sparkles,
} from 'lucide-react';

interface EnrollmentDoc {
  id: string;
  userId: string;
  courseId: string;
  orderId: string;
  enrolledAt: Date;
}

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [enrollments, setEnrollments] = useState<EnrollmentDoc[]>([]);
  const [enrollmentsLoading, setEnrollmentsLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    if (!db) {
      setEnrollmentsLoading(false);
      return;
    }
    const q = query(
      collection(db, 'enrollments'),
      where('userId', '==', user.uid)
    );
    getDocs(q)
      .then((snap) => {
        const list: EnrollmentDoc[] = [];
        snap.forEach((doc) => {
          const d = doc.data();
          const enrolledAt = d.enrolledAt instanceof Timestamp
            ? d.enrolledAt.toDate()
            : d.enrolledAt?.toDate?.() ?? new Date();
          list.push({
            id: doc.id,
            userId: d.userId ?? '',
            courseId: String(d.courseId ?? ''),
            orderId: d.orderId ?? '',
            enrolledAt,
          });
        });
        list.sort((a, b) => b.enrolledAt.getTime() - a.enrolledAt.getTime());
        setEnrollments(list);
      })
      .catch(() => setEnrollments([]))
      .finally(() => setEnrollmentsLoading(false));
  }, [user]);

  if (authLoading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#F5F1E8]">
        <Loader2 className="w-8 h-8 animate-spin text-[#C9A961]" />
      </div>
    );
  }

  if (!user) {
    router.replace('/login');
    return null;
  }

  const displayName =
    user.displayName ||
    user.email?.split('@')[0] ||
    'User';

  return (
    <div className="min-h-[70vh] bg-[#F5F1E8]">
      {/* Welcome strip */}
      <div className="bg-gradient-to-r from-[#C9A961] to-[#B8935A] text-white py-8 md:py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-wide">
                Welcome back, {displayName}
              </h1>
              <p className="text-white/90 text-sm mt-1">{user.email}</p>
            </div>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-white text-[#C9A961] font-semibold px-5 py-2.5 rounded-lg hover:bg-white/95 transition-colors shrink-0"
            >
              Browse courses
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          <div className="bg-white rounded-xl border-2 border-[#C9A961]/30 p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#C9A961]/15 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-[#C9A961]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-black">
                {enrollmentsLoading ? '–' : enrollments.length}
              </p>
              <p className="text-black/60 text-sm">Courses enrolled</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border-2 border-[#C9A961]/30 p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#C9A961]/15 flex items-center justify-center">
              <Award className="w-6 h-6 text-[#C9A961]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-black">Certificate</p>
              <p className="text-black/60 text-sm">On course completion</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border-2 border-[#C9A961]/30 p-5 flex items-center gap-4 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-lg bg-[#C9A961]/15 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#C9A961]" />
            </div>
            <div>
              <p className="text-lg font-bold text-black">Lifetime access</p>
              <p className="text-black/60 text-sm">Learn at your pace</p>
            </div>
          </div>
        </div>

        {/* Enrolled courses */}
        <section>
          <h2 className="text-xl font-serif font-bold text-[#C9A961] mb-4">
            My courses
          </h2>
          <div className="h-[2px] w-16 bg-[#C9A961] mb-6" />

          {enrollmentsLoading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-[#C9A961]" />
            </div>
          ) : enrollments.length === 0 ? (
            <div className="bg-white rounded-xl border-2 border-[#C9A961] p-10 md:p-14 text-center">
              <div className="w-16 h-16 rounded-full bg-[#C9A961]/15 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-[#C9A961]" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                No courses yet
              </h3>
              <p className="text-black/70 text-sm max-w-sm mx-auto mb-6">
                Enroll in a course to start learning. Your enrolled courses will appear here.
              </p>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 bg-[#C9A961] hover:bg-[#B8935A] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Browse courses
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {enrollments.map((enrollment) => {
                const course = getCourseById(enrollment.courseId);
                const title = course?.title ?? `Course ${enrollment.courseId}`;
                const subtitle = course?.subtitle ?? '';
                const duration = course?.duration ?? '';
                const enrolledDate = enrollment.enrolledAt.toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                });

                return (
                  <div
                    key={enrollment.id}
                    className="bg-white rounded-xl border-2 border-[#C9A961]/30 p-5 hover:border-[#C9A961]/60 transition-colors"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex-1">
                        <h3 className="font-semibold text-black">{title}</h3>
                        {subtitle && (
                          <p className="text-black/70 text-sm mt-0.5">{subtitle}</p>
                        )}
                        <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-black/60">
                          {duration && (
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {duration}
                            </span>
                          )}
                          <span>Enrolled {enrolledDate}</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-black/10">
                        <Link
                          href={`/learn/${enrollment.courseId}`}
                          className="inline-flex items-center gap-1 text-[#C9A961] font-medium text-sm hover:underline"
                        >
                          Continue learning
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-[#C9A961]/20">
          <p className="text-black/60 text-sm mb-3">Quick links</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="text-[#C9A961] font-medium text-sm hover:underline"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="text-[#C9A961] font-medium text-sm hover:underline"
            >
              All courses
            </Link>
            <Link
              href="/contact-us"
              className="text-[#C9A961] font-medium text-sm hover:underline"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
