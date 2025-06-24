import { ClockCountdownIcon, ChartBarIcon, TargetIcon, FireIcon, TagIcon } from '@phosphor-icons/react/dist/ssr';
import type { RoutineDetail as RoutineDetailType } from '@/types/Routine';

interface RoutineStatsProps {
  routine: RoutineDetailType;
}

const RoutineStats = ({ routine }: RoutineStatsProps) => {
  const getDifficultyColor = (difficulty: RoutineDetailType['difficulty']) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-gradient-to-r from-green-100 to-green-50 text-green-800 dark:from-green-900 dark:to-green-800 dark:text-green-200 border-green-200 dark:border-green-700';
      case 'intermediate':
        return 'bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-800 dark:from-yellow-900 dark:to-yellow-800 dark:text-yellow-200 border-yellow-200 dark:border-yellow-700';
      case 'advanced':
        return 'bg-gradient-to-r from-red-100 to-red-50 text-red-800 dark:from-red-900 dark:to-red-800 dark:text-red-200 border-red-200 dark:border-red-700';
      default:
        return 'bg-gradient-to-r from-cool-100 to-cool-50 text-cool-800 dark:from-cool-900 dark:to-cool-800 dark:text-cool-200 border-cool-200 dark:border-cool-700';
    }
  };

  const getDifficultyText = (difficulty: RoutineDetailType['difficulty']) => {
    switch (difficulty) {
      case 'beginner':
        return '초보자';
      case 'intermediate':
        return '중급자';
      case 'advanced':
        return '고급자';
      default:
        return '기본';
    }
  };

  return (
    <div className='border-cool-200 dark:border-choco-600 dark:bg-choco-800 space-y-6 rounded-xl border bg-white p-6'>
      {/* 난이도 배지와 특징 */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='bg-primary-50 dark:bg-primary-900/20 flex items-center gap-2 rounded-lg px-3 py-2'>
            <TargetIcon size={16} className='text-primary-600 dark:text-primary-400' />
            <span className='text-primary-700 dark:text-primary-300 text-sm font-medium'>전신 운동</span>
          </div>
        </div>
        <span
          className={`rounded-full border px-4 py-2 text-sm font-semibold ${getDifficultyColor(routine.difficulty)}`}
        >
          {getDifficultyText(routine.difficulty)}
        </span>
      </div>

      {/* 통계 카드들 */}
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
        <div className='group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 dark:from-blue-900/20 dark:to-blue-800/20'>
          <div className='flex items-center gap-4'>
            <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 dark:bg-blue-400/20'>
              <ClockCountdownIcon size={24} className='text-blue-600 dark:text-blue-400' />
            </div>
            <div>
              <p className='text-sm font-medium text-blue-600 dark:text-blue-400'>예상 시간</p>
              <p className='text-choco-700 dark:text-choco-100 text-xl font-bold'>{routine.estimatedTime}분</p>
            </div>
          </div>
        </div>

        <div className='group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-6 dark:from-purple-900/20 dark:to-purple-800/20'>
          <div className='flex items-center gap-4'>
            <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 dark:bg-purple-400/20'>
              <ChartBarIcon size={24} className='text-purple-600 dark:text-purple-400' />
            </div>
            <div>
              <p className='text-sm font-medium text-purple-600 dark:text-purple-400'>운동 개수</p>
              <p className='text-choco-700 dark:text-choco-100 text-xl font-bold'>{routine.exercises.length}개</p>
            </div>
          </div>
        </div>

        <div className='group relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 dark:from-emerald-900/20 dark:to-emerald-800/20'>
          <div className='flex items-center gap-4'>
            <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 dark:bg-emerald-400/20'>
              <TagIcon size={24} className='text-emerald-600 dark:text-emerald-400' />
            </div>
            <div>
              <p className='text-sm font-medium text-emerald-600 dark:text-emerald-400'>카테고리</p>
              <p className='text-choco-700 dark:text-choco-100 text-xl font-bold'>{routine.category}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutineStats;
