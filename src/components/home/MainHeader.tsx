import Image from "next/image";

const MainHeader = () => {
  return (
    <header className="flex flex-col items-center gap-4 text-center">
      <Image
        src="/logo.svg"
        alt="GymTrack 로고"
        width={80}
        height={80}
        className="dark:invert"
        priority
      />
      <h1 className="text-4xl text-primary font-bold tracking-tight bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
        GymTrack
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
        헬린이를 위한 맞춤형 운동 루틴과 기록 서비스
      </p>
    </header>
  );
};

export default MainHeader;
