---
title: "사이트 구조"
section: "전체 사이트 구조"
version: "1.0"
---

layout:
  desktop:
    sidebar: "왼쪽 고정 사이드바 (280px, 다크 배경 with 미세한 보더)"
    main_content: "오른쪽 메인 콘텐츠 영역 (나머지 공간, 밝은 배경)"
  mobile:
    header: "상단 헤더 바 (모바일에서만 표시)"

sidebar:
  profile_card:
    styles: "rounded-lg, border, shadow-sm"
    elements:
      - "프로필 사진 (원형, 120px, ring-2 ring-border)"
      - "이름 (font-semibold text-lg)"
      - "한줄 소개 (text-muted-foreground)"
      - "상태 배지 (Badge variant='secondary')"
  
  navigation_card:
    styles: "mt-6"
    items:
      - name: "HOME"
        icon: "Lucide House"
      - name: "POSTS"
        icon: "Lucide PenTool"
      - name: "CATEGORIES"
        icon: "Lucide Folder"
      - name: "TAGS"
        icon: "Lucide Tag"
      - name: "ARCHIVES"
        icon: "Lucide Archive"
      - name: "ABOUT"
        icon: "Lucide User"
    hover_styles: "hover:bg-accent hover:text-accent-foreground"
  
  social_links:
    styles: "하단, flex gap-2"
    buttons: "GitHub, LinkedIn, Email (Button variant='ghost' size='icon')"

responsive:
  desktop: "사이드바 고정"
  tablet: "사이드바 슬라이드 오버레이 (Sheet 컴포넌트)"
  mobile: "상단 헤더 + Drawer 네비게이션"

theme_colors:
  background: "hsl(0 0% 100%)"
  foreground: "hsl(222.2 84% 4.9%)"
  card: "hsl(0 0% 100%)"
  card_foreground: "hsl(222.2 84% 4.9%)"
  border: "hsl(214.3 31.8% 91.4%)"
  accent: "hsl(210 40% 98%)"
  muted: "hsl(210 40% 96%)"
  primary: "hsl(222.2 47.4% 11.2%)"

dark_mode_toggle:
  position: "우상단 고정"
  style: "Button variant='ghost' size='icon'"
  icon: "Moon/Sun 아이콘 (Lucide)"
  animation: "부드러운 전환 애니메이션"
