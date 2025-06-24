import { PlayIcon } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

interface StartWorkoutButtonProps {
  routineId: string;
}

const StartWorkoutButton = ({ routineId }: StartWorkoutButtonProps) => {
  return (
    <div className='flex justify-center'>
      <Link
        href={`/records/new?routine=${routineId}`}
        className='bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 flex items-center gap-2 rounded-lg px-8 py-3 font-semibold text-white transition-colors duration-200'
      >
        <PlayIcon size={20} />
        운동 시작하기
      </Link>
    </div>
  );
};

export default StartWorkoutButton;
