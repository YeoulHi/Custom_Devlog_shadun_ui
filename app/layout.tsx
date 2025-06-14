import React from 'react';
import './globals.css';
import { Header } from '../components/organisms';

export const metadata = {
  title: 'Custom DevLog - shadcn/ui 기반 개발자 블로그',
  description: 'Next.js와 shadcn/ui를 활용한 모던 개발자 블로그',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-50 font-sans antialiased">
        <Header />
        {children}
      </body>
    </html>
  )
}
