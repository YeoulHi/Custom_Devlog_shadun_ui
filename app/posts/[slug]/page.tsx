// 포스트 상세 페이지 - 02_post_page.html 기반
export default function PostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          포스트 페이지 테스트
        </h1>
        <p className="text-gray-600 mb-8">
          현재 슬러그: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{params.slug}</span>
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">✅ HTML to React 변환 성공!</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• 동적 라우팅 작동 중</li>
            <li>• TypeScript 타입 지원</li>
            <li>• Tailwind CSS 스타일링 적용</li>
            <li>• Next.js App Router 사용</li>
          </ul>
        </div>

        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-medium text-blue-900 mb-2">다음 단계:</h3>
          <ol className="list-decimal list-inside text-blue-800 space-y-1">
            <li>HTML 구조를 완전히 이식</li>
            <li>컴포넌트 분리 (Sidebar, PostContent 등)</li>
            <li>실제 데이터 연결</li>
            <li>반응형 디자인 적용</li>
          </ol>
        </div>
      </div>
    </div>
  );
} 