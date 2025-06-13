// 더미 포스트 데이터 - 실제 개발 시 사용할 샘플 데이터
import { Post, Author } from '../types/post';

// 샘플 작성자 데이터
const sampleAuthor: Author = {
  id: '1',
  name: 'Emily Coder',
  email: 'emily@techblog.com',
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL68GqjNIgXObEioOP15HFZTFG9IyzgXMtRCa7mcrf4qPTToHz5sWVI_6iv2ER1fkHx3JNlL9djVfdSelF8QBgBK26Tahc83utq7bLnSwG-GsbCgYFH2nXDEMuVNZyGfQUyONtDPWazjHsBcll128Ni1K9Ah0EFkNjJI8n01gKMM7kjy6hDaSBg1VNPAwJG67qeuFme4s233HIwxQoeN-6yqjz6SKneapotOKVUKbPK5dMV5PFFv4vvF7b4KLwCzRF45oDDWqT-Ims',
  bio: 'Experienced React Developer with a passion for creating user-friendly web applications.',
  title: 'Full-Stack Developer',
  socialLinks: {
    github: 'https://github.com/emilycoder',
    linkedin: 'https://linkedin.com/in/emilycoder'
  }
};

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
    comments: [
      {
        id: '1',
        author: {
          name: 'Ethan Coder',
          avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQecSmziU8-IAkaNYu0pl0MFP-Xz6LlpKL4Jc89znjLz6G7pHJNwwQLVcEcDWSeFlbBhB7XZ-sictuKiBO_V7erqRCcGCUN5_JVljV35SJeKVzQXpavs0nOmz2sCKWib62sjCsUDHAOZY6M54fC49pJuZJV9aFy2ZD07842EYSDm_j_nREAehv3glFteKR_8fC1EZhEewEHdGb_v7Hn-H_Qa9psrSLGZh3pCHFM0mCBO3WLI7xxOCMwnYOjfbuVm3jh6lcPDUgk-Ao'
        },
        content: 'Great article! The examples were very clear.',
        createdAt: '2024-01-17T14:30:00Z',
        likes: 15,
        dislikes: 2
      }
    ],
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