import { useProfileStore } from '@/store/profileStore';
import { CalendarIcon, TargetIcon, TrashIcon } from '@phosphor-icons/react/dist/ssr';
import { BASIC_SPLIT_OPTIONS } from '@/constants/RoutineOptions';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { getTodayRoutineInfo } from '@/lib/routine';
import { useAlertModalStore } from '@/store/alertModalStore';

const RoutineSummaryCard = () => {
  const profile = useProfileStore((state) => state.profile);
  const resetProfile = useProfileStore((state) => state.resetProfile);
  const openModal = useAlertModalStore((state) => state.openModal);

  const { todayRoutineName } = getTodayRoutineInfo(profile);

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

        <div className='mt-4 flex justify-end'>
          <button
            onClick={() => {
              openModal({
                desc: '프로필을 삭제하면 모든 데이터가 삭제됩니다. 정말로 삭제하시겠습니까?',
                onConfirm: () => resetProfile(),
              });
            }}
            className='bg-primary-50 text-primary-700 hover:bg-primary-100 focus:ring-primary-300 dark:bg-primary-900 dark:text-primary-100 dark:hover:bg-primary-800 flex items-center gap-1 rounded-md px-3 py-1 text-xs shadow transition-colors duration-150 focus:ring-2 focus:outline-none'
          >
            <TrashIcon size={16} className='text-primary-400 dark:text-primary-300' />
            <span className='font-semibold'>프로필 삭제</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoutineSummaryCard;
