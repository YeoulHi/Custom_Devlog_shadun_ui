'use client';

import { Skill } from '../../types/about';

// SkillsSection 컴포넌트의 Props 타입 정의
interface SkillsSectionProps {
  skills: Skill[];
}

/**
 * SkillsSection 컴포넌트
 * 기술 스택을 카테고리별로 표시하는 컴포넌트
 */
const SkillsSection = ({ skills }: SkillsSectionProps) => {
  // 카테고리별로 스킬 분류
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // 카테고리 이름을 보기 좋게 변환하는 함수
  const formatCategoryName = (category: string): string => {
    const categoryMap: Record<string, string> = {
      'frontend': 'Frontend',
      'backend': 'Backend',
      'devops': 'DevOps',
      'database': 'Database',
      'other': 'Other Skills'
    };
    
    return categoryMap[category] || category.charAt(0).toUpperCase() + category.slice(1);
  };

  // 스킬 레벨을 시각적으로 표현하는 컴포넌트
  const SkillLevel = ({ level }: { level: number }) => {
    return (
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index < level ? 'bg-[#101518]' : 'bg-[#d4dce2]'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <h3 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Skills Dashboard
      </h3>
      
      {/* 카테고리별 스킬 목록 */}
      <div className="p-4 flex flex-col gap-6">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <div key={category} className="flex flex-col gap-2">
            <h4 className="text-[#101518] text-base font-semibold">
              {formatCategoryName(category)}
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {categorySkills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center justify-between bg-[#eaedf1] rounded-lg p-3"
                >
                  <span className="text-[#101518] text-sm font-medium">
                    {skill.name}
                  </span>
                  <SkillLevel level={skill.level} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection; 