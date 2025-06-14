import { Metadata } from "next";
import RoutineList from "@/components/routines/RoutineList";

export const metadata: Metadata = {
  title: "운동 루틴 - GymTrack",
  description: "다양한 운동 루틴을 확인하고 기록을 시작하세요.",
};

const RoutinesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            운동 루틴
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
            오늘의 운동 루틴을 선택하고 기록을 시작하세요
          </p>
        </div>
        <RoutineList />
      </div>
    </div>
  );
};

export default RoutinesPage;
