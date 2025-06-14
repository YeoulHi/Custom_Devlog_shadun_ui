'use client';

import { Post } from '../../types/post';

// PostContent 컴포넌트의 Props 타입 정의
interface PostContentProps {
  post: Post;
  className?: string;
}

/**
 * PostContent 컴포넌트
 * 포스트의 내용을 표시하는 컴포넌트
 */
const PostContent = ({ post, className = '' }: PostContentProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {/* 포스트 헤더 - 제목, 메타 정보 */}
      <div className="flex flex-col gap-6 p-4">
        {/* 포스트 제목 - 반응형 타이포그래피 */}
        <h1 className="text-[#111518] text-2xl font-black leading-tight tracking-[-0.02em] md:text-3xl lg:text-4xl xl:text-5xl lg:tracking-[-0.033em]">
          {post.title}
        </h1>

        {/* 포스트 요약 - 모바일에서 작은 폰트 */}
        <p className="text-[#5c748a] text-base font-normal leading-normal md:text-lg">
          {post.excerpt}
        </p>

        {/* 작성자 정보 및 메타데이터 */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-3 items-center">
            {/* 작성자 아바타 */}
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-10"
              style={{
                backgroundImage: `url("${post.author.avatar}")`
              }}
            ></div>
            
            {/* 작성자 이름 및 날짜 */}
            <div className="flex flex-col">
              <p className="text-[#101518] text-sm font-medium leading-normal">
                {post.author.name}
              </p>
              <p className="text-[#5c748a] text-sm font-normal leading-normal">
                {post.publishedAt} • {post.readingTime} min read
              </p>
            </div>
          </div>
          
          {/* 소셜 공유 버튼 */}
          <div className="flex gap-2">
            <button className="flex items-center justify-center rounded-lg bg-[#eaedf1] h-10 w-10">
              <span className="text-[#101518]">
                {/* 아이콘 자리 */}
              </span>
            </button>
            <button className="flex items-center justify-center rounded-lg bg-[#eaedf1] h-10 w-10">
              <span className="text-[#101518]">
                {/* 아이콘 자리 */}
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* 포스트 이미지 */}
      <div className="px-4 py-2">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg md:rounded-xl"
        ></div>
      </div>
      
      {/* 포스트 본문 내용 */}
      <div className="px-4 py-2">
        <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
      
      {/* 태그 목록 */}
      <div className="flex flex-wrap gap-2 p-4">
        {post.tags.map((tag) => (
          <a
            key={tag}
            href={`/tags/${tag}`}
            className="bg-[#eaedf1] px-3 py-1 rounded-full text-sm text-[#101518]"
          >
            #{tag}
          </a>
        ))}
      </div>
      
      {/* 작성자 프로필 카드 */}
      <div className="border-t border-[#d4dce2] mt-4 p-4">
        <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-16 w-16"
            style={{
              backgroundImage: `url("${post.author.avatar}")`
            }}
          ></div>
          
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-[#101518] text-lg font-bold leading-tight">
              {post.author.name}
            </p>
            <p className="text-[#5c748a] text-base font-normal leading-normal">
              {post.author.bio}
            </p>
            
            <div className="flex gap-2 justify-center md:justify-start">
              <a
                href={post.author.socialLinks.github}
                className="flex items-center justify-center rounded-lg bg-[#eaedf1] h-10 w-10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[#101518]">
                  {/* GitHub 아이콘 자리 */}
                </span>
              </a>
              <a
                href={post.author.socialLinks.linkedin}
                className="flex items-center justify-center rounded-lg bg-[#eaedf1] h-10 w-10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[#101518]">
                  {/* LinkedIn 아이콘 자리 */}
                </span>
              </a>
              <a
                href={`mailto:${post.author.socialLinks.email}`}
                className="flex items-center justify-center rounded-lg bg-[#eaedf1] h-10 w-10"
              >
                <span className="text-[#101518]">
                  {/* Email 아이콘 자리 */}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* 이전/다음 포스트 내비게이션 */}
      <div className="border-t border-[#d4dce2] mt-4 p-4">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <a href="#" className="flex flex-col gap-1">
            <p className="text-[#5c748a] text-sm font-normal leading-normal">Previous Post</p>
            <p className="text-[#101518] text-base font-medium leading-normal">Introduction to React Hooks</p>
          </a>
          
          <a href="#" className="flex flex-col gap-1 md:text-right">
            <p className="text-[#5c748a] text-sm font-normal leading-normal">Next Post</p>
            <p className="text-[#101518] text-base font-medium leading-normal">Advanced TypeScript Patterns</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostContent; 