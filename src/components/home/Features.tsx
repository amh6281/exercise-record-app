const Features = () => {
  return (
    <section className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-6">
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
    </section>
  );
};

export default Features;
