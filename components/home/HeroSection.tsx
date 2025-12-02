import Link from 'next/link';
import { ArrowRight, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className='space-y-6'>
      <p className='inline-flex items-center rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900'>
        로그인 없이 바로 사용하는 운동 도우미
      </p>
      <h1 className='text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-5xl'>
        운동 루틴부터 기구 사용법까지,{' '}
        <span className='text-blue-600 dark:text-blue-400'>FitFlow</span> 하나로
        해결
      </h1>
      <p className='max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400'>
        분할 방식, 레벨, 시간만 고르면 FitFlow가 오늘의 운동 루틴을
        추천해줍니다. 운동 기록을 입력하면 월간 운동 리포트까지 한 번에 생성해
        드려요.
      </p>

      <div className='flex flex-col gap-3 sm:flex-row'>
        <Button
          asChild
          size='lg'
          className='bg-blue-600 text-white hover:bg-blue-700'
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
          className='border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950'
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
          3일 분할
        </span>
        <span className='rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-900'>
          운동 분할 추천
        </span>
        <span className='rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-900'>
          운동 루틴 생성
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
