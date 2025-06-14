'use client';

import { 
  Sidebar, 
  AboutHeader, 
  AboutContent, 
  SkillsSection, 
  TimelineSection 
} from '../../components/organisms';
import { getAboutData } from '../../data/about';

/**
 * About 페이지 컴포넌트
 * 개발자 소개, 기술 스택, 경력 등을 표시하는 페이지
 */
export default function AboutPage() {
  // About 페이지 데이터 가져오기
  const aboutData = getAboutData();
  const { profile, skills, timeline, stats } = aboutData;

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          {/* 사이드바 */}
          <Sidebar />
          
          {/* 메인 콘텐츠 */}
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* 페이지 헤더 */}
            <AboutHeader profile={profile} />
            
            {/* 본문 내용 */}
            <AboutContent profile={profile} />
            
            {/* 통계 정보 */}
            <h3 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Statistics Dashboard
            </h3>
            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#eaedf1]">
                <p className="text-[#101518] text-base font-medium leading-normal">Posts</p>
                <p className="text-[#101518] tracking-light text-2xl font-bold leading-tight">{stats.posts}</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#eaedf1]">
                <p className="text-[#101518] text-base font-medium leading-normal">Projects</p>
                <p className="text-[#101518] tracking-light text-2xl font-bold leading-tight">{stats.projects}</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#eaedf1]">
                <p className="text-[#101518] text-base font-medium leading-normal">Contributions</p>
                <p className="text-[#101518] tracking-light text-2xl font-bold leading-tight">{stats.contributions}+</p>
              </div>
            </div>
            
            {/* 기술 스택 */}
            <SkillsSection skills={skills} />
            
            {/* 타임라인 */}
            <TimelineSection timeline={timeline} />
          </div>
        </div>
      </div>
    </div>
  );
} 