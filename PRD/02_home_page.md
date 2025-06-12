---
title: "홈페이지"
section: "블로그 목록 페이지"
version: "1.0"
---

header:
  title: "Recent Updates"
  title_style: "scroll-m-20 text-3xl font-bold"
  subtitle: "Latest posts and insights"
  subtitle_style: "text-lg text-muted-foreground"

search_filters:
  container_style: "flex gap-4 items-center"
  search_input:
    placeholder: "Search posts..."
    icon: "Search"
  category_filter: "Select 컴포넌트, multiple"
  sort_options:
    - "Latest"
    - "Popular"
    - "Most Commented"

blog_cards:
  container: "Card className='group hover:shadow-lg transition-shadow'"
  layout: "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
  card_components:
    header:
      thumbnail: "rounded-md, aspect-video, object-cover"
      category_badge: "variant='outline', top-right 절대 위치"
      popularity_badge: "'🔥 Hot' (variant='destructive', 댓글 많은 글)"
    content:
      title: "CardTitle, line-clamp-2, group-hover:text-primary"
      summary: "CardDescription, line-clamp-3"
      tags: "flex gap-1 flex-wrap, Badge variant='secondary'"
    footer:
      meta_info:
        style: "flex gap-3 text-sm text-muted-foreground"
        items:
          - "작성일 (Calendar icon)"
          - "읽기 시간 (Clock icon)"
          - "조회수 (Eye icon)"
          - "댓글 수 (MessageCircle icon + 숫자)"
      action_buttons:
        style: "flex gap-2"
        buttons:
          - "좋아요 (variant='ghost' size='sm', Heart icon + 숫자)"
          - "북마크 (variant='ghost' size='sm', Bookmark icon)"

comments_preview:
  trigger: "댓글 수 영역"
  content:
    title: "'Recent Comments' (font-medium)"
    items: "최근 댓글 2-3개 (Avatar + 이름 + 짧은 댓글)"
    action: "'View all comments' Button (variant='ghost' size='sm')"

pagination:
  components:
    - "PaginationContent"
    - "PaginationItem"
    - "PaginationLink"
    - "이전/다음 화살표 (ChevronLeft, ChevronRight)"

sidebar_widgets:
  popular_posts:
    title: "Popular Posts"
    content: "간소화된 포스트 리스트 (제목 + 댓글 수)"
  
  active_discussions:
    title: "Active Discussions"
    icon: "MessageCircle"
    content: "댓글 많은 포스트 순위"
    item_format: "제목 + 'X comments' Badge"
  
  tag_cloud:
    content: "다양한 크기의 Badge들"
    hover_style: "hover:bg-primary hover:text-primary-foreground"
  
  recent_comments:
    title: "Recent Comments"
    content: "실시간 댓글 피드"
    item_format: "Avatar + 사용자명 + 'commented on [포스트제목]'"
