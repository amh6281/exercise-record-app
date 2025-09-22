'use client';

import { BASIC_SPLIT_OPTIONS } from '@/constants/RoutineOptions';
import { useProfileStore } from '@/store/profileStore';
import { useRouter } from 'next/navigation';
import { getTodayRoutineInfo } from '@/lib/routine';

const TodayDashboard = () => {
  const router = useRouter();
  const profile = useProfileStore((state) => state.profile);
  const { todayRoutineName } = getTodayRoutineInfo(profile);

  return (
    <div className='space-y-8'>
      {/* 메인 운동 카드 */}
      <div className='from-primary-500 via-primary-600 to-primary-700 relative overflow-hidden rounded-3xl bg-linear-to-br p-8 text-white shadow-2xl'>
        {/* 배경 장식 */}
        <div className='absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/10'></div>
        <div className='absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/5'></div>

        <div className='relative z-10'>
          <div className='mb-8 text-center'>
            <div className='mb-3 inline-flex items-center space-x-2 rounded-full bg-white/20 px-4 py-2 text-sm font-bold backdrop-blur-sm'>
              <span>🎯</span>
              <span>오늘의 타겟</span>
            </div>
            <h2 className='mb-3 text-4xl font-black tracking-tight md:text-5xl'>{todayRoutineName}</h2>
            <p className='text-primary-100 text-lg font-medium'>
              {BASIC_SPLIT_OPTIONS[profile.splitType]} • {new Date().toLocaleDateString('ko-KR', { weekday: 'long' })}
            </p>
          </div>

          <div className='flex justify-center'>
            <button
              className='group text-primary-700 relative overflow-hidden rounded-2xl bg-white px-8 py-4 text-lg font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl'
              onClick={() => {
                router.push('/my-routines');
              }}
            >
              <div className='via-primary-100/50 absolute inset-0 -translate-x-full skew-x-12 transform bg-linear-to-r from-transparent to-transparent transition-transform duration-700 group-hover:translate-x-full'></div>
              <span className='relative flex items-center space-x-2'>
                <span>🏋️</span>
                <span>운동 시작하기</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 간단한 운동 팁 */}
      <div className='border-cool-200 dark:border-choco-700 dark:bg-choco-800/50 rounded-2xl border bg-white/80 p-6 backdrop-blur-sm'>
        <div className='flex items-center justify-center space-x-3'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-yellow-400 to-orange-500'>
            <span className='text-lg'>💡</span>
          </div>
          <div className='text-center'>
            <p className='text-choco-700 dark:text-choco-100 font-semibold'>
              오늘은 <span className='text-primary-600 dark:text-primary-400'>{todayRoutineName}</span> 집중!
            </p>
            <p className='text-cool-600 dark:text-cool-200 text-sm'>워밍업 10분 후 시작하세요</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayDashboard;
