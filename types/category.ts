// 카테고리 관련 타입 정의

// 카테고리 타입
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  postCount?: number;
}

// 태그 타입
export interface Tag {
  id: string;
  name: string;
  slug: string;
  postCount?: number;
} 