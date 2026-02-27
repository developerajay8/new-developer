'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/app/contexts/AuthContext';
import { ChevronLeft, Plus, Trash2, Loader2 } from 'lucide-react';

interface LessonForm {
  id: string;
  title: string;
  type: 'video' | 'live' | 'attachment';
  duration: string;
  videoUrl: string;
}

interface SectionForm {
  id: string;
  title: string;
  lessons: LessonForm[];
}

function newId() {
  return Math.random().toString(36).slice(2, 10);
}

function formatSecondsToDuration(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '';
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const parts = [];
  if (h > 0) parts.push(`${h}h`);
  if (m > 0) parts.push(`${m}m`);
  parts.push(`${s}s`);
  return parts.join(' ');
}

function isYouTubeUrl(url: string): boolean {
  return /youtube\.com|youtu\.be/.test(url.trim());
}

function isDirectVideoUrl(url: string): boolean {
  return /\.(mp4|webm|ogg|mov|m4v)(\?|$)/i.test(url.trim()) || /video\/mp4|video\/webm/i.test(url.trim());
}

export default function NewCoursePage() {
  const router = useRouter();
  const { idToken } = useAuth();
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [level, setLevel] = useState('');
  const [sections, setSections] = useState<SectionForm[]>([]);
  const [published, setPublished] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [durationLoading, setDurationLoading] = useState<string | null>(null);

  const addSection = () => {
    setSections((prev) => [
      ...prev,
      { id: newId(), title: '', lessons: [{ id: newId(), title: '', type: 'video', duration: '', videoUrl: '' }] },
    ]);
  };

  const updateSection = (sectionId: string, field: 'title', value: string) => {
    setSections((prev) =>
      prev.map((s) => (s.id === sectionId ? { ...s, [field]: value } : s))
    );
  };

  const removeSection = (sectionId: string) => {
    setSections((prev) => prev.filter((s) => s.id !== sectionId));
  };

  const addLesson = (sectionId: string) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === sectionId
          ? { ...s, lessons: [...s.lessons, { id: newId(), title: '', type: 'video' as const, duration: '', videoUrl: '' }] }
          : s
      )
    );
  };

  const updateLesson = (sectionId: string, lessonId: string, field: keyof LessonForm, value: string) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === sectionId
          ? {
              ...s,
              lessons: s.lessons.map((l) =>
                l.id === lessonId ? { ...l, [field]: value } : l
              ),
            }
          : s
      )
    );
  };

  const removeLesson = (sectionId: string, lessonId: string) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === sectionId ? { ...s, lessons: s.lessons.filter((l) => l.id !== lessonId) } : s
      )
    );
  };

  const handleGetDuration = async (sectionId: string, lessonId: string) => {
    const section = sections.find((s) => s.id === sectionId);
    const lesson = section?.lessons.find((l) => l.id === lessonId);
    const url = lesson?.videoUrl?.trim();
    if (!url || lesson?.type !== 'video') return;

    const key = `${sectionId}-${lessonId}`;
    setDurationLoading(key);

    const setDuration = (seconds: number) => {
      updateLesson(sectionId, lessonId, 'duration', formatSecondsToDuration(seconds));
    };

    try {
      if (isDirectVideoUrl(url)) {
        await new Promise<void>((resolve, reject) => {
          const video = document.createElement('video');
          video.preload = 'metadata';
          video.onloadedmetadata = () => {
            if (Number.isFinite(video.duration)) setDuration(video.duration);
            video.src = '';
            resolve();
          };
          video.onerror = () => reject(new Error('Could not load video'));
          video.src = url;
        });
      } else if (isYouTubeUrl(url)) {
        const res = await fetch(`/api/admin/duration?url=${encodeURIComponent(url)}`);
        const data = await res.json();
        if (data?.seconds != null) setDuration(data.seconds);
        else throw new Error(data?.error || 'Could not get duration');
      } else {
        const res = await fetch(`/api/admin/duration?url=${encodeURIComponent(url)}`);
        if (res.ok) {
          const data = await res.json();
          if (data?.seconds != null) setDuration(data.seconds);
        }
      }
    } catch {
      // leave duration unchanged or show toast
    } finally {
      setDurationLoading(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!title.trim()) {
      setError('Title is required.');
      return;
    }
    if (!idToken) {
      setError('You must be signed in.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/admin/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({
          title: title.trim(),
          subtitle: subtitle.trim(),
          description: description.trim(),
          price: price ? parseInt(price, 10) : 0,
          duration: duration.trim(),
          level: level.trim(),
          published,
          sections: sections.map((s) => ({
            id: s.id,
            title: s.title.trim(),
            lessons: s.lessons.map((l) => ({
              id: l.id,
              title: l.title.trim(),
              type: l.type,
              duration: l.duration.trim(),
              videoUrl: l.videoUrl.trim() || undefined,
            })),
          })),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to create course');
      }
      const data = await res.json();
      router.replace(`/admin/courses?created=${data.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create course');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Link
        href="/admin/courses"
        className="inline-flex items-center gap-1 text-black/70 hover:text-[#C9A961] text-sm font-medium mb-6"
      >
        <ChevronLeft className="w-4 h-4" />
        Back to courses
      </Link>
      <h1 className="text-2xl font-serif font-bold text-[#C9A961] mb-6">Create course</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        <div className="bg-white rounded-xl border-2 border-[#C9A961]/30 p-6 space-y-4">
          <h2 className="font-semibold text-black border-b border-[#C9A961]/20 pb-2">Basic info</h2>
          <div>
            <label className="block text-sm font-medium text-black mb-1">Title *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-[#C9A961] outline-none text-gray-900 placeholder:text-gray-500 bg-white"
              placeholder="e.g. Professional Fashion Designing"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">Subtitle</label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-[#C9A961] outline-none text-gray-900 placeholder:text-gray-500 bg-white"
              placeholder="e.g. Complete Masterclass"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-[#C9A961] outline-none min-h-[80px] text-gray-900 placeholder:text-gray-500 bg-white"
              placeholder="Course description..."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-black mb-1">Price (₹)</label>
              <input
                type="number"
                min="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-[#C9A961] outline-none text-gray-900 placeholder:text-gray-500 bg-white"
                placeholder="4999"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">Duration</label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-[#C9A961] outline-none text-gray-900 placeholder:text-gray-500 bg-white"
                placeholder="e.g. 12 Weeks"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">Level</label>
              <input
                type="text"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-[#C9A961] outline-none text-gray-900 placeholder:text-gray-500 bg-white"
                placeholder="e.g. Beginner to Advanced"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="published"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-[#C9A961] focus:ring-[#C9A961]"
              />
              <label htmlFor="published" className="text-sm font-medium text-black">
                Publish when created (show on courses page)
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border-2 border-[#C9A961]/30 p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-[#C9A961]/20 pb-2">
            <h2 className="font-semibold text-black">Sections & lessons</h2>
            <button
              type="button"
              onClick={addSection}
              className="flex items-center gap-1 text-[#C9A961] font-medium text-sm hover:underline"
            >
              <Plus className="w-4 h-4" />
              Add section
            </button>
          </div>
          {sections.length === 0 && (
            <p className="text-black/60 text-sm">Add at least one section with lessons. Students will see these in the syllabus.</p>
          )}
          {sections.map((section) => (
            <div key={section.id} className="border border-black/10 rounded-lg p-4 space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={section.title}
                  onChange={(e) => updateSection(section.id, 'title', e.target.value)}
                  className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-[#C9A961] outline-none text-sm text-gray-900 placeholder:text-gray-500 bg-white"
                  placeholder="Section title (e.g. 01 What will you learn)"
                />
                <button
                  type="button"
                  onClick={() => removeSection(section.id)}
                  className="p-2 rounded hover:bg-red-50 text-red-600"
                  aria-label="Remove section"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="pl-2 space-y-2">
                {section.lessons.map((lesson) => {
                  const durationKey = `${section.id}-${lesson.id}`;
                  const isLoadingDuration = durationLoading === durationKey;
                  return (
                    <div key={lesson.id} className="flex flex-wrap items-center gap-2 text-sm">
                      <input
                        type="text"
                        value={lesson.title}
                        onChange={(e) => updateLesson(section.id, lesson.id, 'title', e.target.value)}
                        className="flex-1 min-w-[180px] px-2 py-1.5 border-2 border-gray-300 rounded focus:border-[#C9A961] outline-none text-gray-900 placeholder:text-gray-500 bg-white"
                        placeholder="Lesson title"
                      />
                      <select
                        value={lesson.type}
                        onChange={(e) => updateLesson(section.id, lesson.id, 'type', e.target.value)}
                        className="px-2 py-1.5 border-2 border-gray-300 rounded focus:border-[#C9A961] outline-none text-gray-900 bg-white"
                      >
                        <option value="video">Video</option>
                        <option value="live">Live</option>
                        <option value="attachment">Attachment</option>
                      </select>
                      {lesson.type === 'video' && (
                        <>
                          <input
                            type="url"
                            value={lesson.videoUrl}
                            onChange={(e) => updateLesson(section.id, lesson.id, 'videoUrl', e.target.value)}
                            className="flex-1 min-w-[200px] px-2 py-1.5 border-2 border-gray-300 rounded focus:border-[#C9A961] outline-none text-gray-900 placeholder:text-gray-500 bg-white"
                            placeholder="Video URL (YouTube, Drive, or direct)"
                          />
                          <button
                            type="button"
                            onClick={() => handleGetDuration(section.id, lesson.id)}
                            disabled={!lesson.videoUrl.trim() || isLoadingDuration}
                            className="px-2 py-1.5 rounded border-2 border-[#C9A961]/50 text-[#C9A961] text-xs font-medium hover:bg-[#C9A961]/10 disabled:opacity-50 flex items-center gap-1"
                          >
                            {isLoadingDuration ? <Loader2 className="w-3 h-3 animate-spin" /> : null}
                            Get duration
                          </button>
                        </>
                      )}
                      <input
                        type="text"
                        value={lesson.duration}
                        onChange={(e) => updateLesson(section.id, lesson.id, 'duration', e.target.value)}
                        className="w-24 px-2 py-1.5 border-2 border-gray-300 rounded focus:border-[#C9A961] outline-none text-gray-900 placeholder:text-gray-500 bg-white"
                        placeholder="e.g. 9m 25s"
                      />
                      <button
                        type="button"
                        onClick={() => removeLesson(section.id, lesson.id)}
                        className="p-1.5 rounded hover:bg-red-50 text-red-600"
                        aria-label="Remove lesson"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
                <button
                  type="button"
                  onClick={() => addLesson(section.id)}
                  className="flex items-center gap-1 text-[#C9A961] text-xs font-medium hover:underline"
                >
                  <Plus className="w-3 h-3" />
                  Add lesson
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={submitting}
            className="flex items-center gap-2 bg-[#C9A961] hover:bg-[#B8935A] text-white font-semibold px-6 py-2.5 rounded-lg disabled:opacity-60"
          >
            {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
            Create course
          </button>
          <Link
            href="/admin/courses"
            className="px-6 py-2.5 border-2 border-[#C9A961]/50 rounded-lg font-medium text-black/80 hover:border-[#C9A961]"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
