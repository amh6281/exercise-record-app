'use client';

import RoutineSummaryCard from './RoutineSummaryCard';
import SplitRoutineCard from './SplitRoutineCard';
import { useProfileStore } from '@/store/profileStore';
import { ProfileModal } from './profile';
import { RoutineModal } from './routine';
import { useRoutineStore } from '@/store/routineStore';

const MyRoutineList = () => {
  const nickname = useProfileStore((state) => state.profile.nickname);
  const routines = useRoutineStore((state) => state.routines);

  // 프로필이 설정되지 않은 경우
  if (!nickname) {
    return (
      <div className='space-y-8'>
        <div className='py-12 text-center'>
          <div className='mb-6'>
            <div className='bg-cool-100 dark:bg-cool-800 mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full'>
              <span className='text-3xl'>🏋️‍♂️</span>
            </div>
            <h2 className='text-choco-700 dark:text-choco-100 mb-2 text-xl font-bold'>루틴을 만들어보세요!</h2>
            <p className='text-cool-600 dark:text-cool-200 mb-6'>
              나만의 운동 루틴을 설정하고 체계적으로 운동해보세요.
            </p>
          </div>
          <ProfileModal />
        </div>
      </div>
    );
  }

  return (
    <div className='space-y-8'>
      {/* 요약 카드 */}
      <RoutineSummaryCard />

      {/* 새 루틴 만들기 모달 */}
      <RoutineModal />

      {/* 분할별 루틴 카드들 */}
      <div className='grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
        {routines.map((routine) => (
          <SplitRoutineCard key={routine.id} routine={routine} />
        ))}
      </div>

      {/* 추가 루틴 안내 */}
      <div className='py-8 text-center'>
        <p className='text-cool-600 dark:text-cool-200 text-sm'>
          더 많은 분할 루틴을 추가하거나 기존 루틴을 수정할 수 있습니다.
        </p>
      </div>
    </div>
  );
};

export default MyRoutineList;
