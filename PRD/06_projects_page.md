---
title: "프로젝트 쇼케이스"
section: "프로젝트 포트폴리오"
version: "1.0"
---

header:
  title: "Projects (text-3xl font-bold)"
  description: "Things I've built and contributed to"
  add_button: "프로젝트 추가 Button (variant='default', Plus icon)"

filters:
  container: "Card"
  content_style: "flex gap-4 items-center"
  project_filter:
    component: "Tabs"
    options:
      - "All"
      - "Web App"
      - "Mobile"
      - "API"
      - "Tool"
    badge: "프로젝트 수"
  sort_options:
    component: "Select"
    options:
      - "Latest"
      - "Popular"
      - "Technology"
  view_toggle:
    component: "ToggleGroup"
    options:
      - "Grid"
      - "List"

project_grid:
  container: "grid gap-6 md:grid-cols-2"
  card_style: "Card className='group overflow-hidden'"
  card_components:
    thumbnail:
      image: "aspect-video, group-hover:scale-105"
      overlay: "absolute inset-0, bg-black/60"
      actions:
        style: "absolute top-2 right-2"
        buttons:
          - "Live Demo (Button size='sm', ExternalLink icon)"
          - "GitHub (Button size='sm', Github icon)"
    
    header:
      title: "CardTitle, group-hover:text-primary"
      status:
        options:
          - "'Completed' (variant='default')"
          - "'In Progress' (variant='secondary')"
          - "'Planned' (variant='outline')"
    
    content:
      description: "한줄 설명 (CardDescription)"
      tech_stack:
        style: "flex gap-1 flex-wrap"
        format: "각 기술: Badge variant='outline' (size='sm')"
      github_stats:
        style: "flex gap-4 text-sm"
        items:
          - "Star 수 (Star icon)"
          - "Fork 수 (GitFork icon)"
          - "언어 (Code icon)"
    
    footer:
      style: "justify-between"
      date: "개발 기간 (Calendar icon + 날짜)"
      details: "'View Details' Button (variant='ghost', ArrowRight)"

hover_effects:
  - "썸네일 스케일 업"
  - "제목 색상 변경"
  - "그림자 강화"
  - "상세 정보 오버레이"

project_detail:
  container: "DialogContent (max-w-4xl)"
  elements:
    header: "제목 + 닫기 버튼"
    gallery:
      component: "Carousel"
      content: "스크린샷들"
      navigation: "네비게이션 버튼"
      indicators: "인디케이터 dots"
    tabs:
      options:
        - "Overview: 상세 설명, 개발 배경"
        - "Features: 주요 기능 리스트"
        - "Tech Stack: 사용 기술 상세"
        - "Challenges: 기술적 도전과 해결책"
    footer: "액션 버튼들"

sidebar_widgets:
  style: "space-y-6"
  github_activity:
    container: "Card"
    header: "GitHub Activity"
    content: "커밋 그래프 (간소화)"
  
  tech_stats:
    container: "Card"
    header: "Technology Usage"
    content: "원형 차트 또는 Progress bars"
  
  project_status:
    container: "Card"
    header: "Project Status"
    content:
      - "완료: X개 (Progress bar)"
      - "진행중: X개 (Progress bar)"
      - "계획중: X개 (Progress bar)"
