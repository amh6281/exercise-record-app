'use client';

import Link from 'next/link';
import RoutineSummaryCard from './RoutineSummaryCard';
import SplitRoutineCard from './SplitRoutineCard';
import { useProfileStore } from '@/store/profileStore';
import { ProfileModal } from './profile';
import { RoutineModal } from './routine';
import { useRoutineStore } from '@/store/routineStore';

// 하드코딩된 3분할 루틴 데이터
const mockSplitRoutines = [
  {
    id: '1',
    title: '가슴/삼두',
    scheduledDay: '월',
    estimatedDuration: 70,
    exercises: [
      { id: '1', name: '벤치프레스', sets: 4, reps: '8-12', weight: '80kg' },
      { id: '2', name: '인클라인 덤벨 프레스', sets: 3, reps: '10-12', weight: '30kg' },
      { id: '3', name: '딥스', sets: 3, reps: '12-15' },
      { id: '4', name: '케이블 크로스오버', sets: 3, reps: '12-15', weight: '25kg' },
      { id: '5', name: '트라이셉스 푸시다운', sets: 3, reps: '12-15', weight: '40kg' },
    ],
    isToday: true, // 오늘이 월요일이라고 가정
  },
  {
    id: '2',
    title: '등/이두',
    scheduledDay: '수',
    estimatedDuration: 65,
    exercises: [
      { id: '6', name: '데드리프트', sets: 4, reps: '6-8', weight: '120kg' },
      { id: '7', name: '바벨 로우', sets: 3, reps: '10-12', weight: '60kg' },
      { id: '8', name: '풀업', sets: 3, reps: '8-12' },
      { id: '9', name: '시티드 케이블 로우', sets: 3, reps: '12-15', weight: '50kg' },
      { id: '10', name: '바벨 컬', sets: 3, reps: '10-12', weight: '35kg' },
      { id: '11', name: '해머 컬', sets: 3, reps: '12-15', weight: '12kg' },
    ],
    isToday: false,
  },
  {
    id: '3',
    title: '하체/어깨',
    scheduledDay: '금',
    estimatedDuration: 75,
    exercises: [
      { id: '12', name: '스쿼트', sets: 4, reps: '8-10', weight: '100kg' },
      { id: '13', name: '레그 프레스', sets: 3, reps: '12-15', weight: '150kg' },
      { id: '14', name: '레그 익스텐션', sets: 3, reps: '15-20', weight: '60kg' },
      { id: '15', name: '레그 컬', sets: 3, reps: '15-20', weight: '45kg' },
      { id: '16', name: '밀리터리 프레스', sets: 3, reps: '8-12', weight: '50kg' },
      { id: '17', name: '사이드 레터럴 레이즈', sets: 3, reps: '12-15', weight: '8kg' },
    ],
    isToday: false,
  },
];

const MyRoutineList = () => {
  const nickname = useProfileStore((state) => state.profile.nickname);
  const routines = useRoutineStore((state) => state.routines);

  // 프로필이 설정되지 않은 경우
  if (!nickname) {
    return (
      <div className='space-y-8'>
        <div className='py-12 text-center'>
          <div className='mb-6'>
            <div className='bg-cool-100 dark:bg-cool-800 mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full'>
              <span className='text-3xl'>🏋️‍♂️</span>
            </div>
            <h2 className='text-choco-700 dark:text-choco-100 mb-2 text-xl font-bold'>루틴을 만들어보세요!</h2>
            <p className='text-cool-600 dark:text-cool-200 mb-6'>
              나만의 운동 루틴을 설정하고 체계적으로 운동해보세요.
            </p>
          </div>
          <ProfileModal />
        </div>
      </div>
    );
  }

  return (
    <div className='space-y-8'>
      {/* 요약 카드 */}
      <RoutineSummaryCard />

      {/* 새 루틴 만들기 모달 */}
      <RoutineModal />

      {/* 분할별 루틴 카드들 */}
      <div className='grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
        {routines.map((routine) => (
          <SplitRoutineCard
            key={routine.id}
            id={routine.id}
            title={routine.title}
            // scheduledDay={routine.scheduledDay}
            exercises={routine.exercises}
            // estimatedDuration={routine.estimatedDuration}
            // isToday={routine.isToday}
          />
        ))}
      </div>

      {/* 추가 루틴 안내 */}
      <div className='py-8 text-center'>
        <p className='text-cool-600 dark:text-cool-200 text-sm'>
          더 많은 분할 루틴을 추가하거나 기존 루틴을 수정할 수 있습니다.
        </p>
      </div>
    </div>
  );
};

export default MyRoutineList;
