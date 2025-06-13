# Custom DevLog - shadcn/ui 기반 개발자 블로그

Next.js와 shadcn/ui를 활용한 모던 개발자 블로그 프로젝트입니다.

## 🚀 프로젝트 개요

이 프로젝트는 개발자를 위한 개인 블로그 플랫폼으로, 아토믹 디자인 패턴을 기반으로 한 컴포넌트 중심 아키텍처를 채택하고 있습니다.

## 🛠️ 기술 스택

### Frontend
- **Next.js 15.3.3** - React 기반 풀스택 프레임워크
- **React 18** - 사용자 인터페이스 라이브러리
- **TypeScript** - 타입 안정성을 위한 정적 타입 언어
- **Tailwind CSS 3.3.0** - 유틸리티 기반 CSS 프레임워크
- **shadcn/ui** - 재사용 가능한 UI 컴포넌트 라이브러리
- **Lucide React** - 일관된 아이콘 시스템

### Development Tools
- **ESLint** - 코드 품질 관리
- **Prettier** - 코드 포맷팅
- **Husky** - Git 훅 관리

## 📁 프로젝트 구조

```
Custom_Devlog_shadun_ui/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # 루트 레이아웃
│   └── test-sidebar/            # 컴포넌트 테스트 페이지
├── components/                   # 아토믹 디자인 패턴 기반 컴포넌트
│   ├── atoms/                   # 기본 UI 요소
│   ├── molecules/               # 조합된 UI 요소
│   ├── organisms/               # 복잡한 UI 섹션
│   │   ├── Sidebar.tsx         # ✅ 사이드바 컴포넌트
│   │   ├── index.ts            # Export 관리
│   │   └── README.md           # 컴포넌트 문서
│   ├── templates/               # 페이지 템플릿
│   ├── layouts/                 # 레이아웃 컴포넌트
│   └── ui/                      # shadcn/ui 컴포넌트
├── content/                     # 블로그 콘텐츠
├── lib/                         # 유틸리티 함수
├── public/                      # 정적 파일
├── Stitch_html/                 # HTML 템플릿 참조
└── PRD/                         # 프로젝트 요구사항 문서
```

## ✅ 구현 완료된 기능

### 1. 사이드바 컴포넌트 (`components/organisms/Sidebar.tsx`)

개발자 블로그의 핵심 네비게이션 컴포넌트입니다.

#### 주요 기능
- **프로필 섹션**: 아바타, 이름, 직업 표시
- **네비게이션 메뉴**: HOME, POSTS, CATEGORIES, TAGS, ARCHIVES, ABOUT
- **소셜 링크**: GitHub, LinkedIn, Email
- **활성 상태 감지**: `usePathname` 훅을 사용한 현재 경로 기반 활성 메뉴 표시
- **Props 기반 커스터마이징**: 프로필 정보를 props로 전달 가능

#### 사용법
```tsx
import { Sidebar } from '@/components/organisms';

// 기본 사용법
<Sidebar />

// 커스텀 프로필과 함께
<Sidebar 
  profile={{
    name: "홍길동",
    title: "풀스택 개발자",
    avatarUrl: "/images/profile.jpg"
  }}
/>
```

#### 기술적 특징
- **TypeScript 완전 지원**: 타입 안전성 보장
- **반응형 디자인**: 호버 효과 및 부드러운 트랜지션
- **아토믹 디자인**: Organisms 레벨 컴포넌트
- **재사용성**: Props 기반 커스터마이징

## 🚧 개발 진행 상황

### Phase 1: 프로젝트 초기 설정 ✅
- [x] Next.js 프로젝트 설정
- [x] TypeScript 설정
- [x] Tailwind CSS 설정
- [x] 아토믹 디자인 패턴 기반 폴더 구조 생성
- [x] 개발 도구 설정 (ESLint, Prettier, Husky)

### Phase 2: 핵심 컴포넌트 개발 🔄
- [x] Sidebar 컴포넌트 구현
- [ ] Header 컴포넌트 구현
- [ ] PostCard 컴포넌트 구현
- [ ] CategoryGrid 컴포넌트 구현
- [ ] TagCloud 컴포넌트 구현

### Phase 3: 페이지 구현 📋
- [ ] 홈페이지
- [ ] 포스트 목록 페이지
- [ ] 포스트 상세 페이지
- [ ] 카테고리 페이지
- [ ] 태그 페이지
- [ ] About 페이지

### Phase 4: 고급 기능 📋
- [ ] 검색 기능
- [ ] 다크 모드
- [ ] SEO 최적화
- [ ] 성능 최적화

## 🏃‍♂️ 시작하기

### 설치
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 개발 서버
- **로컬**: http://localhost:3000
- **테스트 페이지**: http://localhost:3000/test-sidebar

## 📚 문서

- [컴포넌트 가이드](./components/organisms/README.md)
- [프로젝트 요구사항](./PRD/)

## 🎯 설계 원칙

### 아토믹 디자인 패턴
- **Atoms**: 기본 UI 요소 (버튼, 입력 필드 등)
- **Molecules**: 조합된 UI 요소 (검색 박스, 카드 헤더 등)
- **Organisms**: 복잡한 UI 섹션 (사이드바, 헤더, 포스트 리스트 등)
- **Templates**: 페이지 레이아웃
- **Pages**: 실제 페이지 구현

### 개발 철학
- **컴포넌트 재사용성**: 모든 UI 요소를 재사용 가능한 컴포넌트로 설계
- **타입 안정성**: TypeScript를 통한 완전한 타입 지원
- **성능 최적화**: Next.js의 최적화 기능 활용
- **접근성**: 웹 접근성 가이드라인 준수
- **반응형 디자인**: 모든 디바이스에서 최적화된 경험

## 📝 최근 업데이트

### 2024-12-19
- ✅ 사이드바 컴포넌트 구현 완료
- ✅ TypeScript 설정 및 프로젝트 구조 정립
- ✅ 테스트 환경 구축
- ✅ 문서화 체계 구축

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
