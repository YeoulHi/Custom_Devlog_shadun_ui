---
title: "About 페이지"
section: "소개 페이지"
version: "1.0"
---

hero_section:
  container: "Card className='border-0 shadow-none'"
  content_style: "text-center space-y-6"
  elements:
    avatar:
      style: "className='w-32 h-32 mx-auto'"
      image: "프로필 이미지"
      border: "ring-4 ring-border"
    profile:
      style: "space-y-2"
      name: "이름 (text-3xl font-bold)"
      title: "직책 (text-xl text-muted-foreground)"
    bio: "한줄 소개 (text-lg)"
    status: "상태 배지 (Badge variant='default', size='lg')"
    social_links:
      style: "flex gap-2 justify-center"
      buttons: "Button variant='outline' size='icon' (각 소셜별)"

about_section:
  container: "Card"
  header:
    title: "About Me"
    icon: "User"
  content_style: "prose"
  elements:
    - "개인 스토리 (2-3 문단)"
    - "관심사와 목표"
    - "현재 학습 중인 기술들 (Badge들로 표시)"

community_section:
  container: "Card"
  header:
    title: "Community Engagement"
    icon: "Users"
    description: "How I contribute to the developer community"
  content:
    style: "grid gap-4 md:grid-cols-2"
    blog_stats:
      - "'Blog Posts Written' (PenTool icon + 숫자)"
      - "'Comments Received' (MessageCircle icon + 숫자)"
      - "'Discussions Started' (MessageSquare icon + 숫자)"
      - "Progress bars로 시각화"
    engagement_stats:
      - "'Average Response Time' (Clock icon + '2시간')"
      - "'Comment Response Rate' (TrendingUp icon + '95%')"
      - "'Community Helpfulness Score' (Star icon + '4.8/5')"

skills_section:
  container: "Card"
  header:
    title: "Skills & Technologies"
    icon: "Code"
    description: "Technologies I work with"
  content:
    tabs:
      list:
        - "Frontend"
        - "Backend"
        - "DevOps"
        - "Tools"
      content:
        style: "grid gap-4 md:grid-cols-2"
        skill_item:
          - "아이콘 + 기술명 (flex items-center gap-2)"
          - "Progress bar (숙련도)"
          - "최근 사용일 (text-xs text-muted-foreground)"

experience_timeline:
  container: "Card"
  header:
    title: "Experience & Education"
    icon: "Briefcase"
  content:
    style: "relative"
    timeline_line: "absolute left border"
    item:
      container: "Card variant='outline'"
      period: "기간 Badge (variant='secondary')"
      organization: "회사/학교명 (font-semibold)"
      role: "역할/전공 (text-muted-foreground)"
      achievements: "주요 성과 (list-disc)"
      icon: "Building2 또는 GraduationCap"

stats_section:
  style: "grid gap-4 md:grid-cols-4"
  github_stats:
    header: "GitHub Stats"
    icon: "Github"
    content: "커밋, 저장소, 언어 통계"
    emphasis: "text-3xl font-bold"
  
  blog_stats:
    header: "Blog Stats"
    icon: "PenTool"
    content: "포스트 수, 조회수, 좋아요 수"
  
  comments_stats:
    header: "Engagement Stats"
    icon: "MessageCircle"
    content: "받은 댓글, 답글 수, 반응률"
  
  learning_stats:
    header: "Learning Stats"
    icon: "BookOpen"
    content: "완료 코스, 자격증, 읽은 책"

activity_feed:
  container: "Card"
  header:
    title: "Recent Activity"
    icon: "Activity"
    action: "'View All' Button (variant='ghost' size='sm')"
  content:
    style: "space-y-3"
    timeline_items:
      - "'Replied to 5 comments on [포스트제목]' (시간 + Avatar)"
      - "'Published new post: [제목]' (시간 + PenTool icon)"
      - "'Received 10 likes on [포스트제목]' (시간 + Heart icon)"
      - "'Started discussion about [주제]' (시간 + MessageSquare icon)"

contact_section:
  container: "Card"
  header:
    title: "Get In Touch"
    icon: "Mail"
    description: "Feel free to reach out for collaborations or discussions"
  content:
    style: "grid gap-4 md:grid-cols-3"
    cards:
      email:
        content: "Mail icon + 이메일"
        action: "'Send Email' Button"
      linkedin:
        content: "Linkedin icon + 프로필"
        action: "'Connect' Button"
      github:
        content: "Github icon + 사용자명"
        action: "'Follow' Button"
    message_form:
      - "Label + Input (이름, 이메일)"
      - "Label + Textarea (메시지)"
      - "Button (variant='default', 'Send Message')"
      - "응답 시간 안내: 'I typically respond within 24 hours'"

discussion_section:
  container: "Card"
  header:
    title: "Let's Discuss"
    icon: "MessageSquare"
    description: "I love engaging with fellow developers"
  content:
    topics:
      style: "flex gap-2 flex-wrap"
      items:
        - "Badge variant='outline': 'React Best Practices'"
        - "Badge variant='outline': 'Career Advice'"
        - "Badge variant='outline': 'Code Reviews'"
        - "Badge variant='outline': 'Open Source'"
    cta:
      - "'Have questions or want to discuss any of these topics?'"
      - "'Comment on my latest posts or reach out directly!'"
