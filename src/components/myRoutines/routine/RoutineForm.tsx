import { useProfileStore } from '@/store/profileStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusIcon, TrashIcon } from '@phosphor-icons/react';
import { Exercise, Routine } from '@/types/Routine';
import { useState } from 'react';

interface RoutineFormProps {
  onSubmit?: (routine: Routine) => void;
}

const RoutineForm = ({ onSubmit }: RoutineFormProps) => {
  const profile = useProfileStore((state) => state.profile);

  // 루틴 제목
  const [title, setTitle] = useState('');

  // 운동 목록
  const [exercises, setExercises] = useState<Exercise[]>([]);

  // 운동 추가
  const handleAddExercise = () => {
    setExercises([...exercises, { id: crypto.randomUUID(), name: '', sets: '', reps: '', weight: '' }]);
  };

  // 운동 삭제
  const handleDeleteExercise = (id: string) => {
    setExercises(exercises.filter((exercise) => exercise.id !== id));
  };

  // 운동 value 변경
  const handleExerciseChange = (id: string, exercise: Exercise) => {
    setExercises(exercises.map((e) => (e.id === id ? exercise : e)));
  };

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newRoutine: Routine = {
      id: crypto.randomUUID(),
      title,
      exercises,
    };

    if (onSubmit) {
      onSubmit(newRoutine);
    }
  };

  return (
    <form id='routine-form' onSubmit={handleSubmit} className='space-y-6'>
      {/* 루틴 제목 */}
      <div className='space-y-2'>
        <Label htmlFor='routineTitle' className='text-choco-700 dark:text-choco-100 text-sm font-medium'>
          루틴 제목
        </Label>
        <Input
          id='routineTitle'
          name='routineTitle'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='예: 가슴 루틴'
          className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 h-11 bg-white focus:ring-1'
          required
        />
      </div>

      {/* 운동 추가 버튼 */}
      <div className='space-y-4'>
        <div className='flex items-center justify-between'>
          <Label className='text-choco-700 dark:text-choco-100 text-sm font-medium'>운동 목록</Label>
          <Button
            type='button'
            variant='outline'
            size='sm'
            className='border-cool-200 text-choco-700 hover:bg-cool-50 dark:border-choco-600 dark:text-choco-100 dark:hover:bg-choco-700'
            onClick={handleAddExercise}
          >
            <PlusIcon size={16} className='mr-1' />
            운동 추가
          </Button>
        </div>

        {/* 운동 항목 */}
        {exercises.map((exercise) => (
          <div key={exercise.id} className='space-y-4'>
            <div className='border-cool-200 dark:border-choco-600 bg-cool-50 dark:bg-choco-700/50 rounded-lg border p-4'>
              <div className='mb-3 flex items-center justify-between'>
                <Label className='text-choco-700 dark:text-choco-100 text-sm font-medium'>운동명</Label>
                <Button
                  type='button'
                  variant='ghost'
                  size='sm'
                  className='text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20'
                  onClick={() => handleDeleteExercise(exercise.id)}
                >
                  <TrashIcon size={16} />
                </Button>
              </div>
              <Input
                name='exercise1_name'
                type='text'
                placeholder='운동명 입력'
                value={exercise.name}
                onChange={(e) => handleExerciseChange(exercise.id, { ...exercise, name: e.target.value })}
                className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 mb-3 h-10 bg-white focus:ring-1'
              />

              <div className='grid grid-cols-3 gap-3'>
                <div className='space-y-1'>
                  <Label className='text-cool-600 dark:text-cool-200 text-xs'>세트</Label>
                  <Input
                    name='exercise1_sets'
                    type='text'
                    placeholder='세트'
                    value={exercise.sets}
                    onChange={(e) => handleExerciseChange(exercise.id, { ...exercise, sets: e.target.value })}
                    className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 h-9 bg-white text-sm focus:ring-1'
                  />
                </div>
                <div className='space-y-1'>
                  <Label className='text-cool-600 dark:text-cool-200 text-xs'>횟수</Label>
                  <Input
                    name='exercise1_reps'
                    type='text'
                    placeholder='횟수'
                    value={exercise.reps}
                    onChange={(e) => handleExerciseChange(exercise.id, { ...exercise, reps: e.target.value })}
                    className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 h-9 bg-white text-sm focus:ring-1'
                  />
                </div>
                <div className='space-y-1'>
                  <Label className='text-cool-600 dark:text-cool-200 text-xs'>무게 (kg)</Label>
                  <Input
                    name='exercise1_weight'
                    type='text'
                    placeholder='무게'
                    value={exercise.weight}
                    onChange={(e) => handleExerciseChange(exercise.id, { ...exercise, weight: e.target.value })}
                    className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 h-9 bg-white text-sm focus:ring-1'
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};

export default RoutineForm;
