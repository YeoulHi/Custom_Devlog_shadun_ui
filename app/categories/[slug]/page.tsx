'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { Sidebar } from '../../../components/organisms';
import { getCategoryBySlug } from '../../../data/categories';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

/**
 * 카테고리 상세 페이지 컴포넌트
 * 특정 카테고리에 속한 포스트들을 표시
 */
export default function CategoryPage({ params }: CategoryPageProps) {
  // 슬러그로 카테고리 데이터 가져오기
  const category = getCategoryBySlug(params.slug);
  
  // 카테고리가 없으면 404 페이지로 이동
  if (!category) {
    notFound();
  }

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
              <div className="flex flex-col gap-2">
                <p className="text-[#101518] tracking-light text-[32px] font-bold leading-tight min-w-72">
                  {category.name}
                </p>
                <p className="text-[#5c748a] text-base font-normal leading-normal max-w-xl">
                  {category.description}
                </p>
              </div>
            </div>
            
            {/* 카테고리 이미지 */}
            <div className="p-4">
              <div 
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl mb-6"
                style={{
                  backgroundImage: `url("${category.imageUrl}")`
                }}
              />
            </div>
            
            {/* 이 카테고리의 포스트 목록 - 추후 구현 */}
            <div className="p-4">
              <p className="text-[#101518] text-xl font-semibold mb-4">
                Posts in this category
              </p>
              <div className="bg-white rounded-lg p-6 text-center">
                <p className="text-[#5c748a]">
                  포스트 목록이 여기에 표시됩니다. (추후 구현 예정)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 