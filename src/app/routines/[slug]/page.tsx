import { notFound } from 'next/navigation';
import { ROUTINE_DETAILS } from '@/constants/RoutineDetails';
import { RoutineDetail } from '@/components/routines';
import { PageHeader } from '@/components/layout';

interface RoutinePageProps {
  params: {
    slug: string;
  };
}

const RoutinePage = ({ params }: RoutinePageProps) => {
  const routine = ROUTINE_DETAILS[params.slug as keyof typeof ROUTINE_DETAILS];

  if (!routine) {
    notFound();
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mx-auto max-w-4xl'>
        <PageHeader title={routine.title} description={routine.description} />
        <RoutineDetail routine={routine} />
      </div>
    </div>
  );
};

export default RoutinePage;
