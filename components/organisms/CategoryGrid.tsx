'use client';

import React from 'react';
import Link from 'next/link';
import { Category } from '../../types/category';

// 카테고리 그리드 컴포넌트의 타입 정의
interface CategoryGridProps {
  categories: Category[];
  className?: string;
}

/**
 * 카테고리 그리드 컴포넌트
 * 카테고리 목록을 그리드 형태로 표시
 */
const CategoryGrid: React.FC<CategoryGridProps> = ({ 
  categories,
  className = '' 
}) => {
  return (
    <div className={`grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4 ${className}`}>
      {categories.map((category) => (
        <Link 
          key={category.id} 
          href={`/categories/${category.slug}`}
          className="flex flex-col gap-3 pb-3 hover:opacity-90 transition-opacity"
        >
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{
              backgroundImage: `url("${category.imageUrl}")`
            }}
          />
          <div>
            <p className="text-[#101518] text-base font-medium leading-normal">{category.name}</p>
            <p className="text-[#5c748a] text-sm font-normal leading-normal">{category.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid; 