import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header, Footer } from '@/components/layout';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'FitFlow - 운동 루틴 조합기 & 운동 백과사전',
  description:
    'FitFlow는 운동 루틴 조합기, 운동 도감, 기구 사용법, 1RM 계산기, 운동 리포트를 제공하는 종합 운동 도우미 서비스입니다. 로그인 없이 바로 사용하세요.',
  keywords: [
    '운동 루틴 추천',
    '운동 조합기',
    '3일 분할 루틴',
    '4일 분할 루틴',
    '헬스 운동 도감',
    '운동 백과사전',
    '초보자 운동 루틴',
    '어깨 루틴',
    '등 운동 추천',
    '가슴 운동 리스트',
    '운동 기구 사용법',
    '스트레칭 도감',
    '1RM 계산기',
  ],
  metadataBase: new URL('https://fitflow.example.com'),
  openGraph: {
    title: 'FitFlow - 운동 루틴 조합기 & 운동 백과사전',
    description:
      '로그인 없이 바로 사용하는 운동 루틴 조합기와 운동 백과사전. 분할 방식, 레벨, 시간만 선택하면 맞춤 루틴을 생성해드립니다.',
    type: 'website',
    url: 'https://fitflow.example.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground min-h-screen antialiased`}
      >
        <div className='flex min-h-screen flex-col'>
          <Header />
          <main className='flex-1'>
            <div className='mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8'>
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
