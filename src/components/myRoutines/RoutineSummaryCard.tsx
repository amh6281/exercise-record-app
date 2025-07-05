import { CalendarIcon, TargetIcon } from '@phosphor-icons/react/dist/ssr';

interface RoutineSummaryCardProps {
  splitType: string;
  todayRoutine: string;
}

const RoutineSummaryCard = ({ splitType, todayRoutine }: RoutineSummaryCardProps) => {
  return (
    <div className='bg-primary-500 dark:bg-primary-500/80 rounded-lg p-6'>
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='text-xl font-bold text-white'>홍길동님의 {splitType} 루틴</h2>
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
          <p className='text-lg font-bold text-white'>{todayRoutine}</p>
        </div>

        <div className='text-sm text-white/70'>
          <p>이번 주 운동 완료: 2/6일</p>
          <div className='mt-1 flex gap-1'>
            {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => (
              <div key={day} className={`h-2 w-2 rounded-full ${index < 2 ? 'bg-green-400' : 'bg-white/30'}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutineSummaryCard;
