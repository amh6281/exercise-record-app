import { ClipboardList } from 'lucide-react';

const PopularRoutines = () => {
  return (
    <div className='grid gap-4'>
      <div className='rounded-2xl border bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950'>
        <div className='text-brand-blue mb-3 flex items-center gap-2 text-xs font-medium'>
          <ClipboardList className='h-4 w-4' />
          오늘의 인기 루틴
        </div>
        <div className='space-y-3 text-sm'>
          <div className='border-brand-blue-light bg-brand-blue-light text-brand-blue-dark dark:border-brand-blue-dark dark:bg-brand-blue-dark/40 dark:text-brand-blue-light flex items-center justify-between rounded-xl border px-4 py-3'>
            <div>
              <p className='font-semibold'>Chest Day / 25분 루틴</p>
              <p className='text-xs opacity-80'>
                벤치프레스 + 인클라인 + 머신 조합 가슴 집중 루틴
              </p>
            </div>
            <span className='text-xs font-semibold'>🔥 많이 하는 루틴</span>
          </div>
          <div className='flex items-center justify-between rounded-xl border px-4 py-3 dark:border-zinc-800'>
            <div>
              <p className='font-semibold'>다이어트 20분 전신 루틴</p>
              <p className='text-xs text-zinc-500 dark:text-zinc-400'>
                타바타 + 전신 유산소로 빠르게 땀 빼기
              </p>
            </div>
            <span className='text-brand-emerald text-xs'>20분 코스</span>
          </div>
          <div className='rounded-xl border border-dashed px-4 py-3 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400'>
            예시는 샘플입니다. 실제 루틴은 분할 방식과 레벨에 맞춰
            생성해드립니다.
          </div>
        </div>
      </div>

      <div className='rounded-2xl border bg-linear-to-r from-zinc-900 via-zinc-800 to-slate-900 p-5 text-xs text-zinc-100 dark:border-zinc-700'>
        <p className='mb-1 font-semibold'>오늘 운동 뭐하지?</p>
        <p className='mb-2 text-zinc-300'>
          분할 방식, 레벨, 시간만 선택하면 세트 수, 횟수, 난이도까지 포함된 운동
          프로그램을 추천합니다.
        </p>
        <p className='text-[11px] text-zinc-400'>
          &ldquo;운동 루틴 추천&rdquo;, &ldquo;운동 조합기&rdquo;, &ldquo;오늘
          운동 뭐하지&rdquo; 같은 검색 없이 바로 시작해 보세요.
        </p>
      </div>
    </div>
  );
};

export default PopularRoutines;
