import { ROUTINE_CATEGORIES } from '@/constants/RoutineList';
import Link from 'next/link';

interface RoutineSectionProps {
  title: string;
  description: string;
  routines: (typeof ROUTINE_CATEGORIES)[keyof typeof ROUTINE_CATEGORIES];
}

const RoutineSection = ({ title, description, routines }: RoutineSectionProps) => (
  <div className='border-cool-200 dark:border-choco-600 dark:bg-choco-800 mb-16 rounded-2xl border bg-white p-8'>
    <div className='mb-8'>
      <h2 className='text-choco-700 dark:text-choco-100 mb-3 text-3xl font-bold'>{title}</h2>
      <p className='text-cool-600 dark:text-cool-200 text-lg'>{description}</p>
    </div>
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {routines.map(({ label, slug, emoji }) => (
        <Link
          key={slug}
          href={`/routines/${slug}`}
          className='group border-cool-200 hover:border-primary-500 dark:border-choco-600 dark:bg-choco-800 dark:hover:border-primary-400 relative flex h-full flex-col items-center justify-center rounded-xl border bg-white p-6 transition-colors duration-200'
        >
          <div className='relative z-10 flex flex-col items-center'>
            <span className='mb-4 block text-4xl transition-transform duration-200 group-hover:scale-110'>{emoji}</span>
            <span className='text-choco-700 group-hover:text-primary-500 dark:text-choco-100 dark:group-hover:text-primary-400 block text-lg font-semibold transition-colors'>
              {label}
            </span>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default RoutineSection;
