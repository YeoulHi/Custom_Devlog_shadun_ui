# Today I Learned (TIL)

## 2024-06-18: Supabase 연결 및 CRUD 구현 준비

### 1. Supabase 연결 설정

#### 작업 내용
- Supabase 프로젝트 연결 확인
- 환경 변수 설정 (.env.local)
- 연결 테스트 페이지 구현 및 확인

#### 기술적 세부사항
- URL: `https://swypbkbollvnhnrdtxim.supabase.co`
- 클라이언트 초기화: `createClient()` 사용
- 환경 변수 처리: Next.js의 환경 변수 시스템 활용

#### 해결한 문제
- TypeScript 모듈 로딩 오류 (`ERR_UNKNOWN_FILE_EXTENSION`)
- 경로 참조 문제 해결
- 환경 변수 설정 최적화

### 2. 데이터베이스 스키마 확인

#### 테이블 구조
- `posts` 테이블 구조 확인
  - id (UUID)
  - title (TEXT)
  - slug (TEXT)
  - content (TEXT)
  - excerpt (TEXT, 옵션)
  - featured_image (TEXT, 옵션)
  - published_at (TIMESTAMP, 옵션)
  - created_at (TIMESTAMP)
  - updated_at (TIMESTAMP)

#### 샘플 데이터
- 테스트 데이터 확인 완료
- 기본 CRUD 작업 준비 완료

### 3. CRUD 구현 계획 수립

#### 우선순위 조정
- Supabase CRUD 구현을 최우선 과제로 설정
- 단계별 구현 계획 수립 (스키마 설계 → Create → Read → Update → Delete)

#### 다음 작업 계획
- 데이터베이스 스키마 상세 설계
- 서버 액션 구현 (`/lib/supabase/actions.ts`)
- 클라이언트 컴포넌트와 서버 액션 연동

### 4. 보안 고려사항
- 환경 변수를 통한 민감 정보 관리
- `.gitignore`에 `.env.local` 포함 확인
- RLS(Row Level Security) 정책 설계 필요성 확인

### 5. 학습 포인트
- Next.js와 Supabase 연동 방법
- TypeScript 모듈 시스템 이해
- 환경 변수 관리 베스트 프랙티스
- 서버 컴포넌트와 클라이언트 컴포넌트 분리