import Link from "next/link";

const DashboardCards = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* 빠른 기록 시작 */}
      <Link
        href="/records/new"
        className="p-6 rounded-xl border-2 border-primary bg-primary/5 hover:bg-primary/10 transition-colors"
      >
        <h2 className="text-xl font-semibold mb-2 text-primary">새로운 기록</h2>
        <p className="text-gray-600 dark:text-gray-400">
          오늘의 운동 기록을 시작하세요
        </p>
      </Link>

      {/* 최근 기록 요약 */}
      <div className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-semibold mb-2">최근 기록</h2>
        <p className="text-gray-600 dark:text-gray-400">아직 기록이 없습니다</p>
      </div>

      {/* 추천 루틴 */}
      <Link
        href="/routines"
        className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition-colors"
      >
        <h2 className="text-xl font-semibold mb-2">추천 루틴</h2>
        <p className="text-gray-600 dark:text-gray-400">
          다양한 운동 루틴을 확인하세요
        </p>
      </Link>

      {/* 운동 통계 */}
      <div className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-semibold mb-2">운동 통계</h2>
        <p className="text-gray-600 dark:text-gray-400">
          기록을 시작하면 통계를 확인할 수 있습니다
        </p>
      </div>
    </div>
  );
};

export default DashboardCards;
