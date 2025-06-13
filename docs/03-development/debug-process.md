# 🔍 체계적 디버깅 프로세스

## 1단계: 문제 정확히 파악하기

### ✅ 체크리스트
- [ ] 에러 메시지 정확히 읽기
- [ ] 에러 발생 위치 확인 (파일명, 라인 번호)
- [ ] 에러 타입 분류 (모듈 누락, 문법 오류, 타입 오류 등)
- [ ] 브라우저 개발자 도구 콘솔 확인
- [ ] 터미널 에러 로그 확인

### 📝 문제 기록 템플릿
```
에러 타입: [모듈 누락/문법 오류/타입 오류/기타]
에러 메시지: [정확한 에러 메시지]
발생 위치: [파일명:라인번호]
영향 범위: [어떤 페이지/컴포넌트에 영향]
재현 방법: [에러를 재현하는 방법]
```

## 2단계: 의존성 문제 해결

### 모듈 누락 에러 시
```bash
# 1. 패키지 설치 확인
npm list [패키지명]

# 2. 패키지 설치
npm install [패키지명]

# 3. 타입 정의 설치 (TypeScript 사용 시)
npm install @types/[패키지명] --save-dev
```

### 자주 누락되는 패키지들
- `lucide-react` - 아이콘 라이브러리
- `@types/node` - Node.js 타입 정의
- `@types/react` - React 타입 정의
- `tailwindcss` - CSS 프레임워크
- `autoprefixer` - CSS 후처리기

## 3단계: 컴포넌트별 격리 테스트

### 테스트 순서
1. **기본 페이지 테스트**: `/` (홈페이지)
2. **개별 컴포넌트 테스트**: `/test-header`, `/test-sidebar`
3. **복합 컴포넌트 테스트**: 여러 컴포넌트가 함께 사용되는 페이지

### 컴포넌트 격리 방법
```typescript
// 임시 테스트 컴포넌트 생성
export default function TestComponent() {
  return (
    <div>
      <h1>컴포넌트 테스트</h1>
      {/* 테스트할 컴포넌트만 포함 */}
    </div>
  );
}
```

## 4단계: 캐시 및 환경 문제 해결

### 캐시 정리 순서
```bash
# 1. 개발 서버 중지
Ctrl + C

# 2. Next.js 캐시 삭제
Remove-Item -Recurse -Force .next

# 3. npm 캐시 정리
npm cache clean --force

# 4. 서버 재시작
npm run dev
```

### 완전 초기화 (극단적 상황)
```bash
# 1. 모든 Node.js 프로세스 종료
taskkill /f /im node.exe

# 2. 모든 캐시 및 의존성 삭제
Remove-Item -Recurse -Force .next
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# 3. 의존성 재설치
npm install

# 4. 서버 시작
npm run dev
```

## 5단계: 설정 파일 검증

### 필수 설정 파일 체크리스트
- [ ] `package.json` - 의존성 정보
- [ ] `tailwind.config.js` - Tailwind CSS 설정
- [ ] `postcss.config.js` - PostCSS 설정
- [ ] `tsconfig.json` - TypeScript 설정
- [ ] `next.config.js` - Next.js 설정 (필요시)

### 설정 파일 검증 명령어
```bash
# TypeScript 설정 검증
npx tsc --noEmit

# ESLint 검증
npm run lint

# 빌드 테스트
npm run build
```

## 6단계: 브라우저 개발자 도구 활용

### 확인할 항목들
1. **Console 탭**: JavaScript 에러 확인
2. **Network 탭**: 리소스 로딩 실패 확인
3. **Elements 탭**: DOM 구조 및 CSS 적용 상태
4. **Sources 탭**: 소스맵을 통한 실제 에러 위치 확인

## 7단계: 단계별 복구 전략

### Level 1: 소프트 리셋
- 개발 서버 재시작
- 브라우저 새로고침

### Level 2: 캐시 정리
- .next 폴더 삭제
- npm 캐시 정리

### Level 3: 의존성 재설치
- node_modules 삭제 후 재설치
- package-lock.json 재생성

### Level 4: 설정 검토
- 설정 파일들 재확인
- 누락된 설정 추가

### Level 5: 컴포넌트 재작성
- 문제가 되는 컴포넌트 단순화
- 단계별로 기능 추가

## 🎯 디버깅 성공 기준

### ✅ 성공 지표
- [ ] 에러 메시지 없이 서버 시작
- [ ] 모든 페이지 정상 로딩 (200 응답)
- [ ] 브라우저 콘솔에 에러 없음
- [ ] 의도한 UI가 정확히 표시됨
- [ ] 모든 기능 정상 작동

### 📊 테스트 체크리스트
- [ ] 홈페이지: http://localhost:3000
- [ ] 헤더 테스트: http://localhost:3000/test-header
- [ ] 사이드바 테스트: http://localhost:3000/test-sidebar
- [ ] 반응형 디자인 확인
- [ ] 다크모드 토글 기능 확인 