---
title: "포스트 페이지"
section: "개별 포스트 상세 페이지"
version: "1.0"
---

post_header:
  component: "Card 컴포넌트"
  elements:
    - "Breadcrumb 네비게이션"
    - "카테고리 Badge (variant='default')"
    - "제목 (scroll-m-20 text-4xl font-bold tracking-tight)"
    - "메타 정보 (flex gap-4 text-sm text-muted-foreground):"
  meta_info:
    - "Avatar + 작성자명"
    - "작성일 (Calendar icon)"
    - "업데이트일 (RefreshCw icon)"
    - "읽기시간 (Clock icon)"
    - "조회수 (Eye icon)"
    - "댓글 수 (MessageCircle icon)"
  
  tags:
    style: "flex gap-2 flex-wrap"
    format: "Badge variant='outline' (각 태그별로)"
  
  interaction_bar:
    style: "Separator 후, flex justify-between"
    left_actions:
      - "좋아요 Button (variant='ghost', Heart icon + 숫자)"
      - "북마크 Button (variant='ghost', Bookmark icon)"
      - "댓글로 이동 Button (variant='ghost', MessageCircle icon)"
    right_actions:
      - "DropdownMenu trigger='Share' (Share icon)"
      - "소셜 공유: Twitter, Facebook, LinkedIn, Copy Link"

content:
  main_text:
    style: "prose prose-slate max-w-none"
    typography: "Typography 스타일 적용"
    width: "최대 너비 800px, 중앙 정렬"
    line_height: "줄간격 최적화 (leading-7)"
  
  code_blocks:
    header: "언어명 + 복사 버튼"
    content: "하이라이팅된 코드"
    copy_button: "Button variant='ghost' size='sm', Copy icon"
  
  images:
    click_action: "Dialog로 확대"
    dialog_content: "원본 크기 표시"

toc_sidebar:
  position: "sticky top-20"
  header: "Table of Contents"
  content:
    - "ScrollArea (높이 제한)"
    - "네스팅된 링크 목록"
    - "현재 섹션 하이라이트 (text-primary font-medium)"
    - "진행률 Progress bar (상단)"

comments_system:
  container: "Card className='mt-12'"
  header:
    title: "'Comments (42)' (MessageCircle icon)"
    sort_options: "'Latest', 'Oldest', 'Most Liked'"
  
  comment_form:
    logged_in:
      - "Avatar + 작성자명 (flex items-center gap-2)"
      - "Textarea (placeholder='Add a comment...', min-height='100px')"
      - "서식 버튼들 (Bold, Italic, Code, Link)"
      - "'Post Comment' Button (variant='default')"
    not_logged_in:
      - "Alert (variant='default')"
      - "'Please sign in to comment'"
      - "'Sign in with Google/GitHub/Email' Button들"
  
  comments_list:
    style: "space-y-6"
    comment:
      container: "Card variant='outline' className='p-4'"
      header:
        left: "Avatar + 사용자명 + 작성시간"
        right: "DropdownMenu (MoreHorizontal icon)"
        dropdown_options: "'Reply', 'Report', 'Share' 등"
      content:
        text: "본문 텍스트 (prose-sm)"
        preview: "이미지/링크 미리보기 (필요시)"
        code: "코드 블록 지원 (syntax highlighting)"
      actions:
        - "좋아요 Button (variant='ghost', Heart icon + 숫자)"
        - "답글 Button (variant='ghost', Reply icon)"
        - "신고 Button (variant='ghost', Flag icon)"
      replies:
        style: "nested, ml-8, space-y-3"
        trigger: "'Show X replies' Collapsible trigger"
        content: "중첩된 답글들"
        reply_form: "'Reply to @username' 작성 폼"
  
  pagination:
    - "'Load More Comments' Button (variant='outline')"
    - "또는 Pagination 컴포넌트"

bottom_section:
  author_profile:
    - "Avatar (large) + 소개 + 소셜 링크"
    - "'View all posts by author' Button"
  
  related_posts:
    title: "Related Posts"
    content: "3개 포스트 그리드"
    format: "간소화된 카드 형태 (썸네일 + 제목 + 댓글 수)"
  
  navigation:
    style: "flex justify-between"
    previous: "이전 포스트 (Button variant='outline', ArrowLeft + 제목 미리보기)"
    next: "다음 포스트 (Button variant='outline', ArrowRight + 제목 미리보기)"

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
