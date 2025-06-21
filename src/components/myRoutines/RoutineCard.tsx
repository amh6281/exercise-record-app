interface RoutineCardProps {
  title: string;
  description: string;
  exerciseCount: number;
  duration: number;
}

const RoutineCard = ({ title, description, exerciseCount, duration }: RoutineCardProps) => {
  return (
    <div className='border-cool-200 dark:border-choco-600 hover:border-primary-500 dark:hover:border-primary-400 dark:bg-choco-800 rounded-lg border bg-white p-6 transition-colors duration-200'>
      <div className='mb-4 flex items-center justify-between'>
        <h3 className='text-choco-700 dark:text-choco-100 text-lg font-semibold'>{title}</h3>
        <button className='text-cool-400 hover:text-cool-600 dark:text-cool-500 dark:hover:text-cool-300'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
            <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
          </svg>
        </button>
      </div>
      <p className='text-cool-600 dark:text-cool-200 mb-4 text-sm'>{description}</p>
      <div className='flex items-center justify-between text-sm'>
        <span className='text-cool-600 dark:text-cool-200 flex items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='text-primary-500 h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 17v-6a2 2 0 00-2-2H5m14 8V7a2 2 0 00-2-2h-2a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2z'
            />
          </svg>
          {exerciseCount}개 운동
        </span>
        <span className='text-cool-600 dark:text-cool-200 flex items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='text-primary-500 h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6l4 2' />
          </svg>
          {duration}분 소요
        </span>
      </div>
    </div>
  );
};

export default RoutineCard;
