// 포스트 상세 페이지 - 분리된 컴포넌트들로 구성
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPostBySlug } from '@/data/posts';
import Header from '@/components/organisms/Header';
import Sidebar from '@/components/organisms/Sidebar';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  // 포스트 데이터 불러오기
  const post = getPostBySlug(params.slug);
  const [readingProgress, setReadingProgress] = useState(0);

  // 읽기 진행률 계산 함수
  useEffect(() => {
    const calculateReadingProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const readingProgress = scrollTop / docHeight * 100;
      setReadingProgress(readingProgress);
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', calculateReadingProgress);
    
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener('scroll', calculateReadingProgress);
  }, []);

  // 포스트가 없을 경우 처리
  if (!post) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">포스트를 찾을 수 없습니다</h1>
        <Link href="/posts" className="text-blue-600 hover:underline">포스트 목록으로 돌아가기</Link>
      </main>
    );
  }

  return (
    <main className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden">
      {/* 헤더 컴포넌트 */}
      <Header />

      {/* 메인 레이아웃 */}
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          {/* 사이드바 */}
          <div className="layout-content-container flex flex-col w-80 hidden md:block">
            <Sidebar />
          </div>
          
          {/* 메인 콘텐츠 */}
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* 포스트 헤더 */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <h1 className="text-[#101518] tracking-light text-[32px] font-bold leading-tight">{post.title}</h1>
                <p className="text-[#5c748a] text-sm font-normal leading-normal">
                  By {post.author.name} | Published on {new Date(post.publishedAt).toLocaleDateString()} | 
                  Category: {post.category} | Tags: {post.tags.join(', ')}
                </p>
              </div>
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#eaedf1] text-[#101518] text-sm font-medium leading-normal"
              >
                <span className="truncate">공유하기</span>
              </button>
            </div>

            {/* 포스트 요약 */}
            <p className="text-[#101518] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
              {post.excerpt}
            </p>

            {/* 목차 */}
            <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">목차</h2>
            <div className="flex flex-col gap-3 p-4">
              <div className="flex gap-6 justify-between">
                <p className="text-[#101518] text-base font-medium leading-normal">읽기 진행률</p>
              </div>
              <div className="rounded bg-[#d4dce2]">
                <div className="h-2 rounded bg-[#dce8f3]" style={{ width: `${readingProgress}%` }}></div>
              </div>
            </div>

            {/* 포스트 본문 */}
            <div className="px-4 py-6">
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* 댓글 섹션 */}
            <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">댓글 ({post.comments.length})</h2>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <textarea
                  placeholder="댓글 작성하기..."
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border border-[#d4dce2] bg-gray-50 focus:border-[#d4dce2] min-h-36 placeholder:text-[#5c748a] p-[15px] text-base font-normal leading-normal"
                ></textarea>
              </label>
            </div>

            {/* 댓글 목록 */}
            {post.comments.map((comment, index) => (
              <div key={index} className="flex w-full flex-row items-start justify-start gap-3 p-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                  style={{ backgroundImage: `url("${comment.author.avatar}")` }}
                ></div>
                <div className="flex h-full flex-1 flex-col items-start justify-start">
                  <div className="flex w-full flex-row items-start justify-start gap-x-3">
                    <p className="text-[#101518] text-sm font-bold leading-normal tracking-[0.015em]">{comment.author.name}</p>
                    <p className="text-[#5c748a] text-sm font-normal leading-normal">{new Date(comment.createdAt).toLocaleDateString()}</p>
                  </div>
                  <p className="text-[#101518] text-sm font-normal leading-normal">
                    {comment.content}
                  </p>
                  <div className="flex w-full flex-row items-center justify-start gap-9 pt-2">
                    <div className="flex items-center gap-2">
                      <div className="text-[#5c748a]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"></path>
                        </svg>
                      </div>
                      <p className="text-[#5c748a] text-sm font-normal leading-normal">{comment.likes}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-[#5c748a]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"></path>
                        </svg>
                      </div>
                      <p className="text-[#5c748a] text-sm font-normal leading-normal">{comment.dislikes || 0}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* 페이지네이션 */}
            <div className="flex items-center justify-center p-4">
              <a href="#" className="flex size-10 items-center justify-center">
                <div className="text-[#101518]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                  </svg>
                </div>
              </a>
              <a className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#101518] rounded-full bg-[#eaedf1]" href="#">1</a>
              <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#101518] rounded-full" href="#">2</a>
              <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#101518] rounded-full" href="#">3</a>
              <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#101518] rounded-full">...</span>
              <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#101518] rounded-full" href="#">5</a>
              <a href="#" className="flex size-10 items-center justify-center">
                <div className="text-[#101518]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                  </svg>
                </div>
              </a>
            </div>

            {/* 작성자 프로필 */}
            <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">작성자 프로필</h2>
            <div className="flex p-4 @container">
              <div className="flex w-full flex-col gap-4 items-center">
                <div className="flex gap-4 flex-col items-center">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                    style={{ backgroundImage: `url("${post.author.avatar}")` }}
                  ></div>
                  <div className="flex flex-col items-center justify-center justify-center">
                    <p className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">{post.author.name}</p>
                    <p className="text-[#5c748a] text-base font-normal leading-normal text-center">
                      {post.author.bio}
                    </p>
                  </div>
                </div>
                <Link href="/about" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#eaedf1] text-[#101518] text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto">
                  <span className="truncate">모든 포스트 보기</span>
                </Link>
              </div>
            </div>

            {/* 관련 포스트 */}
            <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">관련 포스트</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {post.relatedPosts && post.relatedPosts.map((relatedPost, index) => (
                <div key={index} className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{ backgroundImage: `url("${relatedPost.thumbnail}")` }}
                  ></div>
                  <div>
                    <p className="text-[#101518] text-base font-medium leading-normal">{relatedPost.title}</p>
                    <p className="text-[#5c748a] text-sm font-normal leading-normal">{relatedPost.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <footer className="flex justify-center">
        <div className="flex max-w-[960px] flex-1 flex-col">
          <p className="text-[#5c748a] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">© 2024 Emily Coder. 모든 권리 보유.</p>
        </div>
      </footer>
    </main>
  );
} 