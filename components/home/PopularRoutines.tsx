import { ClipboardList } from 'lucide-react';

const PopularRoutines = () => {
  return (
    <div className='grid gap-4'>
      <div className='rounded-2xl border bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950'>
        <div className='mb-3 flex items-center gap-2 text-xs font-medium text-[var(--brand-blue)]'>
          <ClipboardList className='h-4 w-4' />
          오늘의 인기 루틴
        </div>
        <div className='space-y-3 text-sm'>
          <div className='flex items-center justify-between rounded-xl border px-4 py-3 border-[var(--brand-blue-light)] bg-[var(--brand-blue-light)] text-[var(--brand-blue-dark)] dark:border-[var(--brand-blue-dark)] dark:bg-[var(--brand-blue-dark)]/40 dark:text-[var(--brand-blue-light)]'>
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
            <span className='text-xs text-[var(--brand-emerald)]'>20분 코스</span>
          </div>
          <div className='rounded-xl border border-dashed px-4 py-3 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400'>
            예시는 샘플입니다. 실제 루틴은 AI가 오늘의 조건에 맞춰 새로 생성해
            드려요.
          </div>
        </div>
      </div>

      <div className='rounded-2xl border bg-linear-to-r from-zinc-900 via-zinc-800 to-slate-900 p-5 text-xs text-zinc-100 dark:border-zinc-700'>
        <p className='mb-1 font-semibold'>오늘 운동 뭐하지?</p>
        <p className='mb-2 text-zinc-300'>
          부위만 골라도 AI가 세트 수, 횟수, 난이도까지 채워주는 운동 프로그램을
          추천합니다.
        </p>
        <p className='text-[11px] text-zinc-400'>
          &ldquo;운동 루틴 추천&rdquo;, &ldquo;AI 운동 루틴&rdquo;,
          &ldquo;오늘 운동 뭐하지&rdquo; 같은 검색 없이 바로 시작해 보세요.
        </p>
      </div>
    </div>
  );
};

export default PopularRoutines;

