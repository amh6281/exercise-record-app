import Link from 'next/link';

const HomeSummarySection = () => {
  return (
    <div className='space-y-8'>
      {/* 액션 버튼 섹션 */}
      <div className='space-y-4'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2'>
          <Link
            href='/routines'
            className='group from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 dark:from-primary-600 dark:to-primary-700 dark:hover:from-primary-700 dark:hover:to-primary-800 relative transform overflow-hidden rounded-2xl bg-gradient-to-r p-6 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl'
          >
            <div className='absolute inset-0 -translate-x-full -skew-x-12 transform bg-white/10 transition-transform duration-700 group-hover:translate-x-full'></div>
            <div className='relative flex items-center justify-center space-x-3'>
              <span className='text-2xl'>🏋️‍♂️</span>
              <span className='text-lg'>운동 루틴 보기</span>
            </div>
          </Link>
          <Link
            href='/routines'
            className='group border-primary-500 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 relative transform overflow-hidden rounded-2xl border-2 p-6 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg'
          >
            <div className='bg-primary-500/5 absolute inset-0 -translate-x-full -skew-x-12 transform transition-transform duration-700 group-hover:translate-x-full'></div>
            <div className='relative flex items-center justify-center space-x-3'>
              <span className='text-2xl'>🎯</span>
              <span className='text-lg'>운동 카테고리</span>
            </div>
          </Link>
        </div>
      </div>

      {/* 정보 카드 섹션 */}
      <div className='space-y-4'>
        <h3 className='text-choco-700 dark:text-choco-100 text-center text-xl font-semibold'>운동 정보</h3>
        <div className='mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2'>
          <div className='group border-cool-200 dark:border-choco-700 dark:bg-choco-800/50 hover:border-primary-300 dark:hover:border-primary-500 relative overflow-hidden rounded-2xl border bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl'>
            <div className='absolute top-0 right-0 h-20 w-20 rounded-bl-full bg-gradient-to-br from-green-400/10 to-transparent'></div>
            <div className='relative'>
              <div className='mb-4 flex items-center space-x-3'>
                <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-green-600'>
                  <span className='text-xl'>💪</span>
                </div>
                <h3 className='text-choco-700 dark:text-choco-100 text-xl font-bold'>근력 운동</h3>
              </div>
              <p className='text-cool-600 dark:text-cool-200 text-base leading-relaxed'>
                웨이트 트레이닝, 바디웨이트 운동으로 근육 강화
              </p>
              <div className='mt-4 flex flex-wrap gap-2'>
                <span className='rounded-full bg-green-100 px-3 py-1 text-xs text-green-700 dark:bg-green-900/30 dark:text-green-300'>
                  웨이트
                </span>
                <span className='rounded-full bg-green-100 px-3 py-1 text-xs text-green-700 dark:bg-green-900/30 dark:text-green-300'>
                  바디웨이트
                </span>
                <span className='rounded-full bg-green-100 px-3 py-1 text-xs text-green-700 dark:bg-green-900/30 dark:text-green-300'>
                  저항운동
                </span>
              </div>
            </div>
          </div>

          <div className='group border-cool-200 dark:border-choco-700 dark:bg-choco-800/50 hover:border-primary-300 dark:hover:border-primary-500 relative overflow-hidden rounded-2xl border bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl'>
            <div className='absolute top-0 right-0 h-20 w-20 rounded-bl-full bg-gradient-to-br from-yellow-400/10 to-transparent'></div>
            <div className='relative'>
              <div className='mb-4 flex items-center space-x-3'>
                <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500'>
                  <span className='text-xl'>💡</span>
                </div>
                <h3 className='text-choco-700 dark:text-choco-100 text-xl font-bold'>오늘의 팁</h3>
              </div>
              <p className='text-cool-600 dark:text-cool-200 text-base leading-relaxed'>
                운동 전 10분 스트레칭으로 부상 예방
              </p>
              <div className='mt-4 flex items-center space-x-2'>
                <div className='h-2 w-2 animate-pulse rounded-full bg-yellow-400'></div>
                <span className='text-cool-500 dark:text-cool-300 text-xs'>새로운 팁</span>
              </div>
            </div>
          </div>

          {/* DB 추가 예정 */}
          {/* <div className='group border-cool-200 dark:border-choco-700 dark:bg-choco-800/50 hover:border-primary-300 dark:hover:border-primary-500 relative overflow-hidden rounded-2xl border bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl'>
            <div className='from-primary-500/10 absolute top-0 right-0 h-20 w-20 rounded-bl-full bg-gradient-to-br to-transparent'></div>
            <div className='relative'>
              <div className='mb-4 flex items-center space-x-3'>
                <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500'>
                  <span className='text-xl'>🎯</span>
                </div>
                <h3 className='text-choco-700 dark:text-choco-100 text-xl font-bold'>이번 주 목표</h3>
              </div>
              <p className='text-cool-600 dark:text-cool-200 text-base leading-relaxed'>주 3회 이상 운동하기</p>
              <div className='bg-cool-200 dark:bg-choco-700 mt-4 h-2 w-full rounded-full'>
                <div className='from-primary-500 to-primary-600 h-2 w-2/3 rounded-full bg-gradient-to-r transition-all duration-500'></div>
              </div>
              <p className='text-cool-500 dark:text-cool-300 mt-2 text-xs'>진행률: 67%</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeSummarySection;
