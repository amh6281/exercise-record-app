import Link from 'next/link';

const HomeSummarySection = () => {
  return (
    <div className='space-y-12'>
      {/* 퀵 액션 카드 */}
      <div className='space-y-6'>
        <h3 className='text-choco-700 dark:text-choco-100 text-center text-2xl font-bold'>빠른 액션</h3>
        <div className='mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2'>
          <Link
            href='/my-routines'
            className='group from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 relative overflow-hidden rounded-2xl bg-gradient-to-br p-6 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl'
          >
            <div className='absolute inset-0 -translate-x-full -skew-x-12 transform bg-white/10 transition-transform duration-700 group-hover:translate-x-full'></div>
            <div className='relative flex items-center justify-between'>
              <div>
                <h4 className='mb-1 text-lg font-bold'>내 루틴</h4>
                <p className='text-primary-100 text-sm'>맞춤 운동 계획</p>
              </div>
              <span className='text-2xl'>🏋️‍♂️</span>
            </div>
          </Link>

          <Link
            href='/routines'
            className='group border-primary-500 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:bg-choco-800 dark:text-primary-400 dark:hover:bg-primary-900/20 relative overflow-hidden rounded-2xl border-2 bg-white p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg'
          >
            <div className='bg-primary-500/5 absolute inset-0 -translate-x-full -skew-x-12 transform transition-transform duration-700 group-hover:translate-x-full'></div>
            <div className='relative flex items-center justify-between'>
              <div>
                <h4 className='mb-1 text-lg font-bold'>운동 탐색</h4>
                <p className='text-primary-500 dark:text-primary-300 text-sm'>새로운 루틴 찾기</p>
              </div>
              <span className='text-2xl'>🎯</span>
            </div>
          </Link>
        </div>
      </div>

      {/* 운동 가이드 카드들 */}
      <div className='space-y-6'>
        <h3 className='text-choco-700 dark:text-choco-100 text-center text-2xl font-bold'>운동 가이드</h3>
        <div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3'>
          {/* 초보자 가이드 */}
          <div className='group border-cool-200 dark:border-choco-700 dark:bg-choco-800/50 relative overflow-hidden rounded-2xl border bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-green-300 hover:shadow-xl dark:hover:border-green-500'>
            <div className='absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-gradient-to-br from-green-400/10 to-transparent'></div>
            <div className='relative'>
              <div className='mb-4 flex items-center space-x-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-green-600'>
                  <span className='text-lg'>🌱</span>
                </div>
                <h4 className='text-choco-700 dark:text-choco-100 text-lg font-bold'>초보자 가이드</h4>
              </div>
              <p className='text-cool-600 dark:text-cool-200 mb-3 text-sm leading-relaxed'>
                처음 시작하는 분들을 위한 기본 운동법과 안전 수칙
              </p>
              <div className='flex flex-wrap gap-1'>
                <span className='rounded-full bg-green-100 px-2 py-1 text-xs text-green-700 dark:bg-green-900/30 dark:text-green-300'>
                  기본자세
                </span>
                <span className='rounded-full bg-green-100 px-2 py-1 text-xs text-green-700 dark:bg-green-900/30 dark:text-green-300'>
                  안전수칙
                </span>
              </div>
            </div>
          </div>

          {/* 영양 정보 */}
          <div className='group border-cool-200 dark:border-choco-700 dark:bg-choco-800/50 relative overflow-hidden rounded-2xl border bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-orange-300 hover:shadow-xl dark:hover:border-orange-500'>
            <div className='absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-gradient-to-br from-orange-400/10 to-transparent'></div>
            <div className='relative'>
              <div className='mb-4 flex items-center space-x-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600'>
                  <span className='text-lg'>🥗</span>
                </div>
                <h4 className='text-choco-700 dark:text-choco-100 text-lg font-bold'>영양 관리</h4>
              </div>
              <p className='text-cool-600 dark:text-cool-200 mb-3 text-sm leading-relaxed'>
                운동 효과를 높이는 올바른 식단과 영양 섭취법
              </p>
              <div className='flex flex-wrap gap-1'>
                <span className='rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'>
                  단백질
                </span>
                <span className='rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'>
                  식단관리
                </span>
              </div>
            </div>
          </div>

          {/* 회복 관리 */}
          <div className='group border-cool-200 dark:border-choco-700 dark:bg-choco-800/50 relative overflow-hidden rounded-2xl border bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-blue-300 hover:shadow-xl dark:hover:border-blue-500'>
            <div className='absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-gradient-to-br from-blue-400/10 to-transparent'></div>
            <div className='relative'>
              <div className='mb-4 flex items-center space-x-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-blue-600'>
                  <span className='text-lg'>😴</span>
                </div>
                <h4 className='text-choco-700 dark:text-choco-100 text-lg font-bold'>회복 관리</h4>
              </div>
              <p className='text-cool-600 dark:text-cool-200 mb-3 text-sm leading-relaxed'>
                충분한 휴식과 스트레칭으로 근육 회복 극대화
              </p>
              <div className='flex flex-wrap gap-1'>
                <span className='rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'>
                  수면
                </span>
                <span className='rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'>
                  스트레칭
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 운동 동기부여 섹션 */}
      <div className='rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 text-center dark:from-indigo-900/20 dark:to-purple-900/20'>
        <div className='mx-auto max-w-2xl'>
          <div className='mb-4 flex justify-center'>
            <div className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600'>
              <span className='text-2xl'>💪</span>
            </div>
          </div>
          <h3 className='text-choco-700 dark:text-choco-100 mb-3 text-2xl font-bold'>꾸준함이 성공의 열쇠</h3>
          <p className='text-cool-600 dark:text-cool-200 mb-6 leading-relaxed'>
            매일 조금씩이라도 꾸준히 운동하는 것이 가장 중요합니다. 작은 변화가 모여 큰 성취를 만들어냅니다.
          </p>
          <div className='inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-2 text-sm font-bold text-white'>
            <span>🎯</span>
            <span>오늘도 화이팅!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSummarySection;
