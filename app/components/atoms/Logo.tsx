'use client';

/**
 * 사이트 로고 컴포넌트
 * 사이트의 브랜드 아이덴티티를 표현하는 로고 컴포넌트입니다.
 */

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal';
}

export default function Logo({ size = 'md', variant = 'default' }: LogoProps) {
  // 사이즈에 따른 클래스 결정
  const sizeClasses = {
    sm: 'size-4',
    md: 'size-6',
    lg: 'size-8',
  };

  // 텍스트 사이즈에 따른 클래스 결정
  const textSizeClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  return (
    <div className="flex items-center gap-3 text-[#101518]">
      <div className={sizeClasses[size]}>
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
            fill="currentColor"
          />
        </svg>
      </div>
      {variant === 'default' && (
        <h2 className={`text-[#101518] ${textSizeClasses[size]} font-bold leading-tight tracking-[-0.015em]`}>TechBlog</h2>
      )}
    </div>
  );
} 