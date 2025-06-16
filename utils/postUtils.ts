// 포스트 정렬 유틸리티 함수
// 포스트를 다양한 기준으로 정렬하는 기능을 제공합니다.

import { Post } from '@/types/post';

// 정렬 타입 정의
export type SortType = 'latest' | 'oldest' | 'popular' | 'comments';

/**
 * 포스트를 지정된 기준에 따라 정렬합니다.
 * @param posts - 정렬할 포스트 배열
 * @param sortType - 정렬 기준 ('latest', 'oldest', 'popular', 'comments')
 * @returns 정렬된 포스트 배열
 */
export function sortPosts(posts: Post[], sortType: SortType = 'latest'): Post[] {
  const sortedPosts = [...posts];
  
  switch (sortType) {
    case 'latest':
      return sortedPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    
    case 'oldest':
      return sortedPosts.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
    
    case 'popular':
      return sortedPosts.sort((a, b) => b.likes - a.likes);
    
    case 'comments':
      return sortedPosts.sort((a, b) => b.comments.length - a.comments.length);
    
    default:
      return sortedPosts;
  }
}

/**
 * 포스트를 카테고리별로 필터링합니다.
 * @param posts - 필터링할 포스트 배열
 * @param category - 필터링할 카테고리 (없으면 모든 포스트 반환)
 * @returns 필터링된 포스트 배열
 */
export function filterPostsByCategory(posts: Post[], category?: string): Post[] {
  if (!category) return posts;
  
  return posts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
} 