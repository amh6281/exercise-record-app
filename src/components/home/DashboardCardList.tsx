import Link from 'next/link';

const DashboardCardList = () => {
  return (
    <div className='grid gap-6 md:grid-cols-2'>
      {/* 빠른 기록 시작 */}
      <Link
        href='/records/new'
        className='border-cool-200 dark:border-choco-600 dark:bg-choco-800 hover:border-primary-500 dark:hover:border-primary-400 rounded-xl border-2 bg-white p-6 transition-colors duration-200'
      >
        <h2 className='text-choco-700 dark:text-choco-100 mb-2 text-xl font-semibold'>새로운 기록</h2>
        <p className='text-cool-600 dark:text-cool-200'>오늘의 운동 기록을 시작하세요</p>
      </Link>

      {/* 최근 기록 요약 */}
      <Link
        href='/records'
        className='border-cool-200 dark:border-choco-600 dark:bg-choco-800 hover:border-primary-500 dark:hover:border-primary-400 rounded-xl border-2 bg-white p-6 transition-colors duration-200'
      >
        <h2 className='text-choco-700 dark:text-choco-100 mb-2 text-xl font-semibold'>최근 기록</h2>
        <p className='text-cool-600 dark:text-cool-200'>아직 기록이 없습니다</p>
      </Link>

      {/* 추천 루틴 */}
      <Link
        href='/routines'
        className='border-cool-200 dark:border-choco-600 dark:bg-choco-800 hover:border-primary-500 dark:hover:border-primary-400 rounded-xl border-2 bg-white p-6 transition-colors duration-200'
      >
        <h2 className='text-choco-700 dark:text-choco-100 mb-2 text-xl font-semibold'>추천 루틴</h2>
        <p className='text-cool-600 dark:text-cool-200'>다양한 운동 루틴을 확인하세요</p>
      </Link>

      {/* 운동 통계 */}
      <Link
        href='/statistics'
        className='border-cool-200 dark:border-choco-600 dark:bg-choco-800 hover:border-primary-500 dark:hover:border-primary-400 rounded-xl border-2 bg-white p-6 transition-colors duration-200'
      >
        <h2 className='text-choco-700 dark:text-choco-100 mb-2 text-xl font-semibold'>운동 통계</h2>
        <p className='text-cool-600 dark:text-cool-200'>기록을 시작하면 통계를 확인할 수 있습니다</p>
      </Link>
    </div>
  );
};

export default DashboardCardList;
