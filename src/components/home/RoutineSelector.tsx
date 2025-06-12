import Link from "next/link";
import { ROUTINE_CATEGORIES } from "@/constants/routines";

const RoutineSelector = () => {
  return (
    <section className="w-full max-w-4xl">
      <h2 className="text-2xl font-semibold text-center mb-6">
        오늘의 운동 루틴
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {ROUTINE_CATEGORIES.map(({ label, slug, emoji }) => (
          <Link
            key={slug}
            href={`/routine/${slug}`}
            className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition-colors"
          >
            <span className="text-2xl mb-2">{emoji}</span>
            <span className="font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RoutineSelector;
