# 🎨 Figma MCP 워크플로우

## 📋 개요

Figma MCP(Model Context Protocol)를 활용하여 디자인과 개발을 연결하는 체계적인 워크플로우입니다.

## 🔧 현재 설정 상태

### MCP 연결 정보
- **API 키**: `figd_sgVE_Dnvxj1hCuHLrp1qg5q2EAYBcY5ZjVcNg1ig`
- **프로젝트 루트**: `/c:/Users/audrm/OneDrive/Gpters_16_Cursor/Custom_Devlog_shadun_ui`
- **연결 상태**: 설정 완료

## 🚀 작업 프로세스

### Phase 1: 디자인 분석 및 추출

#### 1.1 Figma 파일 분석
```bash
# Figma 프로젝트 목록 확인
mcp_vooster-ai_list_projects

# 특정 프로젝트 연결
mcp_vooster-ai_connect_project
```

#### 1.2 디자인 컴포넌트 추출
- **색상 팔레트**: 디자인 시스템의 색상 값 추출
- **타이포그래피**: 폰트 크기, 가중치, 행간 정보
- **간격 시스템**: 마진, 패딩, 그리드 시스템
- **컴포넌트 구조**: 버튼, 카드, 헤더 등의 구조

#### 1.3 디자인 토큰 생성
```typescript
// design-tokens.ts
export const designTokens = {
  colors: {
    primary: '#101518',
    secondary: '#5c748a',
    background: '#eaedf1',
    // Figma에서 추출한 색상 값들
  },
  typography: {
    fontFamily: 'Newsreader, "Noto Sans", sans-serif',
    sizes: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      // Figma에서 추출한 크기 값들
    }
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    // Figma에서 추출한 간격 값들
  }
};
```

### Phase 2: 컴포넌트 매핑

#### 2.1 Figma → React 컴포넌트 매핑
```
Figma 컴포넌트          →  React 컴포넌트
─────────────────────────────────────────
Header/Navigation       →  Header.tsx
Button/Primary          →  Button.tsx
Card/Post              →  PostCard.tsx
Layout/Sidebar         →  Sidebar.tsx
Form/Search            →  SearchForm.tsx
```

#### 2.2 자동 코드 생성 워크플로우
```bash
# 1. Figma 컴포넌트 정보 추출
figma-extract --component="Header" --output="./temp/header-specs.json"

# 2. React 컴포넌트 생성
generate-component --spec="./temp/header-specs.json" --output="./components/organisms/Header.tsx"

# 3. 스타일 검증
validate-styles --figma-component="Header" --react-component="./components/organisms/Header.tsx"
```

### Phase 3: 현재 프로젝트 적용

#### 3.1 HTML 템플릿 → Figma 역분석
```
현재 상황: HTML 템플릿 (Stitch_html/*.html)
목표: Figma 디자인 시스템으로 체계화

단계:
1. HTML 템플릿의 스타일 분석
2. Figma에서 동일한 디자인 시스템 구축
3. MCP를 통한 자동 동기화
```

#### 3.2 실제 적용 예시
```typescript
// 현재 HTML에서 추출한 스타일
const currentStyles = {
  header: {
    background: 'white',
    borderBottom: '1px solid #eaedf1',
    padding: '12px 40px',
    display: 'flex',
    justifyContent: 'space-between'
  }
};

// Figma MCP로 검증 및 최적화
const optimizedStyles = await figmaMCP.validateAndOptimize(currentStyles);
```

## 🔄 실제 워크플로우 단계

### 단계 1: 현재 HTML 분석
```bash
# 1. HTML 템플릿 스타일 추출
npm run extract-styles -- --input="./Stitch_html/*.html" --output="./design-analysis.json"

# 2. 디자인 토큰 생성
npm run generate-tokens -- --input="./design-analysis.json" --output="./design-tokens.ts"
```

### 단계 2: Figma 연동
```bash
# 1. Figma 프로젝트 생성/연결
figma-mcp connect --project="Custom DevLog" --api-key="figd_sgVE_..."

# 2. 디자인 시스템 업로드
figma-mcp upload-tokens --tokens="./design-tokens.ts"

# 3. 컴포넌트 동기화
figma-mcp sync-components --source="./components" --target="figma://Custom-DevLog"
```

### 단계 3: 자동화된 개발
```bash
# 1. Figma 변경사항 감지
figma-mcp watch --project="Custom DevLog" --webhook="http://localhost:3001/api/figma-webhook"

# 2. 자동 코드 업데이트
figma-mcp generate --component="Header" --output="./components/organisms/Header.tsx"

# 3. 스타일 검증
figma-mcp validate --all-components
```

## 🎯 구체적인 활용 방안

### 방안 1: 디자인 시스템 구축
1. **현재 HTML 템플릿 분석**: 색상, 타이포그래피, 간격 추출
2. **Figma 디자인 시스템 생성**: 추출한 정보로 체계적인 디자인 시스템 구축
3. **자동 동기화**: MCP를 통한 디자인-코드 동기화

### 방안 2: 컴포넌트 자동 생성
1. **Figma 컴포넌트 설계**: 디자이너가 Figma에서 컴포넌트 생성
2. **MCP 자동 변환**: Figma 컴포넌트 → React 컴포넌트 자동 생성
3. **코드 최적화**: 생성된 코드를 프로젝트 구조에 맞게 최적화

### 방안 3: 실시간 협업
1. **디자인 변경 감지**: Figma에서 디자인 변경 시 자동 알림
2. **코드 자동 업데이트**: 변경사항을 코드에 자동 반영
3. **검증 및 테스트**: 변경사항이 기존 기능에 영향을 주지 않는지 검증

## 🛠️ 필요한 도구 및 설정

### 개발 도구
```json
{
  "figma-api": "^1.0.0",
  "figma-to-react": "^2.0.0",
  "design-tokens-utils": "^1.5.0",
  "style-dictionary": "^3.0.0"
}
```

### 설정 파일
```javascript
// figma.config.js
module.exports = {
  apiKey: process.env.FIGMA_API_KEY,
  projectId: 'custom-devlog-project',
  outputDir: './components',
  styleFormat: 'tailwind',
  componentFormat: 'typescript-react'
};
```

## 📊 성과 측정

### KPI 지표
- **개발 속도**: 컴포넌트 생성 시간 단축
- **일관성**: 디자인-코드 간 일치도
- **유지보수성**: 디자인 변경 시 코드 업데이트 시간
- **품질**: 디자인 시스템 준수율

### 측정 방법
```bash
# 디자인-코드 일치도 검사
npm run design-consistency-check

# 컴포넌트 품질 검증
npm run component-quality-audit

# 성능 영향 분석
npm run performance-impact-analysis
```

## 🚀 다음 단계

### 즉시 실행 가능한 작업
1. **현재 HTML 템플릿 스타일 분석**
2. **디자인 토큰 추출 및 정리**
3. **Figma 프로젝트 생성 및 MCP 연결**
4. **첫 번째 컴포넌트 자동 생성 테스트**

### 장기 목표
1. **완전 자동화된 디자인-개발 파이프라인 구축**
2. **실시간 협업 환경 구성**
3. **디자인 시스템 기반 컴포넌트 라이브러리 완성** 