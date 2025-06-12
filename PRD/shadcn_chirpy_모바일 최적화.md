### 📲 모바일 홈페이지 (shadcn/ui + 댓글 최적화)
```
개발자 블로그 모바일 홈페이지를 만들어줘. Chirpy + shadcn/ui + 댓글 시스템 스타일로.

모바일 레이아웃 (375px 기준):
- 상단 고정 헤더 (sticky top-0, backdrop-blur):
  * 좌측: Sheet 트리거 (Button variant="ghost" size="icon", Menu icon)
  * 중앙: 사이트 로고/제목 (font-bold)
  * 우측: 다크모드 토글 + 검색 (Button variant="ghost" size="icon")# 🎨 Chirpy + shadcn/ui 스타일 개발자 블로그 - Stitch 프롬프트 모음

## 📋 전체 사이트 구조 프롬프트

### 🎯 메인 레이아웃 프롬프트 (shadcn/ui + Chirpy)
```
개발자 포트폴리오 블로그 사이트를 만들어줘. Chirpy Jekyll 테마와 shadcn/ui 디자인 시스템을 결합한 스타일로.

전체 레이아웃:
- 왼쪽 고정 사이드바 (280px, 다크 배경 with 미세한 보더)
- 오른쪽 메인 콘텐츠 영역 (나머지 공간, 밝은 배경)
- 상단 헤더 바 (모바일에서만 표시)

사이드바 구성 (shadcn/ui 카드 스타일):
- 프로필 카드 (rounded-lg, border, shadow-sm)
  * 프로필 사진 (원형, 120px, ring-2 ring-border)
  * 이름 "김개발" (font-semibold text-lg)
  * 한줄 소개 "Full-Stack Developer" (text-muted-foreground)
  * 상태 배지 (Badge variant="secondary")

- 네비게이션 카드 (mt-6):
  * HOME (Lucide House icon + label)
  * POSTS (Lucide PenTool icon + label)  
  * CATEGORIES (Lucide Folder icon + label)
  * TAGS (Lucide Tag icon + label)
  * ARCHIVES (Lucide Archive icon + label)
  * ABOUT (Lucide User icon + label)
  * 각 항목: hover:bg-accent hover:text-accent-foreground

- 소셜 링크 카드 (하단, flex gap-2):
  * GitHub, LinkedIn, Email (Button variant="ghost" size="icon")

반응형 디자인:
- 데스크톱: 사이드바 고정
- 태블릿: 사이드바 슬라이드 오버레이 (Sheet 컴포넌트)
- 모바일: 상단 헤더 + Drawer 네비게이션

색상 테마 (shadcn/ui 기반):
- Background: hsl(0 0% 100%)
- Foreground: hsl(222.2 84% 4.9%)
- Card: hsl(0 0% 100%)
- Card-foreground: hsl(222.2 84% 4.9%)
- Border: hsl(214.3 31.8% 91.4%)
- Accent: hsl(210 40% 98%)
- Muted: hsl(210 40% 96%)
- Primary: hsl(222.2 47.4% 11.2%)

다크모드 토글:
- 우상단 고정 (Button variant="ghost" size="icon")
- Moon/Sun 아이콘 (Lucide)
- 부드러운 전환 애니메이션
```

---

## 🏠 홈페이지 (블로그 목록) 프롬프트

### 📝 블로그 목록 페이지 (shadcn/ui + 댓글 미리보기)
```
개발자 블로그 홈페이지를 만들어줘. Chirpy + shadcn/ui + 댓글 시스템 스타일로.

상단 섹션:
- 페이지 헤더 (space-y-2):
  * 제목 "Recent Updates" (scroll-m-20 text-3xl font-bold)
  * 서브 제목 "Latest posts and insights" (text-lg text-muted-foreground)

- 검색 및 필터 영역 (flex gap-4 items-center):
  * 검색 Input (placeholder="Search posts...", Search icon)
  * 카테고리 필터 (Select 컴포넌트, multiple)
  * 정렬 옵션 (DropdownMenu): "Latest", "Popular", "Most Commented"

블로그 카드 디자인 (Card 컴포넌트 기반):
- 카드 컨테이너: Card className="group hover:shadow-lg transition-shadow"
- 카드 레이아웃: grid gap-6 md:grid-cols-2 lg:grid-cols-3

각 카드 구성:
- CardHeader:
  * 썸네일 이미지 (rounded-md, aspect-video, object-cover)
  * 카테고리 Badge (variant="outline", top-right 절대 위치)
  * 인기도 Badge (top-left, 댓글 많은 글): "🔥 Hot" (variant="destructive")

- CardContent:
  * 제목 (CardTitle, line-clamp-2, group-hover:text-primary)
  * 요약 (CardDescription, line-clamp-3)
  * 태그들 (flex gap-1 flex-wrap, Badge variant="secondary")

- CardFooter (justify-between items-center):
  * 메타 정보 (flex gap-3 text-sm text-muted-foreground):
    - 작성일 (Calendar icon)
    - 읽기 시간 (Clock icon)
    - 조회수 (Eye icon)
    - 댓글 수 (MessageCircle icon + 숫자, hover:text-primary)
  
  * 액션 버튼들 (flex gap-2):
    - 좋아요 Button (variant="ghost" size="sm", Heart icon + 숫자)
    - 북마크 Button (variant="ghost" size="sm", Bookmark icon)

- 댓글 미리보기 (hover시 Popover):
  * PopoverTrigger: 댓글 수 영역
  * PopoverContent:
    - "Recent Comments" (font-medium)
    - 최근 댓글 2-3개 (Avatar + 이름 + 짧은 댓글)
    - "View all comments" Button (variant="ghost" size="sm")

페이지네이션:
- Pagination 컴포넌트 사용
- PaginationContent, PaginationItem, PaginationLink
- 이전/다음 화살표 (ChevronLeft, ChevronRight)

사이드바 위젯 (우측, space-y-6):
- 인기 포스트 카드:
  * CardHeader: "Popular Posts"
  * CardContent: 간소화된 포스트 리스트 (제목 + 댓글 수)

- 활발한 댓글 카드:
  * CardHeader: "Active Discussions" (MessageCircle icon)
  * CardContent: 댓글 많은 포스트 순위
  * 각 항목: 제목 + "X comments" Badge

- 태그 클라우드 카드:
  * 다양한 크기의 Badge들
  * hover:bg-primary hover:text-primary-foreground

- 최근 댓글 활동 카드:
  * CardHeader: "Recent Comments"
  * CardContent: 실시간 댓글 피드
  * 각 댓글: Avatar + 사용자명 + "commented on [포스트제목]"
```

---

## 📄 개별 포스트 페이지 프롬프트

### 📖 포스트 읽기 페이지 (shadcn/ui + 댓글 시스템)
```
개발자 블로그 포스트 상세 페이지를 만들어줘. Chirpy + shadcn/ui + Supabase 댓글 시스템 스타일로.

포스트 헤더 (Card 컴포넌트):
- CardHeader:
  * Breadcrumb 네비게이션
  * 카테고리 Badge (variant="default")
  * 제목 (scroll-m-20 text-4xl font-bold tracking-tight)
  * 메타 정보 (flex gap-4 text-sm text-muted-foreground):
    - Avatar + 작성자명
    - 작성일 (Calendar icon)
    - 업데이트일 (RefreshCw icon)  
    - 읽기시간 (Clock icon)
    - 조회수 (Eye icon)
    - 댓글 수 (MessageCircle icon)

- 태그 섹션 (flex gap-2 flex-wrap):
  * Badge variant="outline" (각 태그별로)

- 인터랙션 바 (Separator 후, flex justify-between):
  * 좌측 - 리액션 버튼들:
    - 좋아요 Button (variant="ghost", Heart icon + 숫자)
    - 북마크 Button (variant="ghost", Bookmark icon)
    - 댓글로 이동 Button (variant="ghost", MessageCircle icon)
  * 우측 - 소셜 공유:
    - DropdownMenu trigger="Share" (Share icon)
    - DropdownMenuContent: Twitter, Facebook, LinkedIn, Copy Link

메인 콘텐츠:
- 본문 영역 (prose prose-slate max-w-none):
  * Typography 스타일 적용
  * 최대 너비 800px, 중앙 정렬
  * 줄간격 최적화 (leading-7)

- 코드 블록 (Card variant):
  * CardHeader: 언어명 + 복사 버튼
  * CardContent: 하이라이팅된 코드
  * 복사 버튼 (Button variant="ghost" size="sm", Copy icon)

- 이미지 처리:
  * 클릭 시 Dialog로 확대
  * DialogContent에서 원본 크기 표시

우측 TOC 사이드바 (sticky top-20):
- Card 컴포넌트:
  * CardHeader: "Table of Contents"
  * CardContent:
    - ScrollArea (높이 제한)
    - 네스팅된 링크 목록
    - 현재 섹션 하이라이트 (text-primary font-medium)
    - 진행률 Progress bar (상단)

댓글 시스템 (Card className="mt-12"):
- CardHeader (flex justify-between items-center):
  * CardTitle: "Comments (42)" (MessageCircle icon)
  * 정렬 옵션 (Select): "Latest", "Oldest", "Most Liked"

- 댓글 작성 영역 (CardContent, border-b pb-6):
  * 로그인 상태일 때:
    - Avatar + 작성자명 (flex items-center gap-2)
    - Textarea (placeholder="Add a comment...", min-height="100px")
    - 하단 도구모음 (flex justify-between):
      * 좌측: 서식 버튼들 (Bold, Italic, Code, Link)
      * 우측: "Post Comment" Button (variant="default")
  
  * 비로그인 상태일 때:
    - Alert (variant="default"):
      * "Please sign in to comment"
      * "Sign in with Google/GitHub/Email" Button들

- 댓글 리스트 (CardContent, space-y-6):
  * 각 댓글 (Card variant="outline" className="p-4"):
    - 댓글 헤더 (flex justify-between items-start):
      * 좌측: Avatar + 사용자명 + 작성시간
      * 우측: DropdownMenu (MoreHorizontal icon):
        - "Reply", "Report", "Share" 등
    
    - 댓글 내용:
      * 본문 텍스트 (prose-sm)
      * 이미지/링크 미리보기 (필요시)
      * 코드 블록 지원 (syntax highlighting)
    
    - 댓글 액션 (flex gap-4 text-sm):
      * 좋아요 Button (variant="ghost", Heart icon + 숫자)
      * 답글 Button (variant="ghost", Reply icon)
      * 신고 Button (variant="ghost", Flag icon)
    
    - 답글 영역 (nested, ml-8, space-y-3):
      * "Show X replies" Collapsible trigger
      * CollapsibleContent: 중첩된 답글들
      * "Reply to @username" 작성 폼

- 댓글 페이지네이션 (CardFooter):
  * "Load More Comments" Button (variant="outline")
  * 또는 Pagination 컴포넌트

하단 섹션:
- 작성자 프로필 (Card):
  * Avatar (large) + 소개 + 소셜 링크
  * "View all posts by author" Button

- 관련 포스트 (Card):
  * CardHeader: "Related Posts"
  * CardContent: 3개 포스트 그리드
  * 각각 간소화된 카드 형태 (썸네일 + 제목 + 댓글 수)

- 네비게이션 (flex justify-between):
  * 이전 포스트 (Button variant="outline", ArrowLeft + 제목 미리보기)
  * 다음 포스트 (Button variant="outline", ArrowRight + 제목 미리보기)

실시간 기능:
- 새 댓글 알림 (Toast 또는 Badge)
- 댓글 수 실시간 업데이트
- 좋아요 수 실시간 반영
- 타이핑 인디케이터 ("User is typing...")

모바일 최적화:
- 댓글 작성은 Sheet로 전체화면
- TOC는 Collapsible 컴포넌트로
- 답글은 별도 페이지로 네비게이션
- 스와이프로 댓글 액션 (좋아요, 답글)
```

---

## 🏷️ 태그/카테고리 페이지 프롬프트

### 📂 필터링 페이지 (shadcn/ui 스타일)
```
개발자 블로그 태그/카테고리 페이지를 만들어줘. Chirpy + shadcn/ui 스타일로.

상단 헤더:
- Breadcrumb 네비게이션
- 페이지 제목 "Categories" 또는 "Tags" (text-3xl font-bold)
- 설명 텍스트 (text-lg text-muted-foreground)

검색 및 필터 영역 (Card):
- CardContent (space-y-4):
  * 검색 Input (Search icon, "Filter categories...")
  * 정렬 옵션 (Tabs 컴포넌트):
    - TabsList: "Name", "Post Count", "Recent"
    - 각 TabsTrigger 활성 상태 표시
  * 보기 모드 토글 (ToggleGroup):
    - Grid view (Grid3X3 icon)
    - List view (List icon)

카테고리 그리드 섹션:
- 그리드 컨테이너 (grid gap-4 md:grid-cols-2 lg:grid-cols-3)
- 각 카테고리 카드 (Card className="group hover:shadow-md"):
  * CardHeader:
    - 카테고리 아이콘 (Lucide icon, 크기 large)
    - Badge (포스트 수, variant="secondary")
  * CardContent:
    - 카테고리명 (CardTitle)
    - 설명 (CardDescription)
    - 최근 업데이트 (text-xs text-muted-foreground)
  * CardFooter:
    - "View Posts" Button (variant="ghost", ArrowRight icon)

태그 클라우드 섹션 (Card):
- CardHeader: "All Tags"
- CardContent:
  * 태그들 (flex gap-2 flex-wrap)
  * 각 태그: Badge 크기별 (사용 빈도에 따라)
    - variant="outline" (기본)
    - variant="default" (선택됨)
    - 호버 시 variant="secondary"

필터 결과 섹션:
- 선택된 필터 표시 (Card):
  * "Active Filters" label
  * 선택된 태그들 (Badge with X button)
  * "Clear All" Button (variant="outline")

- 결과 통계:
  * "Found X posts" (text-sm text-muted-foreground)
  * 결과 정렬 (Select 컴포넌트)

- 포스트 목록:
  * 간소화된 카드 형태 (제목 + 요약 + 메타)
  * Skeleton 로딩 상태

사이드바 (space-y-6):
- 통계 카드 (Card):
  * 총 포스트 수, 카테고리 수, 태그 수
  * 각각 아이콘과 함께 표시
  
- 인기 태그 카드 (Card):
  * "Trending Tags" CardHeader
  * Top 10 태그 리스트

- 최근 활동 카드 (Card):
  * "Recent Activity" CardHeader
  * 타임라인 형태의 활동 내역
```

---

## 👨‍💻 About 페이지 프롬프트

### 🌟 소개 페이지 (shadcn/ui + 커뮤니티 활동)
```
개발자 포트폴리오 About 페이지를 만들어줘. Chirpy + shadcn/ui + 커뮤니티 활동 스타일로.

히어로 섹션 (Card className="border-0 shadow-none"):
- CardContent (text-center space-y-6):
  * Avatar (className="w-32 h-32 mx-auto"):
    - 프로필 이미지
    - ring-4 ring-border
  * 이름 + 직책 (space-y-2):
    - 이름 (text-3xl font-bold)
    - 직책 (text-xl text-muted-foreground)
  * 한줄 소개 (text-lg)
  * 상태 배지 (Badge variant="default", size="lg")
  * 소셜 링크 (flex gap-2 justify-center):
    - Button variant="outline" size="icon" (각 소셜별)

소개 섹션 (Card):
- CardHeader:
  * CardTitle: "About Me" (User icon)
- CardContent (prose):
  * 개인 스토리 (2-3 문단)
  * 관심사와 목표
  * 현재 학습 중인 기술들 (Badge들로 표시)

커뮤니티 활동 섹션 (Card):
- CardHeader:
  * CardTitle: "Community Engagement" (Users icon)
  * CardDescription: "How I contribute to the developer community"

- CardContent (grid gap-4 md:grid-cols-2):
  * 블로그 활동 통계:
    - "Blog Posts Written" (PenTool icon + 숫자)
    - "Comments Received" (MessageCircle icon + 숫자) 
    - "Discussions Started" (MessageSquare icon + 숫자)
    - Progress bars로 시각화

  * 댓글 참여도:
    - "Average Response Time" (Clock icon + "2시간")
    - "Comment Response Rate" (TrendingUp icon + "95%")
    - "Community Helpfulness Score" (Star icon + "4.8/5")

기술 스택 섹션 (Card):
- CardHeader:
  * CardTitle: "Skills & Technologies" (Code icon)
  * CardDescription: "Technologies I work with"

- CardContent:
  * Tabs 컴포넌트 (카테고리별):
    - TabsList: "Frontend", "Backend", "DevOps", "Tools"
    - 각 TabsContent:
      * 기술 그리드 (grid gap-4 md:grid-cols-2)
      * 각 기술 항목:
        - 아이콘 + 기술명 (flex items-center gap-2)
        - Progress bar (숙련도)
        - 최근 사용일 (text-xs text-muted-foreground)

경력 타임라인 (Card):
- CardHeader:
  * CardTitle: "Experience & Education" (Briefcase icon)
- CardContent:
  * 세로 타임라인 (relative):
    - 연결선 (absolute left border)
    - 각 경력 항목 (Card variant="outline"):
      * 기간 Badge (variant="secondary")
      * 회사/학교명 (font-semibold)
      * 역할/전공 (text-muted-foreground)
      * 주요 성과 (list-disc)
      * 아이콘 (Building2 또는 GraduationCap)

통계 섹션 (grid gap-4 md:grid-cols-4):
- GitHub 통계 카드:
  * CardHeader: "GitHub Stats" (Github icon)
  * CardContent: 커밋, 저장소, 언어 통계
  * 수치 강조 (text-3xl font-bold)

- 블로그 통계 카드:
  * CardHeader: "Blog Stats" (PenTool icon)  
  * CardContent: 포스트 수, 조회수, 좋아요 수

- 댓글 통계 카드:
  * CardHeader: "Engagement Stats" (MessageCircle icon)
  * CardContent: 받은 댓글, 답글 수, 반응률

- 학습 통계 카드:
  * CardHeader: "Learning Stats" (BookOpen icon)
  * CardContent: 완료 코스, 자격증, 읽은 책

최근 활동 피드 (Card):
- CardHeader:
  * CardTitle: "Recent Activity" (Activity icon)
  * "View All" Button (variant="ghost" size="sm")

- CardContent (space-y-3):
  * 활동 타임라인:
    - "Replied to 5 comments on [포스트제목]" (시간 + Avatar)
    - "Published new post: [제목]" (시간 + PenTool icon)
    - "Received 10 likes on [포스트제목]" (시간 + Heart icon)
    - "Started discussion about [주제]" (시간 + MessageSquare icon)

연락처 섹션 (Card):
- CardHeader:
  * CardTitle: "Get In Touch" (Mail icon)
  * CardDescription: "Feel free to reach out for collaborations or discussions"

- CardContent (grid gap-4 md:grid-cols-3):
  * 이메일 카드 (Card variant="outline"):
    - Mail icon + 이메일
    - "Send Email" Button
  * LinkedIn 카드 (Card variant="outline"):
    - Linkedin icon + 프로필
    - "Connect" Button  
  * GitHub 카드 (Card variant="outline"):
    - Github icon + 사용자명
    - "Follow" Button

- 빠른 메시지 폼:
  * Label + Input (이름, 이메일)
  * Label + Textarea (메시지)
  * Button (variant="default", "Send Message")
  * 응답 시간 안내: "I typically respond within 24 hours"

독자와의 소통 섹션 (Card):
- CardHeader:
  * CardTitle: "Let's Discuss" (MessageSquare icon)
  * CardDescription: "I love engaging with fellow developers"

- CardContent:
  * 토론 주제 제안 (flex gap-2 flex-wrap):
    - Badge variant="outline": "React Best Practices"
    - Badge variant="outline": "Career Advice"  
    - Badge variant="outline": "Code Reviews"
    - Badge variant="outline": "Open Source"
  
  * CTA 메시지:
    - "Have questions or want to discuss any of these topics?"
    - "Comment on my latest posts or reach out directly!"
```

---

## 💼 프로젝트 쇼케이스 프롬프트

### 🛠️ 프로젝트 포트폴리오 (shadcn/ui 스타일)
```
개발자 프로젝트 쇼케이스 페이지를 만들어줘. Chirpy + shadcn/ui 스타일로.

상단 섹션:
- 페이지 헤더:
  * 제목 "Projects" (text-3xl font-bold)
  * 설명 "Things I've built and contributed to"
  * 프로젝트 추가 Button (variant="default", Plus icon)

필터 및 정렬 (Card):
- CardContent (flex gap-4 items-center):
  * 프로젝트 필터 (Tabs):
    - TabsList: "All", "Web App", "Mobile", "API", "Tool"
    - 각 TabsTrigger에 Badge (프로젝트 수)
  * 정렬 Select: "Latest", "Popular", "Technology"
  * 보기 모드 (ToggleGroup): Grid/List

프로젝트 그리드 (grid gap-6 md:grid-cols-2):
- 각 프로젝트 카드 (Card className="group overflow-hidden"):
  * 프로젝트 썸네일:
    - 이미지 (aspect-video, group-hover:scale-105)
    - 오버레이 (absolute inset-0, bg-black/60)
    - 액션 버튼들 (absolute top-2 right-2):
      * Live Demo (Button size="sm", ExternalLink icon)
      * GitHub (Button size="sm", Github icon)

  * CardHeader:
    - 제목 (CardTitle, group-hover:text-primary)
    - 프로젝트 상태 Badge:
      * "Completed" (variant="default")
      * "In Progress" (variant="secondary")  
      * "Planned" (variant="outline")

  * CardContent:
    - 한줄 설명 (CardDescription)
    - 기술 스택 (flex gap-1 flex-wrap):
      * 각 기술: Badge variant="outline" (size="sm")
    - GitHub 통계 (flex gap-4 text-sm):
      * Star 수 (Star icon)
      * Fork 수 (GitFork icon)
      * 언어 (Code icon)

  * CardFooter (justify-between):
    - 개발 기간 (Calendar icon + 날짜)
    - "View Details" Button (variant="ghost", ArrowRight)

호버 효과:
- 썸네일 스케일 업
- 제목 색상 변경  
- 그림자 강화
- 상세 정보 오버레이:
  * 주요 기능 리스트
  * 개발 기간 정보
  * 기술적 하이라이트

프로젝트 상세 Dialog:
- DialogContent (max-w-4xl):
  * DialogHeader: 제목 + 닫기 버튼
  * 이미지 갤러리 (Carousel):
    - 스크린샷들
    - 네비게이션 버튼
    - 인디케이터 dots
  * 탭 섹션 (Tabs):
    - "Overview": 상세 설명, 개발 배경
    - "Features": 주요 기능 리스트
    - "Tech Stack": 사용 기술 상세
    - "Challenges": 기술적 도전과 해결책
  * DialogFooter: 액션 버튼들

사이드바 위젯 (space-y-6):
- GitHub 활동 카드 (Card):
  * CardHeader: "GitHub Activity"
  * CardContent: 커밋 그래프 (간소화)

- 기술 통계 카드 (Card):
  * CardHeader: "Technology Usage"  
  * CardContent: 원형 차트 또는 Progress bars

- 프로젝트 현황 카드 (Card):
  * CardHeader: "Project Status"
  * CardContent: 
    - 완료: X개 (Progress bar)
    - 진행중: X개 (Progress bar)
    - 계획중: X개 (Progress bar)
```

---

## 🔍 검색 페이지 프롬프트

### 🎯 통합 검색 기능 (shadcn/ui 스타일)
```
개발자 블로그 통합 검색 페이지를 만들어줘. Chirpy + shadcn/ui 스타일로.

검색 인터페이스 (Card):
- CardHeader:
  * CardTitle: "Search" (Search icon)
  * CardDescription: "Find posts, projects, and more"

- CardContent:
  * 메인 검색바 (relative):
    - Input (large, Search icon prefix)
    - 음성 검색 Button (Mic icon, absolute right)
    - 검색 제안 Popover:
      * PopoverContent: 최근 검색어 리스트
      * 각 제안: Button variant="ghost" (justify-start)

  * 검색 옵션 (Accordion):
    - AccordionItem "Advanced Search":
      * 검색 범위 (Checkbox group):
        - "Post Titles", "Content", "Code Blocks"
      * 날짜 범위 (DateRangePicker)
      * 카테고리 (MultiSelect)

검색 결과 섹션:
- 결과 헤더 (flex justify-between items-center):
  * "Found X results" (text-lg font-semibold)
  * 정렬 Select: "Relevance", "Date", "Views"

- 결과 카테고리 (Tabs):
  * TabsList: "All", "Posts", "Projects", "Pages"
  * 각 TabsTrigger에 결과 수 Badge

- 검색 결과 리스트:
  * 각 결과 (Card className="hover:shadow-sm"):
    - CardHeader:
      * 타입 Badge ("Post", "Project", "Page")
      * 제목 (CardTitle, 검색어 하이라이트)
      * URL breadcrumb (text-sm text-muted-foreground)
    - CardContent:
      * 스니펫 (검색어 하이라이트, line-clamp-2)
      * 매칭 태그들 (Badge variant="outline")
    - CardFooter:
      * 메타 정보 (날짜, 조회수)
      * "View" Button (variant="ghost", ArrowRight)

- 무한 스크롤 또는 Pagination:
  * Skeleton 로딩 상태
  * "Load More" Button (variant="outline")

필터 사이드바 (Card):
- CardHeader: "Refine Results"
- CardContent (space-y-4):
  * 카테고리 필터 (Accordion):
    - AccordionItem "Categories":
      * Checkbox 리스트 (각각 결과 수 표시)
  * 날짜 필터 (Accordion):
    - AccordionItem "Date Range":
      * 빠른 선택 버튼들
      * 커스텀 DateRangePicker
  * 태그 필터 (Accordion):
    - AccordionItem "Tags":  
      * 인기 태그 Checkbox 리스트
  * 검색 결과 수 표시
  * "Clear Filters" Button (variant="outline")

검색 상태별 UI:
- 검색 전 (Card):
  * 인기 검색어 (Badge 리스트)
  * 추천 카테고리
  * 최근 포스트

- 로딩 중:
  * Skeleton 카드들
  * 검색바 로딩 Spinner

- 결과 없음 (Card):
  * 일러스트레이션 또는 아이콘
  * "No results found" (text-xl font-semibold)
  * 검색 제안
  * 인기 포스트 추천

최근 검색 기록 (Card):
- CardHeader: "Recent Searches"
- CardContent:
  * 검색어 리스트 (Button variant="ghost")
  * 각각 X 버튼으로 삭제 가능
  * "Clear All" Button (variant="outline")

인기 검색어 (Card):
- CardHeader: "Trending Searches"  
- CardContent:
  * 순위별 검색어 (numbered list)
  * 각각 Badge with 증감 화살표
```

---

## 📱 모바일 최적화 프롬프트 (개별 페이지별)

### 📲 모바일 홈페이지 (shadcn/ui 스타일)
```
개발자 블로그 모바일 홈페이지를 만들어줘. Chirpy + shadcn/ui 스타일로.

모바일 레이아웃 (375px 기준):
- 상단 고정 헤더 (sticky top-0, backdrop-blur):
  * 좌측: Sheet 트리거 (Button variant="ghost" size="icon", Menu icon)
  * 중앙: 사이트 로고/제목 (font-bold)
  * 우측: 다크모드 토글 + 검색 (Button variant="ghost" size="icon")

모바일 네비게이션 (Sheet):
- SheetContent (side="left", className="w-80"):
  * SheetHeader:
    - 프로필 섹션 (Avatar + 이름 + 소개)
    - 상태 Badge
  * 네비게이션 리스트:
    - 각 메뉴: Button variant="ghost" (justify-start, full width)
    - 아이콘 + 레이블 (min height 48px)
    - 현재 페이지 하이라이트
  * SheetFooter:
    - 소셜 링크들 (flex gap-2)

메인 콘텐츠:
- 검색 섹션 (px-4 py-2):
  * Input with Search icon (rounded-full)
  * 카테고리 필터 (horizontal scroll):
    - Badge 리스트 (gap-2, 스크롤 가능)

- 블로그 카드 (px-4 space-y-4):
  * 각 카드 (Card className="overflow-hidden"):
    - 썸네일 (aspect-video, w-full)
    - CardContent (p-4):
      * 카테고리 Badge (absolute top-2 left-2)
      * 제목 (text-lg font-semibold, line-clamp-2)
      * 설명 (text-sm text-muted-foreground, line-clamp-2)
      * 태그들 (flex gap-1, horizontal scroll)
      * 메타 정보 (flex justify-between, text-xs):
        - 작성일, 읽기시간
        - 북마크 Button (size="sm")

터치 최적화:
- 모든 터치 영역 최소 44x44px
- 카드 전체 터치 가능 영역
- 스와이프 제스처:
  * 카드에서 우로 스와이프: 북마크
  * 카드에서 좌로 스와이프: 공유
- Pull-to-refresh (RefreshCw icon)

모바일 전용 기능:
- 하단 고정 검색 FAB:
  * Button (size="icon", className="fixed bottom-4 right-4")
  * Search icon, shadow-lg
- 무한 스크롤 로딩:
  * Skeleton 카드들
- 스크롤 진행률:
  * Progress bar (fixed top, thin)
```