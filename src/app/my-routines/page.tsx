import { PageHeader } from '@/components/layout';
import { RoutineCard } from '@/components/myRoutines';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '나의 루틴 | GymTrack',
  description: '내가 만든 운동 루틴을 관리하세요.',
};

const MyRoutinesPage = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mx-auto max-w-4xl'>
        <PageHeader title='나의 루틴' description='내가 만든 운동 루틴을 관리하세요.' />
        <div className='mb-8 flex justify-end'>
          <Link
            href='/routines/new'
            className='bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 rounded-lg px-4 py-2 text-white'
          >
            새 루틴 만들기
          </Link>
        </div>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {/* 임시 데이터 */}
          <RoutineCard title='무분할' description='70분 루틴' exerciseCount={8} duration={70} />
          <RoutineCard title='하체 운동' description='45분 루틴' exerciseCount={6} duration={45} />
        </div>
      </div>
    </div>
  );
};

export default MyRoutinesPage;
