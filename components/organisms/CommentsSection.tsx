'use client';

import { useState } from 'react';
import { Comment } from '@/types/post';

interface CommentsSectionProps {
  comments: Comment[];
  postId: string;
  className?: string;
}

// 개별 댓글 컴포넌트
function CommentItem({ comment }: { comment: Comment }) {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10"
          style={{
            backgroundImage: `url("${comment.author.avatar}")`
          }}
        />
        <div className="flex flex-col flex-1">
          <div className="flex items-center gap-2">
            <p className="text-[#111518] text-sm font-medium leading-normal">
              {comment.author.name}
            </p>
            <p className="text-[#647987] text-xs font-normal">
              {comment.createdAt}
            </p>
          </div>
          <p className="text-[#111518] text-sm font-normal leading-normal mt-1">
            {comment.content}
          </p>
          
          {/* 댓글 액션 버튼들 */}
          <div className="flex items-center gap-4 mt-2">
            <button className="flex items-center gap-1 text-[#647987] hover:text-[#111518] text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z" />
              </svg>
              좋아요 {comment.likes}
            </button>
            <button className="text-[#647987] hover:text-[#111518] text-xs">
              답글
            </button>
          </div>
        </div>
      </div>

      {/* 대댓글 표시 */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-10">
          {!showReplies ? (
            <button
              onClick={() => setShowReplies(true)}
              className="text-[#647987] hover:text-[#111518] text-xs font-medium"
            >
              답글 {comment.replies.length}개 보기
            </button>
          ) : (
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setShowReplies(false)}
                className="text-[#647987] hover:text-[#111518] text-xs font-medium text-left"
              >
                답글 숨기기
              </button>
              {comment.replies.map((reply) => (
                <CommentItem key={reply.id} comment={reply} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// 댓글 작성 폼 컴포넌트
function CommentForm({ postId }: { postId: string }) {
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setIsSubmitting(true);
    // TODO: 실제 댓글 제출 로직 구현
    console.log('Submitting comment:', comment, 'for post:', postId);
    
    // 시뮬레이션: 2초 후 완료
    setTimeout(() => {
      setComment('');
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex gap-3">
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 bg-gray-300" />
        <div className="flex-1">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 입력하세요..."
            className="w-full p-3 border border-[#dce0e5] rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
          />
        </div>
      </div>
      
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={() => setComment('')}
          disabled={isSubmitting}
          className="px-4 py-2 text-[#647987] hover:text-[#111518] text-sm font-medium disabled:opacity-50"
        >
          취소
        </button>
        <button
          type="submit"
          disabled={!comment.trim() || isSubmitting}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? '댓글 작성 중...' : '댓글 작성'}
        </button>
      </div>
    </form>
  );
}

export default function CommentsSection({ comments, postId, className = '' }: CommentsSectionProps) {
  const [sortBy, setSortBy] = useState<'latest' | 'oldest' | 'popular'>('latest');

  // 댓글 정렬 로직
  const sortedComments = [...comments].sort((a, b) => {
    switch (sortBy) {
      case 'oldest':
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      case 'popular':
        return b.likes - a.likes;
      case 'latest':
      default:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  });

  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {/* 댓글 섹션 헤더 */}
      <div className="flex items-center justify-between">
        <h2 className="text-[#111518] text-xl font-bold leading-tight tracking-[-0.015em]">
          댓글 {comments.length}개
        </h2>
        
        {/* 정렬 옵션 */}
        <div className="flex gap-1">
          <button
            onClick={() => setSortBy('latest')}
            className={`px-3 py-1 text-sm rounded-lg transition-colors ${
              sortBy === 'latest' 
                ? 'bg-[#f0f2f5] text-[#111518] font-medium' 
                : 'text-[#647987] hover:text-[#111518]'
            }`}
          >
            최신순
          </button>
          <button
            onClick={() => setSortBy('oldest')}
            className={`px-3 py-1 text-sm rounded-lg transition-colors ${
              sortBy === 'oldest' 
                ? 'bg-[#f0f2f5] text-[#111518] font-medium' 
                : 'text-[#647987] hover:text-[#111518]'
            }`}
          >
            과거순
          </button>
          <button
            onClick={() => setSortBy('popular')}
            className={`px-3 py-1 text-sm rounded-lg transition-colors ${
              sortBy === 'popular' 
                ? 'bg-[#f0f2f5] text-[#111518] font-medium' 
                : 'text-[#647987] hover:text-[#111518]'
            }`}
          >
            인기순
          </button>
        </div>
      </div>

      {/* 댓글 작성 폼 */}
      <div className="border border-[#dce0e5] rounded-xl p-4 bg-slate-50">
        <h3 className="text-[#111518] text-base font-medium mb-3">댓글 작성</h3>
        <CommentForm postId={postId} />
      </div>

      {/* 댓글 목록 */}
      <div className="flex flex-col gap-6">
        {sortedComments.length > 0 ? (
          sortedComments.map((comment) => (
            <div key={comment.id} className="border-b border-[#eaedf1] pb-4 last:border-b-0 last:pb-0">
              <CommentItem comment={comment} />
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <div className="text-[#647987] mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" fill="currentColor" viewBox="0 0 256 256" className="mx-auto">
                <path d="M216,48H40A16,16,0,0,0,24,64V192a15.84,15.84,0,0,0,9.25,14.5A16.13,16.13,0,0,0,40,208a15.89,15.89,0,0,0,10.25-3.78.69.69,0,0,0,.13-.11L82.5,176H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,192l28.5-24H216V64H40Z" />
              </svg>
            </div>
            <p className="text-[#647987] text-base">
              아직 댓글이 없습니다. 첫 번째 댓글을 작성해보세요!
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 