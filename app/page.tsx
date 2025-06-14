'use client';

import Link from 'next/link';

/**
 * 프로젝트 홈페이지
 * 개발 중인 컴포넌트들의 테스트 링크를 제공
 */
export default function HomePage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{fontFamily: 'Newsreader, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        {/* 헤더는 이제 layout.tsx에서 전역으로 제공됨 */}

        {/* 메인 콘텐츠 섹션 */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#101518] tracking-light text-[32px] font-bold leading-tight min-w-72">Latest Posts</p>
            </div>
            
            {/* 피처드 포스트 */}
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#5c748a] text-sm font-normal leading-normal">Featured</p>
                    <p className="text-[#101518] text-base font-bold leading-tight">Building a Scalable E-commerce Platform with Modern Technologies</p>
                    <p className="text-[#5c748a] text-sm font-normal leading-normal">
                      Explore the architecture and implementation of a robust e-commerce platform using React, Node.js, and PostgreSQL.
                    </p>
                  </div>
                  <Link href="/posts/building-a-scalable-ecommerce-platform">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#eaedf1] text-[#101518] text-sm font-medium leading-normal w-fit">
                      <span className="truncate">Read More</span>
                    </button>
                  </Link>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtfIKwcV7DK1g9IEN86bh5Jj2GBuwcF4QN1U1rsawSI0rZMALqY0BEKkxkLq1Mpku_GZQoMBrTR-g_pKkAAEFszXhqx1oJIIPPXk5OqkSISMaTPMapp0rbe9JFvmYgVBPeAPhdw6S-FxWmr77yMB__F_u8CSTw5B6yLrFcJozrL2oQVXR65vR_VKqhBiTsV_iuwpOD6X-fSJzf4Fe5XzqTwPySv7b8j7IJl9C1epILnCBYYb9Ewq62OMcKvrpb2VB5v0h_YtgOnTNr")'}}
                />
              </div>
            </div>

            {/* 모든 포스트 섹션 */}
            <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">All Posts</h2>
            
            {/* 포스트 목록 */}
            <Link href="/posts/optimizing-react-applications">
              <div className="flex items-center gap-4 bg-gray-50 px-4 min-h-[72px] py-2 hover:bg-[#eaedf1] transition-colors">
                <div className="text-[#101518] flex items-center justify-center rounded-lg bg-[#eaedf1] shrink-0 size-12" data-icon="File" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#101518] text-base font-medium leading-normal line-clamp-1">Optimizing React Applications for Performance</p>
                  <p className="text-[#5c748a] text-sm font-normal leading-normal line-clamp-2">2023-09-15</p>
                </div>
              </div>
            </Link>

            <Link href="/posts/serverless-functions-aws-lambda">
              <div className="flex items-center gap-4 bg-gray-50 px-4 min-h-[72px] py-2 hover:bg-[#eaedf1] transition-colors">
                <div className="text-[#101518] flex items-center justify-center rounded-lg bg-[#eaedf1] shrink-0 size-12" data-icon="File" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#101518] text-base font-medium leading-normal line-clamp-1">Introduction to Serverless Functions with AWS Lambda</p>
                  <p className="text-[#5c748a] text-sm font-normal leading-normal line-clamp-2">2023-09-01</p>
                </div>
              </div>
            </Link>

            <Link href="/posts/restful-apis-nodejs-express">
              <div className="flex items-center gap-4 bg-gray-50 px-4 min-h-[72px] py-2 hover:bg-[#eaedf1] transition-colors">
                <div className="text-[#101518] flex items-center justify-center rounded-lg bg-[#eaedf1] shrink-0 size-12" data-icon="File" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#101518] text-base font-medium leading-normal line-clamp-1">Building RESTful APIs with Node.js and Express</p>
                  <p className="text-[#5c748a] text-sm font-normal leading-normal line-clamp-2">2023-08-15</p>
                </div>
              </div>
            </Link>

            <Link href="/posts/docker-for-development">
              <div className="flex items-center gap-4 bg-gray-50 px-4 min-h-[72px] py-2 hover:bg-[#eaedf1] transition-colors">
                <div className="text-[#101518] flex items-center justify-center rounded-lg bg-[#eaedf1] shrink-0 size-12" data-icon="File" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#101518] text-base font-medium leading-normal line-clamp-1">Getting Started with Docker for Development</p>
                  <p className="text-[#5c748a] text-sm font-normal leading-normal line-clamp-2">2023-08-01</p>
                </div>
              </div>
            </Link>

            <Link href="/posts/react-authentication">
              <div className="flex items-center gap-4 bg-gray-50 px-4 min-h-[72px] py-2 hover:bg-[#eaedf1] transition-colors">
                <div className="text-[#101518] flex items-center justify-center rounded-lg bg-[#eaedf1] shrink-0 size-12" data-icon="File" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#101518] text-base font-medium leading-normal line-clamp-1">Implementing Authentication in React Applications</p>
                  <p className="text-[#5c748a] text-sm font-normal leading-normal line-clamp-2">2023-07-15</p>
                </div>
              </div>
            </Link>

            <Link href="/posts/introduction-to-graphql">
              <div className="flex items-center gap-4 bg-gray-50 px-4 min-h-[72px] py-2 hover:bg-[#eaedf1] transition-colors">
                <div className="text-[#101518] flex items-center justify-center rounded-lg bg-[#eaedf1] shrink-0 size-12" data-icon="File" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#101518] text-base font-medium leading-normal line-clamp-1">Introduction to GraphQL</p>
                  <p className="text-[#5c748a] text-sm font-normal leading-normal line-clamp-2">2023-07-01</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 