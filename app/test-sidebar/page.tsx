import React from 'react';
import { Sidebar } from '../../components/organisms';

/**
 * 사이드바 컴포넌트 테스트 페이지
 * 개발 중 사이드바의 모양과 기능을 확인하기 위한 페이지
 */
export default function TestSidebarPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* 사이드바 */}
      <Sidebar />
      
      {/* 메인 콘텐츠 영역 */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            사이드바 컴포넌트 테스트
          </h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              컴포넌트 특징
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• 프로필 섹션 (아바타, 이름, 직업)</li>
              <li>• 네비게이션 메뉴 (HOME, POSTS, CATEGORIES, TAGS, ARCHIVES, ABOUT)</li>
              <li>• 소셜 링크 (GitHub, LinkedIn, Email)</li>
              <li>• 반응형 디자인 및 호버 효과</li>
              <li>• TypeScript 타입 안정성</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              기술 스택
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• <strong>React 18</strong> - 컴포넌트 기반 UI</li>
              <li>• <strong>Next.js 15</strong> - 라우팅 및 최적화</li>
              <li>• <strong>TypeScript</strong> - 타입 안정성</li>
              <li>• <strong>Tailwind CSS</strong> - 스타일링</li>
              <li>• <strong>Lucide React</strong> - 아이콘 라이브러리</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 