import { Metadata } from "next";
import RoutineSelector from "@/components/routines/RoutineSelector";

export const metadata: Metadata = {
  title: "GymTrack - 당신의 헬스 루틴을 기록하세요",
  description:
    "헬린이를 위한 맞춤형 운동 루틴과 기록 서비스. 3분할, 5분할 등 다양한 루틴을 제공합니다.",
  keywords: "헬스, 운동, 루틴, 3분할, 5분할, 운동기록, 헬린이",
};

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            추천 루틴
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
            당신의 목표에 맞는 최적의 루틴을 선택하세요
          </p>
        </div>
        <RoutineSelector />
      </div>
    </div>
  );
};

export default Home;
