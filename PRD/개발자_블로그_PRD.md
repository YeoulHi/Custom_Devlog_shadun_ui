# 개발자 블로그 PRD - Chirpy + shadcn/ui 스타일

## 프로젝트 개요

```yaml
project:
  name: "개발자 포트폴리오 블로그"
  description: "Chirpy Jekyll 테마와 shadcn/ui 디자인 시스템을 결합한 개발자 블로그"
  goals:
    - "개인 프로젝트 및 포트폴리오 전시"
    - "기술 블로그 작성 및 공유"
    - "개발 커뮤니티와 소통"
  target_audience:
    - "개발자 및 기술 관련 종사자"
    - "채용 담당자 및 협업 파트너"
    - "기술 블로그 독자"
  design_philosophy:
    - "Chirpy Jekyll 테마의 기능성"
    - "shadcn/ui의 현대적인 디자인 시스템"
    - "댓글 시스템을 통한 커뮤니티 기능 강화"
    - "모바일 최적화를 통한 어디서나 접근성 확보"
```

## 전체 사이트 구조

```yaml
layout:
  desktop:
    - "왼쪽 고정 사이드바 (280px, 다크 배경 with 미세한 보더)"
    - "오른쪽 메인 콘텐츠 영역 (나머지 공간, 밝은 배경)"
  mobile:
    - "상단 헤더 바 (고정)"
    - "슬라이드 오버 사이드바 (Sheet 컴포넌트)"
    - "전체 화면 메인 콘텐츠"
  
sidebar:
  components:
    - name: "프로필 카드"
      elements:
        - "프로필 사진 (원형, 120px, ring-2 ring-border)"
        - "이름 (font-semibold text-lg)"
        - "한줄 소개 (text-muted-foreground)"
        - "상태 배지 (Badge variant='secondary')"
    
    - name: "네비게이션 카드"
      elements:
        - "HOME (Lucide House icon + label)"
        - "POSTS (Lucide PenTool icon + label)"
        - "CATEGORIES (Lucide Folder icon + label)"
        - "TAGS (Lucide Tag icon + label)"
        - "ARCHIVES (Lucide Archive icon + label)"
        - "ABOUT (Lucide User icon + label)"
      styles: "hover:bg-accent hover:text-accent-foreground"
    
    - name: "소셜 링크 카드"
      elements:
        - "GitHub, LinkedIn, Email (Button variant='ghost' size='icon')"
      styles: "flex gap-2"

responsive_design:
  desktop: "사이드바 고정"
  tablet: "사이드바 슬라이드 오버레이 (Sheet 컴포넌트)"
  mobile: "상단 헤더 + Drawer 네비게이션"

color_theme:
  background: "hsl(0 0% 100%)"
  foreground: "hsl(222.2 84% 4.9%)"
  card: "hsl(0 0% 100%)"
  card_foreground: "hsl(222.2 84% 4.9%)"
  border: "hsl(214.3 31.8% 91.4%)"
  accent: "hsl(210 40% 98%)"
  muted: "hsl(210 40% 96%)"
  primary: "hsl(222.2 47.4% 11.2%)"

dark_mode:
  toggle: 
    position: "우상단 고정"
    style: "Button variant='ghost' size='icon'"
    icons: "Moon/Sun 아이콘 (Lucide)"
    animation: "부드러운 전환 애니메이션"
```

## 홈페이지 (블로그 목록)

```yaml
homepage:
  header:
    title: "Recent Updates"
    subtitle: "Latest posts and insights"
    search:
      input: "placeholder='Search posts...', Search icon"
      filters:
        - "카테고리 필터 (Select 컴포넌트, multiple)"
        - "정렬 옵션: 'Latest', 'Popular', 'Most Commented'"

  blog_cards:
    container: "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    card_style: "group hover:shadow-lg transition-shadow"
    
    components:
      header:
        - "썸네일 이미지 (rounded-md, aspect-video, object-cover)"
        - "카테고리 Badge (variant='outline', top-right 절대 위치)"
        - "인기도 Badge: '🔥 Hot' (variant='destructive', 댓글 많은 글)"
      
      content:
        - "제목 (CardTitle, line-clamp-2, group-hover:text-primary)"
        - "요약 (CardDescription, line-clamp-3)"
        - "태그들 (flex gap-1 flex-wrap, Badge variant='secondary')"
      
      footer:
        meta:
          - "작성일 (Calendar icon)"
          - "읽기 시간 (Clock icon)"
          - "조회수 (Eye icon)"
          - "댓글 수 (MessageCircle icon + 숫자, hover:text-primary)"
        actions:
          - "좋아요 Button (variant='ghost' size='sm', Heart icon + 숫자)"
          - "북마크 Button (variant='ghost' size='sm', Bookmark icon)"
      
      comments_preview:
        trigger: "댓글 수 영역"
        content:
          - "Recent Comments (font-medium)"
          - "최근 댓글 2-3개 (Avatar + 이름 + 짧은 댓글)"
          - "View all comments Button (variant='ghost' size='sm')"

  pagination:
    component: "Pagination"
    elements:
      - "PaginationContent"
      - "PaginationItem"
      - "PaginationLink"
      - "이전/다음 화살표 (ChevronLeft, ChevronRight)"

  sidebar_widgets:
    - name: "인기 포스트 카드"
      header: "Popular Posts"
      content: "간소화된 포스트 리스트 (제목 + 댓글 수)"
    
    - name: "활발한 댓글 카드"
      header: "Active Discussions"
      content: "댓글 많은 포스트 순위"
      items: "제목 + 'X comments' Badge"
    
    - name: "태그 클라우드 카드"
      content: "다양한 크기의 Badge들"
      hover: "hover:bg-primary hover:text-primary-foreground"
    
    - name: "최근 댓글 활동 카드"
      header: "Recent Comments"
      content: "실시간 댓글 피드"
      items: "Avatar + 사용자명 + 'commented on [포스트제목]'"

  mobile_optimization:
    layout:
      - "상단 고정 헤더 (sticky top-0, backdrop-blur)"
      - "Sheet 트리거 (Menu icon)"
      - "사이트 로고/제목 (중앙)"
      - "다크모드 토글 + 검색 버튼 (우측)"
    
    navigation:
      sheet: "side='left', className='w-80'"
      header: "프로필 섹션 (Avatar + 이름 + 소개)"
      items: "Button variant='ghost', 아이콘 + 레이블, min height 48px"
    
    content:
      search: "Input with Search icon (rounded-full)"
      filters: "Badge 리스트 (horizontal scroll)"
      cards: "Card className='overflow-hidden'"
    
    touch_features:
      - "모든 터치 영역 최소 44x44px"
      - "카드 전체 터치 가능 영역" 
      - "스와이프 제스처: 북마크, 공유"
      - "Pull-to-refresh"
      - "하단 고정 검색 FAB"
      - "무한 스크롤 로딩"
      - "스크롤 진행률 표시"
```

## 개별 포스트 페이지

```yaml
post_page:
  header:
    components:
      - "Breadcrumb 네비게이션"
      - "카테고리 Badge (variant='default')"
      - "제목 (scroll-m-20 text-4xl font-bold tracking-tight)"
      - "메타 정보 (작성자, 작성일, 업데이트일, 읽기시간, 조회수, 댓글 수)"
      - "태그 섹션 (Badge variant='outline')"
    
    interaction_bar:
      left:
        - "좋아요 Button (variant='ghost', Heart icon + 숫자)"
        - "북마크 Button (variant='ghost', Bookmark icon)"
        - "댓글로 이동 Button (variant='ghost', MessageCircle icon)"
      right:
        - "DropdownMenu trigger='Share'"
        - "Twitter, Facebook, LinkedIn, Copy Link"

  content:
    main:
      - "prose prose-slate max-w-none"
      - "Typography 스타일 적용"
      - "최대 너비 800px, 중앙 정렬"
      - "줄간격 최적화 (leading-7)"
    
    code_blocks:
      - "언어명 + 복사 버튼"
      - "하이라이팅된 코드"
      - "복사 버튼 (Button variant='ghost' size='sm', Copy icon)"
    
    images:
      - "클릭 시 Dialog로 확대"
      - "DialogContent에서 원본 크기 표시"

  toc_sidebar:
    position: "sticky top-20"
    header: "Table of Contents"
    content:
      - "ScrollArea (높이 제한)"
      - "네스팅된 링크 목록"
      - "현재 섹션 하이라이트 (text-primary font-medium)"
      - "진행률 Progress bar (상단)"

  comments_system:
    header:
      - "Comments (42) (MessageCircle icon)"
      - "정렬 옵션: 'Latest', 'Oldest', 'Most Liked'"
    
    comment_form:
      logged_in:
        - "Avatar + 작성자명"
        - "Textarea (placeholder='Add a comment...', min-height='100px')"
        - "서식 버튼들 (Bold, Italic, Code, Link)"
        - "Post Comment Button (variant='default')"
      not_logged_in:
        - "Please sign in to comment"
        - "Sign in with Google/GitHub/Email Button들"
    
    comments_list:
      comment:
        header:
          - "Avatar + 사용자명 + 작성시간"
          - "DropdownMenu (Reply, Report, Share 등)"
        content:
          - "본문 텍스트 (prose-sm)"
          - "이미지/링크 미리보기"
          - "코드 블록 지원"
        actions:
          - "좋아요 Button (variant='ghost', Heart icon + 숫자)"
          - "답글 Button (variant='ghost', Reply icon)"
          - "신고 Button (variant='ghost', Flag icon)"
        replies:
          - "Show X replies Collapsible trigger"
          - "중첩된 답글들"
          - "Reply to @username 작성 폼"
    
    pagination:
      - "Load More Comments Button (variant='outline')"
      - "또는 Pagination 컴포넌트"

  bottom_section:
    author_profile:
      - "Avatar (large) + 소개 + 소셜 링크"
      - "View all posts by author Button"
    
    related_posts:
      - "Related Posts"
      - "3개 포스트 그리드"
      - "간소화된 카드 형태 (썸네일 + 제목 + 댓글 수)"
    
    navigation:
      - "이전 포스트 (Button variant='outline', ArrowLeft + 제목 미리보기)"
      - "다음 포스트 (Button variant='outline', ArrowRight + 제목 미리보기)"

  realtime_features:
    - "새 댓글 알림 (Toast 또는 Badge)"
    - "댓글 수 실시간 업데이트"
    - "좋아요 수 실시간 반영"
    - "타이핑 인디케이터 ('User is typing...')"

  mobile_optimization:
    - "댓글 작성은 Sheet로 전체화면"
    - "TOC는 Collapsible 컴포넌트로"
    - "답글은 별도 페이지로 네비게이션"
    - "스와이프로 댓글 액션 (좋아요, 답글)"
```

## 태그/카테고리 페이지

```yaml
category_tags_page:
  header:
    - "Breadcrumb 네비게이션"
    - "페이지 제목 'Categories' 또는 'Tags' (text-3xl font-bold)"
    - "설명 텍스트 (text-lg text-muted-foreground)"
  
  search_filters:
    - "검색 Input (Search icon, 'Filter categories...')"
    - "정렬 옵션: 'Name', 'Post Count', 'Recent'"
    - "보기 모드 토글: Grid/List"
  
  category_grid:
    container: "grid gap-4 md:grid-cols-2 lg:grid-cols-3"
    card_style: "Card className='group hover:shadow-md'"
    components:
      header:
        - "카테고리 아이콘 (Lucide icon, 크기 large)"
        - "Badge (포스트 수, variant='secondary')"
      content:
        - "카테고리명 (CardTitle)"
        - "설명 (CardDescription)"
        - "최근 업데이트 (text-xs text-muted-foreground)"
      footer:
        - "View Posts Button (variant='ghost', ArrowRight icon)"
  
  tag_cloud:
    header: "All Tags"
    content:
      - "태그들 (flex gap-2 flex-wrap)"
      - "각 태그: Badge 크기별 (사용 빈도에 따라)"
      - "variant='outline' (기본)"
      - "variant='default' (선택됨)"
      - "호버 시 variant='secondary'"
  
  filter_results:
    active_filters:
      - "Active Filters label"
      - "선택된 태그들 (Badge with X button)"
      - "Clear All Button (variant='outline')"
    stats:
      - "Found X posts (text-sm text-muted-foreground)"
      - "결과 정렬 (Select 컴포넌트)"
    posts:
      - "간소화된 카드 형태 (제목 + 요약 + 메타)"
      - "Skeleton 로딩 상태"
  
  sidebar:
    stats_card:
      - "총 포스트 수, 카테고리 수, 태그 수"
      - "각각 아이콘과 함께 표시"
    trending_tags:
      - "Trending Tags CardHeader"
      - "Top 10 태그 리스트"
    recent_activity:
      - "Recent Activity CardHeader"
      - "타임라인 형태의 활동 내역"
```

## About 페이지

```yaml
about_page:
  hero_section:
    style: "Card className='border-0 shadow-none'"
    content:
      - "Avatar (className='w-32 h-32 mx-auto', ring-4 ring-border)"
      - "이름 (text-3xl font-bold)"
      - "직책 (text-xl text-muted-foreground)"
      - "한줄 소개 (text-lg)"
      - "상태 배지 (Badge variant='default', size='lg')"
      - "소셜 링크 (Button variant='outline' size='icon')"
  
  about_section:
    header: "About Me (User icon)"
    content:
      - "개인 스토리 (2-3 문단)"
      - "관심사와 목표"
      - "현재 학습 중인 기술들 (Badge들로 표시)"
  
  community_section:
    header: 
      title: "Community Engagement (Users icon)"
      description: "How I contribute to the developer community"
    content:
      blog_stats:
        - "Blog Posts Written (PenTool icon + 숫자)"
        - "Comments Received (MessageCircle icon + 숫자)"
        - "Discussions Started (MessageSquare icon + 숫자)"
        - "Progress bars로 시각화"
      engagement:
        - "Average Response Time (Clock icon + '2시간')"
        - "Comment Response Rate (TrendingUp icon + '95%')"
        - "Community Helpfulness Score (Star icon + '4.8/5')"
  
  skills_section:
    header:
      title: "Skills & Technologies (Code icon)"
      description: "Technologies I work with"
    content:
      tabs:
        - "Frontend"
        - "Backend"
        - "DevOps"
        - "Tools"
      skills_item:
        - "아이콘 + 기술명 (flex items-center gap-2)"
        - "Progress bar (숙련도)"
        - "최근 사용일 (text-xs text-muted-foreground)"
  
  experience_section:
    header: "Experience & Education (Briefcase icon)"
    content:
      timeline:
        - "연결선 (absolute left border)"
        - "기간 Badge (variant='secondary')"
        - "회사/학교명 (font-semibold)"
        - "역할/전공 (text-muted-foreground)"
        - "주요 성과 (list-disc)"
        - "아이콘 (Building2 또는 GraduationCap)"
  
  stats_section:
    layout: "grid gap-4 md:grid-cols-4"
    cards:
      github:
        header: "GitHub Stats (Github icon)"
        content: "커밋, 저장소, 언어 통계"
        emphasis: "text-3xl font-bold"
      blog:
        header: "Blog Stats (PenTool icon)"
        content: "포스트 수, 조회수, 좋아요 수"
      comments:
        header: "Engagement Stats (MessageCircle icon)"
        content: "받은 댓글, 답글 수, 반응률"
      learning:
        header: "Learning Stats (BookOpen icon)"
        content: "완료 코스, 자격증, 읽은 책"
  
  activity_feed:
    header:
      title: "Recent Activity (Activity icon)"
      action: "View All Button (variant='ghost' size='sm')"
    content:
      - "Replied to 5 comments on [포스트제목] (시간 + Avatar)"
      - "Published new post: [제목] (시간 + PenTool icon)"
      - "Received 10 likes on [포스트제목] (시간 + Heart icon)"
      - "Started discussion about [주제] (시간 + MessageSquare icon)"
  
  contact_section:
    header:
      title: "Get In Touch (Mail icon)"
      description: "Feel free to reach out for collaborations or discussions"
    content:
      cards:
        - "이메일 카드 (Mail icon + 이메일, Send Email Button)"
        - "LinkedIn 카드 (Linkedin icon + 프로필, Connect Button)"
        - "GitHub 카드 (Github icon + 사용자명, Follow Button)"
      form:
        - "Label + Input (이름, 이메일)"
        - "Label + Textarea (메시지)"
        - "Send Message Button (variant='default')"
        - "응답 시간 안내: 'I typically respond within 24 hours'"
  
  discussion_section:
    header:
      title: "Let's Discuss (MessageSquare icon)"
      description: "I love engaging with fellow developers"
    content:
      topics:
        - "React Best Practices"
        - "Career Advice"
        - "Code Reviews"
        - "Open Source"
      cta:
        - "Have questions or want to discuss any of these topics?"
        - "Comment on my latest posts or reach out directly!"
```

## 프로젝트 쇼케이스

```yaml
projects_page:
  header:
    - "제목 'Projects' (text-3xl font-bold)"
    - "설명 'Things I've built and contributed to'"
    - "프로젝트 추가 Button (variant='default', Plus icon)"
  
  filters:
    - "프로젝트 필터: 'All', 'Web App', 'Mobile', 'API', 'Tool'"
    - "정렬 Select: 'Latest', 'Popular', 'Technology'"
    - "보기 모드: Grid/List"
  
  project_grid:
    container: "grid gap-6 md:grid-cols-2"
    card_style: "Card className='group overflow-hidden'"
    components:
      thumbnail:
        - "이미지 (aspect-video, group-hover:scale-105)"
        - "오버레이 (absolute inset-0, bg-black/60)"
        - "액션 버튼들: Live Demo, GitHub"
      header:
        - "제목 (CardTitle, group-hover:text-primary)"
        - "프로젝트 상태 Badge: 'Completed', 'In Progress', 'Planned'"
      content:
        - "한줄 설명 (CardDescription)"
        - "기술 스택 (Badge variant='outline', size='sm')"
        - "GitHub 통계 (Star 수, Fork 수, 언어)"
      footer:
        - "개발 기간 (Calendar icon + 날짜)"
        - "View Details Button (variant='ghost', ArrowRight)"
  
  hover_effects:
    - "썸네일 스케일 업"
    - "제목 색상 변경"
    - "그림자 강화"
    - "상세 정보 오버레이"
  
  project_detail:
    dialog:
      - "DialogHeader: 제목 + 닫기 버튼"
      - "이미지 갤러리 (Carousel, 스크린샷들)"
      - "탭 섹션: 'Overview', 'Features', 'Tech Stack', 'Challenges'"
      - "DialogFooter: 액션 버튼들"
  
  sidebar_widgets:
    github_activity:
      - "GitHub Activity"
      - "커밋 그래프 (간소화)"
    tech_stats:
      - "Technology Usage"
      - "원형 차트 또는 Progress bars"
    project_status:
      - "Project Status"
      - "완료, 진행중, 계획중 (Progress bar)"
```

## 검색 페이지

```yaml
search_page:
  interface:
    header:
      - "Search (Search icon)"
      - "Find posts, projects, and more"
    content:
      search_bar:
        - "Input (large, Search icon prefix)"
        - "음성 검색 Button (Mic icon)"
        - "최근 검색어 리스트 (Popover)"
      advanced_options:
        - "검색 범위: 'Post Titles', 'Content', 'Code Blocks'"
        - "날짜 범위 (DateRangePicker)"
        - "카테고리 (MultiSelect)"
  
  results_section:
    header:
      - "Found X results (text-lg font-semibold)"
      - "정렬 Select: 'Relevance', 'Date', 'Views'"
    
    categories:
      - "All", "Posts", "Projects", "Pages"
      - "각 탭에 결과 수 Badge"
    
    results_list:
      item:
        header:
          - "타입 Badge ('Post', 'Project', 'Page')"
          - "제목 (CardTitle, 검색어 하이라이트)"
          - "URL breadcrumb (text-sm text-muted-foreground)"
        content:
          - "스니펫 (검색어 하이라이트, line-clamp-2)"
          - "매칭 태그들 (Badge variant='outline')"
        footer:
          - "메타 정보 (날짜, 조회수)"
          - "View Button (variant='ghost', ArrowRight)"
    
    pagination:
      - "Skeleton 로딩 상태"
      - "Load More Button (variant='outline')"
  
  filter_sidebar:
    header: "Refine Results"
    content:
      categories:
        - "카테고리 필터 (Checkbox 리스트)"
        - "각각 결과 수 표시"
      date:
        - "빠른 선택 버튼들"
        - "커스텀 DateRangePicker"
      tags:
        - "인기 태그 Checkbox 리스트"
      actions:
        - "검색 결과 수 표시"
        - "Clear Filters Button (variant='outline')"
  
  search_states:
    initial:
      - "인기 검색어 (Badge 리스트)"
      - "추천 카테고리"
      - "최근 포스트"
    loading:
      - "Skeleton 카드들"
      - "검색바 로딩 Spinner"
    no_results:
      - "No results found (text-xl font-semibold)"
      - "검색 제안"
      - "인기 포스트 추천"
  
  search_history:
    header: "Recent Searches"
    content:
      - "검색어 리스트 (Button variant='ghost')"
      - "각각 X 버튼으로 삭제 가능"
      - "Clear All Button (variant='outline')"
  
  trending_searches:
    header: "Trending Searches"
    content:
      - "순위별 검색어 (numbered list)"
      - "각각 Badge with 증감 화살표"
```

## 모바일 최적화

```yaml
mobile_optimization:
  homepage:
    layout:
      - "상단 고정 헤더 (sticky top-0, backdrop-blur)"
      - "Sheet 트리거 (Menu icon)"
      - "사이트 로고/제목 (중앙)"
      - "다크모드 토글 + 검색 버튼 (우측)"
    
    navigation:
      sheet: "side='left', className='w-80'"
      header: "프로필 섹션 (Avatar + 이름 + 소개)"
      items: "Button variant='ghost', 아이콘 + 레이블, min height 48px"
    
    content:
      search: "Input with Search icon (rounded-full)"
      filters: "Badge 리스트 (horizontal scroll)"
      cards: "Card className='overflow-hidden'"
    
    touch_features:
      - "모든 터치 영역 최소 44x44px"
      - "카드 전체 터치 가능 영역" 
      - "스와이프 제스처: 북마크, 공유"
      - "Pull-to-refresh"
      - "하단 고정 검색 FAB"
      - "무한 스크롤 로딩"
      - "스크롤 진행률 표시"
  
  post_page:
    - "댓글 작성은 Sheet로 전체화면"
    - "TOC는 Collapsible 컴포넌트로"
    - "답글은 별도 페이지로 네비게이션"
    - "스와이프로 댓글 액션 (좋아요, 답글)"
``` 