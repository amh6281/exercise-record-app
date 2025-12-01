<<<<<<< HEAD
import { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { HomeSummarySection, TodayDashboard } from '@/components/home';

export const metadata: Metadata = {
  title: 'GymTrack - 당신의 헬스 루틴을 기록하세요',
  description: '헬린이를 위한 맞춤형 운동 루틴과 기록 서비스. 3분할, 5분할 등 다양한 루틴을 제공합니다.',
  keywords: '헬스, 운동, 루틴, 3분할, 5분할, 운동기록, 헬린이',
};

const HomePage = () => {
  return (
    <div className='from-cool-50 to-primary-50/30 dark:from-choco-900 dark:via-choco-800 dark:to-primary-900/20 min-h-screen bg-linear-to-br via-white'>
      <div className='container mx-auto px-4 py-8'>
        <div className='mx-auto max-w-6xl'>
          {/* 헤더 섹션 */}
          <div className='mb-16 text-center'>
            <PageHeader title='오늘의 운동' description='운동 기록을 시작하고 성장을 확인하세요' />
          </div>

          {/* 메인 콘텐츠 영역 */}
          <div className='space-y-20'>
            {/* 오늘의 운동 대시보드 */}
            <section className='mx-auto max-w-4xl'>
              <TodayDashboard />
            </section>

            {/* 구분선 */}
            <div className='mx-auto flex max-w-md items-center justify-center space-x-4'>
              <div className='via-cool-300 dark:via-choco-600 h-px flex-1 bg-linear-to-r from-transparent to-transparent'></div>
              <div className='from-primary-500 to-primary-600 flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br'>
                <span className='text-sm text-white'>✨</span>
              </div>
              <div className='via-cool-300 dark:via-choco-600 h-px flex-1 bg-linear-to-r from-transparent to-transparent'></div>
            </div>

            {/* 홈 요약 섹션 */}
            <section className='mx-auto max-w-6xl'>
              <HomeSummarySection />
            </section>
          </div>

          {/* 푸터 여백 */}
          <div className='mt-20'></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
=======
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
>>>>>>> 6934de9 (chore: 초기설정)
