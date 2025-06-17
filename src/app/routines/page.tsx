import { Metadata } from 'next';
import RoutineList from '@/components/routines/RoutineList';

export const metadata: Metadata = {
  title: '운동 루틴 - GymTrack',
  description: '다양한 운동 루틴을 확인하고 기록을 시작하세요.',
};

const RoutinesPage = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mx-auto max-w-4xl'>
        <div className='mb-12 text-center'>
          <h1 className='mb-4 text-3xl font-bold text-primary md:text-4xl'>운동 루틴</h1>
          <p className='text-lg font-medium text-gray-600 dark:text-gray-400'>
            오늘의 운동 루틴을 선택하고 기록을 시작하세요
          </p>
        </div>
        <RoutineList />
      </div>
    </div>
  );
};

export default RoutinesPage;
