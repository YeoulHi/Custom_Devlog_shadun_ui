# HTML 스티치 템플릿 분석

## 1. 공통 컴포넌트 구조

### 1.1 레이아웃 요소
- **Root Layout**: 전체 페이지를 감싸는 컨테이너
  ```html
  <div class="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden">
    <div class="layout-container flex h-full grow flex-col">
      <!-- 헤더 및 콘텐츠 -->
    </div>
  </div>
  ```

- **Header**: 모든 페이지에서 공통으로 사용되는 네비게이션 바
  ```html
  <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#eaedf1] px-10 py-3">
    <!-- 로고, 메뉴, 검색, 프로필 -->
  </header>
  ```

- **Content Container**: 페이지 콘텐츠를 감싸는 컨테이너
  ```html
  <div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
      <!-- 페이지별 콘텐츠 -->
    </div>
  </div>
  ```

### 1.2 재사용 가능한 UI 컴포넌트
- **Logo**: 사이트 로고 컴포넌트
- **Navigation**: 페이지 내비게이션 링크
- **SearchBar**: 검색 입력 필드
- **ThemeToggle**: 다크/라이트 모드 전환 버튼
- **ProfileAvatar**: 사용자 프로필 아바타
- **PostCard**: 포스트 카드 컴포넌트
- **Pagination**: 페이지네이션 컴포넌트

## 2. 페이지별 구조 분석

### 2.1 홈페이지 (01_homepage.html)
- **구조**: 
  - 헤더
  - 피처드 포스트 섹션
  - 최근 포스트 목록
  - 페이지네이션
- **주요 컴포넌트**:
  - FeaturedPost: 메인 포스트 강조 표시
  - PostList: 포스트 목록 표시
  - Pagination: 페이지 이동 컨트롤

### 2.2 포스트 목록 (02_post_list.html)
- **구조**:
  - 헤더
  - 검색 및 필터링 섹션
  - 그리드 형태의 포스트 카드
- **주요 컴포넌트**:
  - SearchFilter: 검색 및 필터링 옵션
  - PostGrid: 그리드 형태의 포스트 카드 레이아웃

### 2.3 포스트 페이지 (02_post_page.html)
- **구조**:
  - 헤더
  - 포스트 제목 및 메타데이터
  - 포스트 콘텐츠
  - 작성자 정보
  - 관련 포스트
  - 댓글 섹션
- **주요 컴포넌트**:
  - PostHeader: 제목, 날짜, 작성자 등 메타데이터
  - PostContent: 본문 내용
  - AuthorInfo: 작성자 정보 및 소셜 링크
  - RelatedPosts: 관련 포스트 추천
  - CommentSection: 댓글 목록 및 작성 폼

### 2.4 카테고리/태그 페이지 (03_categories_tags.html)
- **구조**:
  - 헤더
  - 카테고리/태그 목록
  - 선택된 카테고리/태그의 포스트
- **주요 컴포넌트**:
  - CategoryTagList: 카테고리 및 태그 목록
  - FilteredPostList: 필터링된 포스트 목록

### 2.5 About 페이지 (04_about_page.html)
- **구조**:
  - 헤더
  - 프로필 정보
  - 소개 텍스트
  - 기술 스택
  - 연락처 정보
- **주요 컴포넌트**:
  - ProfileSection: 프로필 이미지 및 기본 정보
  - SkillsSection: 기술 스택 표시
  - ContactSection: 연락처 정보 및 소셜 링크

### 2.6 프로젝트 페이지 (05_project_page.html)
- **구조**:
  - 헤더
  - 프로젝트 목록
  - 프로젝트 상세 정보
- **주요 컴포넌트**:
  - ProjectList: 프로젝트 목록 표시
  - ProjectDetail: 선택된 프로젝트 상세 정보

### 2.7 검색 페이지 (06_search_page.html)
- **구조**:
  - 헤더
  - 검색 입력 필드
  - 검색 결과 필터링 옵션
  - 검색 결과 목록
- **주요 컴포넌트**:
  - SearchInput: 검색어 입력 필드
  - SearchFilters: 결과 필터링 옵션
  - SearchResults: 검색 결과 목록

## 3. 디자인 패턴 및 스타일 분석

### 3.1 색상 팔레트
- 주요 텍스트: `#101518`
- 보조 텍스트: `#5c748a`
- 배경색: `bg-gray-50`
- 요소 배경: `#eaedf1`
- 테두리: `#eaedf1`

### 3.2 타이포그래피
- 폰트 패밀리: `Newsreader, "Noto Sans", sans-serif`
- 제목: `text-lg font-bold leading-tight tracking-[-0.015em]`
- 소제목: `text-[22px] font-bold leading-tight tracking-[-0.015em]`
- 본문: `text-base font-normal leading-normal`
- 보조 텍스트: `text-sm font-normal leading-normal`

### 3.3 컴포넌트 스타일
- 버튼: `rounded-xl h-10 bg-[#eaedf1] text-[#101518]`
- 카드: `rounded-xl` (다양한 패딩과 마진)
- 입력 필드: `rounded-xl text-[#101518] border-none bg-[#eaedf1]`
- 아이콘: SVG 기반 아이콘 시스템

## 4. 반응형 디자인 고려사항
- 그리드 시스템: `grid-cols-[repeat(auto-fit,minmax(158px,1fr))]`
- 콘텐츠 최대 너비: `max-w-[960px]`
- 패딩 조정: 다양한 화면 크기에 맞게 패딩 조정 필요
- 모바일 메뉴: 현재 모바일 메뉴 구현 없음, 추가 필요

## 5. Next.js 컴포넌트 변환 전략

### 5.1 컴포넌트 계층 구조
1. **레이아웃 컴포넌트**
   - RootLayout: 전체 앱 레이아웃
   - Header: 네비게이션 바
   - Footer: 푸터 (현재 HTML에 없음, 추가 필요)

2. **페이지 컴포넌트**
   - HomePage
   - PostListPage
   - PostDetailPage
   - CategoryTagPage
   - AboutPage
   - ProjectPage
   - SearchPage

3. **UI 컴포넌트**
   - 아토믹 디자인 시스템 적용
   - atoms: Button, Input, Logo, Icon 등
   - molecules: SearchBar, PostCard, ProfileCard 등
   - organisms: PostList, CommentSection, CategoryList 등

### 5.2 상태 관리 전략
- 클라이언트 컴포넌트: 인터랙션이 필요한 요소 (검색, 필터링, 테마 전환)
- 서버 컴포넌트: 정적 렌더링이 가능한 요소 (포스트 목록, 포스트 내용)
- 데이터 페칭: Next.js의 서버 컴포넌트에서 데이터 페칭

### 5.3 구현 우선순위
1. 레이아웃 및 공통 컴포넌트
2. 홈페이지 및 포스트 목록
3. 포스트 상세 페이지
4. 카테고리/태그 페이지
5. 검색 기능
6. About 및 프로젝트 페이지 