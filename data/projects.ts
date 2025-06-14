// 프로젝트 더미 데이터
import { Project, ProjectsData } from '../types/project';

// 프로젝트 목록 더미 데이터
const projects: Project[] = [
  {
    id: 'portfolio-website',
    title: '포트폴리오 웹사이트',
    description: 'React와 Next.js로 구축한 개인 포트폴리오 웹사이트',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCT8huOG1RgSjd6naBTNtLWoztPO5lLsBnh65NAT_wB_B8IPdQJUPlkavd2R9KWwvxPs1TnopeO54AecEpDmyIBea882xHgqCPSEPco8fdrPR3j1kNyeUY8JtuvS_UPp83IMf9vHUScvHUX0Tkdo1Dgqyjyai5XiEQTxIue-bahpZJ2ZNm3_3j5FUkBkXHCgIbngBNj9XqeRIlPTVS-s_jcMLVORxkpIKATXds1-bO-mLFXSWg8LmlWN388fD8jj-0CbuCXdL5Ttnk',
    category: 'web',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    isFeatured: true,
    projectUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/portfolio'
  },
  {
    id: 'ecommerce-platform',
    title: 'E-커머스 플랫폼',
    description: '사용자 인증 및 결제 통합 기능을 갖춘 완전한 E-커머스 플랫폼',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBWJr8eDXSBSQZgi5g4iLTvrv_LW9MJPpj1smta85mdxILLjkbDIReKAPXdPyP-zBaTSxar9bL11drUInf_ddYjf3u-lSAOia9G5LrKujLPua5UBnhAW-Bf_HGTzOrQJweUpBOvSiKM9A-8o4XkMKf1Bj9SZNJCHIvUjduJu5_KBhgXSNr-Ncoudobn2wMDTCUttZciRYWWXz-21h6D_mkcqtj99deBkKRQv0JJGiI4EXWs0EgeEGqHJ9ZgknNYCLiRGkqNFF7HtA',
    category: 'web',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    projectUrl: 'https://example.com/ecommerce',
    githubUrl: 'https://github.com/example/ecommerce'
  },
  {
    id: 'fitness-app',
    title: '모바일 피트니스 앱',
    description: 'iOS 및 Android용 개인 맞춤형 운동 계획이 포함된 피트니스 추적 앱',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbsCRzJyOJ9xKKsiHR-AHuSHBVwmakuPk4RsO8p4CcnNVspkVaBMabfs3ebgghsZsS2cj0sODJRpbvTdPvFGP4iZOtkktnVjvjL-PTMC4iSMSHDFzK3fWedoNhYMp7Oq_bgDHbzRvuVHTUIjtg5SdpqNcW3iGgbqqNVIYLfsxL0eF0FOlYY9mBmDGPa-PpfShJl5IHqsbVp6xwdeFr00cPiLEAFRE_kQQfrMczZhZ557AHQJd_Xbt41n6otpyJRNqoh23c7ZLHs6o',
    category: 'mobile',
    tags: ['React Native', 'Firebase', 'Redux'],
    projectUrl: 'https://example.com/fitness',
    githubUrl: 'https://github.com/example/fitness-app'
  },
  {
    id: 'data-dashboard',
    title: '데이터 분석 대시보드',
    description: '대규모 데이터셋을 시각화하고 분석하기 위한 인터랙티브 대시보드',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB81wL6IBujlgjvg2OO_1l8yxQ1SX2vPvdMXGbCH-BtoUsu_r_D9UV4PrDOZ3fNaEfZL2s9Wa8UBER6vtHec_xexFHjIK2IISB9CauJWarZHMa6-JcYoAePR7Rt10tzN_RPo2JTqLMorMt2oSET5AcZxUZq9sbEQEP-VHApIGNZnz8qL7OE1Q4GgBEUuHUZZE25eYctIXH4M8b6bcWnZ2uHQmaCYda9hP5WIjkD2sF93oP1HitZqLl7NoTOBa7VKBg0PJ68O9CEls',
    category: 'data',
    tags: ['Python', 'D3.js', 'Pandas', 'Flask'],
    projectUrl: 'https://example.com/dashboard',
    githubUrl: 'https://github.com/example/data-dashboard'
  }
];

// 프로젝트 데이터 가져오기 함수
export const getProjectsData = (): ProjectsData => {
  return { projects };
};

// 특정 프로젝트 가져오기 함수
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

// 카테고리별 프로젝트 가져오기 함수
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
}; 