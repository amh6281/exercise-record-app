import { ArrowLeftIcon } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import type { RoutineDetail as RoutineDetailType } from '@/types/Routine';
import RoutineStats from './RoutineStats';
import StartWorkoutButton from './StartWorkoutButton';
import ExerciseList from './ExerciseList';
import WorkoutTips from './WorkoutTips';

interface RoutineDetailProps {
  routine: RoutineDetailType;
}

const RoutineDetail = ({ routine }: RoutineDetailProps) => {
  return (
    <div className='space-y-8'>
      {/* 루틴 정보 카드 */}
      <RoutineStats routine={routine} />

      {/* 운동 시작 버튼 */}
      <StartWorkoutButton routineId={routine.id} />

      {/* 운동 목록 */}
      <ExerciseList routine={routine} />

      {/* 운동 팁 */}
      <WorkoutTips tips={routine.tips || []} />
    </div>
  );
};

export default RoutineDetail;
