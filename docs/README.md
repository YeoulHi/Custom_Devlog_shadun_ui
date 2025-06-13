# 📚 프로젝트 문서 관리

## 📋 문서 구조 개요

이 폴더는 Custom DevLog 프로젝트의 모든 문서를 체계적으로 관리합니다.

```
docs/
├── README.md                    # 이 파일 - 문서 관리 가이드
├── 01-planning/                 # 기획 및 요구사항
│   ├── PRD.md                  # 제품 요구사항 문서
│   ├── todo.md                 # 할 일 목록
│   └── roadmap.md              # 개발 로드맵
├── 02-architecture/             # 시스템 설계
│   ├── system-architecture.md  # 시스템 아키텍처
│   ├── component-structure.md  # 컴포넌트 구조
│   └── database-design.md      # 데이터베이스 설계
├── 03-development/              # 개발 프로세스
│   ├── debug-process.md        # 디버깅 프로세스
│   ├── coding-standards.md     # 코딩 표준
│   └── git-workflow.md         # Git 워크플로우
├── 04-design/                   # 디자인 시스템
│   ├── figma-mcp-workflow.md   # Figma MCP 워크플로우
│   ├── design-tokens.md        # 디자인 토큰 가이드
│   └── ui-components.md        # UI 컴포넌트 가이드
├── 05-api/                      # API 문서
│   ├── api-reference.md        # API 레퍼런스
│   └── integration-guide.md    # 통합 가이드
└── 06-deployment/               # 배포 및 운영
    ├── deployment-guide.md     # 배포 가이드
    └── monitoring.md           # 모니터링 가이드
```

## 🎯 문서 관리 원칙

### 1. 카테고리별 분류
- **01-planning**: 프로젝트 기획, 요구사항, 로드맵
- **02-architecture**: 시스템 설계, 구조 문서
- **03-development**: 개발 프로세스, 표준, 가이드라인
- **04-design**: 디자인 시스템, UI/UX 가이드
- **05-api**: API 문서, 통합 가이드
- **06-deployment**: 배포, 운영, 모니터링

### 2. 파일명 규칙
- 소문자와 하이픈 사용: `debug-process.md`
- 명확하고 설명적인 이름 사용
- 날짜가 필요한 경우: `YYYY-MM-DD-filename.md`

### 3. 문서 작성 표준
- 모든 문서는 Markdown 형식 사용
- 한국어 주석과 설명 포함
- 난이도 레벨 표시 (Easy/Mid/Difficult)
- 관련 키워드 명시

## 📖 문서 사용 가이드

### 새 문서 추가 시
1. 적절한 카테고리 폴더 선택
2. 파일명 규칙에 따라 생성
3. 문서 템플릿 사용
4. 이 README에 링크 추가

### 문서 업데이트 시
1. 변경 이력 기록
2. 관련 문서들과의 일관성 확인
3. 링크 및 참조 업데이트

## 🔗 주요 문서 바로가기

### 📋 기획 문서
- [제품 요구사항 문서](./01-planning/PRD.md)
- [할 일 목록](./01-planning/todo.md)
- [개발 로드맵](./01-planning/roadmap.md)

### 🏗️ 개발 문서
- [디버깅 프로세스](./03-development/debug-process.md)
- [코딩 표준](./03-development/coding-standards.md)

### 🎨 디자인 문서
- [Figma MCP 워크플로우](./04-design/figma-mcp-workflow.md)
- [디자인 토큰 가이드](./04-design/design-tokens.md)

## 📊 문서 관리 체크리스트

### ✅ 정기 점검 항목
- [ ] 문서 링크 유효성 확인
- [ ] 오래된 정보 업데이트
- [ ] 새로운 기능/변경사항 반영
- [ ] 문서 간 일관성 확인

### 📈 문서 품질 기준
- [ ] 명확하고 이해하기 쉬운 설명
- [ ] 실행 가능한 예제 포함
- [ ] 적절한 스크린샷/다이어그램
- [ ] 관련 문서와의 연결성

## 🚀 문서 자동화

### 자동 생성 가능한 문서
- API 문서 (코드에서 자동 생성)
- 컴포넌트 문서 (Storybook 연동)
- 변경 이력 (Git 로그 기반)

### 문서 동기화
- 코드 변경 시 관련 문서 자동 업데이트 알림
- 문서 버전 관리 및 히스토리 추적 