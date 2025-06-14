'use client';

import React from 'react';
import Link from 'next/link';
import { Sidebar } from '../../components/organisms';
import { getAllTags } from '../../data/categories';

/**
 * 태그 페이지 컴포넌트
 * 모든 태그를 표시
 */
export default function TagsPage() {
  // 모든 태그 데이터 가져오기
  const tags = getAllTags();

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          {/* 사이드바 */}
          <Sidebar />
          
          {/* 메인 콘텐츠 */}
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* 페이지 제목 */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#101518] tracking-light text-[32px] font-bold leading-tight min-w-72">Tags</p>
            </div>
            
            {/* 태그 클라우드 */}
            <div className="p-4">
              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <Link
                    key={tag.id}
                    href={`/tags/${tag.slug}`}
                    className="bg-white px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-[#101518] font-medium">{tag.name}</span>
                    <span className="text-[#5c748a] ml-2">({tag.postCount})</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 