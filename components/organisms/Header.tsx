'use client';

import React from 'react';
import Link from 'next/link';

// 헤더 컴포넌트의 타입 정의
interface HeaderProps {
  className?: string;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

/**
 * 개발자 블로그의 헤더 컴포넌트 - 원본 HTML 템플릿을 React로 변환
 * 로고, 네비게이션 메뉴, 검색 버튼, 다크모드 토글, 프로필을 포함
 */
const Header: React.FC<HeaderProps> = ({ 
  className = '',
  isDarkMode = false,
  onToggleDarkMode
}) => {
  return (
    <header className={`flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#eaedf1] px-10 py-3 ${className}`}>
      {/* 로고 섹션 */}
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

      {/* 네비게이션 및 액션 버튼 섹션 */}
      <div className="flex flex-1 justify-end gap-8">
        {/* 네비게이션 메뉴 */}
        <div className="flex items-center gap-9">
          <Link href="/" className="text-[#101518] text-sm font-medium leading-normal">
            Home
          </Link>
          <Link href="/posts" className="text-[#101518] text-sm font-medium leading-normal">
            Posts
          </Link>
          <Link href="/categories" className="text-[#101518] text-sm font-medium leading-normal">
            Categories
          </Link>
          <Link href="/tags" className="text-[#101518] text-sm font-medium leading-normal">
            Tags
          </Link>
          <Link href="/about" className="text-[#101518] text-sm font-medium leading-normal">
            About
          </Link>
        </div>

        {/* 액션 버튼들 */}
        <div className="flex gap-2">
          {/* 검색 버튼 */}
          <Link href="/search">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#eaedf1] text-[#101518] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
              <div className="text-[#101518]" data-icon="MagnifyingGlass" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                </svg>
              </div>
            </button>
          </Link>

          {/* 다크모드 토글 버튼 */}
          <button 
            onClick={onToggleDarkMode}
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#eaedf1] text-[#101518] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
          >
            <div className="text-[#101518]" data-icon="Sun" data-size="20px" data-weight="regular">
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z" />
                </svg>
              )}
            </div>
          </button>
        </div>

        {/* 프로필 아바타 */}
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOKtnCu5JQ2uGOUJNnaDUSCyR3kbnY312cwsWlE9czzqxvoNmFj85wHvIzBXBwdTlYWDScDWTCgeBZvKmp3xyUm-q3ZIabVK6MLElRuLH3UBoUs1ufa8ZVd-43EK45Dfu9nMtADp0aBEms1GahjvtEi06Y-78T5xF-M9zy-2XK4M0nF_Nz2wYiE0aP8fHX4SdbRDQwjWijM07r-MwvsOzBKFwnfseLQ82fuUNI_varVaRdfPe3N3bUSEqVzOKEuvuvN7V0YjFWRuhj")`
          }}
        />
      </div>
    </header>
  );
};

export default Header; 