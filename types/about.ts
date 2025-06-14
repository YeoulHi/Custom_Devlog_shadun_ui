// About 페이지 관련 타입 정의

// 개인 정보 타입
export interface Profile {
  name: string;
  title: string;
  location: string;
  avatarUrl: string;
  bio: string;
  email: string;
  socialLinks: {
    github: string;
    twitter: string;
    linkedin: string;
  };
}

// 기술 스택 항목 타입
export interface Skill {
  id: string;
  name: string;
  level: number; // 1-5 등급
  category: 'frontend' | 'backend' | 'devops' | 'database' | 'other';
}

// 활동 내역 타입
export interface Activity {
  id: string;
  title: string;
  date: string;
  icon: string;
  description: string;
}

// 타임라인 이벤트 타입
export interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  type: 'education' | 'work' | 'project' | 'achievement';
}

// 통계 정보 타입
export interface Stats {
  posts: number;
  projects: number;
  contributions: number;
}

// About 페이지 데이터 타입
export interface AboutData {
  profile: Profile;
  skills: Skill[];
  activities: Activity[];
  timeline: TimelineEvent[];
  stats: Stats;
} 