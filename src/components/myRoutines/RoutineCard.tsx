interface RoutineCardProps {
  title: string;
  description: string;
  exerciseCount: number;
  duration: number;
}

const RoutineCard = ({ title, description, exerciseCount, duration }: RoutineCardProps) => {
  return (
    <div className='rounded-lg border p-6 shadow-sm'>
      <div className='mb-4 flex items-center justify-between'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <button className='text-gray-400 hover:text-gray-600'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
            <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
          </svg>
        </button>
      </div>
      <p className='text-muted-foreground mb-4 text-sm'>{description}</p>
      <div className='flex items-center justify-between text-sm'>
        <span className='text-muted-foreground flex items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-primary'
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
        <span className='text-muted-foreground flex items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-primary'
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
