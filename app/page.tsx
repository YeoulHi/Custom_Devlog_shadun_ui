import React from 'react';
import Link from 'next/link';

/**
 * 프로젝트 홈페이지
 * 개발 중인 컴포넌트들의 테스트 링크를 제공
 */
export default function HomePage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{fontFamily: 'Newsreader, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        {/* 헤더 섹션 - 원본 HTML 그대로 */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#eaedf1] px-10 py-3">
          <div className="flex items-center gap-4 text-[#101518]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em]">TechBlog</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#101518] text-sm font-medium leading-normal" href="#">Home</a>
              <a className="text-[#101518] text-sm font-medium leading-normal" href="#">Posts</a>
              <a className="text-[#101518] text-sm font-medium leading-normal" href="#">Categories</a>
              <a className="text-[#101518] text-sm font-medium leading-normal" href="#">Tags</a>
              <a className="text-[#101518] text-sm font-medium leading-normal" href="#">About</a>
            </div>
            <div className="flex gap-2">
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#eaedf1] text-[#101518] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <div className="text-[#101518]" data-icon="MagnifyingGlass" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                  </svg>
                </div>
              </button>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#eaedf1] text-[#101518] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <div className="text-[#101518]" data-icon="Sun" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z" />
                  </svg>
                </div>
              </button>
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOKtnCu5JQ2uGOUJNnaDUSCyR3kbnY312cwsWlE9czzqxvoNmFj85wHvIzBXBwdTlYWDScDWTCgeBZvKmp3xyUm-q3ZIabVK6MLElRuLH3UBoUs1ufa8ZVd-43EK45Dfu9nMtADp0aBEms1GahjvtEi06Y-78T5xF-M9zy-2XK4M0nF_Nz2wYiE0aP8fHX4SdbRDQwjWijM07r-MwvsOzBKFwnfseLQ82fuUNI_varVaRdfPe3N3bUSEqVzOKEuvuvN7V0YjFWRuhj")'}}
            />
          </div>
        </header>

        {/* 메인 콘텐츠 섹션 - 원본 HTML 그대로 */}
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
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#eaedf1] text-[#101518] text-sm font-medium leading-normal w-fit">
                    <span className="truncate">Read More</span>
                  </button>
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
            <div className="flex items-center gap-4 bg-gray-50 px-4 min-h-[72px] py-2">
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

            <div className="flex items-center gap-4 bg-gray-50 px-4 min-h-[72px] py-2">
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

            <div className="flex items-center gap-4 bg-gray-50 px-4 min-h-[72px] py-2">
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

            <div className="flex items-center gap-4 bg-gray-50 px-4 min-h-[72px] py-2">
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

            <div className="flex items-center gap-4 bg-gray-50 px-4 min-h-[72px] py-2">
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

            <div className="flex items-center gap-4 bg-gray-50 px-4 min-h-[72px] py-2">
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
          </div>
        </div>
      </div>
    </div>
  );
} 