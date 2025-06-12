---
title: "검색 페이지"
section: "통합 검색 기능"
version: "1.0"
---

search_interface:
  container: "Card"
  header:
    title: "Search"
    icon: "Search"
    description: "Find posts, projects, and more"
  
  content:
    search_bar:
      style: "relative"
      input: "Input (large, Search icon prefix)"
      voice_button: "음성 검색 Button (Mic icon, absolute right)"
      suggestions:
        trigger: "Popover"
        content: "최근 검색어 리스트"
        item_style: "Button variant='ghost' (justify-start)"
    
    advanced_options:
      component: "Accordion"
      item: "Advanced Search"
      options:
        search_scope:
          component: "Checkbox group"
          items:
            - "Post Titles"
            - "Content"
            - "Code Blocks"
        date_range: "DateRangePicker"
        categories: "MultiSelect"

results_section:
  header:
    style: "flex justify-between items-center"
    count: "'Found X results' (text-lg font-semibold)"
    sort: "정렬 Select: 'Relevance', 'Date', 'Views'"
  
  categories:
    component: "Tabs"
    options:
      - "All"
      - "Posts"
      - "Projects"
      - "Pages"
    badge: "결과 수"
  
  results_list:
    item:
      container: "Card className='hover:shadow-sm'"
      header:
        type: "타입 Badge ('Post', 'Project', 'Page')"
        title: "CardTitle, 검색어 하이라이트"
        url: "URL breadcrumb (text-sm text-muted-foreground)"
      content:
        snippet: "스니펫 (검색어 하이라이트, line-clamp-2)"
        tags: "매칭 태그들 (Badge variant='outline')"
      footer:
        meta: "메타 정보 (날짜, 조회수)"
        view_button: "'View' Button (variant='ghost', ArrowRight)"
  
  pagination:
    loading: "Skeleton 로딩 상태"
    load_more: "'Load More' Button (variant='outline')"

filter_sidebar:
  container: "Card"
  header: "Refine Results"
  content:
    style: "space-y-4"
    category_filter:
      component: "Accordion"
      item: "Categories"
      content: "Checkbox 리스트 (각각 결과 수 표시)"
    
    date_filter:
      component: "Accordion"
      item: "Date Range"
      content:
        - "빠른 선택 버튼들"
        - "커스텀 DateRangePicker"
    
    tag_filter:
      component: "Accordion"
      item: "Tags"
      content: "인기 태그 Checkbox 리스트"
    
    results_count: "검색 결과 수 표시"
    clear_button: "'Clear Filters' Button (variant='outline')"

search_states:
  initial:
    container: "Card"
    content:
      - "인기 검색어 (Badge 리스트)"
      - "추천 카테고리"
      - "최근 포스트"
  
  loading:
    - "Skeleton 카드들"
    - "검색바 로딩 Spinner"
  
  no_results:
    container: "Card"
    content:
      - "일러스트레이션 또는 아이콘"
      - "'No results found' (text-xl font-semib
