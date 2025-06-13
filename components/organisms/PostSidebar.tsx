// 포스트 페이지 전용 사이드바 컴포넌트 - 프로필, 네비게이션, 소셜 링크 포함
'use client';

import Link from 'next/link';

// 사이드바 프로필 정보 타입
interface ProfileInfo {
  name: string;
  title: string;
  status: string;
  avatarUrl: string;
}

// 네비게이션 메뉴 아이템 타입
interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

// 소셜 링크 타입
interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface PostSidebarProps {
  profile?: ProfileInfo;
  className?: string;
}

// 기본 프로필 정보
const defaultProfile: ProfileInfo = {
  name: 'Emily Coder',
  title: 'Full-Stack Developer',
  status: 'Online',
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL68GqjNIgXObEioOP15HFZTFG9IyzgXMtRCa7mcrf4qPTToHz5sWVI_6iv2ER1fkHx3JNlL9djVfdSelF8QBgBK26Tahc83utq7bLnSwG-GsbCgYFH2nXDEMuVNZyGfQUyONtDPWazjHsBcll128Ni1K9Ah0EFkNjJI8n01gKMM7kjy6hDaSBg1VNPAwJG67qeuFme4s233HIwxQoeN-6yqjz6SKneapotOKVUKbPK5dMV5PFFv4vvF7b4KLwCzRF45oDDWqT-Ims'
};

// 네비게이션 메뉴 설정
const navigationItems: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z" />
      </svg>
    )
  },
  {
    id: 'posts',
    label: 'Posts',
    href: '/posts',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H156.69A15.92,15.92,0,0,0,168,219.31L219.31,168A15.92,15.92,0,0,0,224,156.69V48A16,16,0,0,0,208,32ZM96,88h64a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16Zm32,80H96a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16ZM96,136a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm64,68.69V160h44.7Z" />
      </svg>
    ),
    isActive: true // 포스트 페이지에서는 Posts가 활성 상태
  },
  {
    id: 'categories',
    label: 'Categories',
    href: '/categories',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z" />
      </svg>
    )
  },
  {
    id: 'tags',
    label: 'Tags',
    href: '/tags',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M224,88H175.4l8.47-46.57a8,8,0,0,0-15.74-2.86l-9,49.43H111.4l8.47-46.57a8,8,0,0,0-15.74-2.86L95.14,88H48a8,8,0,0,0,0,16H92.23L83.5,152H32a8,8,0,0,0,0,16H80.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,80,224a8,8,0,0,0,7.86-6.57l9-49.43H144.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,144,224a8,8,0,0,0,7.86-6.57l9-49.43H208a8,8,0,0,0,0-16H163.77l8.73-48H224a8,8,0,0,0,0-16Zm-76.5,64H99.77l8.73-48h47.73Z" />
      </svg>
    )
  },
  {
    id: 'archives',
    label: 'Archives',
    href: '/archives',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M223.16,68.42l-16-32A8,8,0,0,0,200,32H56a8,8,0,0,0-7.16,4.42l-16,32A8.08,8.08,0,0,0,32,72V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V72A8.08,8.08,0,0,0,223.16,68.42ZM60.94,48H195.06l8,16H52.94ZM208,208H48V80H208V208Zm-42.34-61.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,164.69V104a8,8,0,0,1,16,0v60.69l18.34-18.35A8,8,0,0,1,165.66,146.34Z" />
      </svg>
    )
  },
  {
    id: 'about',
    label: 'About',
    href: '/about',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" />
      </svg>
    )
  }
];

// 소셜 링크 설정
const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'Github',
    href: 'https://github.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z" />
      </svg>
    )
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
      </svg>
    )
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:emily@techblog.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z" />
      </svg>
    )
  }
];

export default function PostSidebar({ profile = defaultProfile, className = '' }: PostSidebarProps) {
  return (
    <div className={`layout-content-container flex flex-col w-80 ${className}`}>
      {/* 프로필 카드 섹션 */}
      <div className="p-4">
        <div className="flex flex-col items-stretch justify-start rounded-xl lg:flex-row lg:items-start">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{
              backgroundImage: `url("${profile.avatarUrl}")`
            }}
          />
          <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 lg:px-4">
            <p className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em]">
              {profile.name}
            </p>
            <div className="flex items-end gap-3 justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-[#5c748a] text-base font-normal leading-normal">
                  {profile.title}
                </p>
                <p className="text-[#5c748a] text-base font-normal leading-normal">
                  {profile.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 네비게이션 메뉴 섹션 */}
      <div className="flex h-full min-h-[700px] flex-col justify-between bg-gray-50 p-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                  item.isActive 
                    ? 'bg-[#eaedf1] text-[#101518]' 
                    : 'text-[#101518] hover:bg-[#eaedf1]'
                }`}
              >
                <div className="text-[#101518]">
                  {item.icon}
                </div>
                <p className="text-sm font-medium leading-normal">
                  {item.label}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* 소셜 링크 섹션 */}
        <div className="grid grid-cols-3 gap-2 px-4">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 bg-gray-50 py-2.5 text-center hover:bg-[#eaedf1] transition-colors rounded-lg"
            >
              <div className="rounded-full bg-[#eaedf1] p-2.5">
                <div className="text-[#101518]">
                  {link.icon}
                </div>
              </div>
              <p className="text-[#101518] text-sm font-medium leading-normal">
                {link.label}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
} 