'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/data/posts';
import { sortPosts, SortType, filterPostsByCategory } from '@/utils/postUtils';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

// 포스트 목록 페이지 컴포넌트
export default function PostsPage() {
  // 상태 관리
  const [posts, setPosts] = useState(getAllPosts());
  const [filter, setFilter] = useState('');
  const [sortType, setSortType] = useState<SortType>('latest');
  const [category, setCategory] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewType, setViewType] = useState('grid');
  
  const postsPerPage = 6; // 페이지당 포스트 수

  // 검색어, 카테고리, 정렬 타입에 따른 포스트 필터링 및 정렬
  const filteredPosts = sortPosts(
    filterPostsByCategory(
      posts.filter(post => 
        post.title.toLowerCase().includes(filter.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(filter.toLowerCase())
      ), 
      category
    ), 
    sortType
  );

  // 페이지네이션 처리
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // 페이지 변경 함수
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // 카테고리 목록 (실제로는 데이터에서 가져오는 것이 좋음)
  const categories = ['Frontend', 'Backend', 'DevOps', 'Mobile', 'AI', 'Database'];

  return (
    <main className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden">
      {/* 메인 레이아웃 */}
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-6 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* 검색 필드 */}
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div className="text-[#5c748a] flex border-none bg-[#eaedf1] items-center justify-center pl-4 rounded-l-xl border-r-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </div>
                  <input
                    placeholder="포스트 검색..."
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border-none bg-[#eaedf1] focus:border-none h-full placeholder:text-[#5c748a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  />
                </div>
              </label>
            </div>

            {/* 필터 버튼 */}
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              {/* 카테고리 필터 */}
              <button 
                className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#eaedf1] pl-4 pr-2"
                onClick={() => setCategory(category ? '' : 'Frontend')} // 간단한 토글 구현, 실제로는 드롭다운 필요
              >
                <p className="text-[#101518] text-sm font-medium leading-normal">
                  {category || 'Category'}
                </p>
                <ChevronDown size={20} className="text-[#101518]" />
              </button>
              
              {/* 정렬 필터 */}
              <button 
                className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#eaedf1] pl-4 pr-2"
                onClick={() => {
                  // 간단한 정렬 순환 구현, 실제로는 드롭다운 필요
                  const sorts: SortType[] = ['latest', 'oldest', 'popular', 'comments'];
                  const currentIndex = sorts.indexOf(sortType);
                  const nextIndex = (currentIndex + 1) % sorts.length;
                  setSortType(sorts[nextIndex]);
                }}
              >
                <p className="text-[#101518] text-sm font-medium leading-normal">
                  {sortType === 'latest' ? '최신순' : 
                   sortType === 'oldest' ? '오래된순' : 
                   sortType === 'popular' ? '인기순' : '댓글순'}
                </p>
                <ChevronDown size={20} className="text-[#101518]" />
              </button>
              
              {/* 뷰 타입 필터 */}
              <button 
                className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#eaedf1] pl-4 pr-2"
                onClick={() => setViewType(viewType === 'grid' ? 'list' : 'grid')}
              >
                <p className="text-[#101518] text-sm font-medium leading-normal">
                  {viewType === 'grid' ? '그리드뷰' : '리스트뷰'}
                </p>
                <ChevronDown size={20} className="text-[#101518]" />
              </button>
            </div>

            {/* 페이지 제목 */}
            <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              모든 포스트
            </h2>

            {/* 포스트 목록 */}
            <div className={`grid ${viewType === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-3 p-4`}>
              {currentPosts.length > 0 ? (
                currentPosts.map(post => (
                  <Link href={`/posts/${post.slug}`} key={post.id} className="group">
                    <div className="flex flex-col gap-3 pb-3 border border-[#eaedf1] rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                        style={{
                          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCDrzqENpLxCaeceOVtq4_9_0KA26XBSYSSSmcJBBoXswarObHEFou9afRrILWfTch9zavhoe6oGINvxcSvQbY4m8AWQVdutkB2HNw625fjW0Zpi0uEjeQn4gdWEkj--mAYT4u2yDOA7abYmeg1p-pMACNIVp86f8PatrAS-36DX9sj1TXvWOj_Nw9C0RD8KyTYh3K19d7_iCgwROLynv--NT5WCchhhfS3XXs2mCD489639XvJxrxaOH6dC5UVR0wWY4O8hUGAr1B_")`
                        }}
                      />
                      <div className="p-4">
                        <p className="text-[#101518] text-base font-medium leading-normal group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </p>
                        <p className="text-[#5c748a] text-sm font-normal leading-normal mt-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-2 mt-3">
                          <div className="flex items-center gap-1 text-[#5c748a] text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" fill="currentColor" viewBox="0 0 256 256">
                              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                            </svg>
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1 text-[#5c748a] text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" fill="currentColor" viewBox="0 0 256 256">
                              <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                            </svg>
                            {post.likes}
                          </div>
                          <div className="flex items-center gap-1 text-[#5c748a] text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" fill="currentColor" viewBox="0 0 256 256">
                              <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.67-6.54A88,88,0,1,1,128,216Z" />
                            </svg>
                            {post.comments.length}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-[#647987] text-base">검색 결과가 없습니다.</p>
                </div>
              )}
            </div>

            {/* 페이지네이션 */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center p-4">
                <button 
                  onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex size-10 items-center justify-center disabled:opacity-50"
                >
                  <ChevronLeft size={18} className="text-[#101518]" />
                </button>
                
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  // 페이지 번호 계산 로직
                  let pageNumber;
                  if (totalPages <= 5) {
                    pageNumber = i + 1;
                  } else if (currentPage <= 3) {
                    pageNumber = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNumber = totalPages - 4 + i;
                  } else {
                    pageNumber = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={i}
                      onClick={() => paginate(pageNumber)}
                      className={`text-sm ${currentPage === pageNumber ? 'font-bold bg-[#eaedf1]' : 'font-normal'} leading-normal flex size-10 items-center justify-center text-[#101518] rounded-full`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
                
                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <>
                    <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#101518] rounded-full">
                      ...
                    </span>
                    <button
                      onClick={() => paginate(totalPages)}
                      className={`text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#101518] rounded-full`}
                    >
                      {totalPages}
                    </button>
                  </>
                )}
                
                <button 
                  onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex size-10 items-center justify-center disabled:opacity-50"
                >
                  <ChevronRight size={18} className="text-[#101518]" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 