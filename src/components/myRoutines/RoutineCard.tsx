import { ChartBarIcon, ClockCountdownIcon, DotsThreeOutlineIcon } from '@phosphor-icons/react/dist/ssr';

interface RoutineCardProps {
  title: string;
  description: string;
  exerciseCount: number;
  duration: number;
}

const RoutineCard = ({ title, description, exerciseCount, duration }: RoutineCardProps) => {
  return (
    <div className='border-cool-200 hover:border-primary-500 dark:border-choco-600 dark:bg-choco-800 dark:hover:border-primary-400 rounded-lg border bg-white p-6 transition-colors duration-200'>
      <div className='mb-4 flex items-center justify-between'>
        <h3 className='text-choco-700 dark:text-choco-100 text-lg font-semibold'>{title}</h3>
        <button className='text-cool-500 hover:text-primary-500 dark:text-cool-400 dark:hover:text-primary-400 cursor-pointer transition-colors'>
          <DotsThreeOutlineIcon size={16} />
        </button>
      </div>
      <p className='text-cool-600 dark:text-cool-200 mb-4 text-sm'>{description}</p>
      <div className='flex items-center justify-between text-sm'>
        <div className='text-cool-600 dark:text-cool-200 flex items-center gap-2'>
          <ChartBarIcon size={16} className='text-primary-500 dark:text-primary-400' />
          <span>{exerciseCount}개 운동</span>
        </div>
        <div className='text-cool-600 dark:text-cool-200 flex items-center gap-2'>
          <ClockCountdownIcon size={16} className='text-primary-500 dark:text-primary-400' />
          <span>{duration}분 소요</span>
        </div>
      </div>
    </div>
  );
};

export default RoutineCard;
