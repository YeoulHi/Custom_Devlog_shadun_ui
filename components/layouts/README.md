# Layouts (레이아웃 컴포넌트)

전체 애플리케이션의 공통 레이아웃을 정의하는 컴포넌트들입니다. Next.js의 Layout 시스템과 연동됩니다.

## 포함될 컴포넌트들:
- RootLayout (루트 레이아웃 - HTML 구조, 메타 태그, 전역 스타일)
- BlogLayout (블로그 공통 레이아웃 - Sidebar + Main 영역)
- PostLayout (포스트 상세 레이아웃 - TOC + Content 영역)
- FullWidthLayout (전체 너비 레이아웃 - About, Project 페이지용)

## 특징:
- Next.js App Router의 layout.tsx 파일들과 연동
- 전역 상태 관리 (테마, 사용자 정보 등)
- 공통 헤더, 푸터, 사이드바 포함
- SEO 메타 태그 관리
- 전역 스타일 및 폰트 로딩 