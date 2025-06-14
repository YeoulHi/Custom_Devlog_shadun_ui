# Custom DevLog - shadcn/ui 기반 개발자 블로그

Next.js와 shadcn/ui를 활용한 모던 개발자 블로그 프로젝트입니다.

## 🚀 프로젝트 개요

이 프로젝트는 개발자를 위한 개인 블로그 플랫폼으로, 아토믹 디자인 패턴을 기반으로 한 컴포넌트 중심 아키텍처를 채택하고 있습니다. HTML 템플릿을 React 컴포넌트로 변환하고, Figma MCP를 활용한 디자인-개발 워크플로우를 구축했습니다.

## 🛠️ 기술 스택

### Frontend
- **Next.js 15.3.3** - React 기반 풀스택 프레임워크
- **React 18** - 사용자 인터페이스 라이브러리
- **TypeScript** - 타입 안정성을 위한 정적 타입 언어
- **Tailwind CSS 3.3.0** - 유틸리티 기반 CSS 프레임워크
- **shadcn/ui** - 재사용 가능한 UI 컴포넌트 라이브러리
- **Lucide React** - 일관된 아이콘 시스템

### Design & Development Tools
- **Figma MCP** - 디자인-개발 자동화 워크플로우
- **Design Tokens** - 체계적인 디자인 시스템 관리
- **ESLint** - 코드 품질 관리
- **Prettier** - 코드 포맷팅
- **Husky** - Git 훅 관리

## 📁 프로젝트 구조

```
Custom_Devlog_shadun_ui/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # 루트 레이아웃
│   ├── page.tsx                 # 홈페이지 (HTML 템플릿 기반)
│   └── test-*/                  # 컴포넌트 테스트 페이지
├── components/                   # 아토믹 디자인 패턴 기반 컴포넌트
│   ├── atoms/                   # 기본 UI 요소
│   ├── molecules/               # 조합된 UI 요소
│   ├── organisms/               # 복잡한 UI 섹션
│   │   ├── Sidebar.tsx         # ✅ 사이드바 컴포넌트
│   │   ├── Header.tsx          # ✅ 헤더 컴포넌트
│   │   └── index.ts            # Export 관리
│   ├── templates/               # 페이지 템플릿
│   ├── layouts/                 # 레이아웃 컴포넌트
│   └── ui/                      # shadcn/ui 컴포넌트
├── docs/                        # 📚 체계적인 문서 관리
│   ├── README.md               # 문서 관리 가이드
│   ├── INDEX.md                # 자동 생성된 문서 인덱스
│   ├── 01-planning/            # 기획 및 요구사항
│   ├── 02-architecture/        # 시스템 설계
│   ├── 03-development/         # 개발 프로세스
│   ├── 04-design/              # 디자인 시스템
│   ├── 05-api/                 # API 문서
│   └── 06-deployment/          # 배포 및 운영
├── design-system/              # 🎨 디자인 시스템
│   ├── design-tokens.json      # 추출된 디자인 토큰
│   ├── design-tokens.ts        # TypeScript 디자인 토큰
│   ├── figma-project.json      # Figma 프로젝트 구조
│   └── figma-api-integration.js # Figma API 연동 스크립트
├── scripts/                    # 🔧 자동화 스크립트
│   ├── docs-manager.js         # 문서 관리 자동화
│   ├── extract-design-tokens.js # 디자인 토큰 추출
│   └── figma-mcp-sync.js       # Figma MCP 동기화
├── Stitch_html/                # HTML 템플릿 참조 (6개 파일)
└── content/                    # 블로그 콘텐츠
```

## ✅ 구현 완료된 기능

### 1. 홈페이지 (`app/page.tsx`)
HTML 템플릿(`01_homepage.html`)을 완전히 React로 변환한 홈페이지입니다.

#### 주요 기능
- **헤더 섹션**: 로고, 네비게이션, 검색, 프로필
- **피처드 포스트**: 주요 게시물 하이라이트
- **포스트 목록**: 카테고리별 최신 게시물
- **완벽한 스타일링**: 원본 HTML과 100% 일치하는 디자인

### 2. 사이드바 컴포넌트 (`components/organisms/Sidebar.tsx`)
개발자 블로그의 핵심 네비게이션 컴포넌트입니다.

#### 주요 기능
- **프로필 섹션**: 아바타, 이름, 직업 표시
- **네비게이션 메뉴**: HOME, POSTS, CATEGORIES, TAGS, ARCHIVES, ABOUT
- **소셜 링크**: GitHub, LinkedIn, Email
- **활성 상태 감지**: `usePathname` 훅을 사용한 현재 경로 기반 활성 메뉴 표시

### 3. 헤더 컴포넌트 (`components/organisms/Header.tsx`)
HTML 템플릿을 기반으로 구현된 헤더 컴포넌트입니다.

#### 주요 기능
- **브랜드 로고**: 로고 및 사이트명
- **네비게이션 메뉴**: 주요 페이지 링크
- **검색 기능**: 검색 버튼
- **다크모드 토글**: 테마 전환 기능
- **프로필 아바타**: 사용자 프로필

### 4. 📚 체계적인 문서 관리 시스템
프로젝트의 모든 문서를 자동으로 관리하는 시스템입니다.

#### 주요 기능
- **카테고리별 분류**: 기획, 아키텍처, 개발, 디자인, API, 배포
- **자동 템플릿 생성**: 누락된 문서 자동 생성
- **링크 검증**: 깨진 링크 자동 감지
- **통계 관리**: 문서 수, 단어 수, 라인 수 자동 집계
- **인덱스 자동 업데이트**: 문서 변경 시 자동 인덱스 갱신

### 5. 🎨 Figma MCP 워크플로우
디자인과 개발을 연결하는 자동화된 워크플로우입니다.

#### 주요 기능
- **디자인 토큰 추출**: HTML 템플릿에서 색상, 타이포그래피, 간격 자동 추출
- **Figma 프로젝트 생성**: 추출된 토큰을 Figma 형식으로 변환
- **API 연동**: Figma API를 통한 자동 업로드
- **컴포넌트 매핑**: HTML 컴포넌트 → Figma 컴포넌트 → React 컴포넌트

### 6. 프로젝트 페이지 (`app/projects/page.tsx`)
프로젝트 목록을 보여주는 페이지입니다.

#### 주요 기능
- **프로젝트 목록**: 개발자의 주요 프로젝트 표시
- **피처드 프로젝트**: 중요 프로젝트 강조 표시
- **프로젝트 카드**: 각 프로젝트의 정보와 링크
- **검색 기능**: 프로젝트 검색 UI (추후 기능 구현 예정)

## 🚀 사용 가능한 명령어

### 기본 개발 명령어
```bash
npm run dev          # 개발 서버 실행
npm run build        # 프로덕션 빌드
npm run start        # 프로덕션 서버 실행
npm run lint         # 코드 린팅
```

### 📚 문서 관리 명령어
```bash
npm run docs:validate    # 문서 구조 검증
npm run docs:create      # 누락된 문서 템플릿 생성
npm run docs:check       # 문서 링크 검증
npm run docs:update      # 문서 인덱스 업데이트
npm run docs:manage      # 전체 문서 관리 실행
```

### 🎨 디자인 시스템 명령어
```bash
npm run design:extract   # HTML에서 디자인 토큰 추출
npm run design:figma     # Figma MCP 동기화
```

## 🏃‍♂️ 시작하기

### 설치 및 실행
```bash
# 저장소 클론
git clone [repository-url]
cd Custom_Devlog_shadun_ui

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 접근 가능한 페이지
- **홈페이지**: http://localhost:3000
- **사이드바 테스트**: http://localhost:3000/test-sidebar
- **헤더 테스트**: http://localhost:3000/test-header

## 🚧 개발 진행 상황

### Phase 1: 프로젝트 초기 설정 ✅
- [x] Next.js 프로젝트 설정
- [x] TypeScript 설정
- [x] Tailwind CSS 설정
- [x] 아토믹 디자인 패턴 기반 폴더 구조 생성
- [x] 개발 도구 설정 (ESLint, Prettier, Husky)

### Phase 2: 핵심 컴포넌트 개발 ✅
- [x] Sidebar 컴포넌트 구현
- [x] Header 컴포넌트 구현
- [x] 홈페이지 구현 (HTML 템플릿 기반)
- [x] PostCard 컴포넌트 구현
- [x] CategoryGrid 컴포넌트 구현
- [x] TagCloud 컴포넌트 구현
- [x] ProjectCard 컴포넌트 구현

### Phase 3: 문서 및 디자인 시스템 ✅
- [x] 체계적인 문서 관리 시스템 구축
- [x] Figma MCP 워크플로우 구축
- [x] 디자인 토큰 추출 시스템
- [x] 자동화 스크립트 개발

### Phase 4: 페이지 구현 📋
- [x] 홈페이지
- [x] 포스트 목록 페이지
- [x] 포스트 상세 페이지
- [x] 카테고리 페이지
- [x] 태그 페이지
- [x] About 페이지
- [x] 프로젝트 페이지
- [ ] 검색 페이지 🔄

### Phase 5: 고급 기능 📋
- [ ] 검색 기능
- [ ] 다크 모드
- [ ] SEO 최적화
- [ ] 성능 최적화

## 📊 프로젝트 통계

### 문서 현황
- **총 문서 수**: 16개
- **총 단어 수**: 5,318개
- **총 라인 수**: 1,701개

### 디자인 시스템
- **색상**: 6개 (Primary Dark, Secondary, Background Light 등)
- **타이포그래피**: 6개 스타일 (Newsreader 폰트 기반)
- **컴포넌트**: 3개 (Header, Button, PostCard)

## 🎯 설계 원칙

### 아토믹 디자인 패턴
- **Atoms**: 기본 UI 요소 (버튼, 입력 필드 등)
- **Molecules**: 조합된 UI 요소 (검색 박스, 카드 헤더 등)
- **Organisms**: 복잡한 UI 섹션 (사이드바, 헤더, 포스트 리스트 등)
- **Templates**: 페이지 레이아웃
- **Pages**: 실제 페이지 구현

### 개발 철학
- **HTML 우선 구현**: 복잡한 컴포넌트 구조 대신 원본 HTML을 그대로 React로 변환
- **디자인-개발 동기화**: Figma MCP를 통한 자동화된 워크플로우
- **문서 중심 개발**: 체계적인 문서 관리로 프로젝트 투명성 확보
- **타입 안정성**: TypeScript를 통한 완전한 타입 지원
- **자동화**: 반복 작업의 스크립트화

## 📚 문서

- [문서 관리 가이드](./docs/README.md)
- [문서 인덱스](./docs/INDEX.md)
- [디버깅 프로세스](./docs/03-development/debug-process.md)
- [Figma MCP 워크플로우](./docs/04-design/figma-mcp-workflow.md)

## 📝 최근 업데이트

### 2025-06-14
- ✅ 프로젝트 페이지 구현 완료
- ✅ ProjectCard 컴포넌트 구현
- ✅ 프로젝트 데이터 모델 및 더미 데이터 생성
- ✅ React 컴포넌트 클라이언트 최적화 (use client 지시문 추가)

### 2025-06-13
- ✅ 체계적인 문서 관리 시스템 구축
- ✅ Figma MCP 워크플로우 완성
- ✅ 디자인 토큰 추출 및 자동화
- ✅ 홈페이지 HTML 템플릿 → React 변환 완료
- ✅ 헤더 컴포넌트 구현
- ✅ 자동화 스크립트 개발 (문서 관리, 디자인 시스템)

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 연락처

프로젝트 관련 문의사항이 있으시면 이슈를 생성해주세요.
