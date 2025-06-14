'use client';

import { Sidebar, ProjectCard } from '../../components/organisms';
import { getProjectsData } from '../../data/projects';

/**
 * 프로젝트 페이지 컴포넌트
 * 개발자의 프로젝트 목록을 표시하는 페이지
 */
export default function ProjectsPage() {
  // 프로젝트 데이터 가져오기
  const { projects } = getProjectsData();
  
  // 특별히 표시할 프로젝트 (featured)
  const featuredProject = projects.find(project => project.isFeatured);
  // 나머지 프로젝트들
  const otherProjects = projects.filter(project => !project.isFeatured);

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          {/* 사이드바 */}
          <Sidebar />
          
          {/* 메인 콘텐츠 */}
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* 페이지 헤더 */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#101518] tracking-light text-[32px] font-bold leading-tight">
                  프로젝트
                </p>
                <p className="text-[#5c748a] text-sm font-normal leading-normal">
                  제 작업과 기여를 소개합니다
                </p>
              </div>
            </div>
            
            {/* 검색 입력란 - 최소 기능으로 UI만 구현 */}
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div
                    className="text-[#5c748a] flex border-none bg-[#eaedf1] items-center justify-center pl-4 rounded-l-xl border-r-0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    placeholder="프로젝트 검색..."
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border-none bg-[#eaedf1] focus:border-none h-full placeholder:text-[#5c748a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    value=""
                    readOnly
                  />
                </div>
              </label>
            </div>
            
            {/* 프로젝트 목록 */}
            {/* 특별히 표시할 프로젝트 (featured) */}
            {featuredProject && (
              <ProjectCard project={featuredProject} isFeatured={true} />
            )}
            
            {/* 나머지 프로젝트들 */}
            {otherProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 