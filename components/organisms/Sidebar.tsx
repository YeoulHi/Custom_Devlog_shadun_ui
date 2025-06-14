'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  FileText, 
  List, 
  Hash, 
  Archive, 
  User, 
  Github, 
  Linkedin, 
  Mail,
  Search,
  LucideIcon
} from 'lucide-react';

// 프로필 정보 타입 정의
interface ProfileInfo {
  name: string;
  title: string;
  avatarUrl: string;
}

// 사이드바 컴포넌트의 타입 정의
interface SidebarProps {
  className?: string;
  profile?: ProfileInfo;
}

// 네비게이션 메뉴 아이템 타입 정의
interface NavItem {
  href: string;
  icon: LucideIcon;
  label: string;
}

// 소셜 링크 아이템 타입 정의
interface SocialLink {
  href: string;
  icon: LucideIcon;
  label: string;
}

/**
 * 개발자 블로그의 사이드바 컴포넌트
 * 프로필 정보, 네비게이션 메뉴, 소셜 링크를 포함
 * 현재 경로에 따라 활성 메뉴를 동적으로 표시
 */
const Sidebar: React.FC<SidebarProps> = ({ 
  className = '',
  profile = {
    name: 'Ryan Carter',
    title: 'Software Engineer',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb7E6ZmFjNDmdYS7Zx1XKYLy-n5EsMHPeokE0CHtzTrg9gvJwqUApH080etuLTGXK84g-69n6vaGw3h5zWaLUfv-VkI3l48FeZGqcjqFJd4nzhQEwHn5CPV00WDtIPDINbmSEdrqwEomOn-ZDJtCQw6dqynEaLhEaWFIQimNMjuD5YxmZ0rvkB6CMq4RLdNYJCp4DAv8NzPiYOzw911NNtSE8PWh5FdJZSvYb8ei45kRyPmxRR5mN9L696bVBcp30wI0PUPchwzjU'
  }
}) => {
  // 현재 경로를 가져와서 활성 메뉴 판단에 사용
  const pathname = usePathname();

  // 네비게이션 메뉴 아이템 배열 정의
  const navItems: NavItem[] = [
    { href: '/', icon: Home, label: 'HOME' },
    { href: '/posts', icon: FileText, label: 'POSTS' },
    { href: '/categories', icon: List, label: 'CATEGORIES' },
    { href: '/tags', icon: Hash, label: 'TAGS' },
    { href: '/search', icon: Search, label: 'SEARCH' },
    { href: '/archives', icon: Archive, label: 'ARCHIVES' },
    { href: '/about', icon: User, label: 'ABOUT' },
  ];

  // 소셜 링크 배열 정의
  const socialLinks: SocialLink[] = [
    { href: 'https://github.com', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:contact@example.com', icon: Mail, label: 'Email' },
  ];

  // 현재 경로가 메뉴 아이템과 일치하는지 확인하는 함수
  const isActiveRoute = (href: string): boolean => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <div className={`layout-content-container flex flex-col w-80 ${className}`}>
      <div className="flex h-full min-h-[700px] flex-col justify-between bg-gray-50 p-4">
        {/* 상단 섹션: 프로필 + 네비게이션 */}
        <div className="flex flex-col gap-4">
          {/* 프로필 섹션 */}
          <div className="flex gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage: `url("${profile.avatarUrl}")`
              }}
            />
            <div className="flex flex-col">
              <h1 className="text-[#101518] text-base font-medium leading-normal">{profile.name}</h1>
              <p className="text-[#5c748a] text-sm font-normal leading-normal">{profile.title}</p>
            </div>
          </div>

          {/* 네비게이션 메뉴 */}
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = isActiveRoute(item.href);
              
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 transition-colors hover:bg-[#eaedf1] ${
                    isActive ? 'rounded-xl bg-[#eaedf1]' : ''
                  }`}
                >
                  <IconComponent size={24} className="text-[#101518]" />
                  <p className="text-[#101518] text-sm font-medium leading-normal">{item.label}</p>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* 하단 섹션: 소셜 링크 */}
        <div className="flex flex-col gap-1">
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 transition-colors hover:bg-[#eaedf1] rounded-xl"
                aria-label={link.label}
              >
                <IconComponent size={24} className="text-[#101518]" />
                <p className="text-[#101518] text-sm font-medium leading-normal"></p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 