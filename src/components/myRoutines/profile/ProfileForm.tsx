import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DAY_LABELS } from '@/constants/DayLabel';
import { ROUTINE_LABELS, SPLIT_LABELS } from '@/constants/SplitLabel';

const ProfileForm = () => {
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
        <Select>
          <SelectTrigger className='border-cool-200 text-choco-700 focus:border-primary-500 focus:ring-primary-500 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:focus:border-primary-400 dark:focus:ring-primary-400 h-11 w-full bg-white focus:ring-1'>
            <SelectValue placeholder='분할 선택' />
          </SelectTrigger>
          <SelectContent className='border-cool-200 dark:border-choco-600 dark:bg-choco-700 bg-white'>
            <SelectGroup>
              {Object.entries(SPLIT_LABELS).map(([key, value]) => (
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

      {/* 요일별 루틴 설정 */}
      <div className='space-y-3'>
        <Label className='text-choco-700 dark:text-choco-100 text-sm font-medium'>요일별 루틴</Label>
        <div className='space-y-3'>
          {Object.entries(DAY_LABELS).map(([day, label]) => (
            <div key={day} className='flex items-center gap-3'>
              <Label
                htmlFor={day}
                className='text-choco-700 dark:text-choco-100 w-16 flex-shrink-0 text-sm font-medium'
              >
                {label}
              </Label>
              <Select>
                <SelectTrigger className='border-cool-200 text-choco-700 focus:border-primary-500 focus:ring-primary-500/20 dark:border-choco-600 dark:bg-choco-700 dark:text-choco-100 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 h-11 flex-1 bg-white focus:ring-1'>
                  <SelectValue placeholder='루틴 선택' />
                </SelectTrigger>
                <SelectContent className='border-cool-200 dark:border-choco-600 dark:bg-choco-700 bg-white'>
                  <SelectGroup>
                    {Object.entries(ROUTINE_LABELS).map(([key, value]) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
