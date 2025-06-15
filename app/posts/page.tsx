'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/data/posts';
import Header from '@/components/organisms/Header';

export default function PostsPage() {
  const posts = getAllPosts();
  const [filter, setFilter] = useState('');

  // 검색어에 따른 포스트 필터링
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(filter.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <main className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      {/* 헤더 컴포넌트 */}
      <Header />

      {/* 메인 레이아웃 */}
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* 페이지 제목 */}
            <h1 className="text-[#101518] tracking-light text-[32px] font-bold leading-tight px-4 mb-6">
              블로그 포스트
            </h1>

            {/* 검색 필터 */}
            <div className="flex flex-wrap justify-between gap-3 p-4 mb-6">
              <input
                type="text"
                placeholder="포스트 검색..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="p-2 border border-[#dce0e5] rounded-lg w-full md:w-auto"
              />
            </div>

            {/* 포스트 목록 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
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
          </div>
        </div>
      </div>

      {/* 푸터 영역 */}
      <footer className="flex justify-center">
        <div className="flex max-w-[960px] flex-1 flex-col">
          <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
            <p className="text-[#647987] text-base font-normal leading-normal">© 2024 Emily Coder. 모든 권리 보유.</p>
          </footer>
        </div>
      </footer>
    </main>
  );
} 