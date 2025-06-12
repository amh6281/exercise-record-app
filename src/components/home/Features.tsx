const Features = () => {
  return (
    <section className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
        <h2 className="text-xl font-semibold mb-3">운동 루틴</h2>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
          <li>• 3분할, 5분할 등 다양한 루틴</li>
          <li>• 초보자 맞춤 루틴</li>
          <li>• 상세한 운동 가이드</li>
        </ul>
      </div>
      <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
        <h2 className="text-xl font-semibold mb-3">운동 기록</h2>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
          <li>• 세트별 중량 기록</li>
          <li>• 운동 일지 작성</li>
          <li>• 진행 상황 추적</li>
        </ul>
      </div>
      <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
        <h2 className="text-xl font-semibold mb-3">맞춤 추천</h2>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
          <li>• 개인별 맞춤 루틴</li>
          <li>• 목표 기반 추천</li>
          <li>• 난이도 조절</li>
        </ul>
      </div>
      <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
        <h2 className="text-xl font-semibold mb-3">통계 분석</h2>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
          <li>• 운동량 시각화</li>
          <li>• 성장 그래프</li>
          <li>• 목표 달성률</li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
