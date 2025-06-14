import Link from "next/link";
import { ROUTINE_CATEGORIES } from "@/constants/routines";

const RoutineList = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {ROUTINE_CATEGORIES.map(({ label, slug, emoji }) => (
          <Link
            key={slug}
            href={`/routines/${slug}`}
            className="group flex flex-col items-center justify-center p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <span className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
              {emoji}
            </span>
            <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-primary dark:group-hover:text-primary transition-colors">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RoutineList;
