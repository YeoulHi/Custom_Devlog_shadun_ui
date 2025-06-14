'use client';

import React from 'react';
import { Sidebar } from '../../components/organisms';
import CategoryGrid from '../../components/organisms/CategoryGrid';
import { getAllCategories } from '../../data/categories';

/**
 * 카테고리 페이지 컴포넌트
 * 모든 카테고리를 그리드 형태로 표시
 */
export default function CategoriesPage() {
  // 모든 카테고리 데이터 가져오기
  const categories = getAllCategories();

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
              <p className="text-[#101518] tracking-light text-[32px] font-bold leading-tight min-w-72">Categories</p>
            </div>
            
            {/* 뷰 타입 선택 탭 */}
            <div className="pb-3">
              <div className="flex border-b border-[#d4dce2] px-4 gap-8">
                <a 
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-[#dce8f3] text-[#101518] pb-[13px] pt-4"
                  href="#"
                >
                  <p className="text-[#101518] text-sm font-bold leading-normal tracking-[0.015em]">Grid View</p>
                </a>
              </div>
            </div>
            
            {/* 카테고리 그리드 */}
            <CategoryGrid categories={categories} />
          </div>
        </div>
      </div>
    </div>
  );
} 