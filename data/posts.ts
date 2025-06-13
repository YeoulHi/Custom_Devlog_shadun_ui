// 더미 포스트 데이터 - 실제 개발 시 사용할 샘플 데이터
import { Post, Author, Comment } from '../types/post';

// 샘플 작성자 데이터
const sampleAuthor: Author = {
  id: '1',
  name: 'Emily Coder',
  email: 'emily@techblog.com',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL68GqjNIgXObEioOP15HFZTFG9IyzgXMtRCa7mcrf4qPTToHz5sWVI_6iv2ER1fkHx3JNlL9djVfdSelF8QBgBK26Tahc83utq7bLnSwG-GsbCgYFH2nXDEMuVNZyGfQUyONtDPWazjHsBcll128Ni1K9Ah0EFkNjJI8n01gKMM7kjy6hDaSBg1VNPAwJG67qeuFme4s233HIwxQoeN-6yqjz6SKneapotOKVUKbPK5dMV5PFFv4vvF7b4KLwCzRF45oDDWqT-Ims',
  bio: 'Experienced React Developer with a passion for creating user-friendly web applications.',
  socialLinks: {
    github: 'https://github.com/emilycoder',
    linkedin: 'https://linkedin.com/in/emilycoder',
    email: 'emily@techblog.com'
  }
};

// 샘플 댓글 데이터
const sampleComments: Comment[] = [
  {
    id: '1',
    author: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format'
    },
    content: '정말 유용한 내용이네요! React Hooks를 이제 막 배우기 시작했는데 많은 도움이 됩니다.',
    createdAt: '2024-01-16T09:30:00Z',
    likes: 12,
    replies: [
      {
        id: '2',
        author: {
          name: 'Emily Coder',
          avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL68GqjNIgXObEioOP15HFZTFG9IyzgXMtRCa7mcrf4qPTToHz5sWVI_6iv2ER1fkHx3JNlL9djVfdSelF8QBgBK26Tahc83utq7bLnSwG-GsbCgYFH2nXDEMuVNZyGfQUyONtDPWazjHsBcll128Ni1K9Ah0EFkNjJI8n01gKMM7kjy6hDaSBg1VNPAwJG67qeuFme4s233HIwxQoeN-6yqjz6SKneapotOKVUKbPK5dMV5PFFv4vvF7b4KLwCzRF45oDDWqT-Ims'
        },
        content: '감사합니다! 궁금한 점이 있으시면 언제든지 댓글로 질문해주세요.',
        createdAt: '2024-01-16T10:15:00Z',
        likes: 8
      }
    ]
  },
  {
    id: '3',
    author: {
      name: 'Sarah Lee',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b2d63993?w=100&h=100&fit=crop&crop=face&auto=format'
    },
    content: 'useEffect와 useCallback에 대한 설명이 특히 좋았습니다. 실무에서 자주 헷갈렸던 부분인데 명확하게 이해됐어요.',
    createdAt: '2024-01-17T14:22:00Z',
    likes: 7
  },
  {
    id: '4',
    author: {
      name: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format'
    },
    content: '혹시 custom hooks에 대한 내용도 다루실 예정인가요? 이런 기초적인 내용부터 차근차근 설명해주셔서 정말 감사합니다.',
    createdAt: '2024-01-18T08:45:00Z',
    likes: 15,
    replies: [
      {
        id: '5',
        author: {
          name: 'Emily Coder',
          avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL68GqjNIgXObEioOP15HFZTFG9IyzgXMtRCa7mcrf4qPTToHz5sWVI_6iv2ER1fkHx3JNlL9djVfdSelF8QBgBK26Tahc83utq7bLnSwG-GsbCgYFH2nXDEMuVNZyGfQUyONtDPWazjHsBcll128Ni1K9Ah0EFkNjJI8n01gKMM7kjy6hDaSBg1VNPAwJG67qeuFme4s233HIwxQoeN-6yqjz6SKneapotOKVUKbPK5dMV5PFFv4vvF7b4KLwCzRF45oDDWqT-Ims'
        },
        content: '네! Custom Hooks에 대한 포스트도 준비 중입니다. 다음 주에 업로드 예정이니 기대해주세요!',
        createdAt: '2024-01-18T11:20:00Z',
        likes: 5
      }
    ]
  }
];

// 샘플 포스트 데이터
export const samplePosts: Post[] = [
  {
    id: '1',
    slug: 'mastering-react-hooks-comprehensive-guide',
    title: 'Mastering React Hooks: A Comprehensive Guide',
    excerpt: 'React Hooks have revolutionized the way we write React components.',
    content: 'React Hooks have revolutionized the way we write React components, enabling us to use state and other React features without writing classes.',
    author: sampleAuthor,
    publishedAt: '2024-01-15T10:00:00Z',
    category: 'Development',
    tags: ['React', 'Hooks', 'JavaScript'],
    readingTime: 8,
    views: 1250,
    likes: 89,
    comments: sampleComments,
    isPublished: true,
    isFeatured: true
  }
];

// 포스트 조회 함수
export const getPostBySlug = (slug: string): Post | undefined => {
  return samplePosts.find(post => post.slug === slug && post.isPublished);
};

export const getAllPosts = (): Post[] => {
  return samplePosts.filter(post => post.isPublished);
}; 