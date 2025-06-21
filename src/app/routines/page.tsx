import { Metadata } from 'next';
import RoutineList from '@/components/routines/RoutineList';
import { PageHeader } from '@/components/layout';

export const metadata: Metadata = {
  title: '운동 루틴 - GymTrack',
  description: '다양한 운동 루틴을 확인하고 기록을 시작하세요.',
};

const RoutinesPage = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mx-auto max-w-4xl'>
        <PageHeader title='운동 루틴' description='오늘의 운동 루틴을 선택하고 기록을 시작하세요' />
        <RoutineList />
      </div>
    </div>
  );
};

export default RoutinesPage;
