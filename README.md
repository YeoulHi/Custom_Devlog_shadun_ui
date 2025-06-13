# Custom_Devlog_shadun_ui
Jekyll 기반 Chirpy + shadcn/ui 퍼스널 블로그

## 백업 확인
이 저장소는 백업 목적으로 생성되었습니다.


# Atoms (원자 컴포넌트)

가장 기본적인 UI 요소들을 포함합니다. 더 이상 분해할 수 없는 최소 단위의 컴포넌트들입니다.

## 포함될 컴포넌트들:
- Button (버튼 컴포넌트)
- Input (입력 필드 컴포넌트)
- Badge (배지 컴포넌트)
- Avatar (아바타 컴포넌트)
- Icon (아이콘 컴포넌트)
- Typography (텍스트 스타일 컴포넌트)
- Spinner (로딩 스피너 컴포넌트)

## 특징:
- 재사용 가능한 최소 단위 컴포넌트
- 비즈니스 로직을 포함하지 않음
- shadcn/ui 기반 컴포넌트들을 래핑하거나 확장

# Molecules (분자 컴포넌트)

여러 개의 Atoms를 조합하여 만든 컴포넌트들입니다. 특정 기능을 수행하는 UI 그룹입니다.

## 포함될 컴포넌트들:
- SearchBar (검색바 - Input + Button 조합)
- PostCard (포스트 카드 - Avatar + Typography + Badge 조합)
- CommentItem (댓글 아이템 - Avatar + Typography + Button 조합)
- TagList (태그 리스트 - Badge들의 조합)
- SocialLinks (소셜 링크 - Icon + Button들의 조합)
- MetaInfo (메타 정보 - Icon + Typography 조합)
- ThemeToggle (테마 토글 - Button + Icon 조합)

## 특징:
- 2개 이상의 Atoms를 조합
- 단일 기능을 수행하는 UI 그룹
- 재사용 가능하며 독립적으로 동작

# Organisms (유기체 컴포넌트)

Atoms와 Molecules를 조합하여 만든 복잡한 UI 섹션들입니다. 페이지의 주요 영역을 구성합니다.

## 포함될 컴포넌트들:
- Header (헤더 - 네비게이션, 로고, 테마 토글 등)
- Sidebar (사이드바 - 프로필, 네비게이션, 소셜 링크 등)
- Footer (푸터 - 저작권, 링크 등)
- PostList (포스트 목록 - 여러 PostCard들의 조합)
- CommentSection (댓글 섹션 - 댓글 폼 + 댓글 리스트)
- ProjectGrid (프로젝트 그리드 - 여러 프로젝트 카드들)
- CategoryGrid (카테고리 그리드 - 카테고리 카드들)
- SearchResults (검색 결과 - 검색바 + 결과 리스트)

## 특징:
- 페이지의 주요 섹션을 구성
- 복잡한 비즈니스 로직을 포함할 수 있음
- 여러 Molecules와 Atoms를 조합