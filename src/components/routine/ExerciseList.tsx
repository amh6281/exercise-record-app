import type { RoutineDetail as RoutineDetailType } from '@/types/Routine';

interface ExerciseListProps {
  routine: RoutineDetailType;
}

const ExerciseList = ({ routine }: ExerciseListProps) => {
  return (
    <div className='border-cool-200 dark:border-choco-600 dark:bg-choco-800 rounded-xl border bg-white p-6'>
      <h3 className='text-choco-700 dark:text-choco-100 mb-6 text-xl font-bold'>운동 목록</h3>
      <div className='space-y-4'>
        {routine.exercises.map((exercise, index) => (
          <div
            key={exercise.id}
            className='border-cool-200 dark:border-choco-600 bg-cool-50 dark:bg-choco-700 rounded-lg border p-4'
          >
            <div className='mb-3 flex items-start justify-between'>
              <div className='flex items-center gap-3'>
                <div className='bg-primary-500 dark:bg-primary-400 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white'>
                  {index + 1}
                </div>
                <div>
                  <h4 className='text-choco-700 dark:text-choco-100 font-semibold'>{exercise.name}</h4>
                  <p className='text-cool-600 dark:text-cool-200 text-sm'>{exercise.category}</p>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-1 gap-3 sm:grid-cols-3'>
              <div className='text-center'>
                <p className='text-cool-600 dark:text-cool-200 text-sm'>세트</p>
                <p className='text-choco-700 dark:text-choco-100 font-semibold'>{exercise.sets}세트</p>
              </div>
              <div className='text-center'>
                <p className='text-cool-600 dark:text-cool-200 text-sm'>횟수</p>
                <p className='text-choco-700 dark:text-choco-100 font-semibold'>{exercise.reps}</p>
              </div>
              <div className='text-center'>
                <p className='text-cool-600 dark:text-cool-200 text-sm'>휴식</p>
                <p className='text-choco-700 dark:text-choco-100 font-semibold'>{exercise.restTime}</p>
              </div>
            </div>

            {exercise.notes && (
              <div className='dark:bg-choco-600 mt-3 rounded-lg bg-white p-3'>
                <p className='text-cool-600 dark:text-cool-200 text-sm'>{exercise.notes}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;
