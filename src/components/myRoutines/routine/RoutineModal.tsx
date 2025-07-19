import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import RoutineForm from './RoutineForm';
import { useState } from 'react';
import { Routine } from '@/types/Routine';
import { useRoutineStore } from '@/store/routineStore';

const RoutineModal = () => {
  const addRoutine = useRoutineStore((state) => state.addRoutine);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (routine: Routine) => {
    // RoutineStore 업데이트
    addRoutine(routine);

    setIsOpen(false);
  };

  return (
    <div className='flex justify-end'>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className='bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 h-12 rounded-lg px-6 py-3 font-medium text-white transition-colors'>
            새 루틴 만들기
          </Button>
        </DialogTrigger>
        <DialogContent
          className='border-choco-200 dark:border-choco-600 dark:bg-choco-800 flex max-h-[90vh] flex-col overflow-y-auto bg-white sm:max-w-[600px]'
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#d1d5db #f3f4f6',
          }}
        >
          <DialogHeader>
            <DialogTitle className='text-choco-700 dark:text-choco-100'>새 루틴 생성</DialogTitle>
            <DialogDescription className='text-cool-600 dark:text-cool-200'>
              새로운 운동 루틴을 설정해주세요.
            </DialogDescription>
          </DialogHeader>

          {/* 루틴 폼 */}
          <RoutineForm onSubmit={handleSubmit} />

          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant='outline'
                className='border-cool-200 text-choco-700 hover:bg-cool-50 dark:border-choco-600 dark:text-choco-100 dark:hover:bg-choco-700'
              >
                취소
              </Button>
            </DialogClose>
            <Button
              type='submit'
              form='routine-form'
              className='bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 text-white'
            >
              저장
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RoutineModal;
