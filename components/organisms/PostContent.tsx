'use client';

import { Post } from '@/types/post';

interface PostContentProps {
  post: Post;
  className?: string;
}

export default function PostContent({ post, className = '' }: PostContentProps) {
  return (
    <div className={`layout-content-container flex flex-col max-w-[960px] flex-1 ${className}`}>
      {/* 포스트 헤더 - 반응형 디자인 적용 */}
      <div className="@container">
        <div className="flex flex-col gap-4 bg-slate-50 px-4 py-6 md:gap-6 md:px-6 md:py-10 lg:gap-8 lg:px-8 lg:py-14">
          {/* 포스트 카테고리 태그 - 모바일에서 작게 표시 */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {post.tags.map((tag) => (
              <div
                key={tag}
                className="flex h-6 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] px-3 md:h-8 md:rounded-xl md:px-4"
              >
                <p className="text-[#111518] text-xs font-medium leading-normal md:text-sm">
                  {tag}
                </p>
              </div>
            ))}
          </div>

          {/* 포스트 제목 - 반응형 타이포그래피 */}
          <h1 className="text-[#111518] text-2xl font-black leading-tight tracking-[-0.02em] md:text-3xl lg:text-4xl xl:text-5xl lg:tracking-[-0.033em]">
            {post.title}
          </h1>

          {/* 포스트 요약 - 모바일에서 작은 폰트 */}
          <p className="text-[#111518] text-sm font-normal leading-relaxed md:text-base">
            {post.excerpt}
          </p>

          {/* 메타데이터 - 모바일 최적화 */}
          <div className="flex items-center gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-8 h-8 md:w-10 md:h-10"
              style={{
                backgroundImage: `url("${post.author.avatar}")`
              }}
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#111518] text-xs font-medium leading-normal md:text-sm">
                {post.author.name}
              </p>
              <p className="text-[#647987] text-xs font-normal leading-normal md:text-sm">
                {post.publishDate} • {post.readTime} min read
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 포스트 본문 - 반응형 패딩 */}
      <div className="px-3 py-2 md:px-4 md:py-3">
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="flex flex-col gap-4 md:gap-6">
            {/* 메인 이미지 - 반응형 이미지 */}
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg md:rounded-xl"
              style={{
                backgroundImage: `url("${post.coverImage}")`
              }}
            />

            {/* 본문 내용 - 반응형 타이포그래피 */}
            <div className="text-[#111518]">
              <div className="prose prose-sm max-w-none md:prose-base lg:prose-lg prose-headings:text-[#111518] prose-p:text-[#111518] prose-p:leading-relaxed">
                {/* HTML 컨텐츠를 그대로 렌더링 */}
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>
          </div>

          {/* 공유 버튼들 - 모바일에서 적응형 크기 */}
          <div className="flex gap-2 py-2 md:gap-3 md:py-3">
            <button className="flex min-w-[70px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-3 md:min-w-[84px] md:rounded-xl md:h-10 md:px-4 lg:h-12 lg:px-5 bg-[#f0f2f5] text-[#111518] text-xs font-bold leading-normal tracking-[0.015em] md:text-sm lg:text-base hover:bg-[#e1e4e8] transition-colors grow">
              <div className="text-[#111518] mr-1 md:mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" viewBox="0 0 256 256" className="md:w-5 md:h-5">
                  <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z" />
                </svg>
              </div>
              <span className="truncate">좋아요</span>
            </button>
            
            <button className="flex min-w-[70px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-3 md:min-w-[84px] md:rounded-xl md:h-10 md:px-4 lg:h-12 lg:px-5 bg-[#f0f2f5] text-[#111518] text-xs font-bold leading-normal tracking-[0.015em] md:text-sm lg:text-base hover:bg-[#e1e4e8] transition-colors grow">
              <div className="text-[#111518] mr-1 md:mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" viewBox="0 0 256 256" className="md:w-5 md:h-5">
                  <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160L136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z" />
                </svg>
              </div>
              <span className="truncate">공유</span>
            </button>
            
            <button className="flex min-w-[70px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-3 md:min-w-[84px] md:rounded-xl md:h-10 md:px-4 lg:h-12 lg:px-5 bg-[#f0f2f5] text-[#111518] text-xs font-bold leading-normal tracking-[0.015em] md:text-sm lg:text-base hover:bg-[#e1e4e8] transition-colors grow">
              <div className="text-[#111518] mr-1 md:mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" viewBox="0 0 256 256" className="md:w-5 md:h-5">
                  <path d="M116,32V64a4,4,0,0,1-8,0V32a4,4,0,0,1,8,0Zm80,80H128V48a80,80,0,0,1,80,80A8,8,0,0,1,196,112ZM224,128a96,96,0,1,1-96-96A8,8,0,0,1,136,40a8,8,0,0,1-8,8,80,80,0,1,0,80,80A8,8,0,0,1,216,120,8,8,0,0,1,224,128Z" />
                </svg>
              </div>
              <span className="truncate">북마크</span>
            </button>
          </div>
        </div>
      </div>

      {/* 작성자 정보 섹션 - 반응형 레이아웃 */}
      <div className="flex flex-col gap-3 p-3 md:p-4">
        <div className="flex flex-col gap-3 rounded-lg border border-[#dce0e5] bg-slate-50 p-3 md:rounded-xl md:p-4">
          <div className="flex gap-3 md:gap-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-12 h-12 md:w-14 md:h-14"
              style={{
                backgroundImage: `url("${post.author.avatar}")`
              }}
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#111518] text-sm font-medium leading-normal md:text-base">
                {post.author.name}
              </p>
              <p className="text-[#647987] text-xs font-normal leading-normal md:text-sm">
                {post.author.bio}
              </p>
            </div>
          </div>

          {/* 작성자 소셜 링크 - 모바일 최적화 */}
          <div className="flex gap-2 md:gap-3">
            {post.author.socialLinks?.github && (
              <a
                href={post.author.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 shrink-0 items-center justify-center gap-x-1.5 rounded-lg bg-[#f0f2f5] px-3 md:h-8 md:gap-x-2 md:rounded-xl md:px-4 hover:bg-[#e1e4e8] transition-colors"
              >
                <div className="text-[#111518]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" fill="currentColor" viewBox="0 0 256 256" className="md:w-4 md:h-4">
                    <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z" />
                  </svg>
                </div>
                <p className="text-[#111518] text-xs font-medium leading-normal md:text-sm">
                  GitHub
                </p>
              </a>
            )}

            {post.author.socialLinks?.linkedin && (
              <a
                href={post.author.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 shrink-0 items-center justify-center gap-x-1.5 rounded-lg bg-[#f0f2f5] px-3 md:h-8 md:gap-x-2 md:rounded-xl md:px-4 hover:bg-[#e1e4e8] transition-colors"
              >
                <div className="text-[#111518]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" fill="currentColor" viewBox="0 0 256 256" className="md:w-4 md:h-4">
                    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
                  </svg>
                </div>
                <p className="text-[#111518] text-xs font-medium leading-normal md:text-sm">
                  LinkedIn
                </p>
              </a>
            )}

            {post.author.socialLinks?.email && (
              <a
                href={`mailto:${post.author.socialLinks.email}`}
                className="flex h-7 shrink-0 items-center justify-center gap-x-1.5 rounded-lg bg-[#f0f2f5] px-3 md:h-8 md:gap-x-2 md:rounded-xl md:px-4 hover:bg-[#e1e4e8] transition-colors"
              >
                <div className="text-[#111518]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" fill="currentColor" viewBox="0 0 256 256" className="md:w-4 md:h-4">
                    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z" />
                  </svg>
                </div>
                <p className="text-[#111518] text-xs font-medium leading-normal md:text-sm">
                  Email
                </p>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 