# 개발 일지 (Devlog)

## 2025-06-14: 프로젝트 페이지 구현 및 React 최적화

### 📋 오늘의 작업 요약
- 프로젝트 페이지 구현 완료
- React 컴포넌트 최적화 (클라이언트 컴포넌트 변환)
- 문서 업데이트 및 Git 관리

### 🛠️ 세부 작업 내용

#### 1. 프로젝트 페이지 구현
- `app/projects/page.tsx` 파일 생성 및 구현
- `components/organisms/ProjectCard.tsx` 컴포넌트 개발
- `types/project.ts`에 프로젝트 데이터 모델 정의
- `data/projects.ts`에 프로젝트 더미 데이터 생성
- `components/organisms/index.ts`에 ProjectCard 컴포넌트 export 추가

#### 2. React 컴포넌트 최적화
- 'use client' 지시문 추가로 클라이언트 컴포넌트 변환
  - `app/page.tsx`
  - `app/projects/page.tsx`
  - `app/categories/[slug]/page.tsx`
- 불필요한 React import 제거
- input 요소에 readOnly 속성 추가하여 경고 해결

#### 3. 문서 업데이트
- `PRD/todo.md`: 프로젝트 페이지 구현 완료 표시 (✅)
- `README.md`: 프로젝트 페이지 기능 설명 추가
- 전체 진행률 60% → 70%로 업데이트

#### 4. Git 관리
- 모든 변경사항 커밋 및 원격 저장소에 푸시
- 두 개의 커밋으로 나누어 관리:
  1. "프로젝트 페이지 구현 완료"
  2. "프로젝트 페이지 input 요소 readOnly 속성 추가"

### 🔍 발생한 문제 및 해결 방법

#### 1. React 하이드레이션 오류
- **문제**: `.next\server\app\page.js` 파일을 찾을 수 없다는 오류 발생
- **원인**: 서버 컴포넌트와 클라이언트 컴포넌트 간의 혼용 문제
- **해결**: 'use client' 지시문 추가 및 불필요한 React import 제거

#### 2. 빌드 캐시 문제
- **문제**: webpack 캐시 파일 관련 오류 발생
- **해결**: `.next` 디렉토리 삭제 후 재빌드

#### 3. Form 필드 경고
- **문제**: "You provided a `value` prop to a form field without an `onChange` handler" 경고
- **해결**: input 요소에 readOnly 속성 추가

### 💡 개선 아이디어 및 피드백

#### 개발 프로세스 개선점
1. **점진적 접근 방식 채택**
   - 한 번에 많은 변경을 시도하지 않고 최소 단위로 점진적 개발
   - 문제 발생 시 원인 파악이 용이함

2. **문서화 프로세스 개선**
   - 작업 전/후에 todo.md와 README.md 업데이트
   - 일일 개발 일지(Devlog.md) 작성으로 프로세스 추적 및 개선

3. **Git 커밋 전략**
   - 기능별로 커밋 분리
   - 문제 해결과 기능 구현을 별도 커밋으로 관리

#### 다음 작업 계획
- 검색 페이지 구현 (app/search/page.tsx)
- 검색 기능 구현 (클라이언트 사이드)
- 필요한 컴포넌트 개발 (SearchBar, SearchResults, FilterOptions)

### 📊 현재 진행 상황
- 전체 진행률: 70%
- 남은 페이지: 검색 페이지
- 다음 목표: 모든 페이지 구현 후 최적화 작업 진행
