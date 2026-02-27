'use client';

import Link from 'next/link';
import { BookOpen, ChevronRight } from 'lucide-react';

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-serif font-bold text-[#C9A961] mb-2">Admin Dashboard</h1>
      <p className="text-black/70 mb-8">Manage your academy content and courses.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <Link
          href="/admin/courses"
          className="flex items-center gap-4 p-5 bg-white rounded-xl border-2 border-[#C9A961]/30 hover:border-[#C9A961] transition-colors"
        >
          <div className="w-12 h-12 rounded-lg bg-[#C9A961]/15 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-[#C9A961]" />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-black">Courses</h2>
            <p className="text-sm text-black/60">Create and edit courses, sections, and lessons.</p>
          </div>
          <ChevronRight className="w-5 h-5 text-black/40" />
        </Link>
      </div>
    </div>
  );
}
