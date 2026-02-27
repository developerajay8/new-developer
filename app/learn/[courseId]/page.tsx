'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import {
  getCourseById,
  getSectionsByCourseId,
  getLessonById,
  getFirstLessonId,
  type Lesson,
  type CourseSection,
} from '@/lib/courses';
import {
  ChevronLeft,
  ChevronDown,
  ChevronRight,
  Video,
  FileText,
  Radio,
  Bookmark,
  Search,
  Loader2,
} from 'lucide-react';

type TabId = 'about' | 'recent' | 'discussions' | 'bookmarks';

interface FetchedCourse {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  duration: string;
  level: string;
  lessons?: number;
  sections: CourseSection[];
}

function LessonIcon({ type }: { type: Lesson['type'] }) {
  if (type === 'video') return <Video className="w-4 h-4 text-[#C9A961] shrink-0" />;
  if (type === 'live') return <Radio className="w-4 h-4 text-[#C9A961] shrink-0" />;
  return <FileText className="w-4 h-4 text-[#C9A961] shrink-0" />;
}

function findLesson(sections: CourseSection[], lessonId: string): Lesson | undefined {
  for (const s of sections) {
    const lesson = s.lessons.find((l) => l.id === lessonId);
    if (lesson) return lesson;
  }
  return undefined;
}

function getYouTubeEmbedUrl(url: string): string | null {
  if (!url || typeof url !== 'string') return null;
  const trimmed = url.trim();
  const watchMatch = trimmed.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  const embedMatch = trimmed.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
  const id = watchMatch?.[1] ?? embedMatch?.[1];
  return id ? `https://www.youtube.com/embed/${id}` : null;
}

function isYouTubeUrl(url: string): boolean {
  return getYouTubeEmbedUrl(url) !== null;
}

function getDriveEmbedUrl(url: string): string | null {
  if (!url || typeof url !== 'string') return null;
  const trimmed = url.trim();
  const fileMatch = trimmed.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  const openMatch = trimmed.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
  const id = fileMatch?.[1] ?? openMatch?.[1];
  return id ? `https://drive.google.com/file/d/${id}/preview` : null;
}

function isDriveUrl(url: string): boolean {
  return getDriveEmbedUrl(url) !== null;
}

export default function LearnPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const courseId = String(params?.courseId ?? '1');
  const lessonParam = searchParams?.get('lesson');

  const [fetched, setFetched] = useState<FetchedCourse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/courses/${encodeURIComponent(courseId)}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setFetched(data))
      .catch(() => setFetched(null))
      .finally(() => setLoading(false));
  }, [courseId]);

  const staticCourse = getCourseById(courseId);
  const staticSections = getSectionsByCourseId(courseId);

  const course = fetched
    ? { id: fetched.id, title: fetched.title, subtitle: fetched.subtitle, duration: fetched.duration, lessons: fetched.lessons ?? fetched.sections.reduce((acc, s) => acc + s.lessons.length, 0), level: fetched.level }
    : staticCourse ?? null;
  const sections = fetched?.sections ?? staticSections;
  const firstLessonId = sections[0]?.lessons[0]?.id ?? getFirstLessonId(courseId);
  const currentLessonId = lessonParam && findLesson(sections, lessonParam) ? lessonParam : firstLessonId;
  const currentLesson = currentLessonId ? findLesson(sections, currentLessonId) : null;

  const [expandedSections, setExpandedSections] = useState<Set<string>>(() =>
    new Set(sections.length ? [sections[0].id] : [])
  );
  const [activeTab, setActiveTab] = useState<TabId>('about');

  useEffect(() => {
    if (sections.length && expandedSections.size === 0) {
      setExpandedSections(new Set([sections[0].id]));
    }
  }, [sections]);

  const toggleSection = useCallback((id: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const setLesson = useCallback(
    (lessonId: string) => {
      router.replace(`/learn/${courseId}?lesson=${encodeURIComponent(lessonId)}`);
    },
    [router, courseId]
  );

  if (loading) {
    return (
      <div className="min-h-[60vh] bg-[#F5F1E8] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#C9A961]" />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-[60vh] bg-[#F5F1E8] flex items-center justify-center">
        <div className="text-center">
          <p className="text-black/70">Course not found.</p>
          <Link href="/courses" className="text-[#C9A961] font-medium mt-2 inline-block hover:underline">
            Back to courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Top bar: back + course title + actions */}
      <div className="sticky top-0 z-40 bg-white border-b-2 border-[#C9A961]/30 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link
            href="/courses"
            className="flex items-center gap-1 text-black/80 hover:text-[#C9A961] transition-colors text-sm font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{course.title}</span>
          </Link>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex items-center gap-1.5 text-black/70 hover:text-[#C9A961] text-sm px-3 py-1.5 rounded border border-[#C9A961]/40 hover:border-[#C9A961] transition-colors"
            >
              <Bookmark className="w-4 h-4" />
              Add to favourites
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        {/* Main content */}
        <main className="flex-1 min-w-0">
          {/* Lesson title */}
          <h1 className="text-xl md:text-2xl font-serif font-bold text-black mb-4">
            {currentLesson?.title ?? 'Select a lesson'}
          </h1>

          {/* Video / content area */}
          <div className="bg-black rounded-xl overflow-hidden aspect-video mb-6">
            {currentLesson?.type === 'video' && currentLesson.videoUrl ? (
              isYouTubeUrl(currentLesson.videoUrl) ? (
                <iframe
                  key={currentLesson.id}
                  src={getYouTubeEmbedUrl(currentLesson.videoUrl) ?? ''}
                  title={currentLesson.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : isDriveUrl(currentLesson.videoUrl) ? (
                <iframe
                  key={currentLesson.id}
                  src={getDriveEmbedUrl(currentLesson.videoUrl) ?? ''}
                  title={currentLesson.title}
                  className="w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                />
              ) : (
                <video
                  key={currentLesson.id}
                  className="w-full h-full object-contain"
                  controls
                  src={currentLesson.videoUrl}
                  poster=""
                >
                  Your browser does not support the video tag.
                </video>
              )
            ) : currentLesson ? (
              <div className="w-full h-full flex items-center justify-center text-white/80 bg-black/90">
                <div className="text-center p-6">
                  <LessonIcon type={currentLesson.type} />
                  <p className="mt-2">
                    {currentLesson.type === 'live'
                      ? 'Live class – join at scheduled time'
                      : 'Study material – download or view in app'}
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/70">
                <p>Select a lesson from the syllabus</p>
              </div>
            )}
          </div>

          {/* Tabs */}
          <div className="border-b border-[#C9A961]/30 mb-4">
            <div className="flex gap-6 overflow-x-auto">
              {(
                [
                  ['about', 'ABOUT'],
                  ['recent', 'RECENTLY ADDED'],
                  ['discussions', 'DISCUSSIONS'],
                  ['bookmarks', 'BOOKMARKS'],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveTab(id)}
                  className={`py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === id
                      ? 'border-[#C9A961] text-[#C9A961]'
                      : 'border-transparent text-black/70 hover:text-black'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          {activeTab === 'about' && (
            <div className="bg-white rounded-lg border border-[#C9A961]/30 p-5">
              <p className="text-black/80 text-sm leading-relaxed">
                {fetched?.description || `${course.subtitle}. ${course.duration} • ${course.lessons} lessons • ${course.level}.`}
                {' '}Complete this course to earn your certificate and build a strong foundation in fashion design.
              </p>
            </div>
          )}
          {activeTab === 'recent' && (
            <div className="bg-white rounded-lg border border-[#C9A961]/30 p-5">
              <p className="text-black/60 text-sm">Recently added lessons will appear here.</p>
            </div>
          )}
          {activeTab === 'discussions' && (
            <div className="bg-white rounded-lg border border-[#C9A961]/30 p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-black">Lesson Discussion</h3>
                <span className="text-sm text-black/60">0 discussions</span>
              </div>
              <textarea
                placeholder="Start a discussion..."
                className="w-full min-h-[80px] px-3 py-2 border-2 border-black/15 rounded-lg focus:border-[#C9A961] outline-none text-sm"
              />
              <div className="flex gap-2 mt-3">
                <button
                  type="button"
                  className="px-4 py-2 bg-[#C9A961] text-white text-sm font-medium rounded-lg hover:bg-[#B8935A] transition-colors"
                >
                  Post discussion
                </button>
                <button
                  type="button"
                  className="px-4 py-2 border-2 border-[#C9A961]/50 text-black/80 text-sm font-medium rounded-lg hover:border-[#C9A961] transition-colors"
                >
                  Attach file
                </button>
              </div>
              <p className="text-black/50 text-xs mt-4">No discussions yet. Be the first to ask a question.</p>
            </div>
          )}
          {activeTab === 'bookmarks' && (
            <div className="bg-white rounded-lg border border-[#C9A961]/30 p-5">
              <p className="text-black/60 text-sm">Your bookmarks will appear here.</p>
            </div>
          )}
        </main>

        {/* Syllabus sidebar */}
        <aside className="w-full lg:w-[340px] shrink-0">
          <div className="sticky top-24 bg-white rounded-xl border-2 border-[#C9A961] shadow-lg overflow-hidden">
            <div className="p-4 border-b border-[#C9A961]/30 flex items-center justify-between">
              <h2 className="font-serif font-bold text-[#C9A961]">Syllabus</h2>
              <button type="button" className="p-1.5 rounded hover:bg-black/5" aria-label="Search">
                <Search className="w-4 h-4 text-black/60" />
              </button>
            </div>
            <div className="p-4 border-b border-[#C9A961]/20">
              <p className="text-xs text-black/60 mb-1">Course progress</p>
              <div className="h-2 bg-black/10 rounded-full overflow-hidden">
                <div className="h-full w-0 bg-[#C9A961] rounded-full" style={{ width: '0%' }} />
              </div>
              <p className="text-xs text-black/50 mt-1">0% complete</p>
            </div>
            <div className="max-h-[60vh] overflow-y-auto">
              {sections.map((section) => (
                <div key={section.id} className="border-b border-black/5 last:border-0">
                  <button
                    type="button"
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-[#F5F1E8]/50 transition-colors"
                  >
                    <span className="text-sm font-medium text-black">
                      {section.title} ({section.lessons.length} {section.lessons.length === 1 ? 'Lesson' : 'Lessons'})
                    </span>
                    {expandedSections.has(section.id) ? (
                      <ChevronDown className="w-4 h-4 text-black/50" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-black/50" />
                    )}
                  </button>
                  {expandedSections.has(section.id) && (
                    <div className="pb-2">
                      {section.lessons.map((lesson) => {
                        const isActive = currentLessonId === lesson.id;
                        return (
                          <button
                            key={lesson.id}
                            type="button"
                            onClick={() => setLesson(lesson.id)}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                              isActive ? 'bg-[#C9A961]/15 text-[#C9A961]' : 'hover:bg-black/5 text-black/80'
                            }`}
                          >
                            <LessonIcon type={lesson.type} />
                            <div className="flex-1 min-w-0">
                              <p className={`text-sm truncate ${isActive ? 'font-medium' : ''}`}>
                                {lesson.title}
                              </p>
                              <p className="text-xs text-black/50">
                                {lesson.type === 'video' && 'Video'}
                                {lesson.type === 'live' && 'Live'}
                                {lesson.type === 'attachment' && 'Attachment'}
                                {' – '}{lesson.duration}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
