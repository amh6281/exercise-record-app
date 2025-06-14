import Image from "next/image";

const MainHeader = () => {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src="/logo.png"
        alt="GymTrack 로고"
        width={200}
        height={200}
        className="w-[150px] md:w-[150px] lg:w-[200px] h-auto dark:invert"
        priority
      />
      <p className="text-lg font-medium text-gray-600 dark:text-gray-300 max-w-md">
        헬린이를 위한 맞춤형 운동 루틴과 기록 서비스
      </p>
    </header>
  );
};

export default MainHeader;
