// 포스트 상세 페이지 - 분리된 컴포넌트들로 구성
'use client';

import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/data/posts';
import Header from '@/components/organisms/Header';
import PostSidebar from '@/components/organisms/PostSidebar';
import PostContent from '@/components/organisms/PostContent';
import CommentsSection from '@/components/organisms/CommentsSection';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  // 슬러그를 통해 포스트 데이터 조회
  const post = getPostBySlug(params.slug);
  
  // 포스트가 없으면 404 페이지 표시
  if (!post) {
    notFound();
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      {/* 헤더 컴포넌트 */}
      <Header />

      {/* 메인 레이아웃 */}
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* 포스트 콘텐츠 영역 */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                
                {/* 포스트 사이드바 */}
                <PostSidebar 
                  className="hidden lg:flex" 
                />
                
              </div>
              
              {/* 메인 콘텐츠 영역 */}
              <div className="flex min-w-72 flex-col gap-3 flex-1 max-w-3xl">
                
                {/* 포스트 본문 */}
                <PostContent 
                  post={post}
                  className="mb-8"
                />
                
                {/* 댓글 섹션 */}
                <CommentsSection 
                  comments={post.comments}
                  postId={post.id}
                  className="px-4"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 푸터 영역 */}
      <footer className="flex justify-center">
        <div className="flex max-w-[960px] flex-1 flex-col">
          <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
            <div className="flex flex-wrap items-center justify-center gap-6 @xs:flex-row @xs:justify-around">
              <a className="text-[#647987] text-base font-normal leading-normal min-w-40" href="#">Home</a>
              <a className="text-[#647987] text-base font-normal leading-normal min-w-40" href="#">About</a>
              <a className="text-[#647987] text-base font-normal leading-normal min-w-40" href="#">Contact</a>
              <a className="text-[#647987] text-base font-normal leading-normal min-w-40" href="#">Privacy</a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 @xs:flex-row @xs:justify-around">
              <a href="#">
                <div className="text-[#647987]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z" />
                  </svg>
                </div>
              </a>
              <a href="#">
                <div className="text-[#647987]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
                  </svg>
                </div>
              </a>
              <a href="#">
                <div className="text-[#647987]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z" />
                  </svg>
                </div>
              </a>
            </div>
            <p className="text-[#647987] text-base font-normal leading-normal">© 2024 Emily Coder. 모든 권리 보유.</p>
          </footer>
        </div>
      </footer>
    </div>
  );
} 