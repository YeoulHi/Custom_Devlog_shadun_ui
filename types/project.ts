// 프로젝트 관련 타입 정의

// 프로젝트 카테고리 타입
export type ProjectCategory = 'web' | 'mobile' | 'data' | 'other';

// 프로젝트 타입
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: ProjectCategory;
  tags: string[];
  isFeatured?: boolean;
  projectUrl?: string;
  githubUrl?: string;
}

// 프로젝트 목록 타입
export interface ProjectsData {
  projects: Project[];
} 