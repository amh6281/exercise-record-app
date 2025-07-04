import Link from 'next/link';
import RoutineCard from './RoutineCard';

const MyRoutineList = () => {
  return (
    <div>
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
  );
};

export default MyRoutineList;
