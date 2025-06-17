# 컴포넌트 구조 설계

## 아토믹 디자인 시스템

이 프로젝트는 아토믹 디자인 시스템을 기반으로 컴포넌트를 구성합니다.

### 1. Atoms (원자)
가장 기본적인 UI 요소들로 더 이상 분해할 수 없는 컴포넌트입니다.

- `Button.tsx`: 다양한 스타일의 버튼 컴포넌트
- `Input.tsx`: 입력 필드 컴포넌트
- `Typography.tsx`: 텍스트 스타일 컴포넌트 (제목, 본문 등)
- `Icon.tsx`: 아이콘 컴포넌트
- `Logo.tsx`: 사이트 로고 컴포넌트

### 2. Molecules (분자)
원자 컴포넌트들을 조합하여 만든 더 복잡한 UI 요소입니다.

- `SearchBar.tsx`: 검색 입력 필드와 버튼 조합
- `PostCard.tsx`: 포스트 카드 컴포넌트
- `ProfileCard.tsx`: 프로필 정보 카드
- `NavigationLink.tsx`: 내비게이션 링크 아이템
- `ThemeToggle.tsx`: 테마 전환 버튼

### 3. Organisms (유기체)
분자와 원자를 조합하여 만든 더 복잡한 UI 섹션입니다.

- `Header.tsx`: 헤더 컴포넌트 (로고, 내비게이션, 검색, 프로필)
- `Footer.tsx`: 푸터 컴포넌트
- `PostList.tsx`: 포스트 목록 컴포넌트
- `CommentSection.tsx`: 댓글 섹션 컴포넌트
- `CategoryList.tsx`: 카테고리 목록 컴포넌트

### 4. Templates (템플릿)
페이지의 구조를 정의하는 컴포넌트입니다.

- `PageLayout.tsx`: 기본 페이지 레이아웃
- `PostLayout.tsx`: 포스트 페이지 레이아웃
- `ProfileLayout.tsx`: 프로필 페이지 레이아웃

## 클라이언트/서버 컴포넌트 구분

Next.js 13 이상에서는 서버 컴포넌트와 클라이언트 컴포넌트를 구분해야 합니다.

### 서버 컴포넌트
- 데이터 페칭이 필요한 컴포넌트
- SEO 최적화가 필요한 컴포넌트
- 사용자 인터랙션이 없는 정적 컴포넌트

### 클라이언트 컴포넌트
- 사용자 인터랙션이 필요한 컴포넌트 (onClick, onChange 등)
- 브라우저 API를 사용하는 컴포넌트 (localStorage, window 등)
- React hooks를 사용하는 컴포넌트 (useState, useEffect 등)

클라이언트 컴포넌트는 파일 최상단에 `'use client'` 지시문을 추가해야 합니다.

## 네이밍 컨벤션

- 컴포넌트 파일명: PascalCase (예: `Button.tsx`, `PostCard.tsx`)
- 유틸리티 함수 파일명: camelCase (예: `formatDate.ts`, `fetchPosts.ts`)
- 타입 정의 파일명: PascalCase (예: `Post.ts`, `User.ts`)
- CSS 모듈: 컴포넌트 이름과 동일하게 (예: `Button.module.css`)

## 폴더 구조

```
app/
  components/
    atoms/       # 기본 UI 요소
    molecules/   # 복합 UI 요소
    organisms/   # UI 섹션
    templates/   # 페이지 레이아웃
  lib/           # 유틸리티 함수, API 클라이언트
  types/         # TypeScript 타입 정의
  (page routes)  # Next.js 페이지 라우트
```

## 스타일링 방식

이 프로젝트는 Tailwind CSS를 사용하여 스타일링합니다. 컴포넌트별 스타일 확장이 필요한 경우 CSS 모듈을 조합하여 사용할 수 있습니다. 