import { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { HomeSummarySection, TodayDashboard } from '@/components/home';

export const metadata: Metadata = {
  title: 'GymTrack - 당신의 헬스 루틴을 기록하세요',
  description: '헬린이를 위한 맞춤형 운동 루틴과 기록 서비스. 3분할, 5분할 등 다양한 루틴을 제공합니다.',
  keywords: '헬스, 운동, 루틴, 3분할, 5분할, 운동기록, 헬린이',
};

const HomePage = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mx-auto max-w-4xl'>
        <div className='mb-12 text-center'>
          <PageHeader title='오늘의 운동' description='운동 기록을 시작하고 성장을 확인하세요' />
        </div>
        {/* 오늘의 운동 대시보드 */}
        <TodayDashboard />

        {/* release 1.0.0 */}
        {/* <HomeSummarySection /> */}
      </div>
    </div>
  );
};

export default HomePage;
