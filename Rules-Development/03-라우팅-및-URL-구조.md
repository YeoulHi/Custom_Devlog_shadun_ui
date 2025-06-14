# 라우팅 및 URL 구조

## 🛣️ 디렉토리 기반 라우팅 (Next.js App Router)

### 기본 구조
```
app/
├── page.tsx              # 홈페이지 (포스트 목록)
├── posts/
│   ├── page.tsx          # 포스트 목록 페이지
│   └── [slug]/
│       └── page.tsx      # 개별 포스트 페이지
├── categories/
│   └── [category]/
│       └── page.tsx      # 카테고리별 포스트
└── tags/
    └── [tag]/
        └── page.tsx      # 태그별 포스트
```

### 특수 파일 규칙
- **page.tsx**: 라우트에서 UI를 렌더링하는 파일
- **layout.tsx**: 여러 페이지에 공유되는 UI 정의
- **loading.tsx**: 페이지 로딩 중 표시할 UI
- **error.tsx**: 오류 발생 시 표시할 UI
- **not-found.tsx**: 404 오류 시 표시할 UI

## 📌 URL 설계 원칙

### 핵심 원칙
| 원칙 | 설명 | 예시 |
|---|---|---|
| **직관적** | URL만 봐도 내용 예상 가능 | `/posts/react-hooks-guide` |
| **SEO 친화적** | 검색 엔진 최적화 | 키워드가 URL에 포함 |
| **확장 가능** | 나중에 구조 변경 용이 | `/posts/2024/react-hooks-guide` |
| **일관성** | 전체 사이트 URL 패턴 통일 | 모든 단수/복수 형태 통일 |

### URL 매핑 테이블
| 페이지 | URL | 파일 경로 | 설명 |
|-----|-----|-----|---|
| 홈 | `/` | `app/page.tsx` | 최신 포스트 목록 |
| 포스트 목록 | `/posts` | `app/posts/page.tsx` | 전체 포스트 목록 |
| 개별 포스트 | `/posts/react-hooks-guide` | `app/posts/[slug]/page.tsx` | 특정 포스트 상세 |
| 카테고리 | `/categories/development` | `app/categories/[category]/page.tsx` | 개발 카테고리 포스트 |
| 태그 | `/tags/react` | `app/tags/[tag]/page.tsx` | React 태그 포스트 |

## 🚫 피해야 할 URL 패턴

### 잘못된 vs 올바른 URL 설계
**❌ 피해야 할 패턴:**
```
/post?id=123              # 의미 불명확, SEO 불리
/blog/2024/01/15/title    # 너무 복잡, 기억하기 어려움
/p/abc123def              # 사용자 친화적이지 않음
/posts.html               # 정적 파일 느낌, 확장성 부족
```

**✅ 권장 패턴:**
```
/posts/react-hooks-guide  # 명확하고 기억하기 쉬움
/categories/development   # 구조적이고 예측 가능
/tags/react              # 간결하고 직관적
```

## 🔄 동적 라우팅 구현

### 기본 동적 라우팅
```typescript
// app/posts/[slug]/page.tsx
export default function PostPage({ params }: { params: { slug: string } }) {
  // slug 매개변수를 사용하여 해당 포스트 데이터 가져오기
  const post = getPostBySlug(params.slug);
  
  return (
    <PostLayout>
      <PostContent post={post} />
    </PostLayout>
  );
}
```

### 정적 생성 최적화
```typescript
// app/posts/[slug]/page.tsx
export async function generateStaticParams() {
  // 빌드 시 모든 포스트의 slug 목록 생성
  const posts = await getAllPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
```

### 중첩 동적 라우팅
```
app/posts/[year]/[month]/[slug]/page.tsx
```

```typescript
export default function PostPage({ 
  params 
}: { 
  params: { year: string; month: string; slug: string } 
}) {
  // 연도, 월, slug 조합으로 포스트 찾기
  const post = getPostByYearMonthSlug(params.year, params.month, params.slug);
  
  return <PostContent post={post} />;
}
```

## 🔍 검색 엔진 최적화 (SEO)

### 메타데이터 설정
```typescript
// app/posts/[slug]/page.tsx
import { Metadata } from 'next';

export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}
```

### 구조화된 데이터 (JSON-LD)
```typescript
// app/posts/[slug]/page.tsx
export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    image: post.coverImage,
    description: post.excerpt,
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PostLayout>
        <PostContent post={post} />
      </PostLayout>
    </>
  );
}
```

## 🔗 링크 및 네비게이션

### 내부 링크 최적화
```typescript
// Next.js Link 컴포넌트 사용
import Link from 'next/link';

export function PostCard({ post }) {
  return (
    <div className="post-card">
      <h2>
        <Link href={`/posts/${post.slug}`}>
          {post.title}
        </Link>
      </h2>
      <p>{post.excerpt}</p>
    </div>
  );
}
```

### 프로그래매틱 네비게이션
```typescript
// useRouter 훅 사용
'use client';

import { useRouter } from 'next/navigation';

export function SearchForm() {
  const router = useRouter();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input name="search" placeholder="검색어 입력..." />
      <button type="submit">검색</button>
    </form>
  );
}
```

## 📱 반응형 라우팅 전략

### 모바일 특화 레이아웃
```typescript
// 디바이스 타입에 따라 다른 레이아웃 사용
import { useMediaQuery } from '@/hooks/useMediaQuery';

export function PostLayout({ children }) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <div className="post-layout">
      {!isMobile && <PostSidebar />}
      <main>{children}</main>
      {isMobile && <MobileNavigation />}
    </div>
  );
}
```

### 조건부 컴포넌트 로딩
```typescript
// 모바일에서는 간소화된 컴포넌트 로드
'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import FullPostContent from './FullPostContent';
import SimplifiedPostContent from './SimplifiedPostContent';

export function ResponsivePostContent({ post }) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return isMobile 
    ? <SimplifiedPostContent post={post} /> 
    : <FullPostContent post={post} />;
}
```

## 🔒 인증 및 권한 기반 라우팅

### 보호된 라우트
```typescript
// app/dashboard/page.tsx
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';

export default async function DashboardPage() {
  const session = await getSession();
  
  if (!session) {
    redirect('/login?returnUrl=/dashboard');
  }
  
  return <DashboardContent />;
}
```

### 권한 수준별 접근 제어
```typescript
// app/admin/page.tsx
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';

export default async function AdminPage() {
  const session = await getSession();
  
  if (!session) {
    redirect('/login?returnUrl=/admin');
  }
  
  if (session.user.role !== 'admin') {
    redirect('/unauthorized');
  }
  
  return <AdminDashboard />;
}
```

## 📊 분석 및 추적

### 페이지 뷰 추적
```typescript
// app/layout.tsx
import { Analytics } from '@/components/Analytics';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 사용자 행동 추적
```typescript
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { trackPageView } from '@/lib/analytics';

export function AnalyticsProvider({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // URL이 변경될 때마다 페이지 뷰 추적
    trackPageView({
      path: pathname,
      search: searchParams.toString(),
    });
  }, [pathname, searchParams]);
  
  return <>{children}</>;
}
```

## 📝 모범 사례 체크리스트

### URL 설계
- [ ] 의미 있고 설명적인 URL 사용
- [ ] 일관된 복수형/단수형 규칙 적용
- [ ] URL에 특수문자 및 공백 제거
- [ ] 영구적인 URL 구조 설계 (변경 최소화)

### 라우팅 구현
- [ ] 적절한 정적/동적 라우팅 선택
- [ ] 오류 처리 페이지 구현 (404, 500 등)
- [ ] 로딩 상태 UI 제공
- [ ] 접근성 고려 (포커스 관리, 스크린 리더 지원)

### SEO 최적화
- [ ] 모든 페이지에 메타데이터 제공
- [ ] 구조화된 데이터 추가
- [ ] 사이트맵 생성
- [ ] robots.txt 설정

### 성능 최적화
- [ ] 필요한 경우에만 클라이언트 컴포넌트 사용
- [ ] 정적 생성 활용 (가능한 경우)
- [ ] 코드 분할 적용
- [ ] 이미지 최적화

## 📚 참고 자료

- **Next.js 앱 라우터 문서**: [https://nextjs.org/docs/app](https://nextjs.org/docs/app)
- **URL 설계 가이드**: [https://developers.google.com/search/docs/crawling-indexing/url-structure](https://developers.google.com/search/docs/crawling-indexing/url-structure)
- **구조화된 데이터**: [https://schema.org/](https://schema.org/)
- **웹 접근성 지침**: [https://www.w3.org/WAI/standards-guidelines/](https://www.w3.org/WAI/standards-guidelines/) 