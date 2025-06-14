'use client';

import { Profile } from '../../types/about';

// AboutContent 컴포넌트의 Props 타입 정의
interface AboutContentProps {
  profile: Profile;
}

/**
 * AboutContent 컴포넌트
 * About 페이지의 주요 내용을 표시하는 컴포넌트
 */
const AboutContent = ({ profile }: AboutContentProps) => {
  return (
    <div className="flex flex-col">
      {/* 개발자 포부 */}
      <h3 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Developer Aspirations
      </h3>
      <p className="text-[#101518] text-base font-normal leading-normal pb-3 pt-1 px-4">
        I am a passionate software engineer with a focus on creating innovative solutions and contributing to the open-source community. 
        My goal is to leverage my skills in full-stack development to build impactful applications that solve real-world problems.
      </p>
      
      {/* 커뮤니티 참여 */}
      <h3 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Community Engagement
      </h3>
      <p className="text-[#101518] text-base font-normal leading-normal pb-3 pt-1 px-4">
        I actively participate in developer communities, both online and offline. 
        I enjoy sharing my knowledge through blog posts and tutorials, and I am always eager to learn from others. 
        I believe in the power of collaboration and continuous learning.
      </p>
      
      {/* 기술 및 기술 스택 */}
      <h3 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Skills &amp; Technologies
      </h3>
      <p className="text-[#101518] text-base font-normal leading-normal pb-3 pt-1 px-4">
        I have a strong foundation in various programming languages and frameworks, including JavaScript, React, Node.js, and Python. 
        I am proficient in database management with PostgreSQL and MongoDB, and I have experience with cloud platforms like AWS and Azure. 
        My expertise also extends to DevOps practices, including CI/CD pipelines and containerization with Docker.
      </p>
      
      {/* 경험 및 교육 */}
      <h3 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Experience &amp; Education
      </h3>
      <p className="text-[#101518] text-base font-normal leading-normal pb-3 pt-1 px-4">
        I hold a Bachelor's degree in Computer Science from Stanford University. 
        During my studies, I worked on several projects, including a web application for managing student schedules 
        and a mobile app for tracking fitness goals. I have also completed internships at leading tech companies, 
        where I gained hands-on experience in developing and deploying large-scale applications.
      </p>
      
      {/* 연락처 */}
      <h3 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Contact
      </h3>
      <p className="text-[#101518] text-base font-normal leading-normal pb-3 pt-1 px-4">
        I am always open to new opportunities and collaborations. Feel free to reach out to me via email 
        at <a href={`mailto:${profile.email}`} className="text-blue-600 hover:underline">{profile.email}</a> or 
        connect with me on LinkedIn.
      </p>
      
      {/* 연락 폼 */}
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <input
            placeholder="Your Email"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border-none bg-[#eaedf1] focus:border-none h-14 placeholder:text-[#5c748a] p-4 text-base font-normal leading-normal"
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <textarea
            placeholder="Your Message"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border-none bg-[#eaedf1] focus:border-none min-h-36 placeholder:text-[#5c748a] p-4 text-base font-normal leading-normal"
          ></textarea>
        </label>
      </div>
      <div className="flex px-4 py-3 justify-start">
        <button
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#dce8f3] text-[#101518] text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Send Message</span>
        </button>
      </div>
    </div>
  );
};

export default AboutContent; 