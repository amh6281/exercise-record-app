const StepsSection = () => {
  return (
    <section className='grid gap-6 rounded-2xl border bg-white p-5 text-sm md:grid-cols-3 dark:border-zinc-800 dark:bg-zinc-950'>
      <div className='space-y-1'>
        <p className='text-xs font-semibold text-zinc-500'>STEP 1</p>
        <p className='font-semibold'>운동 루틴 생성</p>
        <p className='text-xs text-zinc-500 dark:text-zinc-400'>
          분할 방식, 레벨, 시간, 기구만 선택하면 맞춤 운동 루틴이 자동으로
          생성됩니다.
        </p>
      </div>
      <div className='space-y-1'>
        <p className='text-xs font-semibold text-zinc-500'>STEP 2</p>
        <p className='font-semibold'>운동 리포트 만들기</p>
        <p className='text-xs text-zinc-500 dark:text-zinc-400'>
          운동 기록을 입력하면 월간 운동 통계와 TOP5 운동을 카드로 정리해
          드립니다.
        </p>
      </div>
      <div className='space-y-1'>
        <p className='text-xs font-semibold text-zinc-500'>STEP 3</p>
        <p className='font-semibold'>이미지 저장 & 공유</p>
        <p className='text-xs text-zinc-500 dark:text-zinc-400'>
          생성된 루틴과 리포트를 PNG 이미지로 저장해 카카오톡, 인스타 스토리에
          바로 공유할 수 있습니다.
        </p>
      </div>
    </section>
  );
};

export default StepsSection;
