import { useProfileStore } from '@/store/profileStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusIcon, TrashIcon } from '@phosphor-icons/react';

const RoutineForm = () => {
  const profile = useProfileStore((state) => state.profile);

  return (
    <div className='space-y-6'>
      {/* 루틴 제목 */}
      <div className='space-y-2'>
        <Label htmlFor='routineTitle' className='text-choco-700 dark:text-choco-100 text-sm font-medium'>
          루틴 제목
        </Label>
        <Input
          id='routineTitle'
          name='routineTitle'
          type='text'
          placeholder='예: 가슴 루틴'
          className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 h-11 bg-white focus:ring-1'
        />
      </div>

      {/* 운동 목록 */}
      <div className='space-y-4'>
        <div className='flex items-center justify-between'>
          <Label className='text-choco-700 dark:text-choco-100 text-sm font-medium'>운동 목록</Label>
          <Button
            type='button'
            variant='outline'
            size='sm'
            className='border-cool-200 text-choco-700 hover:bg-cool-50 dark:border-choco-600 dark:text-choco-100 dark:hover:bg-choco-700'
          >
            <PlusIcon size={16} className='mr-1' />
            운동 추가
          </Button>
        </div>

        {/* 운동 항목들 */}
        <div className='space-y-4'>
          {/* 운동 1: 벤치프레스 */}
          <div className='border-cool-200 dark:border-choco-600 bg-cool-50 dark:bg-choco-700/50 rounded-lg border p-4'>
            <div className='mb-3 flex items-center justify-between'>
              <Label className='text-choco-700 dark:text-choco-100 text-sm font-medium'>운동명</Label>
              <Button
                type='button'
                variant='ghost'
                size='sm'
                className='text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20'
              >
                <TrashIcon size={16} />
              </Button>
            </div>
            <Input
              name='exercise1_name'
              type='text'
              placeholder='운동명 입력'
              defaultValue='벤치프레스'
              className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 mb-3 h-10 bg-white focus:ring-1'
            />

            <div className='grid grid-cols-3 gap-3'>
              <div className='space-y-1'>
                <Label className='text-cool-600 dark:text-cool-200 text-xs'>세트</Label>
                <Input
                  name='exercise1_sets'
                  type='number'
                  placeholder='세트'
                  defaultValue='4'
                  className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 h-9 bg-white text-sm focus:ring-1'
                />
              </div>
              <div className='space-y-1'>
                <Label className='text-cool-600 dark:text-cool-200 text-xs'>횟수</Label>
                <Input
                  name='exercise1_reps'
                  type='text'
                  placeholder='횟수'
                  defaultValue='8-12'
                  className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 h-9 bg-white text-sm focus:ring-1'
                />
              </div>
              <div className='space-y-1'>
                <Label className='text-cool-600 dark:text-cool-200 text-xs'>무게 (kg)</Label>
                <Input
                  name='exercise1_weight'
                  type='number'
                  placeholder='무게'
                  defaultValue='80'
                  className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 h-9 bg-white text-sm focus:ring-1'
                />
              </div>
            </div>
          </div>

          {/* 운동 2: 인클라인 덤벨 프레스 */}
          <div className='border-cool-200 dark:border-choco-600 bg-cool-50 dark:bg-choco-700/50 rounded-lg border p-4'>
            <div className='mb-3 flex items-center justify-between'>
              <Label className='text-choco-700 dark:text-choco-100 text-sm font-medium'>운동명</Label>
              <Button
                type='button'
                variant='ghost'
                size='sm'
                className='text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20'
              >
                <TrashIcon size={16} />
              </Button>
            </div>
            <Input
              name='exercise2_name'
              type='text'
              placeholder='운동명 입력'
              defaultValue='인클라인 덤벨 프레스'
              className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 mb-3 h-10 bg-white focus:ring-1'
            />

            <div className='grid grid-cols-3 gap-3'>
              <div className='space-y-1'>
                <Label className='text-cool-600 dark:text-cool-200 text-xs'>세트</Label>
                <Input
                  name='exercise2_sets'
                  type='number'
                  placeholder='세트'
                  defaultValue='3'
                  className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 h-9 bg-white text-sm focus:ring-1'
                />
              </div>
              <div className='space-y-1'>
                <Label className='text-cool-600 dark:text-cool-200 text-xs'>횟수</Label>
                <Input
                  name='exercise2_reps'
                  type='text'
                  placeholder='횟수'
                  defaultValue='10-12'
                  className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 h-9 bg-white text-sm focus:ring-1'
                />
              </div>
              <div className='space-y-1'>
                <Label className='text-cool-600 dark:text-cool-200 text-xs'>무게 (kg)</Label>
                <Input
                  name='exercise2_weight'
                  type='number'
                  placeholder='무게'
                  defaultValue='30'
                  className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 h-9 bg-white text-sm focus:ring-1'
                />
              </div>
            </div>
          </div>

          {/* 운동 3: 딥스 */}
          <div className='border-cool-200 dark:border-choco-600 bg-cool-50 dark:bg-choco-700/50 rounded-lg border p-4'>
            <div className='mb-3 flex items-center justify-between'>
              <Label className='text-choco-700 dark:text-choco-100 text-sm font-medium'>운동명</Label>
              <Button
                type='button'
                variant='ghost'
                size='sm'
                className='text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20'
              >
                <TrashIcon size={16} />
              </Button>
            </div>
            <Input
              name='exercise3_name'
              type='text'
              placeholder='운동명 입력'
              defaultValue='딥스'
              className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 mb-3 h-10 bg-white focus:ring-1'
            />

            <div className='grid grid-cols-3 gap-3'>
              <div className='space-y-1'>
                <Label className='text-cool-600 dark:text-cool-200 text-xs'>세트</Label>
                <Input
                  name='exercise3_sets'
                  type='number'
                  placeholder='세트'
                  defaultValue='3'
                  className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 h-9 bg-white text-sm focus:ring-1'
                />
              </div>
              <div className='space-y-1'>
                <Label className='text-cool-600 dark:text-cool-200 text-xs'>횟수</Label>
                <Input
                  name='exercise3_reps'
                  type='text'
                  placeholder='횟수'
                  defaultValue='12-15'
                  className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 h-9 bg-white text-sm focus:ring-1'
                />
              </div>
              <div className='space-y-1'>
                <Label className='text-cool-600 dark:text-cool-200 text-xs'>무게 (kg)</Label>
                <Input
                  name='exercise3_weight'
                  type='number'
                  placeholder='무게'
                  className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 h-9 bg-white text-sm focus:ring-1'
                />
              </div>
            </div>
          </div>

          {/* 운동 4: 케이블 크로스오버 */}
          <div className='border-cool-200 dark:border-choco-600 bg-cool-50 dark:bg-choco-700/50 rounded-lg border p-4'>
            <div className='mb-3 flex items-center justify-between'>
              <Label className='text-choco-700 dark:text-choco-100 text-sm font-medium'>운동명</Label>
              <Button
                type='button'
                variant='ghost'
                size='sm'
                className='text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20'
              >
                <TrashIcon size={16} />
              </Button>
            </div>
            <Input
              name='exercise4_name'
              type='text'
              placeholder='운동명 입력'
              defaultValue='케이블 크로스오버'
              className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 mb-3 h-10 bg-white focus:ring-1'
            />

            <div className='grid grid-cols-3 gap-3'>
              <div className='space-y-1'>
                <Label className='text-cool-600 dark:text-cool-200 text-xs'>세트</Label>
                <Input
                  name='exercise4_sets'
                  type='number'
                  placeholder='세트'
                  defaultValue='3'
                  className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 h-9 bg-white text-sm focus:ring-1'
                />
              </div>
              <div className='space-y-1'>
                <Label className='text-cool-600 dark:text-cool-200 text-xs'>횟수</Label>
                <Input
                  name='exercise4_reps'
                  type='text'
                  placeholder='횟수'
                  defaultValue='12-15'
                  className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 h-9 bg-white text-sm focus:ring-1'
                />
              </div>
              <div className='space-y-1'>
                <Label className='text-cool-600 dark:text-cool-200 text-xs'>무게 (kg)</Label>
                <Input
                  name='exercise4_weight'
                  type='number'
                  placeholder='무게'
                  defaultValue='25'
                  className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 h-9 bg-white text-sm focus:ring-1'
                />
              </div>
            </div>
          </div>

          {/* 운동 5: 트라이셉스 푸시다운 */}
          <div className='border-cool-200 dark:border-choco-600 bg-cool-50 dark:bg-choco-700/50 rounded-lg border p-4'>
            <div className='mb-3 flex items-center justify-between'>
              <Label className='text-choco-700 dark:text-choco-100 text-sm font-medium'>운동명</Label>
              <Button
                type='button'
                variant='ghost'
                size='sm'
                className='text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20'
              >
                <TrashIcon size={16} />
              </Button>
            </div>
            <Input
              name='exercise5_name'
              type='text'
              placeholder='운동명 입력'
              defaultValue='트라이셉스 푸시다운'
              className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 mb-3 h-10 bg-white focus:ring-1'
            />

            <div className='grid grid-cols-3 gap-3'>
              <div className='space-y-1'>
                <Label className='text-cool-600 dark:text-cool-200 text-xs'>세트</Label>
                <Input
                  name='exercise5_sets'
                  type='number'
                  placeholder='세트'
                  defaultValue='3'
                  className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 h-9 bg-white text-sm focus:ring-1'
                />
              </div>
              <div className='space-y-1'>
                <Label className='text-cool-600 dark:text-cool-200 text-xs'>횟수</Label>
                <Input
                  name='exercise5_reps'
                  type='text'
                  placeholder='횟수'
                  defaultValue='12-15'
                  className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 h-9 bg-white text-sm focus:ring-1'
                />
              </div>
              <div className='space-y-1'>
                <Label className='text-cool-600 dark:text-cool-200 text-xs'>무게 (kg)</Label>
                <Input
                  name='exercise5_weight'
                  type='number'
                  placeholder='무게'
                  defaultValue='40'
                  className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 h-9 bg-white text-sm focus:ring-1'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutineForm;
