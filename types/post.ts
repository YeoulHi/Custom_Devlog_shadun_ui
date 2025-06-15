// 포스트 관련 타입 정의

// 작성자 정보 타입
export interface Author {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
}

// 댓글 답변 타입
export interface Reply {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  likes: number;
}

// 댓글 타입
export interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  likes: number;
  dislikes?: number;
  replies?: Reply[];
}

// 관련 포스트 타입
export interface RelatedPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: string;
}

// 포스트 타입
export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  authorAvatar?: string;
  authorBio?: string;
  publishedAt: string;
  category: string;
  tags: string[];
  readingTime: number;
  views: number;
  likes: number;
  comments: Comment[];
  isPublished: boolean;
  isFeatured: boolean;
  relatedPosts?: RelatedPost[];
} 