'use client';

import { Sidebar } from '../../components/organisms';

/**
 * 검색 페이지 컴포넌트
 * 사용자가 블로그 콘텐츠를 검색할 수 있는 페이지
 */
export default function SearchPage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          {/* 사이드바 */}
          <Sidebar />
          
          {/* 메인 콘텐츠 */}
          <main className="layout-content-container flex flex-col max-w-[960px] flex-1 min-h-screen">
            {/* 페이지 헤더 */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <h1 className="text-[#101518] tracking-light text-[32px] font-bold leading-tight">
                  검색
                </h1>
                <p className="text-[#5c748a] text-sm font-normal leading-normal">
                  블로그 콘텐츠를 검색하세요
                </p>
              </div>
            </div>
            
            {/* 검색 결과가 여기에 표시됩니다 (추후 구현) */}
            <div className="p-4">
              <p>검색 기능은 현재 개발 중입니다.</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
} 