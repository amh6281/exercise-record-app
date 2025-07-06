import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DAY_LABELS } from '@/constants/DayLabel';
import {
  ROUTINE_OPTIONS,
  BASIC_SPLIT_OPTIONS,
  DEFAULT_ROUTINES,
  LIMITED_ROUTINE_OPTIONS,
  SPLIT_DESCRIPTIONS,
} from '@/constants/RoutineOptions';
import type { Profile } from '@/types/Profile';
import { useState, useEffect } from 'react';
import Toggle from './Toggle';

const ProfileForm = () => {
  // 분할 선택
  const [selectedSplitType, setSelectedSplitType] = useState<Profile['splitType']>('3-split');

  // 자유 모드
  const [isCustomMode, setIsCustomMode] = useState(false);

  // 요일별 루틴
  const [weeklyRoutines, setWeeklyRoutines] = useState([...DEFAULT_ROUTINES['3-split']]);

  // 선택할 수 있는 루틴 옵션
  const routineOptions = isCustomMode ? ROUTINE_OPTIONS : LIMITED_ROUTINE_OPTIONS[selectedSplitType];

  // 분할 선택 시 기본 루틴 업데이트
  useEffect(() => {
    setWeeklyRoutines([...DEFAULT_ROUTINES[selectedSplitType]]);
  }, [selectedSplitType]);

  // 자유 모드 토글 시 선택한 루틴 초기화
  useEffect(() => {
    if (isCustomMode) {
      // 자유 모드 활성화 시 모든 요일을 빈 값으로 초기화
      const emptyRoutines = Object.keys(DAY_LABELS).map((day) => ({ day, routine: '' }));
      setWeeklyRoutines(emptyRoutines);
    } else {
      // 자유 모드 비활성화 시 현재 분할의 기본 루틴으로 복원
      setWeeklyRoutines([...DEFAULT_ROUTINES[selectedSplitType]]);
    }
  }, [isCustomMode, selectedSplitType]);

  // 분할 변경 핸들러
  const handleSplitTypeChange = (value: Profile['splitType']) => {
    setSelectedSplitType(value);
  };

  // 요일별 루틴 변경 핸들러
  const handleRoutineChange = (day: string, routine: string) => {
    setWeeklyRoutines((prev) => prev.map((item) => (item.day === day ? { ...item, routine } : item)));
  };

  return (
    <div className='space-y-6'>
      {/* 닉네임 입력 */}
      <div className='space-y-2'>
        <Label htmlFor='nickname' className='text-choco-700 dark:text-choco-100 text-sm font-medium'>
          닉네임
        </Label>
        <Input
          id='nickname'
          type='text'
          placeholder='운동하는 홍길동'
          className='border-cool-200 text-choco-700 placeholder:text-cool-400 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:placeholder:text-cool-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 h-11 bg-white focus:ring-1'
          required
        />
      </div>

      {/* 분할 설정 */}
      <div className='space-y-2'>
        <Label htmlFor='splitType' className='text-choco-700 dark:text-choco-100 text-sm font-medium'>
          분할 설정
        </Label>
        <Select value={selectedSplitType} onValueChange={handleSplitTypeChange}>
          <SelectTrigger className='border-cool-200 text-choco-700 focus:border-primary-500 focus:ring-primary-500 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:focus:border-primary-400 dark:focus:ring-primary-400 h-11 w-full bg-white focus:ring-1'>
            <SelectValue placeholder='분할 선택' />
          </SelectTrigger>
          <SelectContent className='border-cool-200 dark:border-choco-600 dark:bg-choco-700 bg-white'>
            <SelectGroup>
              {Object.entries(BASIC_SPLIT_OPTIONS).map(([key, value]) => (
                <SelectItem
                  key={key}
                  value={key}
                  className='text-choco-700 focus:bg-primary-50 focus:text-primary-700 dark:text-choco-100 dark:focus:bg-primary-900 dark:focus:text-primary-300'
                >
                  {value}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* 자유 모드 토글 */}
      <div className='flex items-center justify-between'>
        <div>
          <Label className='text-choco-700 dark:text-choco-100 text-sm font-medium'>자유 모드</Label>
          <p className='text-cool-600 dark:text-cool-200 text-xs'>
            {isCustomMode ? '모든 루틴 옵션을 사용할 수 있습니다' : '자유 모드에서 커스텀 루틴을 설정할 수 있습니다'}
          </p>
        </div>
        <div className='flex items-center space-x-2'>
          <Toggle id='custom-mode' checked={isCustomMode} onCheckedChange={setIsCustomMode} />
          <Label htmlFor='custom-mode' className='text-choco-700 dark:text-choco-100 text-sm font-medium'>
            자유 모드
          </Label>
        </div>
      </div>

      {/* 요일별 루틴 설정 */}
      <div className='space-y-3'>
        <Label className='text-choco-700 dark:text-choco-100 text-sm font-medium'>요일별 루틴</Label>
        <div className='space-y-3'>
          {Object.entries(DAY_LABELS).map(([day, label]) => {
            const currentRoutine = weeklyRoutines.find((r) => r.day === day)?.routine || '';
            return (
              <div key={day} className='flex items-center gap-3'>
                <Label
                  htmlFor={day}
                  className='text-choco-700 dark:text-choco-100 w-16 flex-shrink-0 text-sm font-medium'
                >
                  {label}
                </Label>
                <Select value={currentRoutine} onValueChange={(value) => handleRoutineChange(day, value)}>
                  <SelectTrigger className='border-cool-200 text-choco-700 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 h-11 flex-1 bg-white focus:ring-1'>
                    <SelectValue placeholder='루틴 선택' />
                  </SelectTrigger>
                  <SelectContent className='border-cool-200 dark:border-choco-600 dark:bg-choco-700 bg-white'>
                    <SelectGroup>
                      {Object.entries(routineOptions).map(([key, value]) => (
                        <SelectItem
                          key={key}
                          value={key}
                          className='text-choco-700 focus:bg-primary-50 focus:text-primary-700 dark:text-choco-100 dark:focus:bg-primary-900 dark:focus:text-primary-300'
                        >
                          {value}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            );
          })}
        </div>
      </div>

      {/* 분할 타입 설명 */}
      <div className='bg-cool-50 dark:bg-choco-700 border-cool-100 dark:border-choco-600 rounded-lg border p-4'>
        <div className='flex items-start gap-3'>
          <div className='bg-primary-500 dark:bg-primary-400 mt-2 h-2 w-2 flex-shrink-0 rounded-full'></div>
          <p className='text-cool-600 dark:text-cool-200 text-sm leading-relaxed'>
            {SPLIT_DESCRIPTIONS[selectedSplitType]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
