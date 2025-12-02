import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RoutineResultPage = () => {
  return (
    <div className='space-y-8'>
      <div className='flex items-center gap-3'>
        <Button asChild variant='ghost' size='sm'>
          <Link href='/routine/new' className='flex items-center gap-1 text-xs'>
            <ArrowLeft className='h-3 w-3' />
            다시 생성하기
          </Link>
        </Button>
        <div>
          <h1 className='text-xl font-semibold'>운동 루틴 결과</h1>
          <p className='text-xs text-zinc-500 dark:text-zinc-400'>
            생성된 운동 루틴이 카드 형태로 표시됩니다.
          </p>
        </div>
      </div>

      <div className='rounded-2xl border bg-white p-5 text-sm text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400'>
        루틴 생성 기능은 다음 단계에서 구현됩니다. 정적 데이터 기반으로 루틴을
        조합하여 표시합니다.
      </div>
    </div>
  );
};

export default RoutineResultPage;
