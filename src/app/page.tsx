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
    <div className='from-cool-50 to-primary-50/30 dark:from-choco-900 dark:via-choco-800 dark:to-primary-900/20 min-h-screen bg-gradient-to-br via-white'>
      <div className='container mx-auto px-4 py-8'>
        <div className='mx-auto max-w-6xl'>
          {/* 헤더 섹션 */}
          <div className='mb-16 text-center'>
            <PageHeader title='오늘의 운동' description='운동 기록을 시작하고 성장을 확인하세요' />
          </div>

          {/* 메인 콘텐츠 영역 */}
          <div className='space-y-20'>
            {/* 오늘의 운동 대시보드 */}
            <section className='mx-auto max-w-4xl'>
              <TodayDashboard />
            </section>

            {/* 구분선 */}
            <div className='mx-auto flex max-w-md items-center justify-center space-x-4'>
              <div className='via-cool-300 dark:via-choco-600 h-px flex-1 bg-gradient-to-r from-transparent to-transparent'></div>
              <div className='from-primary-500 to-primary-600 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br'>
                <span className='text-sm text-white'>✨</span>
              </div>
              <div className='via-cool-300 dark:via-choco-600 h-px flex-1 bg-gradient-to-r from-transparent to-transparent'></div>
            </div>

            {/* 홈 요약 섹션 */}
            <section className='mx-auto max-w-6xl'>
              <HomeSummarySection />
            </section>
          </div>

          {/* 푸터 여백 */}
          <div className='mt-20'></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
