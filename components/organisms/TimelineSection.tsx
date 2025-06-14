'use client';

import { TimelineEvent } from '../../types/about';

// TimelineSection 컴포넌트의 Props 타입 정의
interface TimelineSectionProps {
  timeline: TimelineEvent[];
}

/**
 * TimelineSection 컴포넌트
 * 타임라인 형태로 경력, 학력, 성과 등을 표시하는 컴포넌트
 */
const TimelineSection = ({ timeline }: TimelineSectionProps) => {
  // 타임라인 이벤트 타입에 따른 아이콘 선택
  const getIconForEventType = (type: string): string => {
    switch (type) {
      case 'education':
        return 'GraduationCap';
      case 'work':
        return 'Briefcase';
      case 'project':
        return 'Code';
      case 'achievement':
        return 'Trophy';
      default:
        return 'Calendar';
    }
  };

  return (
    <div className="flex flex-col">
      <h3 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Experience Timeline
      </h3>
      
      <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
        {timeline.map((event, index) => (
          <div key={event.id}>
            {/* 타임라인 아이콘 및 연결선 */}
            <div className="flex flex-col items-center gap-1 pt-3">
              <div className="text-[#101518]" data-icon={getIconForEventType(event.type)} data-size="24px" data-weight="regular">
                {/* 아이콘 자리 - 실제 프로젝트에서는 아이콘 컴포넌트로 대체 */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none" />
                  <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208Z" />
                </svg>
              </div>
              {/* 연결선 (마지막 항목이 아닌 경우에만 표시) */}
              {index < timeline.length - 1 && (
                <div className="w-[1.5px] bg-[#d4dce2] h-2 grow"></div>
              )}
            </div>
            
            {/* 타임라인 내용 */}
            <div className="flex flex-1 flex-col py-3">
              <p className="text-[#101518] text-base font-medium leading-normal">
                {event.title}
              </p>
              <p className="text-[#5c748a] text-sm font-normal leading-normal">
                {event.date}
              </p>
              <p className="text-[#101518] text-sm font-normal leading-normal mt-1">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSection; 