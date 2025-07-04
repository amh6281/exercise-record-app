import { PageHeader } from '@/components/layout';
import { MyRoutineList } from '@/components/myRoutines';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '나의 루틴 | GymTrack',
  description: '내가 만든 운동 루틴을 관리하세요.',
};

const MyRoutinesPage = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mx-auto max-w-4xl'>
        <PageHeader title='나의 루틴' description='내가 만든 운동 루틴을 관리하세요.' />
        <MyRoutineList />
      </div>
    </div>
  );
};

export default MyRoutinesPage;
