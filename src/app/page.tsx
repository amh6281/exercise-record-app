import { Metadata } from "next";
import { Footer } from "@/components/layout";
import { CTA, Features, MainHeader, RoutineSelector } from "@/components/home";

export const metadata: Metadata = {
  title: "GymTrack - 당신의 헬스 루틴을 기록하세요",
  description:
    "헬린이를 위한 맞춤형 운동 루틴과 기록 서비스. 3분할, 5분할 등 다양한 루틴을 제공합니다.",
  keywords: "헬스, 운동, 루틴, 3분할, 5분할, 운동기록, 헬린이",
};

const Home = () => {
  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 flex flex-col gap-12 items-center bg-background text-foreground">
      <MainHeader />
      <Features />
      <RoutineSelector />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
