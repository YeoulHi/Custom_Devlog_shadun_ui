'use client';

import { Profile } from '../../types/about';

// AboutHeader 컴포넌트의 Props 타입 정의
interface AboutHeaderProps {
  profile: Profile;
}

/**
 * AboutHeader 컴포넌트
 * About 페이지의 상단에 개인 정보와 제목을 표시하는 컴포넌트
 */
const AboutHeader = ({ profile }: AboutHeaderProps) => {
  return (
    <div className="flex flex-wrap justify-between gap-3 p-4">
      {/* 페이지 제목 */}
      <p className="text-[#101518] tracking-light text-[32px] font-bold leading-tight min-w-72">
        About Me
      </p>
      
      {/* 프로필 정보 (모바일에서만 표시) */}
      <div className="md:hidden flex flex-col items-center gap-4 w-full mt-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32"
          style={{
            backgroundImage: `url("${profile.avatarUrl}")`
          }}
        />
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em]">
            {profile.name}
          </p>
          <p className="text-[#5c748a] text-base font-normal leading-normal">
            {profile.title}
          </p>
          <p className="text-[#5c748a] text-base font-normal leading-normal">
            {profile.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader; 