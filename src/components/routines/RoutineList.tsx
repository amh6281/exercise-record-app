import { ROUTINE_CATEGORIES } from '@/constants/routineList';
import RoutineSection from './RoutineSection';

const RoutineList = () => {
  return (
    <section className='w-full space-y-8 px-4 pb-8 sm:px-6 lg:px-8'>
      <RoutineSection
        title='분할 루틴'
        description='주간 운동 분할에 따른 루틴을 선택하세요'
        routines={ROUTINE_CATEGORIES.splitRoutines}
      />
      <RoutineSection
        title='난이도별 루틴'
        description='운동 경험과 실력에 맞는 루틴을 선택하세요'
        routines={ROUTINE_CATEGORIES.levelRoutines}
      />
      <RoutineSection
        title='부위별 루틴'
        description='특정 부위를 집중적으로 훈련하고 싶다면 선택하세요'
        routines={ROUTINE_CATEGORIES.bodyPartRoutines}
      />
      <RoutineSection
        title='유명 보디빌더 루틴'
        description='전설적인 보디빌더들의 루틴을 따라해보세요'
        routines={ROUTINE_CATEGORIES.bodybuilderRoutines}
      />
    </section>
  );
};

export default RoutineList;
