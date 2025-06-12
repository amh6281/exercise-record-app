import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto text-center text-sm text-gray-500 dark:text-gray-400">
      <p>© 2024 GymTrack. 운동이 곧 자산입니다.</p>
      <p className="mt-2">
        <Link href="/about" className="hover:text-primary">
          서비스 소개
        </Link>
        {" • "}
        <Link href="/privacy" className="hover:text-primary">
          개인정보처리방침
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
