import { Metadata } from 'next';
import { DashboardCards } from '@/components/home';

export const metadata: Metadata = {
  title: 'GymTrack - 당신의 헬스 루틴을 기록하세요',
  description: '헬린이를 위한 맞춤형 운동 루틴과 기록 서비스. 3분할, 5분할 등 다양한 루틴을 제공합니다.',
  keywords: '헬스, 운동, 루틴, 3분할, 5분할, 운동기록, 헬린이',
};

const Home = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mx-auto max-w-4xl'>
        <div className='mb-12 text-center'>
          <h1 className='mb-4 text-3xl font-bold text-primary md:text-4xl'>오늘의 운동</h1>
          <p className='text-lg font-medium text-gray-600 dark:text-gray-400'>운동 기록을 시작하고 성장을 확인하세요</p>
        </div>
        <DashboardCards />
      </div>
    </div>
  );
};

export default Home;
