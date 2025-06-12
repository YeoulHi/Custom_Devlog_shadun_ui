---
title: "태그/카테고리 페이지"
section: "필터링 페이지"
version: "1.0"
---

header:
  - "Breadcrumb 네비게이션"
  - "페이지 제목 'Categories' 또는 'Tags' (text-3xl font-bold)"
  - "설명 텍스트 (text-lg text-muted-foreground)"

search_filters:
  container: "Card"
  content_style: "space-y-4"
  elements:
    search: "검색 Input (Search icon, 'Filter categories...')"
    sort:
      component: "Tabs 컴포넌트"
      options:
        - "Name"
        - "Post Count" 
        - "Recent"
    view_toggle:
      component: "ToggleGroup"
      options:
        - "Grid view (Grid3X3 icon)"
        - "List view (List icon)"

category_grid:
  container: "grid gap-4 md:grid-cols-2 lg:grid-cols-3"
  card_style: "Card className='group hover:shadow-md'"
  card_components:
    header:
      - "카테고리 아이콘 (Lucide icon, 크기 large)"
      - "Badge (포스트 수, variant='secondary')"
    content:
      - "카테고리명 (CardTitle)"
      - "설명 (CardDescription)"
      - "최근 업데이트 (text-xs text-muted-foreground)"
    footer:
      - "'View Posts' Button (variant='ghost', ArrowRight icon)"

tag_cloud:
  container: "Card"
  header: "All Tags"
  content:
    style: "flex gap-2 flex-wrap"
    tags:
      - "Badge 크기별 (사용 빈도에 따라)"
      - "variant='outline' (기본)"
      - "variant='default' (선택됨)"
      - "호버 시 variant='secondary'"

filter_results:
  active_filters:
    container: "Card"
    label: "'Active Filters' label"
    tags: "선택된 태그들 (Badge with X button)"
    clear_button: "'Clear All' Button (variant='outline')"
  
  stats:
    - "'Found X posts' (text-sm text-muted-foreground)"
    - "결과 정렬 (Select 컴포넌트)"
  
  posts:
    - "간소화된 카드 형태 (제목 + 요약 + 메타)"
    - "Skeleton 로딩 상태"

sidebar:
  style: "space-y-6"
  
  stats_card:
    container: "Card"
    content:
      - "총 포스트 수, 카테고리 수, 태그 수"
      - "각각 아이콘과 함께 표시"
  
  trending_tags:
    container: "Card"
    header: "Trending Tags"
    content: "Top 10 태그 리스트"
  
  recent_activity:
    container: "Card"
    header: "Recent Activity"
    content: "타임라인 형태의 활동 내역"
