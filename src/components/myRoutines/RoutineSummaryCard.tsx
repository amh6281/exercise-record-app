import { useProfileStore } from '@/store/profileStore';
import { CalendarIcon, TargetIcon, TrashIcon } from '@phosphor-icons/react/dist/ssr';
import { BASIC_SPLIT_OPTIONS, ROUTINE_OPTIONS } from '@/constants/RoutineOptions';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const RoutineSummaryCard = () => {
  const profile = useProfileStore((state) => state.profile);
  const [showConfirm, setShowConfirm] = useState(false);
  const resetProfile = useProfileStore((state) => state.resetProfile);

  const today = new Date().toLocaleString('en-US', { weekday: 'long' }).toLowerCase();
  const todayRoutine = profile.dayRoutines.find((day) => day.day === today);
  const todayRoutineName = ROUTINE_OPTIONS[todayRoutine?.routine as keyof typeof ROUTINE_OPTIONS];

  return (
    <div className='bg-primary-500 dark:bg-primary-500/80 rounded-lg p-6'>
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='text-xl font-bold text-white'>
          {profile.nickname}님의 {BASIC_SPLIT_OPTIONS[profile.splitType]} 루틴
        </h2>
        <CalendarIcon size={24} className='text-white/70' />
      </div>

      <div className='space-y-3'>
        <div className='flex items-center gap-2'>
          <TargetIcon size={20} className='text-white/70' />
          <span className='font-semibold text-white'>이번 주 운동 계획</span>
        </div>

        <div className='rounded-lg bg-white/15 p-3'>
          <p className='mb-1 text-sm text-white/85'>
            오늘 ({new Date().toLocaleDateString('ko-KR', { weekday: 'short' })})
          </p>
          <p className='text-lg font-bold text-white'>{todayRoutineName}</p>
        </div>

        {showConfirm ? (
          <div className='border-primary-200 bg-primary-50 dark:border-primary-700 dark:bg-primary-900 mt-3 flex flex-col gap-2 rounded-lg border p-4 text-sm shadow-lg'>
            <div className='mb-1 flex items-center gap-2'>
              <TrashIcon size={18} className='text-primary-600 dark:text-primary-300' />
              <span className='text-primary-900 dark:text-primary-100 font-semibold'>
                정말로 프로필을 삭제하시겠어요?
              </span>
            </div>
            <p className='text-primary-700 dark:text-primary-300 mb-2'>이 작업은 되돌릴 수 없습니다.</p>
            <div className='flex justify-end gap-2'>
              <Button
                size='sm'
                variant='ghost'
                className='text-primary-600 border-primary-200 hover:bg-primary-50 dark:bg-primary-800 dark:text-primary-200 dark:hover:bg-primary-700 border bg-white'
                onClick={() => setShowConfirm(false)}
              >
                취소
              </Button>
              <Button
                size='sm'
                className='bg-primary-600 hover:bg-primary-700 text-white'
                onClick={() => {
                  setShowConfirm(false);
                  resetProfile();
                }}
              >
                삭제하기
              </Button>
            </div>
          </div>
        ) : (
          <div className='mt-4 flex justify-end'>
            <button
              onClick={() => setShowConfirm(true)}
              className='bg-primary-50 text-primary-700 hover:bg-primary-100 focus:ring-primary-300 dark:bg-primary-900 dark:text-primary-100 dark:hover:bg-primary-800 flex items-center gap-1 rounded-md px-3 py-1 text-xs shadow transition-colors duration-150 focus:ring-2 focus:outline-none'
            >
              <TrashIcon size={16} className='text-primary-400 dark:text-primary-300' />
              <span className='font-semibold'>프로필 삭제</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoutineSummaryCard;
