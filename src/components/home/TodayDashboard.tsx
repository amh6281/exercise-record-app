const TodayDashboard = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const todayName = dayNames[dayOfWeek];
  const userSplit = '3분할';

  const getWorkoutParts = (split: string, day: number) => {
    switch (split) {
      case '3분할':
        return ['가슴/삼두', '등/이두', '하체/어깨'][day % 3];
      case '5분할':
        return ['가슴', '등', '어깨', '팔', '하체'][day % 5];
      case '4분할':
        return ['가슴/삼두', '등/이두', '어깨', '하체'][day % 4];
      default:
        return '휴식일';
    }
  };

  const todayWorkout = getWorkoutParts(userSplit, dayOfWeek);

  return (
    <div>
      {/* 메인 운동 카드 */}
      <div className='bg-primary-500 mb-8 rounded-2xl p-8 text-center text-white'>
        <div className='mb-6'>
          <div className='mb-4 inline-block rounded-full bg-white/20 px-6 py-2 text-sm font-bold'>
            {todayName} • {today.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })}
          </div>
          <h2 className='mb-2 text-5xl font-black tracking-tight'>{todayWorkout}</h2>
          <p className='text-primary-100 text-xl font-medium'>오늘의 타겟 부위</p>
        </div>

        <div className='mb-6 flex items-center justify-center'>
          <span className='text-primary-100 font-bold'>HIGH INTENSITY</span>
        </div>

        <button className='text-primary-700 hover:bg-primary-50 rounded-xl bg-white px-12 py-4 text-lg font-black transition-colors'>
          🏋️ 운동 시작하기
        </button>
      </div>

      {/* 정보 카드들 */}
      <div className='mb-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
        {/* 분할 정보 */}
        <div className='bg-info-500 rounded-xl p-6 text-white'>
          <div className='mb-4 flex items-center justify-between'>
            <h3 className='text-lg font-bold'>분할</h3>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-white/20'>
              <span className='text-sm font-bold'>💪</span>
            </div>
          </div>
          <p className='text-2xl font-black'>{userSplit}</p>
          <p className='text-info-100 mt-2 text-sm'>현재 설정된 분할</p>
        </div>

        {/* 요일 정보 */}
        <div className='bg-success-500 rounded-xl p-6 text-white'>
          <div className='mb-4 flex items-center justify-between'>
            <h3 className='text-lg font-bold'>요일</h3>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-white/20'>
              <span className='text-sm font-bold'>📅</span>
            </div>
          </div>
          <p className='text-2xl font-black'>{todayName}</p>
          <p className='text-success-100 mt-2 text-sm'>오늘의 운동 요일</p>
        </div>

        {/* 운동 부위 */}
        <div className='bg-caution-500 rounded-xl p-6 text-white'>
          <div className='mb-4 flex items-center justify-between'>
            <h3 className='text-lg font-bold'>타겟</h3>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-white/20'>
              <span className='text-sm font-bold'>🎯</span>
            </div>
          </div>
          <p className='text-2xl font-black'>{todayWorkout}</p>
          <p className='text-caution-100 mt-2 text-sm'>오늘의 운동 부위</p>
        </div>
      </div>

      {/* 운동 팁 */}
      <div className='border-cool-200 dark:border-choco-700 dark:bg-choco-800 rounded-xl border bg-white p-6'>
        <h3 className='text-choco-700 dark:text-choco-100 mb-4 text-center text-xl font-bold'>💡 운동 팁</h3>
        <div className='text-cool-600 dark:text-cool-200 text-center'>
          <p className='mb-2'>
            오늘은 <span className='text-primary-600 dark:text-primary-400 font-bold'>{todayWorkout}</span> 운동을
            집중적으로!
          </p>
          <p className='text-sm'>적절한 워밍업과 스트레칭을 잊지 마세요.</p>
        </div>
      </div>
    </div>
  );
};

export default TodayDashboard;
