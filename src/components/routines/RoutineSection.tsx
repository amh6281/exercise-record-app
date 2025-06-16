import { ROUTINE_CATEGORIES } from '@/constants/routineList';
import Link from 'next/link';

const RoutineSection = ({
  title,
  description,
  routines,
}: {
  title: string;
  description: string;
  routines: (typeof ROUTINE_CATEGORIES)[keyof typeof ROUTINE_CATEGORIES];
}) => (
  <div className='relative z-0 mb-16 rounded-2xl border border-gray-200 bg-background p-8 dark:border-gray-800'>
    <div className='mb-8'>
      <h2 className='mb-3 text-3xl font-bold text-foreground'>{title}</h2>
      <p className='text-muted-foreground text-lg'>{description}</p>
    </div>
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {routines.map(({ label, slug, emoji }) => (
        <Link
          key={slug}
          href={`/routines/${slug}`}
          className='group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-background p-6 transition-all duration-300 hover:scale-[1.02] hover:border-primary hover:shadow-lg dark:border-gray-800'
        >
          <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
          <div className='relative z-10 flex flex-col items-center'>
            <span className='mb-4 block transform text-4xl transition-transform duration-300 group-hover:scale-110'>
              {emoji}
            </span>
            <span className='block text-lg font-semibold text-foreground transition-colors group-hover:text-primary'>
              {label}
            </span>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default RoutineSection;
