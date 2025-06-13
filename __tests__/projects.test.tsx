// projects TDD 테스트 파일 - 자동 생성됨
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';

// 동적 import로 페이지 컴포넌트 로드
const projectsPage = dynamic(() => import('../app/projects/page'), {
  ssr: false
});

describe('projects 페이지 테스트', () => {
  it('페이지가 정상적으로 렌더링되어야 함', async () => {
    // 기본 렌더링 테스트
    const mockParams = { slug: 'test-projects' };
    
    render(<projectsPage params={mockParams} />);
    
    // 페이지 요소 확인
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('페이지 제목이 표시되어야 함', async () => {
    const mockParams = { slug: 'test-projects' };
    
    render(<projectsPage params={mockParams} />);
    
    // 제목 요소 확인 (h1 태그)
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('반응형 디자인이 적용되어야 함', async () => {
    const mockParams = { slug: 'test-projects' };
    
    render(<projectsPage params={mockParams} />);
    
    // Tailwind CSS 클래스 확인
    const container = screen.getByRole('main');
    expect(container).toHaveClass('min-h-screen');
  });
});