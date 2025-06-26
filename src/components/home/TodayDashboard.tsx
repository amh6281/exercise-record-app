const TodayDashboard = () => {
  // 현재 요일 가져오기
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0: 일요일, 1: 월요일, ..., 6: 토요일
  const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const todayName = dayNames[dayOfWeek];

  // 사용자 분할 설정 (임시로 3분할로 설정, 나중에 실제 사용자 설정으로 변경)
  const userSplit = '3분할';

  // 분할에 따른 운동 부위 매핑
  const getWorkoutParts = (split: string, day: number) => {
    switch (split) {
      case '3분할':
        // 3분할: 가슴/삼두, 등/이두, 하체/어깨
        const threeDayParts = ['가슴/삼두', '등/이두', '하체/어깨'];
        return threeDayParts[day % 3];
      case '5분할':
        // 5분할: 가슴, 등, 어깨, 팔, 하체
        const fiveDayParts = ['가슴', '등', '어깨', '팔', '하체'];
        return fiveDayParts[day % 5];
      case '4분할':
        // 4분할: 가슴/삼두, 등/이두, 어깨, 하체
        const fourDayParts = ['가슴/삼두', '등/이두', '어깨', '하체'];
        return fourDayParts[day % 4];
      default:
        return '휴식일';
    }
  };

  const todayWorkout = getWorkoutParts(userSplit, dayOfWeek);

  return (
    <div>
      {/* 메인 운동 카드 */}
      <div className='relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-500 via-orange-500 to-orange-600 shadow-2xl'>
        <div className='relative p-8 text-center text-white'>
          <div className='mb-6'>
            <div className='bg-opacity-30 border-opacity-20 mb-4 inline-block rounded-full border border-white bg-black px-6 py-2 text-sm font-bold backdrop-blur-sm'>
              {todayName} • {today.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })}
            </div>
            <h2 className='mb-2 text-5xl font-black tracking-tight'>{todayWorkout}</h2>
            <p className='text-xl font-medium text-red-100'>오늘의 타겟 부위</p>
          </div>

          {/* 운동 강도 표시 */}
          <div className='mb-6 flex items-center justify-center space-x-2'>
            <span className='font-bold text-yellow-100'>HIGH INTENSITY</span>
          </div>

          {/* 운동 시작 버튼 */}
          <button className='transform rounded-xl bg-white px-12 py-4 text-lg font-black text-orange-700 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-100'>
            🏋️ 운동 시작하기
          </button>
        </div>
      </div>

      {/* 정보 카드들 */}
      <div className='mb-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
        {/* 분할 정보 */}
        <div className='rounded-xl bg-gradient-to-br from-yellow-600 to-yellow-700 p-6 text-white shadow-lg'>
          <div className='mb-4 flex items-center justify-between'>
            <h3 className='text-lg font-bold'>분할</h3>
            <div className='bg-opacity-20 flex h-8 w-8 items-center justify-center rounded-full bg-white'>
              <span className='text-sm font-bold'>💪</span>
            </div>
          </div>
          <p className='text-2xl font-black'>{userSplit}</p>
          <p className='mt-2 text-sm text-blue-100'>현재 설정된 분할</p>
        </div>

        {/* 요일 정보 */}
        <div className='rounded-xl bg-gradient-to-br from-orange-600 to-orange-700 p-6 text-white shadow-lg'>
          <div className='mb-4 flex items-center justify-between'>
            <h3 className='text-lg font-bold'>요일</h3>
            <div className='bg-opacity-20 flex h-8 w-8 items-center justify-center rounded-full bg-white'>
              <span className='text-sm font-bold'>📅</span>
            </div>
          </div>
          <p className='text-2xl font-black'>{todayName}</p>
          <p className='mt-2 text-sm text-green-100'>오늘의 운동 요일</p>
        </div>

        {/* 운동 부위 */}
        <div className='rounded-xl bg-gradient-to-br from-amber-600 to-amber-700 p-6 text-white shadow-lg'>
          <div className='mb-4 flex items-center justify-between'>
            <h3 className='text-lg font-bold'>타겟</h3>
            <div className='bg-opacity-20 flex h-8 w-8 items-center justify-center rounded-full bg-white'>
              <span className='text-sm font-bold'>🎯</span>
            </div>
          </div>
          <p className='text-2xl font-black'>{todayWorkout}</p>
          <p className='mt-2 text-sm text-purple-100'>오늘의 운동 부위</p>
        </div>
      </div>

      {/* 추가 정보 */}
      <div className='bg-opacity-50 rounded-xl border border-gray-700 bg-gray-800 p-6 backdrop-blur-sm'>
        <h3 className='mb-4 text-center text-xl font-bold text-white'>💡 운동 팁</h3>
        <div className='text-center text-gray-300'>
          <p className='mb-2'>
            오늘은 <span className='font-bold text-red-400'>{todayWorkout}</span> 운동을 집중적으로!
          </p>
          <p className='text-sm'>적절한 워밍업과 스트레칭을 잊지 마세요.</p>
        </div>
      </div>
    </div>
  );
};

export default TodayDashboard;
