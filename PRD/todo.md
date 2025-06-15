# 개발자 블로그 프로젝트 Todo 리스트

## 🚀 최우선 작업: 최소 단위 개발 워크플로우

### 1단계: 검색 페이지 기본 구조 구현 (Day 17)
- [x] app/search/page.tsx 최소 구조 생성 ✅
  - [x] 테스트 요구사항만 충족 (main 요소, h1 제목, 반응형 클래스) ✅
  - [x] `npm test search.test.tsx` 테스트 통과 확인 ✅
  - [x] 자동 문서화 실행 (`npm run docs:update`) ✅
  - [x] 커밋 및 푸시 (`git commit -m "Add basic search page structure"`) ✅

### 2단계: 페이지 연결 작업 (Day 17)
- [x] Header 컴포넌트에 검색 페이지 링크 추가 ✅
  - [x] 검색 아이콘에 `/search` 링크 연결 ✅
  - [x] 테스트 확인 (`npm run dev`로 로컬 확인) ✅
  - [x] 커밋 (`git commit -m "Add search link to header"`) ✅
- [x] Sidebar 컴포넌트에 검색 메뉴 링크 추가 ✅
  - [x] 사이드바 메뉴에 검색 항목 추가 ✅
  - [x] 테스트 확인 (`npm run dev`로 로컬 확인) ✅
  - [x] 커밋 및 푸시 (`git commit -m "Add search link to sidebar"`) ✅

### 3단계: 전역 레이아웃 및 URL 라우팅 통합 (Day 17)
- [x] 전역 Header 컴포넌트 통합 ✅
  - [x] Root layout에 Header 컴포넌트 추가 ✅
  - [x] 홈페이지에서 중복 헤더 제거 ✅
  - [x] 테스트 확인 (`npm run dev`로 로컬 확인) ✅
  - [x] 커밋 (`git commit -m "Integrate global header in root layout"`) ✅
- [x] 페이지 간 URL 라우팅 개선 ✅
  - [x] 홈페이지 포스트 목록에 적절한 링크 추가 ✅
  - [x] 테스트 확인 (`npm run dev`로 로컬 확인) ✅
  - [x] 커밋 및 푸시 (`git commit -m "Improve URL routing between pages"`) ✅

### 4단계: 페이지 기능 구현 완성 (Day 18-19) 🔄
- [x] 포스트 페이지 기능 완성 ✅
  - [x] 실제 포스트 데이터 연동 ✅
  - [x] 댓글 기능 구현 ✅
  - [x] 테스트 확인 (`npm run dev`로 로컬 확인) ✅
  - [x] 커밋 (`git commit -m "Complete post page functionality"`) ✅

  #### 포스트 페이지 최소 단위 개발 방식 (MVP 접근법)
  
  ##### 1. 단계적 UI 구현 접근법
  1. **기본 레이아웃 및 스타일링 완성**
     - 반응형 레이아웃 최적화 (모바일, 태블릿, 데스크톱)
     - 타이포그래피 및 여백 조정
     - 다크모드 지원 (선택적)
  2. **정적 데이터 연동**
     - `/data/posts.ts` 파일 확장 (더 많은 샘플 포스트 추가)
     - 마크다운/HTML 렌더링 구현
     - 코드 블록 구문 강조 기능
  3. **기본 상호작용 추가**
     - 좋아요 기능 (로컬 상태만 사용)
     - 북마크 기능 (localStorage 활용)
     - 공유 기능 (Web Share API 활용)
  
  ##### 2. 컴포넌트 중심 개발 접근법
  1. **핵심 컴포넌트 개선**
     - PostContent 컴포넌트 강화 (마크다운 렌더링)
     - PostSidebar 컴포넌트 기능 확장 (목차, 관련 포스트)
     - PostHeader 컴포넌트 추가 (저자 정보, 날짜, 태그)
  2. **댓글 컴포넌트 개선**
     - 정적 댓글 데이터 표시 최적화
     - 댓글 폼 UI 구현 (인증 없이 이름/이메일만 입력)
     - 댓글 정렬 및 필터링 기능
  3. **성능 최적화**
     - 이미지 최적화 (Next.js Image 컴포넌트 활용)
     - 지연 로딩 구현
     - 페이지 전환 애니메이션
  
  ##### 3. 기능 중심 점진적 개발 접근법
  1. **포스트 콘텐츠 렌더링 개선**
     - react-markdown 또는 MDX 통합
     - 코드 블록 구문 강조 (Prism 또는 Highlight.js)
     - 이미지 갤러리 및 미디어 지원
  2. **로컬 상태 기반 기능 구현**
     - 읽은 위치 저장 (localStorage)
     - 포스트 조회수 추적 (로컬만)
     - 최근 본 포스트 기능
  3. **SEO 및 접근성 최적화**
     - 메타 태그 최적화
     - 구조화된 데이터 추가 (JSON-LD)
     - 키보드 탐색 및 스크린 리더 지원

  #### 포스트 페이지 구현 방법론 (Supabase 인증 및 댓글 기능 중심)
  
  ##### 방법 1: Supabase 인증 + 댓글 기능 통합 접근법
  1. **Supabase 인증 시스템 구축**
     - Supabase Auth 설정 및 연동
     - 회원가입/로그인 UI 컴포넌트 개발
     - 소셜 로그인(GitHub, Google) 통합
     - 사용자 프로필 관리 기능
  2. **댓글 시스템 구현**
     - 댓글 테이블 스키마 설계 (users, posts, comments 관계 모델링)
     - RLS(Row Level Security) 설정으로 권한 관리
     - 실시간 댓글 업데이트 (Supabase Realtime)
     - 댓글 CRUD 기능 구현
  3. **UI/UX 통합**
     - 인증 상태에 따른 조건부 UI 렌더링
     - 댓글 작성/수정/삭제 권한 관리
     - 사용자 프로필과 댓글 연동
     - 알림 시스템 구현 (댓글 답변 시)
  
  ##### 방법 2: 점진적 기능 구현 접근법
  1. **기본 인증 시스템 구현**
     - 이메일/비밀번호 기반 인증 구현
     - JWT 토큰 관리 및 세션 유지
     - 보안 설정 (비밀번호 정책, 이메일 확인)
  2. **기본 댓글 기능 구현**
     - 로그인 사용자만 댓글 작성 가능하도록 설정
     - 기본 댓글 CRUD 기능
     - 댓글 정렬 및 페이지네이션
  3. **고급 기능 점진적 추가**
     - 소셜 로그인 추가
     - 댓글 좋아요/싫어요 기능
     - 댓글 알림 시스템
     - 스팸 방지 및 모더레이션
  
  ##### 방법 3: 하이브리드 서버리스 접근법
  1. **Supabase 백엔드 설정**
     - 데이터베이스 스키마 설계 (users, posts, comments, profiles)
     - Edge Functions 개발 (고급 로직 처리)
     - Storage 설정 (사용자 아바타, 미디어)
  2. **Next.js API Routes 활용**
     - 민감한 로직은 서버 사이드에서 처리
     - 서버리스 함수로 인증/권한 검증
     - 데이터 변환 및 포맷팅 처리
  3. **클라이언트-서버 통합**
     - React Query/SWR로 데이터 상태 관리
     - 인증 상태에 따른 UI 최적화
     - 에러 처리 및 폴백 UI
     - 오프라인 지원 및 데이터 동기화

- [ ] 검색 페이지 UI 및 기능 구현
  - [ ] 검색 UI 컴포넌트 개발
  - [ ] 검색 기능 구현
  - [ ] 검색 결과 표시
  - [ ] 테스트 확인 (`npm run dev`로 로컬 확인)
  - [ ] 커밋 (`git commit -m "Implement search page UI and functionality"`)

  #### 검색 페이지 구현 방법론 (3가지 접근법)
  
  ##### 방법 1: 클라이언트 사이드 검색 구현
  1. **검색 UI 개발**
     - 검색 입력 필드 및 필터 컴포넌트 구현
     - 검색 결과 카드 컴포넌트 개발
     - 검색 상태 관리 (로딩, 에러, 결과 없음 등)
  2. **클라이언트 사이드 검색 로직**
     - 메모리 내 데이터 검색 알고리즘 구현
     - 검색어 하이라이팅 기능
     - 필터링 및 정렬 기능
  3. **성능 최적화**
     - 디바운싱 구현으로 과도한 검색 방지
     - 가상 스크롤 적용 (대량 결과 처리)
     - 검색 결과 캐싱
  
  ##### 방법 2: 서버 사이드 검색 API 구현
  1. **검색 API 설계**
     - 검색 엔드포인트 정의
     - 쿼리 파라미터 및 응답 형식 설계
     - 페이지네이션 및 필터링 지원
  2. **서버 컴포넌트 활용**
     - Next.js 서버 컴포넌트로 검색 구현
     - 서버 사이드 렌더링 활용
     - 검색 결과 캐싱 전략
  3. **UX 개선**
     - 검색 히스토리 저장
     - 자동완성 기능 구현
     - 검색 결과 미리보기
  
  ##### 방법 3: 전문 검색 엔진 통합
  1. **검색 엔진 설정**
     - Algolia 또는 Elasticsearch 연동
     - 검색 인덱스 설계 및 구성
     - 콘텐츠 인덱싱 자동화
  2. **검색 UI 개발**
     - 검색 엔진 SDK 통합
     - 고급 필터링 UI 구현
     - 검색 분석 및 인사이트 표시
  3. **검색 경험 최적화**
     - 타이포 교정 및 유사 검색 지원
     - 관련 검색어 추천
     - 사용자 검색 패턴 분석 및 개선

### 5단계: Vercel MCP 기본 설정 (Day 20)
- [ ] Vercel 프로젝트 초기 설정
  - [ ] 프로젝트 생성 및 GitHub 연결
  - [ ] 기본 배포 설정
  - [ ] 배포 테스트 및 확인
  - [ ] 문서화 및 커밋 (`git commit -m "Setup basic Vercel deployment"`)

### 6단계: Supabase MCP 기본 설정 (Day 20-21)
- [ ] Supabase 프로젝트 초기 설정
  - [ ] 프로젝트 생성
  - [ ] 기본 테이블 구조 설계
  - [ ] 연결 테스트
  - [ ] 문서화 및 커밋 (`git commit -m "Setup basic Supabase project"`)

## 📋 개발 워크플로우 표준

### 각 작업 단위별 프로세스
1. **개발** - 최소 기능 구현 (1-2시간)
2. **테스트** - 자동화된 테스트 실행 (`npm test`)
3. **문서화** - 자동 문서 업데이트 (`npm run docs:update`)
4. **보고** - 진행 상황 기록 (todo.md 업데이트)
5. **커밋/푸시** - 변경사항 저장 및 공유

### 작업 완료 체크리스트
- [ ] 테스트 통과 확인
- [ ] 코드 품질 검사 (`npm run lint`)
- [ ] 문서 업데이트 확인
- [ ] 커밋 메시지 작성
- [ ] 변경사항 푸시

## ⏳ 후순위 작업 (페이지 구현 이후 진행)

### 데이터 연동 (후순위)
- [ ] MDX 파일에서 포스트 데이터 로드
- [ ] 실제 프로젝트 데이터 연동
- [ ] 댓글 기능 구현 (외부 서비스 연동)

### UI/UX 개선
- [ ] 반응형 디자인 최적화
- [ ] 다크모드 토글 기능 구현
- [ ] 페이지 전환 애니메이션
- [ ] 무한 스크롤 또는 페이지네이션

## 🔜 우선순위 매우 낮은 작업

### 성능 최적화 (우선순위 매우 낮음)
- [ ] 코드 스플리팅 및 지연 로딩
- [ ] 이미지 최적화 (Next.js Image 컴포넌트)
- [ ] SEO 최적화

### 배포 관련 작업 (우선순위 매우 낮음)
- [ ] 도메인 연결
- [ ] 분석 도구 설정 (Google Analytics)

## ✅ 완료된 작업

### 완료된 페이지 기본 구조 구현
- [x] 메인 페이지 (app/page.tsx) ✅
- [x] 포스트 상세 페이지 기본 구조 (app/posts/[slug]/page.tsx) ✅
- [x] 카테고리 페이지 (app/categories/page.tsx) ✅
- [x] 카테고리 상세 페이지 (app/categories/[slug]/page.tsx) ✅
- [x] 태그 페이지 (app/tags/page.tsx) ✅
- [x] 태그 상세 페이지 (app/tags/[slug]/page.tsx) ✅
- [x] About 페이지 (app/about/page.tsx) ✅
- [x] 프로젝트 페이지 (app/projects/page.tsx) ✅
- [x] 검색 페이지 기본 구조 (app/search/page.tsx) ✅

### 완료된 컴포넌트 개발
- [x] PostSidebar 컴포넌트 ✅
- [x] PostContent 컴포넌트 ✅
- [x] CommentsSection 컴포넌트 ✅
- [x] CategoryGrid 컴포넌트 ✅
- [x] AboutHeader 컴포넌트 ✅
- [x] AboutContent 컴포넌트 ✅
- [x] SkillsSection 컴포넌트 ✅
- [x] TimelineSection 컴포넌트 ✅
- [x] ProjectCard 컴포넌트 ✅

### HTML 변환 진행률: 100% (6/6 완료)
- [x] 01_homepage.html → React ✅
- [x] 02_post_page.html → React ✅
- [x] 03_categories_tags.html → React ✅
- [x] 04_about_page.html → React ✅
- [x] 05_project_page.html → React ✅
- [x] 06_search_page.html → React ✅

## 🔧 현재 사용 중인 기술 스택

### 핵심 기술
- **Next.js 15**: React 프레임워크 (App Router)
- **TypeScript**: 정적 타입 검사
- **Tailwind CSS**: 유틸리티 퍼스트 CSS
- **shadcn/ui**: 고품질 React 컴포넌트 라이브러리
- **Vercel**: 배포 및 호스팅 플랫폼
- **Supabase**: 백엔드 서비스 (데이터베이스, 인증)

### 개발 도구
- **ESLint + Prettier**: 코드 품질 관리
- **Husky**: Git hook 관리
- **VS Code**: 개발 환경
- **Git**: 버전 관리

## 📊 프로젝트 진행률

### 전체 진행률: 70% 
- 프로젝트 설정: ✅ 100%
- 기본 컴포넌트: ✅ 100% (Header, Sidebar)
- 홈페이지: ✅ 100%
- 페이지 기본 구조: ✅ 100%
- 페이지 연결 작업: ✅ 100%
- 전역 레이아웃 및 URL 라우팅: ✅ 100%
- 페이지 기능 구현 완성: 🔄 50% (진행 중)
  - 포스트 페이지: ✅ 100%
  - 검색 페이지: 🔄 0% (진행 중)
- Vercel MCP 작업: 🔜 0%
- Supabase MCP 작업: 🔜 0%
- 데이터 연동: ⏳ 0% (후순위)
- 검색 기능 구현: 🔄 0% (진행 중)
- 성능 최적화: ⏳ 0% (우선순위 매우 낮음)
- 배포 관련 작업: ⏳ 0% (우선순위 매우 낮음)

## 📞 상태 표시 범례
- ✅ 완료
- 🔄 진행 중  
- 🔜 예정됨
- ⏳ 대기 중
- ❌ 취소됨
- 🚧 이슈 있음

**마지막 업데이트**: 2024년 6월 16일
