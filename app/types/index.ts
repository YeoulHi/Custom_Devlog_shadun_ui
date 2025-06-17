/**
 * 포스트 타입 정의
 * 블로그 포스트의 기본 구조를 정의합니다.
 */
export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  date: string;
  author: Author;
  categories: Category[];
  tags: Tag[];
  readingTime?: string;
  featured?: boolean;
}

/**
 * 작성자 타입 정의
 * 포스트 작성자 정보를 정의합니다.
 */
export interface Author {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
  socialLinks?: SocialLink[];
}

/**
 * 소셜 링크 타입 정의
 * 작성자의 소셜 미디어 링크를 정의합니다.
 */
export interface SocialLink {
  platform: 'github' | 'twitter' | 'linkedin' | 'facebook' | 'instagram' | 'website';
  url: string;
}

/**
 * 카테고리 타입 정의
 * 포스트 카테고리를 정의합니다.
 */
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

/**
 * 태그 타입 정의
 * 포스트 태그를 정의합니다.
 */
export interface Tag {
  id: string;
  name: string;
  slug: string;
}

/**
 * 댓글 타입 정의
 * 포스트 댓글을 정의합니다.
 */
export interface Comment {
  id: string;
  content: string;
  author: Author;
  date: string;
  likes: number;
  dislikes?: number;
  replies?: Comment[];
}

/**
 * 프로젝트 타입 정의
 * 개인 프로젝트 정보를 정의합니다.
 */
export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage?: string;
  demoUrl?: string;
  repoUrl?: string;
  technologies: string[];
  startDate?: string;
  endDate?: string;
  featured?: boolean;
}

/**
 * 검색 결과 타입 정의
 * 검색 결과를 정의합니다.
 */
export interface SearchResult {
  type: 'post' | 'project' | 'category' | 'tag';
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  date?: string;
  relevance?: number;
}

/**
 * 페이지네이션 타입 정의
 * 페이지네이션 정보를 정의합니다.
 */
export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

/**
 * 테마 타입 정의
 * 사이트 테마를 정의합니다.
 */
export type Theme = 'light' | 'dark' | 'system'; 