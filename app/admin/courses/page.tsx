'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/app/contexts/AuthContext';
import { Plus, BookOpen, Loader2, Pencil, Trash2, Send, EyeOff } from 'lucide-react';

interface CourseRow {
  id: string;
  title: string;
  subtitle?: string;
  duration?: string;
  price?: number;
  createdAt?: number;
  published?: boolean;
}

export default function AdminCoursesPage() {
  const { idToken } = useAuth();
  const [courses, setCourses] = useState<CourseRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [publishingId, setPublishingId] = useState<string | null>(null);

  useEffect(() => {
    if (!idToken) return;
    fetch('/api/admin/courses', {
      headers: { Authorization: `Bearer ${idToken}` },
    })
      .then((res) => res.ok ? res.json() : [])
      .then(setCourses)
      .catch(() => setCourses([]))
      .finally(() => setLoading(false));
  }, [idToken]);

  const handleDelete = async (id: string) => {
    if (!idToken || !confirm('Delete this course?')) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/courses/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${idToken}` },
      });
      if (res.ok) setCourses((prev) => prev.filter((c) => c.id !== id));
    } finally {
      setDeletingId(null);
    }
  };

  const handleTogglePublish = async (id: string, currentPublished: boolean) => {
    if (!idToken) return;
    setPublishingId(id);
    try {
      const res = await fetch(`/api/admin/courses/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${idToken}` },
        body: JSON.stringify({ published: !currentPublished }),
      });
      if (res.ok) {
        setCourses((prev) =>
          prev.map((c) => (c.id === id ? { ...c, published: !currentPublished } : c))
        );
      }
    } finally {
      setPublishingId(null);
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h1 className="text-2xl font-serif font-bold text-[#C9A961]">Courses</h1>
        <Link
          href="/admin/courses/new"
          className="inline-flex items-center gap-2 bg-[#C9A961] hover:bg-[#B8935A] text-white font-semibold px-4 py-2.5 rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          Create course
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-[#C9A961]" />
        </div>
      ) : courses.length === 0 ? (
        <div className="bg-white rounded-xl border-2 border-[#C9A961]/30 p-12 text-center">
          <BookOpen className="w-12 h-12 text-[#C9A961]/50 mx-auto mb-4" />
          <p className="text-black/70 mb-4">No courses yet. Create your first course to get started.</p>
          <Link
            href="/admin/courses/new"
            className="inline-flex items-center gap-2 bg-[#C9A961] text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-[#B8935A]"
          >
            <Plus className="w-4 h-4" />
            Create course
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl border-2 border-[#C9A961]/30 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#C9A961]/30 bg-[#F5F1E8]/50">
                <th className="text-left py-3 px-4 font-semibold text-black">Title</th>
                <th className="text-left py-3 px-4 font-semibold text-black hidden sm:table-cell">Duration</th>
                <th className="text-left py-3 px-4 font-semibold text-black hidden md:table-cell">Price</th>
                <th className="text-left py-3 px-4 font-semibold text-black">Status</th>
                <th className="text-right py-3 px-4 font-semibold text-black">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c) => (
                <tr key={c.id} className="border-b border-black/5 hover:bg-black/[0.02]">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium text-black">{c.title}</p>
                      {c.subtitle && <p className="text-sm text-black/60">{c.subtitle}</p>}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-black/70 hidden sm:table-cell">{c.duration || '–'}</td>
                  <td className="py-3 px-4 text-black/70 hidden md:table-cell">{c.price != null ? `₹${c.price}` : '–'}</td>
                  <td className="py-3 px-4">
                    <button
                      type="button"
                      onClick={() => handleTogglePublish(c.id, !!c.published)}
                      disabled={publishingId === c.id}
                      className={`inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg border transition-colors disabled:opacity-50 ${
                        c.published
                          ? 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100'
                          : 'bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200'
                      }`}
                      title={c.published ? 'Unpublish (hide from courses page)' : 'Publish (show on courses page)'}
                    >
                      {publishingId === c.id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : c.published ? (
                        <>
                          <Send className="w-4 h-4" />
                          Published
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-4 h-4" />
                          Draft
                        </>
                      )}
                    </button>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/learn/${c.id}`}
                        className="text-[#C9A961] text-sm font-medium hover:underline"
                      >
                        View
                      </Link>
                      <Link
                        href={`/admin/courses/${c.id}/edit`}
                        className="p-1.5 rounded hover:bg-black/5 text-black/70"
                        aria-label="Edit"
                      >
                        <Pencil className="w-4 h-4" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDelete(c.id)}
                        disabled={deletingId === c.id}
                        className="p-1.5 rounded hover:bg-red-50 text-red-600 disabled:opacity-50"
                        aria-label="Delete"
                      >
                        {deletingId === c.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
