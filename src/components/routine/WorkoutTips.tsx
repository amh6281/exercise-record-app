import { LightbulbIcon } from '@phosphor-icons/react/dist/ssr';

interface WorkoutTipsProps {
  tips: string[];
}

const WorkoutTips = ({ tips }: WorkoutTipsProps) => {
  if (!tips || tips.length === 0) return null;

  return (
    <div className='border-cool-200 dark:border-choco-600 dark:bg-choco-800 rounded-xl border bg-white p-6'>
      <div className='mb-4 flex items-center gap-2'>
        <LightbulbIcon size={20} className='text-yellow-500 dark:text-yellow-400' />
        <h3 className='text-choco-700 dark:text-choco-100 text-xl font-bold'>운동 팁</h3>
      </div>
      <ul className='space-y-2'>
        {tips.map((tip, index) => (
          <li key={index} className='flex items-start gap-2'>
            <div className='bg-primary-500 dark:bg-primary-400 mt-2 h-2 w-2 shrink-0 rounded-full'></div>
            <p className='text-cool-600 dark:text-cool-200'>{tip}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutTips;
