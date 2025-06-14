// About 페이지 더미 데이터
import { AboutData, Activity, Profile, Skill, Stats, TimelineEvent } from '../types/about';

// 프로필 정보
export const profile: Profile = {
  name: 'Liam Harper',
  title: 'Software Engineer',
  location: 'San Francisco, CA',
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOvxRrFaN4FvGBzlUVjoLCE4L4kafgPiLBeTNpPUGFnOoQ79iHj8R6l-oTDsWGyygEweFID_K-ZpM7cTXLF2DIAF_FySKL0d7XdMcA-jI-uKnOGQUNOBUjF-7QoMeUJIKGj49S9YPvkR4zJsD9GNG_0WltJQJM-dlmLNhbkWjeV3i3l8lf4fAOAfpwsHl-NnTTQNVK1pRFEmEvOLSMs9Efp3o2yhZLhuh9qHfM1XZ22aU47qKfKgCqPGCzWZGq_QkWUXWrnvoziJ9o',
  bio: 'I am a passionate software engineer with a focus on creating innovative solutions and contributing to the open-source community.',
  email: 'liam.harper@example.com',
  socialLinks: {
    github: 'https://github.com/liamharper',
    twitter: 'https://twitter.com/liamharper',
    linkedin: 'https://linkedin.com/in/liamharper'
  }
};

// 기술 스택
export const skills: Skill[] = [
  { id: '1', name: 'JavaScript', level: 5, category: 'frontend' },
  { id: '2', name: 'TypeScript', level: 4, category: 'frontend' },
  { id: '3', name: 'React', level: 5, category: 'frontend' },
  { id: '4', name: 'Next.js', level: 4, category: 'frontend' },
  { id: '5', name: 'CSS/SCSS', level: 4, category: 'frontend' },
  { id: '6', name: 'Node.js', level: 4, category: 'backend' },
  { id: '7', name: 'Express', level: 4, category: 'backend' },
  { id: '8', name: 'Python', level: 3, category: 'backend' },
  { id: '9', name: 'PostgreSQL', level: 4, category: 'database' },
  { id: '10', name: 'MongoDB', level: 3, category: 'database' },
  { id: '11', name: 'Docker', level: 3, category: 'devops' },
  { id: '12', name: 'AWS', level: 3, category: 'devops' },
  { id: '13', name: 'Git', level: 5, category: 'devops' },
  { id: '14', name: 'CI/CD', level: 3, category: 'devops' }
];

// 최근 활동
export const activities: Activity[] = [
  {
    id: '1',
    title: 'Published a new blog post on React Hooks',
    date: '2 days ago',
    icon: 'FileText',
    description: 'Shared my insights on using React Hooks effectively in modern web applications.'
  },
  {
    id: '2',
    title: 'Contributed to an open-source project on GitHub',
    date: '1 week ago',
    icon: 'GithubLogo',
    description: 'Fixed a critical bug in a popular open-source library used by thousands of developers.'
  },
  {
    id: '3',
    title: 'Attended a tech conference on AI and Machine Learning',
    date: '1 month ago',
    icon: 'Calendar',
    description: 'Learned about the latest advancements in AI and how to integrate them into web applications.'
  }
];

// 타임라인
export const timeline: TimelineEvent[] = [
  {
    id: '1',
    title: 'Bachelor\'s Degree in Computer Science',
    date: '2015 - 2019',
    description: 'Stanford University',
    type: 'education'
  },
  {
    id: '2',
    title: 'Software Engineering Intern',
    date: 'Summer 2018',
    description: 'Google - Worked on the Chrome DevTools team',
    type: 'work'
  },
  {
    id: '3',
    title: 'Junior Software Engineer',
    date: '2019 - 2021',
    description: 'Facebook - Front-end development for the News Feed team',
    type: 'work'
  },
  {
    id: '4',
    title: 'Senior Software Engineer',
    date: '2021 - Present',
    description: 'Startup XYZ - Leading the front-end development team',
    type: 'work'
  },
  {
    id: '5',
    title: 'Open Source Contribution Award',
    date: '2022',
    description: 'Recognized for significant contributions to the React ecosystem',
    type: 'achievement'
  }
];

// 통계 정보
export const stats: Stats = {
  posts: 15,
  projects: 8,
  contributions: 200
};

// About 페이지 전체 데이터
export const aboutData: AboutData = {
  profile,
  skills,
  activities,
  timeline,
  stats
};

// 데이터 조회 함수
export const getAboutData = (): AboutData => {
  return aboutData;
}; 