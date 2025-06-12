---
title: "모바일 최적화"
section: "모바일 페이지 최적화"
version: "1.0"
---

mobile_layout:
  viewport: "375px 기준"
  header:
    position: "sticky top-0, backdrop-blur"
    elements:
      left: "Sheet 트리거 (Button variant='ghost' size='icon', Menu icon)"
      center: "사이트 로고/제목 (font-bold)"
      right: "다크모드 토글 + 검색 (Button variant='ghost' size='icon')"

mobile_navigation:
  component: "Sheet"
  properties: "side='left', className='w-80'"
  sections:
    header:
      - "프로필 섹션 (Avatar + 이름 + 소개)"
      - "상태 Badge"
    menu:
      style: "Button variant='ghost' (justify-start, full width)"
      item_height: "min height 48px"
      format: "아이콘 + 레이블"
      active: "현재 페이지 하이라이트"
    footer: "소셜 링크들 (flex gap-2)"

mobile_content:
  search_section:
    style: "px-4 py-2"
    search_input: "Input with Search icon (rounded-full)"
    filters:
      style: "horizontal scroll"
      format: "Badge 리스트 (gap-2, 스크롤 가능)"
  
  blog_cards:
    style: "px-4 space-y-4"
    card:
      container: "Card className='overflow-hidden'"
      thumbnail: "aspect-video, w-full"
      content:
        style: "p-4"
        elements:
          - "카테고리 Badge (absolute top-2 left-2)"
          - "제목 (text-lg font-semibold, line-clamp-2)"
          - "설명 (text-sm text-muted-foreground, line-clamp-2)"
          - "태그들 (flex gap-1, horizontal scroll)"
        meta:
          style: "flex justify-between, text-xs"
          left: "작성일, 읽기시간"
          right: "북마크 Button (size='sm')"

touch_optimization:
  - "모든 터치 영역 최소 44x44px"
  - "카드 전체 터치 가능 영역"
  - "스와이프 제스처"
  - "Pull-to-refresh (RefreshCw icon)"

swipe_gestures:
  card_right: "북마크"
  card_left: "공유"
  comment_right: "좋아요"
  comment_left: "답글"

mobile_specific_features:
  fab:
    style: "Button (size='icon', className='fixed bottom-4 right-4')"
    icon: "Search icon, shadow-lg"
  infinite_scroll:
    loading: "Skeleton 카드들"
  progress_bar: "Progress bar (fixed top, thin)"

post_page_mobile:
  comment_writing: "Sheet로 전체화면"
  toc: "Collapsible 컴포넌트로"
  replies: "별도 페이지로 네비게이션"
  comment_actions: "스와이프로 좋아요, 답글"

performance_optimizations:
  - "이미지 지연 로딩 (lazy loading)"
  - "작은 화면에 최적화된 이미지 크기"
  - "터치 이벤트 디바운싱"
  - "스크롤 이벤트 스로틀링"
  - "오프라인 지원 (서비스 워커)"

accessibility:
  - "적절한 색상 대비"
  - "충분한 터치 영역"
  - "스크린 리더 지원"
  - "키보드 내비게이션 지원"
