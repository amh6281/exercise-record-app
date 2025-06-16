import Link from 'next/link';
import { ROUTINE_CATEGORIES } from '@/constants/routineList';

const RoutineList = () => {
  return (
    <section className='w-full'>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
        {ROUTINE_CATEGORIES.map(({ label, slug, emoji }) => (
          <Link
            key={slug}
            href={`/routines/${slug}`}
            className='group flex flex-col items-center justify-center rounded-xl border-2 border-gray-200 p-6 transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-lg dark:border-gray-800 dark:hover:border-primary'
          >
            <span className='mb-3 transform text-3xl transition-transform duration-300 group-hover:scale-110'>
              {emoji}
            </span>
            <span className='font-medium text-gray-800 transition-colors group-hover:text-primary dark:text-gray-200 dark:group-hover:text-primary'>
              {label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RoutineList;
