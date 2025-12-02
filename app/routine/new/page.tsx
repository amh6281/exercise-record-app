import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RoutineNewPage = () => {
  return (
    <div className='space-y-8'>
      <div className='flex items-center gap-3'>
        <Button asChild variant='ghost' size='sm'>
          <Link href='/' className='flex items-center gap-1 text-xs'>
            <ArrowLeft className='h-3 w-3' />
            홈으로
          </Link>
        </Button>
        <div>
          <h1 className='text-xl font-semibold'>운동 루틴 생성기</h1>
          <p className='text-xs text-zinc-500 dark:text-zinc-400'>
            분할 방식, 레벨, 시간, 기구를 선택하면 맞춤 루틴을 생성해드립니다.
          </p>
        </div>
      </div>

      <div className='grid gap-6 rounded-2xl border bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950'>
        <div className='space-y-4'>
          <p className='text-xs font-semibold text-zinc-500'>
            분할 방식, 레벨, 시간, 기구를 선택하세요
          </p>
          <p className='text-xs text-zinc-500 dark:text-zinc-400'>
            선택한 옵션에 맞춰 정적 데이터에서 루틴을 조합해드립니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoutineNewPage;
