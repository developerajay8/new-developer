/**
 * Shared course catalog – used by dashboard and learn page.
 * Keep in sync with course IDs used when creating orders (e.g. from coursessection).
 */
export interface CourseInfo {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  lessons: number;
  level: string;
}

export type LessonType = 'video' | 'live' | 'attachment';

export interface Lesson {
  id: string;
  title: string;
  type: LessonType;
  duration: string;
  videoUrl?: string;
}

export interface CourseSection {
  id: string;
  title: string;
  lessons: Lesson[];
}

export const COURSES: CourseInfo[] = [
  {
    id: '1',
    title: 'Professional Fashion Designing',
    subtitle: 'Complete Masterclass',
    duration: '12 Weeks',
    lessons: 48,
    level: 'Beginner to Advanced',
  },
  {
    id: '2',
    title: 'Textile & Pattern Making',
    subtitle: 'Expert-Led Training',
    duration: '10 Weeks',
    lessons: 42,
    level: 'Intermediate',
  },
  {
    id: '3',
    title: 'Fashion Illustration Mastery',
    subtitle: 'Design Like a Pro',
    duration: '8 Weeks',
    lessons: 36,
    level: 'All Levels',
  },
  {
    id: '4',
    title: 'Garment Construction',
    subtitle: 'Professional Techniques',
    duration: '14 Weeks',
    lessons: 52,
    level: 'Advanced',
  },
];

/** Sample video for demo – replace with your own URLs per lesson */
const SAMPLE_VIDEO = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

/** Sections and lessons per course. Course 1 has full structure; others use same shape with generic titles. */
export const COURSE_SECTIONS: Record<string, CourseSection[]> = {
  '1': [
    {
      id: 's1',
      title: '01 What will you learn',
      lessons: [
        { id: '1-1', title: 'What Will You Learn In This Workshop?', type: 'video', duration: '9m 25s', videoUrl: SAMPLE_VIDEO },
        { id: '1-2', title: 'Introduction to Fashion Sketching', type: 'video', duration: '16m 47s', videoUrl: SAMPLE_VIDEO },
        { id: '1-3', title: 'Understanding Fabrics & Materials', type: 'video', duration: '17m 12s', videoUrl: SAMPLE_VIDEO },
      ],
    },
    {
      id: 's2',
      title: '02 Live Class Videos',
      lessons: [
        { id: '2-1', title: 'Live Session: Pattern Basics', type: 'live', duration: '45m' },
        { id: '2-2', title: 'Live Session: Draping Demo', type: 'live', duration: '1h 12m' },
        { id: '2-3', title: 'Live Session: Q&A', type: 'live', duration: '30m' },
        { id: '2-4', title: 'Live Session: Portfolio Review', type: 'live', duration: '50m' },
      ],
    },
    {
      id: 's3',
      title: '03 Study Material',
      lessons: [
        { id: '3-1', title: 'Fashion Design Basics PDF', type: 'attachment', duration: '–' },
        { id: '3-2', title: 'Pattern Templates', type: 'attachment', duration: '–' },
        { id: '3-3', title: 'Color Theory Guide', type: 'attachment', duration: '–' },
      ],
    },
  ],
  '2': [
    { id: 's1', title: '01 What will you learn', lessons: [
      { id: '1-1', title: 'Introduction to Textiles', type: 'video', duration: '12m', videoUrl: SAMPLE_VIDEO },
      { id: '1-2', title: 'Pattern Making Fundamentals', type: 'video', duration: '18m', videoUrl: SAMPLE_VIDEO },
    ]},
    { id: 's2', title: '02 Live Class Videos', lessons: [
      { id: '2-1', title: 'Live: Pattern Drafting', type: 'live', duration: '1h' },
    ]},
  ],
  '3': [
    { id: 's1', title: '01 What will you learn', lessons: [
      { id: '1-1', title: 'Fashion Illustration Basics', type: 'video', duration: '14m', videoUrl: SAMPLE_VIDEO },
      { id: '1-2', title: 'Figure Drawing for Fashion', type: 'video', duration: '20m', videoUrl: SAMPLE_VIDEO },
    ]},
  ],
  '4': [
    { id: 's1', title: '01 Garment Construction', lessons: [
      { id: '1-1', title: 'Sewing Techniques', type: 'video', duration: '15m', videoUrl: SAMPLE_VIDEO },
      { id: '1-2', title: 'Finishing & Quality', type: 'video', duration: '11m', videoUrl: SAMPLE_VIDEO },
    ]},
  ],
};

const byId = new Map(COURSES.map((c) => [c.id, c]));

export function getCourseById(id: string | number): CourseInfo | undefined {
  return byId.get(String(id));
}

export function getSectionsByCourseId(courseId: string | number): CourseSection[] {
  return COURSE_SECTIONS[String(courseId)] ?? [];
}

export function getLessonById(courseId: string | number, lessonId: string): Lesson | undefined {
  const sections = getSectionsByCourseId(courseId);
  for (const section of sections) {
    const lesson = section.lessons.find((l) => l.id === lessonId);
    if (lesson) return lesson;
  }
  return undefined;
}

export function getFirstLessonId(courseId: string | number): string | null {
  const sections = getSectionsByCourseId(courseId);
  const first = sections[0]?.lessons[0];
  return first ? first.id : null;
}
