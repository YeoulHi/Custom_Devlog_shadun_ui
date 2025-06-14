'use client';

import { Project } from '../../types/project';

// ProjectCard 컴포넌트의 Props 타입 정의
interface ProjectCardProps {
  project: Project;
  isFeatured?: boolean;
}

/**
 * ProjectCard 컴포넌트
 * 개별 프로젝트 정보를 카드 형태로 표시하는 컴포넌트
 */
const ProjectCard = ({ project, isFeatured = false }: ProjectCardProps) => {
  return (
    <div className="p-4">
      <div className="flex items-stretch justify-between gap-4 rounded-xl bg-gray-50 p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col gap-1 flex-[2_2_0px]">
          {/* 프로젝트가 featured인 경우에만 표시 */}
          {isFeatured && (
            <p className="text-[#5c748a] text-sm font-normal leading-normal">Featured</p>
          )}
          
          {/* 프로젝트 제목 */}
          <p className="text-[#101518] text-base font-bold leading-tight">
            {project.title}
          </p>
          
          {/* 프로젝트 설명 */}
          <p className="text-[#5c748a] text-sm font-normal leading-normal">
            {project.description}
          </p>
          
          {/* 프로젝트 태그 */}
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="bg-[#eaedf1] px-2 py-1 rounded-md text-xs text-[#5c748a]"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* 프로젝트 링크 */}
          <div className="flex gap-2 mt-3">
            {project.projectUrl && (
              <a 
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#101518] text-xs font-medium underline hover:text-blue-600"
              >
                프로젝트 보기
              </a>
            )}
            
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#101518] text-xs font-medium underline hover:text-blue-600"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
        
        {/* 프로젝트 이미지 */}
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
          style={{
            backgroundImage: `url("${project.imageUrl}")`
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProjectCard; 