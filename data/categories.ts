// 카테고리 더미 데이터
import { Category, Tag } from '../types/category';

// 샘플 카테고리 데이터
export const categories: Category[] = [
  {
    id: '1',
    name: 'Web Development',
    slug: 'web-development',
    description: 'Building responsive websites with modern frameworks.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCATl8RbLd8Z2BdDlB-GSfJpiG165hmkLzY2VgpyA_mYeihJOlPnWx_aczuviNVfVWOY7Int6_DXJmxUEk9fCJe13ymiAR6I9fJYPWHw_l3ZG703JZovTU3MjS5TCg4Xmqf5Gf_uHASBE750Jqk38AwxQwjUJTdn0ps8j3cfssDZqjbb64YpGg7FH6ZBJWn1UeHoeMfNu-O3xgkP7BStsgYu5TdXyxd-Low6-Ih7dvSz73xyde60Po1i5sa5GEuV0NZERR6VHwRhN0',
    postCount: 15
  },
  {
    id: '2',
    name: 'Mobile Development',
    slug: 'mobile-development',
    description: 'Creating native and cross-platform mobile apps.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3i63cUPauhrgVoo8gZkomHO5rVxOHN3SnBuznuWgMSOjRej2DuzOgJE6dxyMlELBCBJQ7LrOWOaPl0FMHwb3zz_SQu2794d00bl3rc3FqB35zecJ4qSYT9HfnAyu0mF4vT0iB0o4RMq1ei81QMkp9kNoIO1p8FfETDgK8biFvNBplFbOXch1Q4l9yjLgAJtyVQWrC4KBMNd1x8fddjIZ383dt7j-Nl8lYR5HQQZTyQeyPMEIoBE0sRhnMsJm00e12JXusVyyg3nA',
    postCount: 8
  },
  {
    id: '3',
    name: 'Data Science',
    slug: 'data-science',
    description: 'Analyzing data to extract insights and trends.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDS4zi3qUDLCxJKc_ACe-mCb-ixAx3fKHjiPS-uz8iud3KpwHIi-4BLW-fpWSSIL8ULt8O_j2cjnSADwiwvgIMYoxrsa28NxAiUzwFEhwFtMLLo-EVGxpTGjG2UkoBfRn8fFZRI5-B03BaVE-_4MS3PXoggZRkGCLEgjbMifg51-_iabCy5M65ZIHoO5FpC0FF9mek9Z-cDub5X8nnyjT0xxVYbhrmST0gi8g-r2AKqt3tp1SWlcLloWlHQsbrtHdn2lnaBy7OffrI',
    postCount: 12
  },
  {
    id: '4',
    name: 'Machine Learning',
    slug: 'machine-learning',
    description: 'Developing intelligent systems that learn from data.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBit4nsKsOixIGmeNa2w2iWu1gS5MqQs_eZAoNt87RdF6OkwBh66sP2EBQoXBKAhaJWW6Dc_eVGKAtgxjPN_KLy2d08NY91G2_V_c5yl7s4ewa1HfWfv4J_NgKF0sKRxFDjOZmER-9jNnf2uQUfUhDCs7ZIYcB4mFWStmU0wabH2QXhlPrz31az27aByN90V4yWWgUyLPBvQ9AIww2_at2aY6MLzsjxHFIJZDJtpW8iR3BpCeMnLIkBzuY74GpE5Hndw40mZ-ugXTo',
    postCount: 10
  },
  {
    id: '5',
    name: 'Cloud Computing',
    slug: 'cloud-computing',
    description: 'Managing and scaling applications in the cloud.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXExXrr0andIeFQwOowJtG4xkD3JOnMKnuibQ09Vs5xOWS_GMee8FlmPTXUxhb0XphepX3q6M9HMlnvCBLh6jWdhLeN50lraOSnthwqfVb8L_AiqUP_ngNf4DJ1iDWKIjEcr0tKAnBWfmy-dhBjckqfr7Le67K1WHj3nL399sNSSZ2eR9k-aHzX61zYIVZQaE84Kmge5z-8BJZSm4TKwS_UvEtvWC9Ix7meLTAHDYzl6OLmRrUIUjPJINrGg_rUz2Qu5RyISgu2HM',
    postCount: 7
  },
  {
    id: '6',
    name: 'DevOps',
    slug: 'devops',
    description: 'Automating software delivery and infrastructure management.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA21gihNECB34Ze5PYSVwB_oYsYTUmacidkV2EPr8eil0TWciBSH66tIPAmwBESlAfBRjeSCQah9fgyDJt7azP2Ynzn8oGv5CXwkkH9W7C61sxiFsbSYr0plAimqepLVMCbdumtoGCPBCaP2rdW73qqUGc5hZyM2QJcq3tY8pdE5t8EMr_LdmqVx7xk3jh4WlZKBH6meJZ8pj2xcTuKEwOYs8oLniK9XfYrsUQUMOYYI25SoNm5TPPbVirkw3LMvuPPn63b6Wkga44',
    postCount: 9
  }
];

// 샘플 태그 데이터
export const tags: Tag[] = [
  { id: '1', name: 'React', slug: 'react', postCount: 12 },
  { id: '2', name: 'JavaScript', slug: 'javascript', postCount: 18 },
  { id: '3', name: 'TypeScript', slug: 'typescript', postCount: 8 },
  { id: '4', name: 'Next.js', slug: 'nextjs', postCount: 10 },
  { id: '5', name: 'Node.js', slug: 'nodejs', postCount: 7 },
  { id: '6', name: 'Python', slug: 'python', postCount: 9 },
  { id: '7', name: 'Docker', slug: 'docker', postCount: 5 },
  { id: '8', name: 'AWS', slug: 'aws', postCount: 6 }
];

// 카테고리 조회 함수
export const getAllCategories = (): Category[] => {
  return categories;
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};

// 태그 조회 함수
export const getAllTags = (): Tag[] => {
  return tags;
};

export const getTagBySlug = (slug: string): Tag | undefined => {
  return tags.find(tag => tag.slug === slug);
}; 