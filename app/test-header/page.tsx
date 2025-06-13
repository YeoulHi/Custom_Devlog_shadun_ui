import React from 'react';
import { Header } from '../../components/organisms';

/**
 * Header 컴포넌트 테스트 페이지
 * 개발 중 헤더의 모양과 기능을 확인하기 위한 페이지
 */
export default function TestHeaderPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header 컴포넌트 */}
      <Header />
      
      {/* 메인 콘텐츠 영역 */}
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Header 컴포넌트 테스트
          </h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              컴포넌트 특징
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• 로고 및 브랜드명 (TechBlog)</li>
              <li>• 네비게이션 메뉴 (Home, Posts, Categories, Tags, About)</li>
              <li>• 검색 버튼</li>
              <li>• 다크모드 토글 버튼</li>
              <li>• 프로필 아바타</li>
              <li>• 호버 효과 및 트랜지션</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibent text-gray-800 mb-4">
              기능 테스트
            </h2>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>네비게이션:</strong> 각 메뉴 링크에 호버하면 색상이 변경됩니다.
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>검색 버튼:</strong> 클릭 시 검색 기능을 실행할 수 있습니다.
                </p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="text-sm text-purple-800">
                  <strong>다크모드:</strong> 토글 버튼으로 라이트/다크 모드를 전환할 수 있습니다.
                </p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>프로필:</strong> 아바타에 호버하면 링 효과가 나타납니다.
                </p>
              </div>
            </div>
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