import Link from 'next/link';
import { ArrowRight, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className='space-y-6'>
      <p className='inline-flex items-center rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900'>
        로그인 없이 바로 사용하는 AI 운동 도우미
      </p>
      <h1 className='text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-5xl'>
        AI로 오늘의 <span className='text-brand-gradient'>운동 루틴</span>을
        만들어보세요.
      </h1>
      <p className='max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400'>
        부위, 난이도, 시간만 고르면 FitFlow가 오늘의 운동 루틴을 추천해줍니다.
        기록해 둔 운동 텍스트를 붙여넣으면 월간 운동 리포트까지 한 번에 생성해
        드려요.
      </p>

      <div className='flex flex-col gap-3 sm:flex-row'>
        <Button
          asChild
          size='lg'
          className='bg-brand-gradient border-0 text-white hover:opacity-90'
        >
          <Link href='/routine/new'>
            운동 루틴 생성하기
            <ArrowRight className='h-4 w-4' />
          </Link>
        </Button>
        <Button
          asChild
          variant='outline'
          size='lg'
          className='border-brand-blue text-brand-blue hover:bg-brand-blue-light hover:text-brand-blue-dark dark:border-brand-blue dark:text-brand-blue-light dark:hover:bg-brand-blue-dark/20 border-2'
        >
          <Link href='/report/new'>
            운동 리포트 만들기
            <BarChart3 className='h-4 w-4' />
          </Link>
        </Button>
      </div>

      <div className='flex flex-wrap gap-3 text-xs text-zinc-600 dark:text-zinc-400'>
        <span className='rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-900'>
          초보자 루틴
        </span>
        <span className='rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-900'>
          3분 루틴
        </span>
        <span className='rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-900'>
          운동 분할 추천
        </span>
        <span className='rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-900'>
          AI 운동 루틴 생성
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
