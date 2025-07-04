import { CalendarIcon, TargetIcon } from '@phosphor-icons/react/dist/ssr';

interface RoutineSummaryCardProps {
  splitType: string;
  todayRoutine: string;
  totalRoutines: number;
}

const RoutineSummaryCard = ({ splitType, todayRoutine, totalRoutines }: RoutineSummaryCardProps) => {
  return (
    <div className='bg-primary-500 dark:bg-primary-500/80 rounded-lg p-6'>
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='text-xl font-bold text-white'>내 루틴 요약</h2>
        <CalendarIcon size={24} className='text-white/70' />
      </div>

      <div className='space-y-3'>
        <div className='flex items-center gap-2'>
          <TargetIcon size={20} className='text-white/70' />
          <span className='font-semibold text-white'>{splitType} 루틴 구성</span>
        </div>

        <div className='rounded-lg bg-white/15 p-3'>
          <p className='mb-1 text-sm text-white/85'>오늘의 루틴</p>
          <p className='text-lg font-bold text-white'>{todayRoutine}</p>
        </div>

        <div className='text-sm text-white/70'>총 {totalRoutines}개의 분할 루틴 구성</div>
      </div>
    </div>
  );
};

export default RoutineSummaryCard;
