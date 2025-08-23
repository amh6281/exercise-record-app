import { useProfileStore } from '@/store/profileStore';
import { useRoutineStore } from '@/store/routineStore';
import { Routine } from '@/types/Routine';
import { DAY_LABELS } from '@/constants/DayLabel';
import {
  DotsThreeOutlineIcon,
  PencilIcon,
  CopyIcon,
  TrashIcon,
  CalendarBlankIcon,
} from '@phosphor-icons/react/dist/ssr';
import { RoutineModal } from './routine';
import { getTodayRoutine } from '@/lib/routine';
import { useAlertModalStore } from '@/store/alertModalStore';

interface SplitRoutineCardProps {
  routine: Routine;
}

const SplitRoutineCard = ({ routine }: SplitRoutineCardProps) => {
  const { id, title, exercises, routineType } = routine;

  const profile = useProfileStore((state) => state.profile);
  const removeRoutine = useRoutineStore((state) => state.removeRoutine);
  const duplicateRoutine = useRoutineStore((state) => state.duplicateRoutine);

  const openModal = useAlertModalStore((state) => state.openModal);

  // 오늘 요일에 해당하는 루틴 정보
  const todayRoutine = getTodayRoutine(profile);

  // 오늘의 루틴 여부
  const isToday = todayRoutine?.routine === routineType;

  // 루틴 요일
  const scheduledDay = profile.dayRoutines.find((day) => day.routine === routineType)?.day;

  return (
    <div
      className={`border-cool-200 hover:border-primary-500 dark:border-choco-600 dark:bg-choco-800 dark:hover:border-primary-400 rounded-lg border bg-white p-6 transition-colors duration-200 ${isToday ? 'ring-primary-500 ring-2' : ''}`}
    >
      <div className='mb-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <h3 className='text-choco-700 dark:text-choco-100 text-lg font-semibold'>{title}</h3>
          {isToday && <span className='bg-primary-500 rounded-full px-2 py-1 text-xs text-white'>오늘</span>}
        </div>

        <div className='group relative'>
          <button className='text-cool-500 hover:text-primary-500 dark:text-cool-400 dark:hover:text-primary-400 cursor-pointer transition-colors'>
            <DotsThreeOutlineIcon size={16} />
          </button>

          {/* 드롭다운 메뉴 */}
          <div className='dark:bg-choco-700 border-cool-200 dark:border-choco-600 invisible absolute top-6 right-0 z-10 min-w-[120px] rounded-lg border bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100'>
            <RoutineModal
              trigger={
                <button className='hover:bg-cool-50 dark:hover:bg-choco-600 text-choco-700 dark:text-choco-100 flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-sm transition-colors'>
                  <PencilIcon size={14} />
                  수정
                </button>
              }
            />
            <button
              onClick={() =>
                openModal({
                  desc: '해당 루틴을 복사하시겠습니까?',
                  onConfirm: () => duplicateRoutine(id),
                })
              }
              className='hover:bg-cool-50 dark:hover:bg-choco-600 text-choco-700 dark:text-choco-100 flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-sm transition-colors'
            >
              <CopyIcon size={14} />
              복사
            </button>
            <button
              onClick={() =>
                openModal({
                  desc: '해당 루틴을 삭제하시겠습니까?',
                  onConfirm: () => removeRoutine(id),
                })
              }
              className='flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-sm text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20'
            >
              <TrashIcon size={14} />
              삭제
            </button>
          </div>
        </div>
      </div>

      <div className='text-cool-600 dark:text-cool-200 mb-4 flex items-center gap-4 text-sm'>
        <div className='flex items-center gap-1'>
          <CalendarBlankIcon size={14} className='text-primary-500 dark:text-primary-400' />
          <span>{DAY_LABELS[scheduledDay as keyof typeof DAY_LABELS]}</span>
        </div>
      </div>

      <div className='space-y-2'>
        <p className='text-cool-600 dark:text-cool-200 text-sm font-medium'>운동 목록 ({exercises.length}개)</p>
        <div className='space-y-1'>
          {exercises.map((exercise) => (
            <div key={exercise.id} className='flex items-center justify-between text-sm'>
              <span className='text-choco-700 dark:text-choco-100'>{exercise.name}</span>
              <span className='text-cool-600 dark:text-cool-200'>
                {exercise.sets}세트 {exercise.reps}회{exercise.weight && ` (${exercise.weight})`}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button className='bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 mt-4 w-full rounded-lg px-4 py-2 font-medium text-white transition-colors'>
        루틴 시작하기
      </button>
    </div>
  );
};

export default SplitRoutineCard;
