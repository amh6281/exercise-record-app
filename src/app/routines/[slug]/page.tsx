import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ROUTINE_CATEGORIES } from '@/constants/RoutineList';
import { ROUTINE_DETAILS } from '@/constants/RoutineDetails';
import { RoutineDetail } from '@/components/routine';
import { PageHeader } from '@/components/layout';

interface RoutinePageProps {
  params: {
    slug: string;
  };
}

// 동적 메타데이터
export const generateMetadata = async ({ params }: RoutinePageProps): Promise<Metadata> => {
  const routine = ROUTINE_DETAILS[params.slug as keyof typeof ROUTINE_DETAILS];

  if (!routine)
    return {
      title: '루틴을 찾을 수 없습니다 - GymTrack',
    };

  return {
    title: `${routine.title} - GymTrack`,
    description: routine.description,
  };
};

// 정적 경로 생성 (빌드 시 HTML 파일 미리 생성
// generateStaticParams 제거 시 서버에서 매번 HTML 생성)
// 마이페이지, 검색, 실시간 데이터 등은 동적 경로 생성, 사용자 별 다른 데이터가 아님.
export const generateStaticParams = async () => {
  const allRoutines = [
    ...ROUTINE_CATEGORIES.splitRoutines,
    ...ROUTINE_CATEGORIES.levelRoutines,
    ...ROUTINE_CATEGORIES.bodyPartRoutines,
    ...ROUTINE_CATEGORIES.bodybuilderRoutines,
  ];

  return allRoutines.map((routine) => ({
    slug: routine.slug,
  }));
};

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
